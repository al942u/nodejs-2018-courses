"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
class App {
    constructor() {
        this.port = 3000;
    }
    init() {
        let server = http.createServer((request, response) => {
            console.log(request.url);
            if (request.method === 'POST' && request.url === '/items') {
                let body = new Array;
                request.on('data', (chunk) => {
                    body.push(chunk);
                }).on('end', () => {
                    let requestBody = Buffer.concat(body).toJSON;
                    response.end(JSON.stringify(requestBody));
                });
            }
            else {
                response.statusCode = 404;
                response.end();
            }
        }).listen(this.port);
    }
}
const app = new App();
app.init();
//# sourceMappingURL=http.js.map