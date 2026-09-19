let http = require("http");
// console.log(http);

let server = http.createServer((req, res)=>{
  console.log("hello i am server")
  res.end("i listened you")

});

server.listen(3000,() => {
  console.log("Server is running on port 3000")
})
