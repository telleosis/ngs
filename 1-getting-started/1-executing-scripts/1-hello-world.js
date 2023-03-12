const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Just changing this Hello World\n");
});

server.listen(4242, () => {
  console.log("Server is running...");
});
