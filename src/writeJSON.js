'use strict';

var fs = require("fs");
var JSONMapper = require("./JSONMapper");

var jsonData = {
    "name": "Stuff",
    "selection": [
        {
            "jurisdiction": "IL",
            "result": "Option A"
        }, {
            "jurisdiction": "TX",
            "result": "Option B"
        }, {
            "jurisdiction": "CA,IA,NY",
            "result": "Option C"
        }, {
            "jurisdiction": "*",
            "result": "Option D",
            "function": function() {
                return "stuff";
            }
        }
    ],
    "selectionFunction": function (jurisdiction) {
        switch (jurisdiction) {
            case "IL":
                return "Option A";
            case "TX":
                return "Option B";
            case "CA":
            case "IA":
            case "NY":
                return "Option C";
            default:
                return "Option D";
        }
    }
};

function main() {    
    var data = JSONMapper.mapFunctionsToJSON(jsonData);
    
    console.log(data);
    fs.writeFile('data.json', JSON.stringify(data));
}

main();