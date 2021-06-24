var OldDate = "13-01-21"; //Example of date in string format "dd-mm-yy"

let DateArray = OldDate.split("-"); //Convert string to array [dd, mm, yy]

/* Remove first (index 0) and last (index 2) elements of array
and store as variables */
let yy = DateArray.pop();
let dd = DateArray.shift();

//Insert extracted elements into array
DateArray.splice(0, 0, yy); //DateArray.shift(dd) and unshift(yy) can be used,
DateArray.splice(2, 0, dd); //but splice is more versatile to remember

//Convert updated date back to string in format "yy-mm-dd"
var NewDate = DateArray.join("-");
console.log(NewDate);