const express  = require("express");


const app = express();
let users = [
  // name:"Raj",
  // age:22,
  // branch:"CS"
];

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
// app.delete("/delete/:id",(req,res) => {
//   let id = Number(req.params.id);

//   let userData = users.filter((val) => val.id !== id);

//   users = userData;
//   res.send(userData);
// })
app.delete("/delete/:id", (req, res) => {
  let {id} = req.params;

  let userData = users.filter((val) => val.id !== id);
  console.log(userData)
  users = userData;

  res.send(userData);
});

//update
app.put("/update/:id", (req,res) => {
  let {id} = req.params;
  let {name,branch} = req.body;

  let updatedUser = users.map((val) => 
  val.id === id ? {...val, name, branch }:val);
  res.send(updatedUser);
})

let port = 3007;

app.listen(port, (req,res) => {
  console.log(`server is running on ${port} `)
})