const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const User = require("../models/User");
const Vendor = require("../models/Vendor");

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    let Model;
    if (role === "admin") Model = Admin;
    else if (role === "vendor") Model = Vendor;
    else Model = User;

    const existingUser = await Model.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Model({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Error registering user", error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let Model;
    if (role === "admin") Model = Admin;
    else if (role === "vendor") Model = Vendor;
    else Model = User;

    const user = await Model.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Error logging in", error: err.message });
  }
};
