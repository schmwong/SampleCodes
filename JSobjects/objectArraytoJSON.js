//Searchig in an array of objects

var bankbal = [{
    bname :"DBS", 
    amount : 20000,
}, { 
    bname:"OCBC", 
    amount : 6000, 
}, {
    bname: "UOB",
    amount : 5000,
}];

const bankbalJSONstring = JSON.stringify(bankbal[0]);  //Object to JSON
console.log(bankbalJSONstring);
const backtoObj = JSON.parse(bankbalJSONstring);  //JSON to Obj
//console.log(bankbalJSONstring);
console.log(backtoObj);
console.log(backtoObj.bname);
/*

var a = [ {DBS:10000}, {HSBC:20000}];  //javaScript Object
const aJSON = JSON.stringify(a[0]); //Converted to JSON
console.log(a[0]); //print javaScriptObject
console.log(aJSON); //print JSON

*/