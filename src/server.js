const usersController = require("./controller/users.controller");

const knex = require("./knex");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200);
  res.json("I'm Alive");
});

app.get("/card", (req, res) => notesController("show_back", req, res));

app.get("/users", usersController.index);
app.get("/users/:id", usersController.show);
app.post("/users", usersController.create);
app.patch("/users/:id", usersController.update);
app.delete("/users/:id", usersController.destroy);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port: ${process.env.PORT}`)
);
