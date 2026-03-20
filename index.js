const http = require("http");

const server = http.createServer((req, res) => {
  res.end("AI Software Factory is running 🚀");
});

server.listen(10000);
