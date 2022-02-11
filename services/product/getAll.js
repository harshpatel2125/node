const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const router = express.Router();

const productSchema = require("../../models/product");

const Products = mongoose.model("Product", productSchema);

router.get("/", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    const result = await Products.find().where({ deleted: false });
    if (result && result.length > 0) {
      res.status(200).send(result);
    } else {
      res
        .status(200)
        .send({ StatusCode: 404, Message: "Products Not Found..." });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ status: 400, message: "Products Not Found..." });
  }
});

module.exports = router;
