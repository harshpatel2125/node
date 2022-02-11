const express = require("express");
const mongoose = require("mongoose");

const productSchema = require("../../models/product");

const router = express.Router();

const Products = mongoose.model("Product", productSchema);

router.delete("/:id", async (req, res) => {
	const reqId = req.params.id;
	try {
		const result = await Products.findByIdAndUpdate(
			reqId,
			{ $set: { deleted: true } },
			{ new: true }
		);
		if (result) {
			res.status(200).send(result);
		} else {
			res.status(404).send({
				status: 404,
				message: "Product from this id is not find",
				result,
			});
		}
	} catch (err) {
		res.status(400).status({ status: 400, message: "Bad Request", err });
	}
});

module.exports = router;
