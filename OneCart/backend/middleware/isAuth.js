import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    // No token
    if (!token) {
      return res.status(401).json({
        message: "User is not authenticated",
      });
    }

    // Verify token
    const verifyToken = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    if (!verifyToken || !verifyToken.userId) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    // Store user ID
    req.userId = verifyToken.userId;

    next();

  } catch (error) {
    console.log("isAuth Error:", error.message);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export default isAuth;