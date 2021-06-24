var jsonCircles = [
    { "x_axis": 100, "y_axis": 150, "radius": 20, "color" : "green" },
    { "x_axis": 200, "y_axis": 200, "radius": 20, "color" : "purple"},
    { "x_axis": 50, "y_axis": 200, "radius": 20, "color" : "red"},
    { "x_axis": 70, "y_axis": 40, "radius": 20, "color" : "blue"},
    { "x_axis": 220, "y_axis": 60, "radius": 20, "color" : "cyan"}];

    var svgContainer = d3.select("body").append("svg")
                                       .attr("width", 400)
                                        .attr("height", 400);
    
    var circles = svgContainer.selectAll("circle")
                             .data(jsonCircles) //place holder 
                             .enter() //reference
                              .append("circle") //add 5 circles
    


var circleAttributes = circles
                           .attr("cx", function (d) { return d.x_axis; })
                           .attr("cy", function (d) { return d.y_axis; })
                           .attr("r", function (d) { return d.radius; })
                           .style("fill", function(d) { return d.color; });
    