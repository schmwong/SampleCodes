var banks = ["DBS", "HSBC", "OCBC", "UOB"];  //Array
/*
for (i=0; i<banks.length; i++) {
    console.log(banks[i]);
  }
*/

  let myFunction = function(item, index) {   //iterate through the listof items
    console.log(`${item} is at index ${index}` ); 
}

//console.log(" " + myFunction);

banks.forEach(myFunction);  //forEach takes a CallBackFunction

 
 banks.forEach(function(item, index) {   // nameless function... LOOP
     console.log(`${item} is at index ${index}` );
 });


 banks.forEach((item, index) => {   // nameless ARROW function... LOOP
  console.log(`${item} is at index ${index}` );
});



//using the last parameter
 banks.forEach(function(item, index, arr) {
     console.log("Using Array Index")
     console.log(arr[index]);
     //arr[index] = "AAA";
 });


 