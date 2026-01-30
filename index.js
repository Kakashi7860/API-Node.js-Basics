const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//get the data
app.get("/users",(req,res)=>{
    res.json([
        { id:1, name: "Sarha"},
        { id:2, name: "Safari"},

    ])})

//post the data
app.use(express.json());

app.post("/add-user",(req,res)=>{
    console.log(req.body);
    res.send("User Recived")

})

let users = [];
app.post("/users",(req,res)=>{
    users.push(req.body)
    res.json(users)
})

app.get("/users",(req,res)=>{
    res.json(users)
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
