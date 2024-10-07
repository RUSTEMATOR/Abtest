const { exec } = require('child_process');

function runVPN(command: string) {
  exec(command, { cwd: 'C:/Program Files (x86)/ExpressVPN/services/' }, (error: any, stdout: string, stderr: string) => {
      if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
      }
  
      if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
      }
  
      
      console.log(`Output: ${stdout}`);
  });
  }

function vpnConnnect(location: string){
  runVPN(`ExpressVPN.CLI connect ${location}`);
  }

function vpnDisconnect(){
  runVPN('ExpressVPN.CLI disconnect');
  }   

vpnConnnect("Canada");