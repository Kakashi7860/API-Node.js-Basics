const express = require("express");
const app = express();
const port = 8080;

// Middleware to read JSON body
app.use(express.json());

// Temporary in-memory database
let users = [];

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// CREATE USER
app.post("/users", (req, res) => {
  users.push(req.body);
  res.json(users);
});

// READ USERS
app.get("/users", (req, res) => {
  res.json(users);
});

// UPDATE USER
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users[userIndex] = {
    ...users[userIndex],
    ...req.body,
    id: users[userIndex].id // keep id unchanged
  };

  res.json(users[userIndex]);
});

// DELETE USER
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter(user => user.id !== id);
  res.json(users);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
