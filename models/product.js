const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is required"],
		trim: true,
	},
	category: {
		type: String,
		enum: ["mobile", "laptop", "tab"],
	},
	seller: String,
	tags: {
		type: Array,
		validate: {
			validator: function (params) {
				return params && params.length > 0;
			},
			message: "A Product should have at least 1 Tag",
		},
	},
	doi: { type: Date, default: Date.now },
	isPublished: Boolean,
	price: {
		type: Number,
		required: function () {
			return this.isPublished;
		},
	},
	deleted: Boolean,
});

module.exports = productSchema;
