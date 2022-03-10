var w = 1000;
var h = 1000;
var rad = 50;
var leftMargin = w/4;
var dogdata = [10,5,30,20].sort(d3.ascending);

var svg = d3.select("svg").attr("width", w).attr("height", h).style("background-color", "black");

var circle = d3.select("svg").selectAll("circle")
    .data(dogdata)
    .join("circle")
    .attr("cx", function (d, i) {
        console.log(d);
        console.log(i);
        return leftMargin+i * rad*2;
    })
    .attr("cy", h/2)
    .attr("r", function (d) {
        return d*rad/4;
    })
    .attr("fill", "none")
    .attr("stroke", "white")
    .style("stroke-width", "5");




/*
svg.append("line")
.attr("x1",walker)
.attr("x2", walker+slowspeed)
.attr("y1", walker)
.attr("y2",walker)
.attr("stroke", "blue")

svg.append("line2")
.attr("x1",walker)
.attr("x2", walker+fastspeed)
.attr("y1", cyclist)
.attr("y2",cyclist)
.attr("stroke", "red")
*/