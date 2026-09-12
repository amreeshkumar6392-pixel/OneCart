import User from "../model/userModel.js";



// 1. Add product to cart
export const addToCart = async (req, res) => {
  try {

    console.log("ADD TO CART CALLED");

    const { itemId, size } = req.body;

    console.log("ITEM ID:", itemId);
    console.log("SIZE:", size);

    const userId = req.userId;

    console.log("USER ID:", userId);

    const user = await User.findById(userId);

    console.log("USER FOUND:", user);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    let cartData = user.cartData || {};

    console.log("OLD CART:", cartData);

    if (cartData[itemId]) {

      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }

    } else {

      cartData[itemId] = {};
      cartData[itemId][size] = 1;

    }

    user.cartData = cartData;

user.markModified("cartData");

await user.save();

    console.log("CART SAVED:", user.cartData);

    return res.status(200).json({
      message: "Product added to cart",
      cartData: user.cartData
    });

  } catch (error) {

    console.log("ADD TO CART ERROR:", error);

    return res.status(500).json({
      message: "Error adding product to cart"
    });

  }
};

// 2. Update cart
export const updateCart = async (req, res) => {
  try {

    const { itemId, size, quantity } = req.body;

    const userId = req.userId;

    if (!itemId || !size || quantity === undefined) {
      return res.status(400).json({
        message: "Product ID, size and quantity are required"
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    let cartData = user.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    if (quantity <= 0) {

      delete cartData[itemId][size];

      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }

    } else {

      cartData[itemId][size] = quantity;

    }

    user.cartData = cartData;

    await user.save();

    return res.status(200).json({
      message: "Cart updated successfully",
      cartData: user.cartData
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      message: "Error updating cart"
    });

  }
};


// 3. Get user cart
export const getUserCart = async (req, res) => {
  try {

    const userId = req.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    return res.status(200).json({
      cartData: user.cartData
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      message: "Error getting user cart"
    });

  }
};