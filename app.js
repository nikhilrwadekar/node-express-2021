// CommonJS - every file is a module.
// (NodeJS uses this under the hood.)
// Every file in node is a module by default.

// Modules - Encapsulated Code. (Only share minimum)
const names = require("./4-names.js");
const utils = require("./5-utils.js");
const { sayHi } = utils;
const { john, peter } = names;
sayHi(john);
sayHi(peter);
// sayHi(nikhil);