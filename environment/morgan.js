const morgan = require("morgan");
const express = require("express");

const app = express();

if (app.get("env") === "development") {
	console.log("Morgan enabled on Development...");
	app.use(morgan("tiny"));
}

module.exports = app;
