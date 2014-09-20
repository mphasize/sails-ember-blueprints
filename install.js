#!/usr/bin/env node
var fs = require('fs-extra')

console.log("Copying the blueprints folder over");
fs.copySync('blueprints/', '../../api/blueprints/');
console.log("Copying the services folder over");
fs.copySync('services/', '../../api/services/');
console.log("Copying done.")

process.exit();
