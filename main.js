var http = require('http');

http.createServer(function(request, response){

    response.writeHead(200, {'Content-Type': 'text/plain'});
    var fs = require('fs');

    var data = fs.readFileSync('input.txt')

    response.end(data.toString());
    console.log('1');
setTimeout(function(){
    console.log('2');
}, 0)

console.log('3');
console.log('4');
console.log('5');
console.log('6');

}).listen('8085');
// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

 // Create an event handler as follows
var connectHandler = function connected() {
    console.log('connection succesful.');
   
    // Fire the data_received event 
    eventEmitter.emit('data_received');
 }
 
 // Bind the connection event with the handler
 eventEmitter.on('connection', connectHandler);
  
 // Bind the data_received event with the anonymous function
 eventEmitter.on('data_received', function() {
    console.log('data received succesfully.');
 });
 
 // Fire the connection event 
 eventEmitter.emit('connection');
 
 console.log("Program Ended.");
