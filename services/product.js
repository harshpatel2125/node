const express = require("express");

const app = express();
app.use(express.json());

const getAllProduct = require("./product/getAll");
const getByIdProduct = require("./product/getById");
const createProduct = require("./product/post");
const updateProduct = require("./product/put");
const deleteProduct = require("./product/delete");

const router = express.Router();

router.use("/", getAllProduct);
router.use("/", getByIdProduct);
router.use("/", createProduct);
router.use("/", updateProduct);
router.use("/", deleteProduct);

module.exports = router;
