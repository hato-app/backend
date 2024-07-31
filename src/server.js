import { Request, Response } from "express";
import cardsController from "./controller/cards.controller";

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

app.get("/card", (req, res) =>
  cardsController("show", req, res)
);


app.listen(process.env.PORT, () =>
  console.log(`Server is running on port: ${process.env.PORT}`)
);