const fglt = require("figlet");

function outputMessage(message) {
    console.log(fglt.textSync('Ciao Bernard!', {
        font: 'Crazy',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }))
}

outputMessage()