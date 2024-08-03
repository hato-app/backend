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
    cookie: {
      expires: 600000, //60000: 1 minute
    },
  })
);

app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200);
  res.json("はと Api");
});

//TODO update the README.md file

// This route is returning the user
app.get("/sessions", sessionsController.index);
// This route is creating a session with the id of the user
app.post("/sessions", sessionsController.create);
app.delete("/sessions", sessionsController.destroy);

app.get("/cards", cardsController.index);
// TODO This route now returns one card (not an array)
app.get("/cards/random", cardsController.showRandom);
app.get("/cards/random/categories/:id", cardsController.showRandomByCategory);
app.get("/cards/users/:id", cardsController.showByUserId);
app.get("/cards/categories/:id", cardsController.showByCategory);
app.get("/cards/:id", cardsController.show);
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
//TODO put this route on README.md
app.get("/comments/cards/:id", commentsController.showByCardId);
app.post("/comments/", commentsController.create);
app.patch("/comments/:id", commentsController.update);
app.delete("/comments/:id", commentsController.destroy);

app.get("/likes", likesController.index);
app.get("/likes/cards/:id", likesController.showByCardId);
app.post("/likes", likesController.create);
app.delete("/likes/users/:id", likesController.destroyByUserId);
app.delete("/likes/cards/:id", likesController.destroyByCardId);

app.get("/dislikes", dislikesController.index);
app.get("/dislikes/cards/:id", dislikesController.showByCardId);
app.post("/dislikes", dislikesController.create);
app.delete("/dislikes/users/:id", dislikesController.destroyByUserId);
app.delete("/dislikes/cards/:id", dislikesController.destroyByCardId);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port: ${process.env.PORT}`)
);
