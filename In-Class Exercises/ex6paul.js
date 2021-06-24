//Given array of monthly expenses
var exp = [4000, 5000, 6500, 5000, 2800, 3500]; 

/*Executes custom callback function once on each element in the array,
modifies values more than 4000,
then outputs the updated array to the developer console. */
exp.forEach(function(element, index, array) {
    if (element > 4000) {
        array[index] = element + ((element - 4000) * 0.02);
    }
});
console.log(exp);