var names = ['Tom','Peter','Mary'];
var name_string = names.join(',');
console.log(name_string);

myArray_string = "ABS Bank, 7000.00, true, Savings Account";
var accDetails = myArray_string.split(','); 
console.log(accDetails);
console.log("My account balance is: $" + accDetails[1]);


//add/delete at the end   STACK  --- LAST IN FIRST OUT
//END OF LIST
console.log("pop :"); names.pop(); console.log(names);
console.log("push :"); names.push('James'); console.log(names);

//add at the end and delete from the front
//FRONT OF LIST
console.log("shift :"); names.shift(); console.log(names);
console.log("unshift :"); names.unshift('Lim'); console.log(names);

//QUEUE - Push and Shift

//add/delete at middle
names.splice(1, 1, ["Jin", "Jenny"]);
names.splice()
console.log("splice :"); console.log(names);

console.log(names[0]);
console.log(names[1][0]);
console.log(names[2]);
