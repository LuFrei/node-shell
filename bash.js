//output a prompt 
process.stdout.write('prompt > ');

//the stdin 'data' event fires after a user typed in a line 
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //remove the newline

    if (cmd === 'pwd') {
        process.stdout.write(process.cwd());
    }
    else {
        process.stdout.write('You typed; ' + cmd);
    }
    process.stdout.write('\nPrompt > ');
});




