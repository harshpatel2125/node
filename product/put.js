const express = require("express");
const mongoose = require("mongoose");

const productSchema = require("../../models/product");

const router = express.Router();

const Products = mongoose.model("Product", productSchema);

router.put("/:id", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const reqId = req.params.id;
  const reqPayload = req.body;
  try {
    const result = await Products.findByIdAndUpdate(
      reqId,
      { $set: reqPayload },
      { new: true }
    ).where({ deleted: false });
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send({
        status: 404,
        message: "Product not found",
        result,
      });
    }
  } catch (err) {
    res.status(400).status({ status: 400, message: "Bad Request", err });
  }
});

module.exports = router;
