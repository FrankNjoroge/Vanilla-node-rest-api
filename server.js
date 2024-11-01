const http = require("http");

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.end("<h1>Hello world!</h1>");
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
