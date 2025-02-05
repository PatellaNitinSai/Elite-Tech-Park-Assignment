const express = require("express");
const multer = require("multer");
const { verifyToken } = require("../middlewares/authMiddlewares.js");
const { getVendorProducts, addProduct } = require("../controllers/vendorController.js");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.get("/products", verifyToken, getVendorProducts);
router.post("/product", verifyToken, upload.single("image"), addProduct);

module.exports = router;
