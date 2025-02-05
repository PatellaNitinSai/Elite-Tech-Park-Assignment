const Vendor = require("../models/Vendor.js");
const Staff = require("../models/Staff.js");
const User = require("../models/User.js");
const cloudinary = require("../utils/cloudinaryConfig.js");
const Product = require("../models/Product.js");

exports.getAllDetails = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    const staff = await Staff.find();
    const users = await User.find();

    res.status(200).json({ vendors, staff, users });
  } catch (err) {
    res.status(500).json({ msg: "Error fetching details", error: err.message });
  }
};


exports.createProduct = async (req, res) => {
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
      folder: "ecommerce_products",
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
      image: imageResult.secure_url, // Cloudinary image URL
      vendor: req.user.id,
      discount,
    });

    await product.save();
    res.status(201).json({ msg: "Product created successfully", product });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ msg: "Error creating product", error: err.message });
  }
};
