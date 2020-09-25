function pwd(){
    process.stdout.write(process.cwd());
    process.stdout.write('\nPrompt > ');
}

module.exports = pwd;