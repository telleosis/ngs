const http = require("http");
const { TrackOpTypes } = require("vue");

const server = http.createServer((req, res) => {
  res.end("Just changing this Hello World\n");
});

server.listen(4242, () => {
  console.log("Server is running...");
});
