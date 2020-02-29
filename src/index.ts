import http from "http";
import "./Extensions/Extensions.js"
import { Call } from "./Rout/Routing.js";

setTimeout(Main, 100);

function Main()
{
    http.createServer((req, res) => {
        Call(req.url, req.method)
            .then(data => {
                res.writeHead(200, { "Content-Type": "application/json" })
                    .end(JSON.stringify(data));
            })
            .catch(error => {
                res.writeHead(404).end();
            });
    }).listen(3000);
}