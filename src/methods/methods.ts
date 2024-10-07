import { exec } from 'child_process';

export class Methods{

    constructor(){}
 
    runVPN(command: string) {
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

    vpnConnnect(location: string){
        this.runVPN(`ExpressVPN.CLI connect "${location}"`);
        }
    
    vpnDisconnect(){
        this.runVPN('ExpressVPN.CLI disconnect');
        }   

}