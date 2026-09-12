import React, { Children, createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios"
export const shopDataContext = createContext();
import { userDataContext } from "./UserContext";

function ShopContext({ children }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItem, setCartItem] = useState({})
  const { serverUrl } = useContext(authDataContext);
  const { userData } = useContext(userDataContext);
  const [wishlist, setWishlist] = useState([]);
  const currency = "₹";
  const delivery_fee = 60;

  const getProducts = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/product/list");
      console.log(result.data.products);
      setProducts(result.data.products);
    } catch (error) {
      console.log(error);
    }
  };





  const addToCart = async (itemId, size) => {

  if (!size) {
    console.log("Please select a size")
    return
  }

  let cartData = structuredClone(cartItem)

  if (cartData[itemId]) {

    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1
    } else {
      cartData[itemId][size] = 1
    }

  } else {

    cartData[itemId] = {}
    cartData[itemId][size] = 1

  }

  setCartItem(cartData);



  if(userData){
    try {
       const result =  await axios.post(serverUrl + "/api/cart/add" , {
        itemId , size 
      } , {withCredentials:true})
      console.log(result.data)
      
    } catch (error) {
      console.log(error)
     
    }
  }
 
}


const getUserCart = async () => {
  try {

    const response = await axios.get(
      serverUrl + "/api/cart/get",
      {
        withCredentials: true
      }
    );

    console.log(response.data);

    setCartItem(response.data.cartData);

  } catch (error) {

    console.log(error);
  }
};


const UpdateQuantity = async (itemId, size, quantity) => {

  let cartDataCopy = structuredClone(cartItem);

  if (quantity <= 0) {

    delete cartDataCopy[itemId][size];

    if (Object.keys(cartDataCopy[itemId]).length === 0) {
      delete cartDataCopy[itemId];
    }

  } else {

    cartDataCopy[itemId][size] = quantity;

  }

  setCartItem(cartDataCopy);

  if (userData) {
    try {

      await axios.post(
        serverUrl + "/api/cart/update",
        {
          itemId,
          size,
          quantity
        },
        {
          withCredentials: true
        }
      );

    } catch (error) {

      console.log(error);
      toast.error(error.message);

    }
  }
};

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

const addToWishlist = (productId) => {
  if (!wishlist.includes(productId)) {
    setWishlist((prev) => [...prev, productId]);
  } else {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  }
};



const getCartAmount = () => {
  let totalAmount = 0;
  for (const items in cartItem) {
    const product = products.find(
      (item) => item._id === items
    );
    if (product) {
      for (const size in cartItem[items]) {
        if (cartItem[items][size] > 0) {
          totalAmount += product.price * cartItem[items][size];
        }
      }
    }
  }
  return totalAmount;
};


  useEffect(() => {
    getProducts();
  }, []);

  useEffect(()=>{
    getUserCart()
  },[])

  const value = {
    products,
    currency,
    delivery_fee,
    getProducts,
    search,
   setSearch,
   showSearch,
    setShowSearch,
    cartItem,
  setCartItem,
  addToCart,
  getCartCount,
   wishlist,
  addToWishlist,
  UpdateQuantity,
  getCartAmount


  };

  return (
    <div>
      <shopDataContext.Provider value={value}>
        {children}
      </shopDataContext.Provider>
    </div>
  );
}

export default ShopContext;
