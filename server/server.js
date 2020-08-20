const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fetch = require("node-fetch");
// const urlParse = require("query-string");
const bodyParser = require("body-parser");
const axios = require("axios");
const request = require("request");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/thing", (req, res) => res.send("YES"));

// app.get("/search/:something", (req, res) => {
//   res.send("This is your search " + req.params.something);
// });

app.get("/search/:input", (req, res) => {
  const search = req.params.input;
  console.log(search);
  const url = "http://api.duckduckgo.com/?q=" + search + "&format=json";

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      res.json(json);
    });

  // request(url, (error, body) => {
  //   console.log("error: ", error);
  //   const parsedBody = JSON.parse(body);
  //   res.render("results", { search: parsedBody });
  // });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port 3000", port);
});
