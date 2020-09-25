const fs = require('fs');

function cat(damnFile) {
    fs.readFile(damnFile, 'utf8', (error, files) => {
        if (error) {
            throw error;
        } else {
            process.stdout.write(files);
            process.stdout.write("\nprompt > ");
        }
    })
}

module.exports = cat;
