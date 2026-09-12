import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import { genToken, genToken1 } from "../config/token.js";


// ======================================================
// REGISTER / SIGN UP
// ======================================================

export const Registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Enter Valid Email",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Enter a Strong Password",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user,
    });

  } catch (error) {
    console.log("Registration Error:", error);

    return res.status(500).json({
      message: `Registration error: ${error.message}`,
    });
  }
};


// ======================================================
// LOGIN
// ======================================================

export const login = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User is not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Incorrect Password",
      });
    }

    const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "User is loggedIn",
    });

  } catch (error) {

    console.log("Login Error:", error);

    return res.status(500).json({
      message: `Login error: ${error.message}`,
    });
  }
};


// ======================================================
// LOGOUT
// ======================================================

export const logOut = async (req, res) => {
  try {

    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.status(200).json({
      message: "logOut Successful",
    });

  } catch (error) {

    console.log("Logout Error:", error);

    return res.status(500).json({
      message: `Logout error: ${error.message}`,
    });
  }
};


// ======================================================
// GOOGLE LOGIN
// ======================================================

export const googleLogin = async (req, res) => {
  try {

    const { name, email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {

      user = await User.create({
        name,
        email,
      });
    }

    const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "User is loggedIn",
    });

  } catch (error) {

    console.log("googleLogin Error:", error);

    return res.status(500).json({
      message: `googleLogin error: ${error.message}`,
    });
  }
};


// ======================================================
// ADMIN LOGIN
// ======================================================

export const adminLogin = async (req, res) => {
  try {

    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {

      const token = await genToken1(email);

      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 1 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        message: "Admin is loggedIn",
      });
    }

    return res.status(400).json({
      message: "Invalid Credentials",
    });

  } catch (error) {

    console.log("Admin Error:", error);

    return res.status(500).json({
      message: `adminLogin error: ${error.message}`,
    });
  }
};