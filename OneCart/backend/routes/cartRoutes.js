import express from "express";
import {
  addToCart,
  updateCart,
  getUserCart
} from "../controller/cartController.js";

import isAuth from "../middleware/isAuth.js";

const cartRoutes = express.Router();


// Add product to cart
cartRoutes.post("/add",isAuth, addToCart);

// Update cart
cartRoutes.post("/update",isAuth,updateCart);

// Get user cart
cartRoutes.get("/get", isAuth,getUserCart);


export default cartRoutes;