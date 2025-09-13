const { default: axios } = require("axios");
const UserSchema = require("../Schema/userSchema.js");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { username, gmail, password, phone } = req.body;
    if (!username || !gmail || !password || !phone) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const existingUser = await UserSchema.findOne({ gmail });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new UserSchema({
      username,
      gmail,
      password: hashedPassword,
      phone,
    });

    await newUser.save();
    return res.status(201).json({
      message: "Registration successful",
      user: newUser,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      message: "Error registering user",
      error: error.message,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const { gmail, password } = req.body;
    if (!gmail || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const foundUser = await UserSchema.find({ gmail });
    if (!foundUser)
      return res.status(404).json({ message: "User is not found" });

    return res.status(200).json({ message: "Login successfull" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerUser, userLogin };
