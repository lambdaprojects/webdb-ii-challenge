const express = require("express");
const router = express.Router();
const zooHelper = require("../helpers/zooHelper.js");

router.get("/", async (req, res) => {
  try {
    const zoos = await zooHelper.find();
    res.status(200).json(zoos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ ErrorMessage: "Could not retrieve zoo names" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const zoo = await zooHelper.findById(req.params.id);
    res.status(200).json(zoo);
  } catch (error) {
    res
      .status(500)
      .json({ ErrorMessage: "Could not retrieve the zoo name for that id" });
  }
});

router.post("/", async (req, res) => {
  try {
    const zoo = await zooHelper.add(req.body);
    res.status(200).json({ Message: "The zoo was added successfully!" });
  } catch (error) {
    console.log(`:: ERROR IS :: ${error}`);
    res
      .status(500)
      .json({ ErrorMessage: "Could not add zoo! Something went wrong :(" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const zoo = await zooHelper.update(req.params.id, req.body);
    res.status(200).json(zoo);
  } catch (error) {
    console.log(`:: ERROR IS :: ${error}`);
    res
      .status(500)
      .json({ ErrorMessage: "Could not update zoo! Something went wrong :(" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const zoo = await zooHelper.remove(req.params.id);
    res.status(200).json({ Message: "Zoo deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ ErrorMessage: "Could not delete zoo! Something went wrong :(" });
  }
});

module.exports = router;
