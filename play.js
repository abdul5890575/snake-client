const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  console.log('connected')
  return conn;
}

console.log('Connecting ...');
connect();
const client = connect()

client.on("data", (data) => {
  console.log("data came back from server...");
  console.log(data);
})

/*
//---------------
// CLIENT
const net = require('net');

const stdin = process.stdin;
stdin.setEncoding('utf8');
// let the client type the message
// on enter send the message to the server
const client = net.createConnection({
  host: '135.23.222.131',
  port: 3001
})
client.setEncoding('utf8');
client.on("data", (data) => {
  console.log("data came back from server...");
  console.log(data);
})
stdin.on('data', (input) => {
  client.write(input);
})
// WRITE is a way to send messages to the server
// client.write('Whats everyone up 2?');

*/