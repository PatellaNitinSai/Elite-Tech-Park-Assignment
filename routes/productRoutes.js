const express = require("express");
const { verifyToken } = require("../middlewares/authMiddlewares.js");
const upload = require("../middlewares/multerMiddleware.js");
const { createProduct, getProducts } = require("../controllers/productController.js");

const router = express.Router();

router.post("/product", verifyToken, upload.single("image"), createProduct);
router.get("/products", verifyToken, getProducts);

module.exports = router;
