const express = require("express");
const app = express();
const port = 8080;

// middleware
app.use(express.json());

// temporary database
let users = [];

// home route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// CREATE user
app.post("/users", (req, res) => {
  users.push(req.body);
  res.json(users);
});

// READ users
app.get("/users", (req, res) => {
  res.json(users);
});

// UPDATE user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  users = users.map(user =>
    user.id === id ? { ...user, ...req.body } : user
  );

  res.json(users);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
