const mongoose = require("mongoose");
const express = require("express");
const app = express();

function dbConnect() {
	mongoose
		.connect(
			"mongodb+srv://harshpatel2125:iwant321@cluster0.yww9s.mongodb.net/products?retryWrites=true&w=majority"
		)
		.then((client) => {
			console.log("mongodb connection succesfull");
		})
		.catch((err) => {
			console.log(err, "error in mongodb connction");
			throw err;
		});
}

module.exports = dbConnect;
