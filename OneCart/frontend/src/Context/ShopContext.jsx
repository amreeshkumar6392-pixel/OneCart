import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { authDataContext } from "./AuthContext";
import { userDataContext } from "./UserContext";

import axios from "axios";
import { toast } from "react-toastify";

export const shopDataContext = createContext();

function ShopContext({ children }) {
  // =========================
  // STATES
  // =========================

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [showSearch, setShowSearch] = useState(false);

  const [cartItem, setCartItem] = useState({});

  const [wishlist, setWishlist] = useState([]);

  const { serverUrl } = useContext(authDataContext);

  const { userData } = useContext(userDataContext);

  const currency = "₹";

  const delivery_fee = 60;


  // =========================
  // GET PRODUCTS
  // =========================

  const getProducts = async () => {
    try {
      const result = await axios.get(
        serverUrl + "/api/product/list"
      );

      console.log(result.data.products);

      setProducts(result.data.products);

    } catch (error) {
      console.log(
        "Get Products Error:",
        error.response?.data || error.message
      );
    }
  };


  // =========================
  // ADD TO CART
  // =========================

  const addToCart = async (itemId, size) => {

    if (!size) {
      console.log("Please select a size");
      toast.error("Please select a size");
      return;
    }

    let cartData = structuredClone(cartItem);

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

    setCartItem(cartData);


    // Save cart to database if user is logged in
    if (userData) {

      try {

        const result = await axios.post(
          serverUrl + "/api/cart/add",
          {
            itemId,
            size,
          },
          {
            withCredentials: true,
          }
        );

        console.log(result.data);

      } catch (error) {

        console.log(
          "Add Cart Error:",
          error.response?.data || error.message
        );

      }
    }
  };


  // =========================
  // GET USER CART
  // =========================

  const getUserCart = async () => {

    if (!userData) {
      setCartItem({});
      return;
    }

    try {

      const response = await axios.get(
        serverUrl + "/api/cart/get",
        {
          withCredentials: true,
        }
      );

      console.log(response.data);

      setCartItem(response.data.cartData);

    } catch (error) {

      console.log(
        "Get Cart Error:",
        error.response?.data || error.message
      );

    }
  };


  // =========================
  // UPDATE CART QUANTITY
  // =========================

  const UpdateQuantity = async (
    itemId,
    size,
    quantity
  ) => {

    let cartDataCopy = structuredClone(cartItem);

    if (!cartDataCopy[itemId]) {
      return;
    }


    if (quantity <= 0) {

      delete cartDataCopy[itemId][size];

      if (
        Object.keys(cartDataCopy[itemId]).length === 0
      ) {
        delete cartDataCopy[itemId];
      }

    } else {

      cartDataCopy[itemId][size] = quantity;

    }


    setCartItem(cartDataCopy);


    // Update database
    if (userData) {

      try {

        await axios.post(
          serverUrl + "/api/cart/update",
          {
            itemId,
            size,
            quantity,
          },
          {
            withCredentials: true,
          }
        );

      } catch (error) {

        console.log(
          "Update Cart Error:",
          error.response?.data || error.message
        );

        toast.error(
          error.response?.data?.message ||
          error.message
        );
      }
    }
  };


  // =========================
  // GET CART COUNT
  // =========================

  const getCartCount = () => {

    let totalCount = 0;

    for (const items in cartItem) {

      for (const size in cartItem[items]) {

        if (cartItem[items][size] > 0) {

          totalCount += cartItem[items][size];

        }
      }
    }

    return totalCount;
  };


  // =========================
  // ADD / REMOVE WISHLIST
  // =========================

  const addToWishlist = (productId) => {

    if (!wishlist.includes(productId)) {

      setWishlist((prev) => [
        ...prev,
        productId,
      ]);

    } else {

      setWishlist((prev) =>
        prev.filter(
          (id) => id !== productId
        )
      );

    }
  };


  // =========================
  // GET CART AMOUNT
  // =========================

  const getCartAmount = () => {

    let totalAmount = 0;

    for (const items in cartItem) {

      const product = products.find(
        (item) => item._id === items
      );

      if (product) {

        for (const size in cartItem[items]) {

          if (
            cartItem[items][size] > 0
          ) {

            totalAmount +=
              product.price *
              cartItem[items][size];

          }
        }
      }
    }

    return totalAmount;
  };


  // =========================
  // LOAD PRODUCTS
  // =========================

  useEffect(() => {

    getProducts();

  }, [serverUrl]);


  // =========================
  // LOAD USER CART
  // =========================

  useEffect(() => {

    if (userData) {
      getUserCart();
    } else {
      setCartItem({});
    }

  }, [userData, serverUrl]);


  // =========================
  // CONTEXT VALUE
  // =========================

  const value = {

    products,

    currency,

    delivery_fee,

    getProducts,

    // SEARCH
    search,
    setSearch,

    showSearch,
    setShowSearch,

    // CART
    cartItem,
    setCartItem,
    addToCart,
    getCartCount,
    UpdateQuantity,
    getCartAmount,

    // WISHLIST
    wishlist,
    addToWishlist,
  };


  return (
    <shopDataContext.Provider value={value}>
      {children}
    </shopDataContext.Provider>
  );
}

export default ShopContext;