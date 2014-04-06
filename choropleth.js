// Declare dim of the graph
var width = 960,
  height = 600;
  
// Create an instance of the layout engine
var map = d3.map();

// Create an instance of the geo projection engine
// This does all the awesome math for rendering the map
var projection = d3.geo.albersUsa()
  .scale(1280)
  .translate([width / 2, height / 2]);

// Create the path renderer engine for the map projection to be rendered with
var path = d3.geo.path()
  .projection(projection);

// Create the graph svg element
var svg = d3.select("#graph").append("svg")
  .attr("width", width)
  .attr("height", height);
  
// Grab the geo data
queue()
  .defer(d3.json, "us.json")
  .await(update);
  
function update(err, us) {
  console.log(err);
  console.log(us);
  if(err) alert(err);
  svg.append("g")
    .attr("class", "states")
    .selectAll("path")
      .data(topojson.feature(us, us.objects.states).features)
      .enter().append("path")
        .attr("class", function(d) {
          return "q1";
        })
        .attr("d", path);
}

d3.select(self.frameElement).style("height", height + "px");