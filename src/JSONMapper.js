'use strict';

var _ = require("underscore");

exports.mapJSONToFunctions = function (jsonData) {
    return _.mapObject(jsonData, function (val, key) {
        if (val instanceof Array) {
            return _.map(val, exports.mapJSONToFunctions);
        } else if ((typeof val === "string") && (val.indexOf("function (") === 0)) {            
            return eval('(' + val + ')');
        }
        return val;
    });
}

exports.mapFunctionsToJSON = function (jsonData) {
    return _.mapObject(jsonData, function (val, key) {
        if (val instanceof Function) {
            return val.toString();
        } else if (val instanceof Array) {
            return _.map(val, exports.mapFunctionsToJSON);
        } else if (val instanceof Object) {
            return exports.mapFunctionsToJSON(val);
        }
        return val;
    });
}
