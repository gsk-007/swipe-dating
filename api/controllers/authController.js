import { loginSchema, signupSchema } from "../schemas/authSchema.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const signup = async (req, res) => {
  const { error, value } = signupSchema.validate(req.body, {
    errors: {
      wrap: {
        label: "",
      },
    },
  });

  if (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
    return;
  }

  try {
    const { name, email, password, age, gender, genderPreference } = value;
    const newUser = await User.create({
      name,
      email,
      password,
      age,
      gender,
      genderPreference,
    });

    const token = signToken(newUser._id);

    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV == "production",
    });

    res.status(201).json({
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.log("Error in login controller:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
export const login = async (req, res) => {
  const { error, value } = loginSchema.validate(req.body, {
    errors: {
      wrap: {
        label: "",
      },
    },
  });

  if (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
    return;
  }
  try {
    const { email, password } = value;

    const user = await User.findOne({ email });

    if (!user || !user.matchPassword(password)) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
      return;
    }

    const token = signToken(user._id);

    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV == "production",
    });

    delete user.password;
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("Error in login controller:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
export const logout = async (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};
