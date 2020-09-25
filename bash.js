const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const { stringify } = require('querystring');

//output a prompt 
process.stdout.write('prompt > ');

//the stdin 'data' event fires after a user typed in a line 
process.stdin.on('data', (data) => {
    const input = data.toString().trim(' ').split(' ');
    const cmd = input[0]; //remove the newline
    const arg = input[1];

    if (cmd === 'pwd') {
        pwd();
    } else if (cmd === 'ls'){
        ls();
    } else if (cmd === 'cat'){
        cat(arg);
    } else {
        process.stdout.write('You typed; ' + cmd);
        process.stdout.write('\nPrompt > ');
    }
    
});




