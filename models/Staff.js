const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  assignedVendors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vendor" }],
  role: { type: String, default: "staff" },
});

module.exports = mongoose.model("Staff", staffSchema);
