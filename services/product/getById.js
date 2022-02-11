const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const productSchema = require("../../models/product");

const Products = mongoose.model("Product", productSchema);

router.get("/:id", async (req, res) => {
	const reqId = req.params.id;
	try {
		const result = await Products.findById(reqId).where({ deleted: false });
		if (result) {
			res.status(200).send(result);
		} else {
			res
				.status(404)
				.send({ StatusCode: 404, Message: "Products Not Found..." });
		}
	} catch (err) {
		console.log(err);
		res.status(400).send({ status: 400, message: "Bad Request..." });
	}
});

module.exports = router;
