import http from "node:http";
import fs from "node:fs";

const serverFile = (res, filePath, statusCode) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Internal Server Error");
      return;
    }
    console.log(data);
    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.end(data);
  });
};

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      serverFile(res, "./index.html", 200);
    } else if (req.url === "/about") {
      serverFile(res, "./about.html", 200);
    } else if (req.url === "/contact-me") {
      serverFile(res, "./contact-me.html", 200);
    } else {
      serverFile(res, "./404.html", 404);
    }
  })
  .listen(8080, () => {
    console.log("Server connected");
  });
