const { createServer } = require("node:http");

function createApp() {
    return createServer((request, response) => {
        response.statusCode = 200;

        response.setHeader("Content-Type", "text.html");

        const resp = "Welcome to the World Wide Web!";

        response.end(resp);
    });
}

module.exports = createApp;