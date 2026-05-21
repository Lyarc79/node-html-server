import http from "node:http";
import fs from "node:fs";

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile("./index.html", "utf8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    }
  })
  .listen(8080, () => {
    console.log("Server connected");
  });
