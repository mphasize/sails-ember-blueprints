#!/usr/bin/env node
var fs = require('fs-extra')

console.log("Copying the blueprints folder into api/blueprints");
fs.copySync('blueprints/', '../../api/blueprints/');
console.log("Copying the services folder into api/services");
fs.copySync('services/', '../../api/services/');
console.log("Copying done.")

process.exit();
