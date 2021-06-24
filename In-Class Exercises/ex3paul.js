var names = ["James", "Jack", "Flora", "Mikhil"]; //Given Array
var ListData = names.map(word => (word + ": " + word.length)); 
//Stored in New Array as [Name: Length]
//console.log(ListData);

var ListString = ListData.join(" <br> "); 
//for each name to appear on a new line

function write() {
    document.getElementById("NameList").innerHTML = ListString;
}
//function executes automatically when html body is loaded
