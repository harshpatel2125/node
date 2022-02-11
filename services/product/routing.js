const express = require("express");

const app = express();
app.use(express.json());

const getAllProduct = require("./getAll");
const getByIdProduct = require("./getById");
const createProduct = require("./post");
const updateProduct = require("./put");
const deleteProduct = require("./delete");

const router = express.Router();

router.use("/", getAllProduct);
router.use("/", getByIdProduct);
router.use("/", createProduct);
router.use("/", updateProduct);
router.use("/", deleteProduct);

module.exports = router;
