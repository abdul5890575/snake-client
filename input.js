let connection;
const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data',key => handleUserInput(key))
    return stdin;
  }
  
  const handleUserInput = (key)=> {
    if (key === '\u0003') {
      console.log('hello')
      process.exit();
    } 
    // else {
    //   stdin.on('data', (key) => {
    //     process.stdout.write('.');
    //   });
    //}
  }

  module.exports = setupInput;