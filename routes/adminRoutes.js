const express = require("express");
const { verifyToken } = require("../middlewares/authMiddlewares");
const upload = require("../middlewares/upload");
const { createProduct, getAllDetails } = require("../controllers/adminController");

const router = express.Router();

router.get("/details", verifyToken, getAllDetails);
router.post("/product", verifyToken, upload.single("image"), createProduct); // Attach upload middleware

module.exports = router;
