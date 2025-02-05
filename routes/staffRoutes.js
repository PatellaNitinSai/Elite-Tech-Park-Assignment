const express = require("express");
const multer = require("multer");
const { verifyToken } = require("../middlewares/authMiddlewares.js");
const { addProductForVendor } = require("../controllers/staffController.js");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/product", verifyToken, upload.single("image"), addProductForVendor);

module.exports = router;
