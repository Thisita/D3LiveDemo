var width = 960,
  height = 600;
  
var map = d3.map();

var projection = d3.geo.albersUsa()
  .scale(1280)
  .translate([width / 2, height / 2]);

var path = d3.geo.path()
  .projection(projection);
  
var svg = d3.select("#graph").append("svg");