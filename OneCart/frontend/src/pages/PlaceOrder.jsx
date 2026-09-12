import React, { useContext, useState } from "react";
import { shopDataContext } from "../Context/ShopContext";
import { authDataContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaLock, FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

function PlaceOrder() {

const {
  products,
  cartItem,
  setCartItem,
  currency,
  getCartAmount
} = useContext(shopDataContext);

  const { serverUrl } = useContext(authDataContext);

  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("COD");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipcode: ""
  });

  const [loading, setLoading] = useState(false);


  // ================= HANDLE INPUT =================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

  };


  // ================= GET CART ITEMS =================

  const orderItems = [];

  for (const itemId in cartItem) {

    const product = products.find(
      (item) => item._id === itemId
    );

    if (product) {

      for (const size in cartItem[itemId]) {

        if (cartItem[itemId][size] > 0) {

          orderItems.push({
            productId: itemId,
            name: product.name,
            price: product.price,
            image: product.image1,
            size: size,
            quantity: cartItem[itemId][size]
          });

        }

      }

    }

  }


  // ================= PLACE ORDER =================

 const handlePlaceOrder = async (e) => {
  e.preventDefault();

  if (orderItems.length === 0) {
    return;
  }

  // ================= COD =================

  if (paymentMethod === "COD") {
    try {
      setLoading(true);

      const response = await axios.post(
        serverUrl + "/api/order/place",
        {
          items: orderItems,
          amount: getCartAmount(),
          address: formData
        },
        {
          withCredentials: true
        }
      );

      console.log(response.data);

      toast.success("Order placed successfully!");

      setCartItem({});

      setLoading(false);

      navigate("/order");

    } catch (error) {
      console.log("Place Order Error:", error);

      setLoading(false);
    }
  }


  // ================= RAZORPAY =================

  if (paymentMethod === "RAZORPAY") {
    try {
      setLoading(true);

      // Create Razorpay order from backend
      const response = await axios.post(
        serverUrl + "/api/order/create-razorpay-order",
        {
          amount: getCartAmount()
        },
        {
          withCredentials: true
        }
      );

      const razorpayOrder = response.data.order;

      // Check Razorpay is loaded
      if (!window.Razorpay) {
        console.log("Razorpay SDK not loaded");
        setLoading(false);
        return;
      }

      console.log("RAZORPAY KEY:", import.meta.env.VITE_RAZORPAY_KEY_ID);
      // Razorpay Checkout
      const options = {
key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: razorpayOrder.amount,

        currency: razorpayOrder.currency,

        name: "OneCart",

        description: "OneCart Order",

        order_id: razorpayOrder.id,

        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone
        },

        notes: {
          address: `${formData.street}, ${formData.city}, ${formData.state} - ${formData.zipcode}`
        },

        theme: {
          color: "#9de7f2"
        },


        // ================= PAYMENT SUCCESS =================

        handler: async function (paymentResponse) {

          try {

            console.log(
              "Razorpay Payment Response:",
              paymentResponse
            );

            const verifyResponse = await axios.post(
              serverUrl + "/api/order/verify-razorpay-payment",
              {
                razorpay_order_id:
                  paymentResponse.razorpay_order_id,

                razorpay_payment_id:
                  paymentResponse.razorpay_payment_id,

                razorpay_signature:
                  paymentResponse.razorpay_signature,

                items: orderItems,

                amount: getCartAmount(),

                address: formData
              },
              {
                withCredentials: true
              }
            );

            console.log(
              "Verification Response:",
              verifyResponse.data
            );

            // Clear cart
            setCartItem({});

            setLoading(false);

            // Go to Orders
            navigate("/order");

          } catch (error) {

            console.log(
              "Payment Verification Error:",
              error
            );

            setLoading(false);

          }

        },


        // ================= PAYMENT WINDOW CLOSED =================

        modal: {
          ondismiss: function () {

            console.log("Payment window closed");

            setLoading(false);

          }
        }

      };


      // Create Razorpay instance
      const razorpay = new window.Razorpay(options);

      // Open Razorpay
      razorpay.open();

    } catch (error) {

      console.log(
        "Razorpay Order Error:",
        error
      );

      setLoading(false);

    }
  }
};


  return (

    <div className="min-h-screen w-full bg-gradient-to-br from-[#07191e] via-[#0b242b] to-[#101010] pt-[95px] pb-[100px] px-[15px] md:px-[40px]">

      <div className="max-w-[1200px] mx-auto">


        {/* ================= HEADER ================= */}

        <div className="flex items-center gap-[15px] mb-[35px]">

          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="w-[42px] h-[42px] rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all"
          >

            <FaArrowLeft className="text-[14px]" />

          </button>


          <div>

            <p className="text-[#9de7f2] text-[11px] tracking-[4px] uppercase">
              Secure Checkout
            </p>

            <h1 className="text-white text-[30px] md:text-[40px] font-semibold">
              PLACE ORDER
            </h1>

          </div>

        </div>


        {/* ================= FORM ================= */}

        <form
          onSubmit={handlePlaceOrder}
          className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-[25px]"
        >


          {/* ================= LEFT SIDE ================= */}

          <div className="flex flex-col gap-[20px]">


            {/* ================= DELIVERY ADDRESS ================= */}

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-[20px] md:p-[30px]">


              <div className="flex items-center justify-between mb-[25px]">

                <div>

                  <p className="text-[#9de7f2] text-[11px] tracking-[3px] uppercase">
                    Step 01
                  </p>

                  <h2 className="text-white text-[22px] font-semibold mt-[5px]">
                    Delivery Address
                  </h2>

                </div>


                <div className="w-[40px] h-[40px] rounded-full bg-[#9de7f2]/10 border border-[#9de7f2]/20 flex items-center justify-center">

                  <FaCheck className="text-[#9de7f2] text-[14px]" />

                </div>

              </div>


              {/* FIRST NAME / LAST NAME */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="checkoutInput"
                />


                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="checkoutInput"
                />

              </div>


              {/* EMAIL / PHONE */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mt-[14px]">

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="checkoutInput"
                />


                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="checkoutInput"
                />

              </div>


              {/* STREET */}

              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                placeholder="Street Address"
                required
                className="checkoutInput mt-[14px]"
              />


              {/* CITY / STATE */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mt-[14px]">

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                  className="checkoutInput"
                />


                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  required
                  className="checkoutInput"
                />

              </div>


              {/* PIN CODE */}

              <input
                type="text"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                placeholder="PIN / ZIP Code"
                required
                className="checkoutInput mt-[14px]"
              />

            </div>


            {/* ================= PAYMENT METHOD ================= */}

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-[20px] md:p-[30px]">


              <p className="text-[#9de7f2] text-[11px] tracking-[3px] uppercase">
                Step 02
              </p>


              <h2 className="text-white text-[22px] font-semibold mt-[5px]">
                Payment Method
              </h2>


              <div className="flex flex-col gap-[12px] mt-[20px]">


                {/* ================= COD ================= */}

                <div
                  onClick={() => setPaymentMethod("COD")}
                  className={`w-full rounded-[14px] p-[18px] border cursor-pointer transition-all
                  ${
                    paymentMethod === "COD"
                      ? "border-[#9de7f2] bg-[#9de7f2]/10"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                >

                  <div className="flex items-center justify-between">


                    <div className="flex items-center gap-[14px]">

                      <div className="w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center text-[20px]">
                        💵
                      </div>


                      <div>

                        <p className="text-white font-medium">
                          Cash on Delivery
                        </p>

                        <p className="text-gray-500 text-[12px] mt-[3px]">
                          Pay when your order arrives
                        </p>

                      </div>

                    </div>


                    {/* RADIO */}

                    <div
                      className={`w-[20px] h-[20px] rounded-full border flex items-center justify-center
                      ${
                        paymentMethod === "COD"
                          ? "border-[#9de7f2]"
                          : "border-gray-500"
                      }`}
                    >

                      {paymentMethod === "COD" && (

                        <div className="w-[10px] h-[10px] rounded-full bg-[#9de7f2]"></div>

                      )}

                    </div>

                  </div>

                </div>


                {/* ================= RAZORPAY ================= */}

                <div
                  onClick={() => setPaymentMethod("RAZORPAY")}
                  className={`w-full rounded-[14px] p-[18px] border cursor-pointer transition-all
                  ${
                    paymentMethod === "RAZORPAY"
                      ? "border-[#9de7f2] bg-[#9de7f2]/10"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                >

                  <div className="flex items-center justify-between">


                    <div className="flex items-center gap-[14px]">


                      {/* RAZORPAY LOGO */}

                      <div className="w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center">

                        <span className="text-[#9de7f2] font-bold text-[17px]">
                          R
                        </span>

                      </div>


                      <div>

                        <p className="text-white font-medium">
                          Razorpay
                        </p>

                        <p className="text-gray-500 text-[12px] mt-[3px]">
                          Pay securely using UPI, Card & more
                        </p>

                      </div>

                    </div>


                    {/* RADIO */}

                    <div
                      className={`w-[20px] h-[20px] rounded-full border flex items-center justify-center
                      ${
                        paymentMethod === "RAZORPAY"
                          ? "border-[#9de7f2]"
                          : "border-gray-500"
                      }`}
                    >

                      {paymentMethod === "RAZORPAY" && (

                        <div className="w-[10px] h-[10px] rounded-full bg-[#9de7f2]"></div>

                      )}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div className="lg:sticky lg:top-[95px] h-fit">


            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-[20px] md:p-[25px]">


              <p className="text-[#9de7f2] text-[11px] tracking-[3px] uppercase">
                Step 03
              </p>


              <h2 className="text-white text-[24px] font-semibold mt-[5px]">
                Order Summary
              </h2>


              <div className="w-full h-[1px] bg-white/10 my-[20px]"></div>


              {/* ================= PRODUCTS ================= */}

              <div className="max-h-[310px] overflow-y-auto flex flex-col gap-[15px] pr-[4px]">


                {orderItems.map((item, index) => (

                  <div
                    key={index}
                    className="flex gap-[12px] items-center"
                  >


                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[58px] h-[68px] rounded-[8px] object-cover"
                    />


                    <div className="flex-1 min-w-0">

                      <p className="text-white text-[13px] truncate">
                        {item.name}
                      </p>


                      <p className="text-gray-500 text-[11px] mt-[4px]">
                        Size: {item.size} • Qty: {item.quantity}
                      </p>

                    </div>


                    <p className="text-[#9de7f2] text-[13px] font-semibold">

                      {currency}
                      {item.price * item.quantity}

                    </p>

                  </div>

                ))}

              </div>


              <div className="w-full h-[1px] bg-white/10 my-[20px]"></div>


              {/* ================= SUBTOTAL ================= */}

              <div className="flex justify-between mb-[12px]">

                <span className="text-gray-400 text-[14px]">
                  Subtotal
                </span>

                <span className="text-white text-[14px]">
                  {currency}
                  {getCartAmount()}
                </span>

              </div>


              {/* ================= DELIVERY ================= */}

              <div className="flex justify-between mb-[15px]">

                <span className="text-gray-400 text-[14px]">
                  Delivery
                </span>

                <span className="text-[#9de7f2] text-[14px]">
                  FREE
                </span>

              </div>


              <div className="w-full h-[1px] bg-white/10 mb-[18px]"></div>


              {/* ================= TOTAL ================= */}

              <div className="flex justify-between items-center">

                <span className="text-white text-[18px] font-semibold">
                  Total
                </span>


                <span className="text-[#9de7f2] text-[24px] font-bold">

                  {currency}
                  {getCartAmount()}

                </span>

              </div>


              {/* ================= BUTTON ================= */}

              <button
                type="submit"
                disabled={loading || orderItems.length === 0}
                className="w-full h-[54px] mt-[25px] rounded-[10px] bg-[#9de7f2] text-[#07191e] font-bold tracking-[1px] hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >

                {loading
                  ? "PROCESSING..."
                  : paymentMethod === "COD"
                    ? "PLACE ORDER"
                    : `PAY ${currency}${getCartAmount()}`
                }

              </button>


              {/* ================= SECURITY ================= */}

              <div className="flex items-center justify-center gap-[7px] mt-[15px]">

                <FaLock className="text-gray-500 text-[10px]" />

                <p className="text-gray-500 text-[11px]">
                  Your payment information is secure
                </p>

              </div>

            </div>

          </div>

        </form>

      </div>


      {/* ================= INPUT CSS ================= */}

      <style>
        {`

          .checkoutInput {

            width: 100%;
            height: 50px;

            padding: 0 15px;

            border-radius: 8px;

            background: rgba(0,0,0,0.2);

            border: 1px solid rgba(255,255,255,0.1);

            color: white;

            outline: none;

            font-size: 14px;

            transition: all 0.2s ease;

          }


          .checkoutInput::placeholder {

            color: #6b7280;

          }


          .checkoutInput:focus {

            border-color: #9de7f2;

            background: rgba(0,0,0,0.3);

          }

        `}
      </style>

    </div>

  );

}

export default PlaceOrder;