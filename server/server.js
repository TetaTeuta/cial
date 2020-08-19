const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fetch = require("node-fetch");

const app = express();

app.use(morgan("tiny"));
app.use(cors());

app.get("/", (req, res) => {
  const url = "http://api.duckduckgo.com/?q=x&format=json";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      res.json(json.RelatedTopics).catch(function(err) {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port 3000", port);
});
