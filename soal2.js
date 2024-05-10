// soal2.js

const fs = require('fs');

// Function to append log to log.txt file
function appendToLog(log) {
    fs.appendFile('log.txt', log + '\n', (err) => {
        if (err) throw err;
        console.log('Log has been added to log.txt');
    });
}

// Example log
const logMessage = 'This is a log message.';

// Append the log to log.txt
appendToLog(logMessage);
