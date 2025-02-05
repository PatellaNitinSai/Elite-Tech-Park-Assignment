const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  priceOld: { type: Number, required: true },
  priceNew: { type: Number, required: true },
  expiryDate: { type: Date, required: true },
  isFreeDelivery: { type: Boolean, default: false },
  image: { type: String, required: true }, // Store Cloudinary URL
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  discount: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);
