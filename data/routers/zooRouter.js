const express = require("express");
const router = express.Router();
const zooHelper = require("../helpers/zooHelper.js");

router.get("/", async (req, res) => {
  try {
    const animals = await zooHelper.find();
    res.status(200).json(animals);
  } catch (error) {
    console.log(error);
    res.status(500).json({ ErrorMessage: "Could not retrieve zoo names" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const animal = await zooHelper.findById(req.params.id);
    res.status(200).json(animal);
  } catch (error) {
    res
      .status(500)
      .json({ ErrorMessage: "Could not retrieve the zoo name for that id" });
  }
});

module.exports = router;
