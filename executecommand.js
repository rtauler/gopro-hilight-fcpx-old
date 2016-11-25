// http://nodejs.org/api.html#_child_processes
var util = require('util')
var exec = require('child_process').exec;
var child;
// executes `pwd`
child = exec("mkdir ola holahola2", function (error, stdout, stderr) {
  console.log("Done!");
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});
