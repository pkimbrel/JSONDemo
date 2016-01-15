'use strict';

var fs = require("fs");
var JSONMapper = require("./JSONMapper");

function main() {    
    var fileData = fs.readFileSync('data.json', 'utf8');
    
    var data = JSONMapper.mapJSONToFunctions(JSON.parse(fileData));
    
    console.log(data.selectionFunction("IL"));
}

main();