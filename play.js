const connect = require("./client");

const client = connect()
let time = 0;

client.on("connect", () => {
  client.write( 'Name: ABD' );
  console.log("We just connected");
  for(let i = 0; i < 8; i++) {
    setTimeout(()=>{ 
      client.write( "Move: up" );
    }, time);
    time +=200
  }
});

client.on("data", (data) => {
  console.log(data)
});


client.on("end", () => {
  console.log("Connection ended");
});

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