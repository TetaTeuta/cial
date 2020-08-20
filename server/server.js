const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/search", (req, res) => res.send("Api working"));

app.get("/search/:input", (req, res) => {
  const search = req.params.input;
  console.log(search);
  const url = "http://api.duckduckgo.com/?q=" + search + "&format=json";

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const result = res.json(json.RelatedTopics);
      res.json(result.Text), res.json(result.FirstURL);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port 3000", port);
});
