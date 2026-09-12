import User from "../model/userModel.js";
import Order from "../model/orderModel.js";

import Razorpay from "razorpay";
import crypto from "crypto";




const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


// Place Order
export const placeOrder = async (req, res) => {

  try {

    const { items, amount, address } = req.body;

    const userId = req.userId;


    const orderData = {
      items,
      amount,
      userId,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now()
    };


    const newOrder = new Order(orderData);

    await newOrder.save();


    // Clear user's cart
    const user = await User.findById(userId);

    if (user) {

      user.cartData = {};

      user.markModified("cartData");

      await user.save();

    }


    return res.status(201).json({
      message: "Order placed successfully",
      order: newOrder
    });

  } catch (error) {

    console.log("Place Order Error:", error);

    return res.status(500).json({
      message: "Error placing order"
    });

  }

};




// Create Razorpay Order
export const createRazorpayOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({
        message: "Amount is required",
      });
    }

    const options = {
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const razorpayOrder = await razorpay.orders.create(options);

    return res.status(200).json({
      message: "Razorpay order created successfully",
      order: razorpayOrder,
    });

  } catch (error) {
    console.log("Create Razorpay Order Error:", error);

    return res.status(500).json({
      message: "Error creating Razorpay order",
    });
  }
};

// Verify Razorpay Payment
export const verifyRazorpayPayment = async (req, res) => {
  try {

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      items,
      amount,
      address
    } = req.body;

    const userId = req.userId;

    // Check payment details
    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({
        message: "Payment details are missing"
      });
    }

    // Create signature
    const body =
      razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    // Verify signature
    if (expectedSignature !== razorpay_signature) {

      return res.status(400).json({
        message: "Payment verification failed"
      });

    }

    // Payment verified successfully
    const orderData = {
      items,
      amount,
      userId,
      address,
      paymentMethod: "Razorpay",
      payment: true,
      date: Date.now()
    };

    const newOrder = new Order(orderData);

    await newOrder.save();

    // Clear user's cart
    const user = await User.findById(userId);

    if (user) {

      user.cartData = {};

      user.markModified("cartData");

      await user.save();

    }

    return res.status(200).json({
      message: "Payment verified and order placed successfully",
      order: newOrder
    });

  } catch (error) {

    console.log("Razorpay Verification Error:", error);

    return res.status(500).json({
      message: "Error verifying Razorpay payment"
    });

  }
};


// Get User Orders
export const getUserOrders = async (req, res) => {

  try {

    const userId = req.userId;

    const orders = await Order.find({
      userId: userId
    }).sort({
      date: -1
    });


    return res.status(200).json({
      message: "User orders fetched successfully",
      orders
    });

  } catch (error) {

    console.log("Get User Orders Error:", error);

    return res.status(500).json({
      message: "Error getting user orders"
    });

  }

};






// admin Controller 

export const allOrders = async (req, res) => {
  try {

    const orders = await Order.find({}).sort({ date: -1 });

    return res.status(200).json({
      message: "All orders fetched successfully",
      orders
    });

  } catch (error) {

    console.log("All Orders Error:", error);

    return res.status(500).json({
      message: "Error getting all orders"
    });

  }
};




export const updateStatus = async (req, res) => {
  try {

    const { orderId, status } = req.body;

    if (!orderId || !status) {
      return res.status(400).json({
        message: "Order ID and status are required"
      });
    }

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    order.status = status;

    await order.save();

    return res.status(200).json({
      message: "Order status updated successfully",
      order
    });

  } catch (error) {

    console.log("Update Status Error:", error);

    return res.status(500).json({
      message: "Error updating order status"
    });

  }
};