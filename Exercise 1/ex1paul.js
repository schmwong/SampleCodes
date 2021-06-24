//alert ('hello world'); 
             
function myFunction() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("MYDigi");
    node.appendChild(textnode);
    document.getElementById("banklist").appendChild(node);
}