import express from "express";

import {
  placeOrder,
  getUserOrders,
  allOrders,
  updateStatus,
  createRazorpayOrder,
  verifyRazorpayPayment,
} from "../controller/orderController.js";

import isAuth from "../middleware/isAuth.js";
import adminAuth from "../middleware/adminAuth.js";

const orderRoutes = express.Router();

// ================= USER =================

orderRoutes.post("/place", isAuth, placeOrder);

orderRoutes.get("/userorders", isAuth, getUserOrders);

orderRoutes.post("/create-razorpay-order", isAuth, createRazorpayOrder);

orderRoutes.post("/verify-razorpay-payment", isAuth, verifyRazorpayPayment);

// ================= ADMIN =================

orderRoutes.get("/allorders", adminAuth, allOrders);

orderRoutes.post("/status", adminAuth, updateStatus);

export default orderRoutes;
