const express = require("express");
const router = express.Router();
const data = require("./scraper");

router.get("/getall", (req, res) => {
  console.log(data.states);
  console.log(data.country);
  res.json(data.country[0]);
});

module.exports = router;
