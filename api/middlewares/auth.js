import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      res.status(401).json({
        success: false,
        message: "Not authorized - No tken provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Not authorized - Invalid token",
      });
    }

    const currentUser = await User.findById(decoded.id).select("-password");

    req.user = currentUser;

    next();
  } catch (error) {
    console.log("Error in auth middleware: ", error);
    return res.status(401).json({
      success: false,
      message: "Not Authorized",
    });
  }
};
