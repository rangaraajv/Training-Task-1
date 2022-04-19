var rIndex, table = document.getElementById("show");
var row = 1;

var oldvalue = undefined;
var newRow = undefined;
var count_flag = 0;

var iconsHead =null;
var logs = null;
var cell4 = null

var check=null;
let myArray = [];

function validation(name,age)
{

    if (!name || !age) {
        alert("Enter all fields");
        return false;
    } else if (name == "null" || name == "undefined") {
        alert("Enter a valid name");
        return false;
    } else if (age > 99 || age < 1) {
        alert("Enter a valid age");
        return false;
    } else {}
}

function AddRow() {

var name = document.getElementById("name").value;
var age = document.getElementById("age").value;

 let response1 = validation(name,age);
 if(response1 != false)
 {
        var show = document.getElementById("show");

        let newRow = show.insertRow(row);

        let cell1 = newRow.insertCell(0);

        let cell2 = newRow.insertCell(1);

        myArray.push(name, age);

        console.log(myArray);

        console.log(newRow.rowIndex);

        cell1.innerHTML = "<td>" + name + " </td>";

        cell2.innerHTML = "<td>"  + age  + "</td>";

       

        if(logs == null)
        {           
            console.log("logs == null");
            if(iconsHead == null)
            {
                var thead = document.getElementById("table-header-place-holder");
                iconsHead = thead.insertCell(2);
                iconsHead.outerHTML= "<th><center><b>REMOVE</b></center></th>";
            }

            if(cell4 == null){

                let cell3 = newRow.insertCell(2);

                cell3.innerHTML='<i class="fa fa-trash  w3-xxlarge"></i>';
    
                cell3.onclick= function checkFunction()
                {
                    RemoveRow(newRow);
                }
            }
            else{}
          
        } else if(logs!=null){
            console.log("Checking Cell4......");

            console.log("Cell count.."+newRow.cells.length);
            console.log("Rows count.."+show.rows.length);
                if(newRow.cells.length <= 3 )
                {
                    console.log("Current cells length....."+newRow.cells.length);
                   
                    let empty = newRow.insertCell(2);
                    empty.innerHTML="";
                }
               

                let cell4 = newRow.insertCell(3);

                cell4.innerHTML='<i class="fa fa-trash  w3-xxlarge"></i>';

                cell4.onclick= function checkFunction()
                {
                    RemoveRow(newRow);
                }
                console.log("Cell count..."+newRow.cells.length);
            
        }else{}

        console.log("New Row" , newRow)

        console.log(newRow.rowIndex);

        row++;


        editTable(newRow,cell4);
 }
else{
    return;
}
}

function editTable(newRow,cell4) {
  
var cells = table.getElementsByTagName("td");
console.log("Cells...... "+cells+"CF..... "+count_flag);
for (var j = count_flag; j < cells.length; j++) {
    count_flag++;
      console.log("Count_Flag = "+count_flag)
   
    cells[j].ondblclick = function() {
     
        console.log("Checking .....");
        if (this.hasAttribute("data-clicked")) {
            
            return;
        }

        this.setAttribute("data-clicked", "yes");
        this.setAttribute("data-text", this.innerHTML);
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.value = this.innerHTML;

        input.onblur = function() {
           
       
            let td = input.parentElement;
            var org_text = input.parentElement.getAttribute("data-text");
            let current_text = this.value;

            var org_text = input.parentElement.getAttribute("data-text");
            console.log("org_text " + org_text);
            console.log("current_text " + current_text);

           

            if(current_text === "null" || current_text === "undefined" )
            {
                alert("Enter a valid values");
                return;
            }
            if(!current_text)
            {
                alert("Enter a values");
                return;
            }
            if(current_text.replace(/\s/g, "").length <=0)
            {
                alert("Enter a valid values");
                return;
            }

            if (org_text != current_text  ) {

           
                
                console.log("Changes detected!");
                td.removeAttribute("data-clicked");
                td.removeAttribute("data-text");
                td.innerHTML = current_text;
                oldvalue = Date() + org_text;
                console.log(oldvalue);
                console.log(" rIndex " + rIndex);
              
                if(logs == null)
                {
                    var thead = document.getElementById("table-header-place-holder");
                    logs = thead.insertCell(2);
                    logs.innerHTML= "<center><b>Logs</b></center>";
                }

                if(cell4 == null && check==null){
                    
                     cell4 = newRow.insertCell(2);
                    cell4.innerHTML = "<ul>"+"<li>" + oldvalue +" </li>"+" </ul>";

                     tableIteration();

                }else{
                    
                   cell4= newRow.cells[2];
                    var temp = cell4.innerHTML;
                    cell4.innerHTML = "<ul>"+"<li>"+ oldvalue +"</li>"+"</ul>"; 
                    cell4.innerHTML+=temp;
                    tableIteration();
                }
                console.log(org_text + " is changed to " + current_text);
                
                
            } else {
                console.log(" No Changes detected!");
                td.removeAttribute("data-clicked");
                td.removeAttribute("data-text");
                td.innerHTML = org_text;
            }

           
        };

        this.innerHTML = "";
        this.append(input);
        this.firstElementChild.select();
    };
}
}

function RemoveRow(Row)
{
   
    var text = "Are you want to delete a selected row!";

    if(confirm(text) == true)
    {
   
       
        table.deleteRow(Row.rowIndex);
        row--;
        count_flag-=Row.cells.length;

       
        console.log("Row is deleted");
    }
    else{
        console.log("Rows is not deleted");
    }
}

function tableIteration()
{
    for(i=0; i<table.rows.length;i++)
    {
        let len = table.rows[i].cells.length;
        console.log("Length of "+i+" is "+len);
       
        if(table.rows[i].cells.length == 3)
        {
            console.log("hai......");
            console.log("Length of "+i+" is "+table.rows[i].cells.length);
           
            let swap1 =  table.rows[i].insertCell(2);
           swap1.innerHTML = "<td>" + "" + "</td>";
           check=1;

        }


    }
}

function sortTableByNameAsc()
{
    var switching, i, x, y, rows, shouldSwitch;

    switching = true;
    while(switching)
    {
        switching=false;
        rows=table.rows;
        for(i=1;i< (rows.length - 1);i++)
        {
            shouldSwitch = false;
            x=rows[i].getElementsByTagName("td")[0];
            y=rows[i+1].getElementsByTagName("td")[0];

            if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
            {
                shouldSwitch =true;
                break;
            }
        }
        if(shouldSwitch)
        {
            rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
            switching = true;
        }
    }
}

function sortTableByNameDes()
{
    var switching, i, x, y, rows, shouldSwitch;

    switching = true;
    while(switching)
    {
        switching=false;
        rows=table.rows;
        for(i=1;i< (rows.length - 1);i++)
        {
            shouldSwitch = false;
            x=rows[i].getElementsByTagName("td")[0];
            y=rows[i+1].getElementsByTagName("td")[0];

            if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())
            {
                shouldSwitch =true;
                break;
            }
        }
        if(shouldSwitch)
        {
            rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
            switching = true;
        }
    }
}

function sortTableByAgeAsc()
{
    
    var switching, i, x, y, rows, shouldSwitch;

    switching = true;
    while(switching)
    {
        switching=false;
        rows=table.rows;
        for(i=1;i< (rows.length - 1);i++)
        {
            shouldSwitch = false;
            x=rows[i].getElementsByTagName("td")[1];
            y=rows[i+1].getElementsByTagName("td")[1];

            if(Number(x.innerHTML) > Number(y.innerHTML))
            {
                shouldSwitch =true;
                break;
            }
        }
        if(shouldSwitch)
        {
            rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
            switching = true;
        }
    }
}

function sortTableByAgeDes()
{
    
    var switching, i, x, y, rows, shouldSwitch;

    switching = true;
    while(switching)
    {
        switching=false;
        rows=table.rows;
        for(i=1;i< (rows.length - 1);i++)
        {
            shouldSwitch = false;
            x=rows[i].getElementsByTagName("td")[1];
            y=rows[i+1].getElementsByTagName("td")[1];

            if(Number(x.innerHTML) < Number(y.innerHTML))
            {
                shouldSwitch =true;
                break;
            }
        }
        if(shouldSwitch)
        {
            rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
            switching = true;
        }
    }
}
