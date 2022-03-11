function validate()
{
    var name = document.getElementById("name");
    var age = document.getElementById("age");

    if(name.value == "" || age.value == "")
    {
        alert("Blank spaces are not allowed");
        return false;
    }
    else if(!age.value.match(/^\d+/) || age.value == 0)
    {
        alert("Enter proper age");
        return false;
    }
    else
    {
        return true;
    }
}

var list1 = [];
var list2 = [];

var n = 1;
var x = 0;

function addrow() 
{
    var addRown = document.getElementById('show');
    var newRow = addRown.insertRow(n);

    list1[x] = document.getElementById("name").value;
    list2[x] = document.getElementById("age").value;

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];

    n++;
    x++;
}