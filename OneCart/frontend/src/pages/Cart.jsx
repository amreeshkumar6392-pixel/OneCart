import React, { useContext } from "react";
import { shopDataContext } from "../Context/ShopContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { products, cartItem, currency, UpdateQuantity, getCartAmount } =
    useContext(shopDataContext);

  const navigate = useNavigate();

  // Convert cart object into array
  const cartProducts = [];

  for (const itemId in cartItem) {
    const product = products.find((item) => item._id === itemId);

    if (product) {
      for (const size in cartItem[itemId]) {
        if (cartItem[itemId][size] > 0) {
          cartProducts.push({
            ...product,
            selectedSize: size,
            quantity: cartItem[itemId][size],
          });
        }
      }
    }
  }

  return (
  <div className="min-h-[100vh] w-full bg-gradient-to-br from-[#07191e] via-[#0b242b] to-[#101010] pt-[20px] md:pt-[100px] pb-[120px] px-[15px] md:px-[50px] lg:px-[80px]">
      {/* ================= HEADING ================= */}

      <div className="max-w-[1200px] mx-auto mb-[40px]">
        <p className="text-[#9de7f2] text-[13px] tracking-[4px] uppercase">
          Your Shopping Bag
        </p>

        <h1 className="text-white text-[35px] md:text-[45px] font-semibold mt-[8px]">
          CART
        </h1>

        <div className="w-[60px] h-[3px] bg-[#9de7f2] mt-[12px]"></div>
      </div>

      {/* ================= CART NOT EMPTY ================= */}

      {cartProducts.length > 0 ? (
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-[30px]">
          {/* ================= LEFT SIDE ================= */}

          <div className="flex flex-col gap-[18px]">
            {cartProducts.map((item, index) => (
              <div
                key={index}
                className="w-full min-h-[190px] rounded-[18px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-[15px] md:p-[20px] flex gap-[15px] md:gap-[25px] shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
              >
                {/* PRODUCT IMAGE */}

                <div
                  className="w-[120px] h-[160px] md:w-[150px] md:h-[180px] flex-shrink-0 overflow-hidden rounded-[12px] cursor-pointer"
                  onClick={() => navigate(`/productdetail/${item._id}`)}
                >
                  <img
                    src={item.image1}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* PRODUCT INFORMATION */}

                <div className="flex-1 flex flex-col justify-between">
                  {/* TOP */}

                  <div>
                    <div className="flex justify-between gap-[10px]">
                      {/* PRODUCT NAME */}

                      <h2
                        className="text-white text-[17px] md:text-[20px] font-medium cursor-pointer hover:text-[#9de7f2] transition-all"
                        onClick={() => navigate(`/productdetail/${item._id}`)}
                      >
                        {item.name}
                      </h2>

                      {/* DELETE BUTTON */}

                      <button
                        onClick={() =>
                          UpdateQuantity(item._id, item.selectedSize, 0)
                        }
                        className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-all"
                      >
                        <FaTrash className="text-[13px]" />
                      </button>
                    </div>

                    {/* PRODUCT DESCRIPTION */}

                    <p className="text-gray-400 text-[14px] mt-[8px]">
                      Premium quality product
                    </p>

                    {/* SIZE */}

                    <div className="flex items-center gap-[8px] mt-[15px]">
                      <span className="text-gray-400 text-[13px]">Size:</span>

                      <span className="px-[12px] py-[5px] rounded-[6px] bg-white/10 border border-white/10 text-white text-[13px]">
                        {item.selectedSize}
                      </span>
                    </div>
                  </div>

                  {/* BOTTOM */}

                  <div className="flex items-center justify-between mt-[15px]">
                    {/* QUANTITY */}

                    <div className="flex items-center border border-white/10 rounded-[8px] overflow-hidden bg-black/20">
                      {/* MINUS */}

                      <button
                        onClick={() =>
                          UpdateQuantity(
                            item._id,
                            item.selectedSize,
                            item.quantity - 1,
                          )
                        }
                        className="w-[35px] h-[35px] flex items-center justify-center text-gray-300 hover:bg-white/10 transition-all"
                      >
                        <FaMinus className="text-[10px]" />
                      </button>

                      {/* QUANTITY NUMBER */}

                      <span className="w-[40px] text-center text-white text-[14px]">
                        {item.quantity}
                      </span>

                      {/* PLUS */}

                      <button
                        onClick={() =>
                          UpdateQuantity(
                            item._id,
                            item.selectedSize,
                            item.quantity + 1,
                          )
                        }
                        className="w-[35px] h-[35px] flex items-center justify-center text-gray-300 hover:bg-white/10 transition-all"
                      >
                        <FaPlus className="text-[10px]" />
                      </button>
                    </div>

                    {/* PRODUCT PRICE */}

                    <p className="text-[#9de7f2] text-[18px] md:text-[20px] font-semibold">
                      {currency} {item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="lg:sticky lg:top-[100px] h-fit">
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-[25px] md:p-[30px] shadow-[0_15px_50px_rgba(0,0,0,0.25)]">
              {/* TITLE */}

              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                Order Summary
              </p>

              <h2 className="text-white text-[25px] font-semibold mt-[8px]">
                CHECKOUT
              </h2>

              <div className="w-full h-[1px] bg-white/10 my-[25px]"></div>

              {/* SUBTOTAL */}

              <div className="flex justify-between items-center mb-[18px]">
                <span className="text-gray-400">Subtotal</span>

                <span className="text-white">
                  {currency} {getCartAmount()}
                </span>
              </div>

              {/* DELIVERY */}

              <div className="flex justify-between items-center mb-[18px]">
                <span className="text-gray-400">Delivery</span>

                <span className="text-[#9de7f2]">FREE</span>
              </div>

              {/* DISCOUNT */}

              <div className="flex justify-between items-center mb-[20px]">
                <span className="text-gray-400">Discount</span>

                <span className="text-green-400">— 0</span>
              </div>

              <div className="w-full h-[1px] bg-white/10 mb-[20px]"></div>

              {/* TOTAL */}

              <div className="flex justify-between items-center">
                <span className="text-white text-[18px] font-medium">
                  Total
                </span>

                <span className="text-[#9de7f2] text-[24px] font-bold">
                  {currency} {getCartAmount()}
                </span>
              </div>

              {/* CHECKOUT BUTTON */}

              <button
                onClick={() => navigate("/placeorder")}
                className="w-full h-[52px] mt-[30px] rounded-[10px] bg-[#9de7f2] text-[#07191e] font-semibold tracking-[1px] hover:bg-white hover:scale-[1.01] transition-all duration-300"
              >
                PROCEED TO CHECKOUT
              </button>

              {/* CONTINUE SHOPPING */}

              <button
                onClick={() => navigate("/collections")}
                className="w-full mt-[12px] h-[45px] rounded-[10px] border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-all"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* ================= EMPTY CART ================= */

        <div className="max-w-[600px] mx-auto text-center mt-[80px]">
          <div className="w-[100px] h-[100px] mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <span className="text-[45px]">🛍️</span>
          </div>

          <h2 className="text-white text-[28px] md:text-[35px] font-semibold mt-[25px]">
            Your cart is empty
          </h2>

          <p className="text-gray-400 text-[15px] mt-[10px]">
            Looks like you haven't added anything to your cart yet.
          </p>

          <button
            onClick={() => navigate("/collections")}
            className="mt-[30px] px-[35px] py-[14px] rounded-[10px] bg-[#9de7f2] text-[#07191e] font-semibold hover:bg-white transition-all"
          >
            START SHOPPING
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
