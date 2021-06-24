function myFunction() {
  var node = document.createElement("LI"); // Create a <li> node
  var textnode = document.createTextNode("MYDigi"); // Create a text node
  node.appendChild(textnode); // Append the text to <li>
  document.getElementById("list1").appendChild(node); // Append <li> to <ul> with id="myList"
  alert("added new item");
}
