//import external moduls
const express = require("express");
// const config = require("config");

//import files
const morgan = require("./environment/morgan");
const dbConnect = require("./dbConnect");
const product = require("./services/product");

const app = express();
app.use(express.json());
// app.use(express.urlencoded());

dbConnect();

app.use(morgan);
app.use("/admin/product", product);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Running on Port ${port}`));
