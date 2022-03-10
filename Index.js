var slowspeed = 5;
var fastspeed = 28;

var walker=50;
var cyclist=100;

var svg = d3.select("svg")
	.attr("width",1000)
	.attr("height",800)


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
