const express = require("express");

const validateProduct = require("../../middleware/validateProduct");

const router = express.Router();

router.post("/", validateProduct, async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    if (req.body.payload) {
      res.status(200).send(req.body.payload);
    } else {
      res.status(404).send({ status: 404, Message: "Data not Validate" });
    }
  } catch (err) {
    res.status(400).send({ status: 400, Message: "Bad Request", err });
  }
});

module.exports = router;
