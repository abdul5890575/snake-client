const connect = require("./client");
const setupInput = require("./input")

const client = connect()
setupInput(client);

client.on("connect", () => {
  client.write( 'Name: ABD' );
  console.log("We just connected");
});

client.on("data", (data) => {
  console.log(data)
});



client.on("end", () => {
  console.log("Connection ended");
});

/*

// let connection;  
// const setupInput = (conn) => {   
//   connection = conn;   
//   const stdin = process.stdin;   
//   stdin.setRawMode(true);   
//   stdin.setEncoding('utf8');   
//   stdin.resume();   
//   stdin.on("data", key => handleUserInput(key))   
//   return stdin; }
*/