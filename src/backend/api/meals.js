const express = require("express");
const router = express.Router();
// const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = ["title1","title2"]; //await knex("Meal").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
