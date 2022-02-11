const mongoose = require("mongoose");
const productSchema = require("../models/product");

const Products = mongoose.model("Product", productSchema);

async function validateProduct(req, res, next) {
	const reqPayload = req.body;
	const payload = new Products({ ...reqPayload, deleted: false });
	try {
		payload.validate(async (res) => {
			if (res) {
				res
					.status(400)
					.send({ status: 400, Message: "Data not Validate", err: res });
			} else {
				const result = await payload.save();
				req.body.payload = result;
				next();
			}
		});
	} catch (err) {
		console.log(err);
		res.status(404).send({ status: 404, Message: "Bad Request", err });
	}
}

module.exports = validateProduct;
