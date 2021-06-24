//function without argument - DEFINITION
function depositIntRates() {
    console.log("3% for first $10000");
    console.log("3.5% for amount greater than 10000");
 }
// CALL
 depositIntRates();
 

 //function with arguments    Argument are INPUT, return are OUTPUT
 function calcInterest(amount) { 
    var interest = 0;
    var balance = 0;
    if (amount > 10000) {
            balance = amount - 10000; 
            amount = 10000;
    }
    int = amount * .03 + balance * 0.035;  
    return (int);  
 }

 var output = calcInterest(20000);
 console.log(output);
