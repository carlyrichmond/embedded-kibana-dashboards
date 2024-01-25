// Simple server to serve HTML
const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

app.get("/basic", (req, res) => {
    res.sendFile(path.join(__dirname, './basic/index.html'));
});

app.get("/advanced", (req, res) => {
    res.sendFile(path.join(__dirname, './advanced/index.html'));
});

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Starting dashboard on port ${port}`);
});
