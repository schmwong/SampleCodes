//Binding DATA to DOM element - SIMPLE Example
//assume the body is empty
var theData = [ 1, 2, 3 ]

var a = d3.select("body").selectAll("p")   //selects body, within body it returns empty selections as there is no 'p' tag yet 
  .data(theData)  // creates 3 empty placeholders as there are three data items 
  .enter() // gives us reference/pointer to manipulate 3 placeholders. Using the reference we can append, insert and select 
  .append("p")  //appending <p></p> to the references
  .text("It if fun to Design Frontend ");  //adding hello to the paragraph text