const cloudinary = require("../utils/cloudinaryConfig.js");
const Product = require("../models/Product.js");

exports.getVendorProducts = async (req, res) => {
  try {
    const products = await Product.find({ vendor: req.user.id });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching products", error: err.message });
  }
};

exports.addProduct = async (req, res) => {
  const {
    name,
    description,
    category,
    priceOld,
    priceNew,
    expiryDate,
    isFreeDelivery,
  } = req.body;

  try {
    if (!req.file) {
      return res.status(400).json({ msg: "Image is required" });
    }

    const imageResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "vendor_products",
    });

    const discount = ((priceOld - priceNew) / priceOld) * 100;

    const product = new Product({
      name,
      description,
      category,
      priceOld,
      priceNew,
      expiryDate,
      isFreeDelivery,
      vendor: req.user.id,
      image: imageResult.secure_url, // Store Cloudinary URL
      discount,
    });

    await product.save();

    res.status(201).json({ msg: "Product added successfully", product });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ msg: "Error adding product", error: err.message });
  }
};
