const express  = require("express");


const app = express();
let users = [{
  // name:"Raj",
  // age:22,
  // branch:"CS"
}];

app.use(express.json());

// create
app.post("/create",(req,res) => {
  let body = req.body;
 

  users.push(body);
  res.send("send Successfully");

})


// Read
app.get("/", (rea,res) => {
  res.send(users);
});


// delete
app.delete("/delete/:id",(req,res) => {
  let {id} = req.params;

  let userData = users.filter((val) => val.id !== id);

  users = userData;
  res.send(users);
})

let port = 3002;

app.listen(port, (req,res) => {
  console.log(`server is running on ${port} `)
})