let connection;
const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data',(key) => handleUserInput(key))
    return stdin;
  }
  
  const handleUserInput = (key)=> {
    if (key === '\u0003') {
      console.log('Exiting')
      process.exit();
    } else if (key === 'w') {
      connection.write( "Move: up" );
    } else if (key === 's') {
      connection.write( "Move: down" );
    } else if (key === 'a') {
      connection.write( "Move: left" );
    } else if (key === 'd') {
      connection.write( "Move: right" );
    } else if (key === 'm') {
      connection.write(  "Say: Pizza" );
    } 
  }

module.exports = setupInput;