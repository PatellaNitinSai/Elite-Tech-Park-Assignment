const express = require("express");
const { getAllProducts } = require("../controllers/userController.js");

const router = express.Router();

router.get("/products", getAllProducts);

module.exports = router;
