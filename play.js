const connect = require("./client");
const setupInput = require("./input")

const client = connect()
setupInput(client);

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