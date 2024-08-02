const cardsController = require("./controller/cards.controller");
const usersController = require("./controller/users.controller");
const commentsController = require("./controller/comments.controller");
const sessionsController = require("./controller/sessions.controller");
const likesController = require("./controller/likes.controller");
const dislikesController = require("./controller/dislikes.controller");

const session = require("express-session");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(
  session({
    secret: "Riven is the best!",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200);
  res.json("はと Api");
});

app.get("/sessions", sessionsController.index);
app.post("/sessions", sessionsController.create);
app.delete("/sessions", sessionsController.destroy);

app.get("/cards", cardsController.index);
app.get("/cards/random", cardsController.showRandom);
app.get("/cards/random/categories/:id", cardsController.showRandomByCategory);
app.get("/cards/:id", cardsController.show);
app.get("/cards/categories/:id", cardsController.showByCategory);
app.post("/cards", cardsController.create);
app.patch("/cards/:id", cardsController.update);
app.delete("/cards/:id", cardsController.destroy);

app.get("/users", usersController.index);
app.get("/users/:id", usersController.show);
app.post("/users", usersController.create);
app.patch("/users/:id", usersController.update);
app.delete("/users/:id", usersController.destroy);

app.get("/comments", commentsController.index);
app.get("/comments/:id", commentsController.show);
app.post("/comments", commentsController.create);
app.patch("/comments/:id", commentsController.update);
app.delete("/comments/:id", commentsController.destroy);

app.get("/likes", likesController.index);
app.get("/likes/cards/:id", likesController.showByCardId);
app.post("/likes", likesController.create);
// TODO add to README.md
app.delete("/likes/users/:id", likesController.destroyByUserId);
app.delete("/likes/cards/:id", likesController.destroyByCardId);

app.get("/dislikes", dislikesController.index);
app.get("/dislikes/cards/:id", dislikesController.showByCardId);
app.post("/dislikes/users/:id", dislikesController.create);
// TODO add to README.md
app.delete("/dislikes/users/:id", dislikesController.destroyByUserId);
app.delete("/dislikes/cards/:id", dislikesController.destroyByCardId);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port: ${process.env.PORT}`)
);
