//forEach is faster than map. forEach only traverses the array. 
//map traverses the array and also creates a new array with the return values

let arr1 = [1, 2, 3, 4, 5];
arr1.forEach((num, index) => {    //executes a provided function once for each array element.
    return arr1[index] = num * 2;  //you need to store the results explicity
});
console.log(arr1);

let arr2 = [1, 2, 3, 4, 5];
let doubled = arr2.map((num) => {   //creates a new array with the results of calling a provided function on every element in the calling array.
    return num * 2;                 //the results are automatically stored in new array
});
console.log(arr2);
console.log(doubled);

let arr3 = [1, 2, 3, 4, 5];
arr3.map((num, index) => {          //creates a new array with the results of calling a provided function on every element in the calling array.
    return arr3[index] = num * 2;   //you can ignore the new array... Now it is just like forEach
});
console.log(arr3);
