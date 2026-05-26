import express from "express";
import path from "path";

const app = express();

app.get("/", (req, res) =>
  res.sendFile(path.join(import.meta.dirname, "index.html")),
);
app.get("/about", (req, res) =>
  res.sendFile(path.join(import.meta.dirname, "about.html")),
);
app.get("/contact-me", (req, res) =>
  res.sendFile(path.join(import.meta.dirname, "contact-me.html")),
);
app.use((req, res) =>
  res.status(404).sendFile(path.join(import.meta.dirname, "404.html")),
);

const PORT = 8080;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Connected to port ${PORT}!`);
});
