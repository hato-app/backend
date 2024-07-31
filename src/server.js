const cardsController = require("./controller/cards.controller");
const usersController = require("./controller/users.controller");
const commentsController = require("./controller/comments.controller");

const knex = require("./knex");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200);
  res.json("Hato");
});

app.get("/card", cardsController.index);
app.get("/card/:id", cardsController.show);
app.post("/card", cardsController.create);
app.patch("/card/:id", cardsController.update);
app.delete("/card/:id", cardsController.destroy);

app.get("/users", usersController.index);
app.get("/users/:id", usersController.show);
app.post("/users", usersController.create);
app.patch("/users/:id", usersController.update);
app.delete("/users/:id", usersController.destroy);

app.get("/comment", commentsController.index);
app.get("/comment/:id", commentsController.show);
app.post("/comment", commentsController.create);
app.patch("/comment/:id", commentsController.update);
app.delete("/comment/:id", commentsController.destroy);


app.listen(process.env.PORT, () =>
  console.log(`Server is running on port: ${process.env.PORT}`)
);