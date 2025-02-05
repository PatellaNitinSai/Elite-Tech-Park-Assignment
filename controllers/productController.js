const Product = require("../models/Product");
const { calculateDiscount } = require("../utils/helper.js");

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
    const image = req.file?.path;

    if (!image) {
      return res.status(400).json({ msg: "Image upload failed" });
    }

    const discount = calculateDiscount(priceOld, priceNew);

    const product = new Product({
      name,
      description,
      category,
      priceOld,
      priceNew,
      expiryDate,
      isFreeDelivery,
      image, // Store the Cloudinary URL
      vendor: req.user.id, 
      discount,
    });

    await product.save();

    res.status(201).json({ msg: "Product created successfully", product });
  } catch (err) {
    console.error("Error creating product:", err.message);
    res.status(500).json({ msg: "Error creating product", error: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("vendor", "name email");
    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ msg: "Error fetching products", error: err.message });
  }
};
