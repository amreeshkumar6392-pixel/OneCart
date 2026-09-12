import React, { useContext, useEffect, useState } from "react";
import { shopDataContext } from "../Context/ShopContext";
import { authDataContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaArrowLeft,
  FaBoxOpen,
  FaShoppingBag,
  FaTruck,
  FaCheckCircle
} from "react-icons/fa";

function Order() {

  const {
    currency
  } = useContext(shopDataContext);

  const {
    serverUrl
  } = useContext(authDataContext);

  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [trackingOrder, setTrackingOrder] = useState(null);


  // ================= GET USER ORDERS =================

  const getUserOrders = async () => {

    try {

      const response = await axios.get(
        serverUrl + "/api/order/userorders",
        {
          withCredentials: true
        }
      );

      console.log(response.data);

      setOrders(response.data.orders || []);

      setLoading(false);

    } catch (error) {

      console.log("Get Orders Error:", error);

      setLoading(false);

    }

  };


  // ================= GET ORDERS ON PAGE LOAD =================

  useEffect(() => {

    getUserOrders();

  }, []);


  // ================= FORMAT DATE =================

  const formatDate = (date) => {

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });

  };


  // ================= TRACKING STATUS =================

  const trackingSteps = [
    "Order Placed",
    "Processing",
    "Shipped",
    "Out for Delivery",
    "Delivered"
  ];


  // ================= GET STATUS INDEX =================

  const getStatusIndex = (status) => {

    return trackingSteps.indexOf(status);

  };


  return (

    <div className="min-h-screen w-full bg-gradient-to-br from-[#07191e] via-[#0b242b] to-[#101010] pt-[95px] pb-[100px] px-[15px] md:px-[40px]">

      <div className="max-w-[1100px] mx-auto">


        {/* ================= HEADER ================= */}

        <div className="flex items-center gap-[15px] mb-[35px]">

          <button
            onClick={() => navigate("/")}
            className="w-[42px] h-[42px] rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all"
          >

            <FaArrowLeft className="text-[14px]" />

          </button>


          <div>

            <p className="text-[#9de7f2] text-[11px] tracking-[4px] uppercase">
              Your Shopping History
            </p>

            <h1 className="text-white text-[30px] md:text-[40px] font-semibold">
              MY ORDERS
            </h1>

          </div>

        </div>


        {/* ================= LOADING ================= */}

        {loading ? (

          <div className="w-full flex flex-col items-center justify-center py-[100px]">

            <div className="w-[45px] h-[45px] border-[3px] border-white/10 border-t-[#9de7f2] rounded-full animate-spin"></div>

            <p className="text-gray-500 text-[14px] mt-[15px]">
              Loading your orders...
            </p>

          </div>

        ) : orders.length === 0 ? (

          /* ================= EMPTY ORDERS ================= */

          <div className="w-full min-h-[400px] rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl flex flex-col items-center justify-center">

            <div className="w-[75px] h-[75px] rounded-full bg-[#9de7f2]/10 border border-[#9de7f2]/20 flex items-center justify-center">

              <FaBoxOpen className="text-[#9de7f2] text-[30px]" />

            </div>


            <h2 className="text-white text-[22px] font-semibold mt-[20px]">
              No Orders Yet
            </h2>


            <p className="text-gray-500 text-[14px] mt-[8px] text-center px-[20px]">
              You haven't placed any orders yet.
            </p>


            <button
              onClick={() => navigate("/collections")}
              className="mt-[25px] px-[30px] h-[45px] rounded-[8px] bg-[#9de7f2] text-[#07191e] font-semibold text-[13px] tracking-[1px] hover:bg-white transition-all"
            >

              START SHOPPING

            </button>

          </div>

        ) : (

          /* ================= ORDERS ================= */

          <div className="flex flex-col gap-[20px]">


            {orders.map((order) => {

              const currentStatusIndex = getStatusIndex(order.status);


              return (

                <div
                  key={order._id}
                  className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl overflow-hidden"
                >


                  {/* ================= ORDER HEADER ================= */}

                  <div className="p-[20px] md:p-[25px] border-b border-white/10">

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-[15px]">


                      {/* ORDER ID */}

                      <div className="flex items-center gap-[14px]">

                        <div className="w-[45px] h-[45px] rounded-full bg-[#9de7f2]/10 border border-[#9de7f2]/20 flex items-center justify-center">

                          <FaShoppingBag className="text-[#9de7f2] text-[17px]" />

                        </div>


                        <div>

                          <p className="text-gray-500 text-[11px] uppercase tracking-[2px]">
                            Order ID
                          </p>

                          <p className="text-white text-[13px] mt-[3px] break-all">
                            #{order._id}
                          </p>

                        </div>

                      </div>


                      {/* ORDER INFORMATION */}

                      <div className="flex flex-wrap items-center gap-[20px]">


                        {/* DATE */}

                        <div>

                          <p className="text-gray-500 text-[11px] uppercase tracking-[1px]">
                            Ordered On
                          </p>

                          <p className="text-gray-300 text-[13px] mt-[3px]">
                            {formatDate(order.date)}
                          </p>

                        </div>


                        {/* PAYMENT */}

                        <div>

                          <p className="text-gray-500 text-[11px] uppercase tracking-[1px]">
                            Payment
                          </p>

                          <p className="text-gray-300 text-[13px] mt-[3px]">
                            {order.paymentMethod}
                          </p>

                        </div>


                        {/* STATUS */}

                        <div>

                          <p className="text-gray-500 text-[11px] uppercase tracking-[1px]">
                            Status
                          </p>

                          <span className="inline-block mt-[3px] px-[10px] py-[4px] rounded-full bg-[#9de7f2]/10 text-[#9de7f2] text-[11px]">
                            {order.status}
                          </span>

                        </div>

                      </div>

                    </div>

                  </div>


                  {/* ================= ORDER ITEMS ================= */}

                  <div className="p-[20px] md:p-[25px]">

                    <div className="flex flex-col gap-[15px]">


                      {order.items?.map((item, index) => (

                        <div
                          key={index}
                          className="flex items-center gap-[15px] border border-white/5 bg-black/10 rounded-[12px] p-[10px]"
                        >


                          {/* PRODUCT IMAGE */}

                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-[70px] h-[85px] md:w-[80px] md:h-[95px] rounded-[8px] object-cover"
                          />


                          {/* PRODUCT INFORMATION */}

                          <div className="flex-1 min-w-0">

                            <p className="text-white text-[14px] md:text-[16px] font-medium truncate">
                              {item.name}
                            </p>


                            <div className="flex flex-wrap gap-[10px] mt-[7px]">

                              <span className="text-gray-500 text-[12px]">
                                Size: {item.size}
                              </span>

                              <span className="text-gray-500 text-[12px]">
                                Qty: {item.quantity}
                              </span>

                            </div>


                            <p className="text-[#9de7f2] text-[14px] font-semibold mt-[8px]">

                              {currency}
                              {item.price * item.quantity}

                            </p>

                          </div>

                        </div>

                      ))}

                    </div>


                    {/* ================= ORDER TOTAL ================= */}

                    <div className="border-t border-white/10 mt-[20px] pt-[20px] flex items-center justify-between">

                      <div>

                        <p className="text-gray-500 text-[12px]">
                          Total Amount
                        </p>

                        <p className="text-gray-300 text-[12px] mt-[3px]">

                          {order.items?.length || 0} item
                          {(order.items?.length || 0) !== 1 ? "s" : ""}

                        </p>

                      </div>


                      <p className="text-[#9de7f2] text-[24px] font-bold">

                        {currency}
                        {order.amount}

                      </p>

                    </div>


                    {/* ================= TRACK ORDER BUTTON ================= */}

                    <div className="mt-[20px] pt-[20px] border-t border-white/10">

                      <button
                        onClick={() =>
                          setTrackingOrder(
                            trackingOrder === order._id
                              ? null
                              : order._id
                          )
                        }
                        className="w-full h-[48px] rounded-[10px] border border-[#9de7f2]/40 bg-[#9de7f2]/10 text-[#9de7f2] font-semibold text-[13px] tracking-[1px] hover:bg-[#9de7f2] hover:text-[#07191e] transition-all flex items-center justify-center gap-[10px]"
                      >

                        <FaTruck />

                        {trackingOrder === order._id
                          ? "HIDE TRACKING"
                          : "TRACK ORDER"}

                      </button>


                      {/* ================= TRACKING TIMELINE ================= */}

                      {trackingOrder === order._id && (

                        <div className="mt-[20px] p-[20px] md:p-[25px] rounded-[15px] bg-black/20 border border-white/10">


                          {/* TRACKING HEADER */}

                          <div className="flex items-center justify-between mb-[25px]">

                            <div>

                              <p className="text-[#9de7f2] text-[10px] tracking-[2px] uppercase">
                                Order Tracking
                              </p>

                              <p className="text-white text-[15px] font-semibold mt-[4px] break-all">
                                #{order._id}
                              </p>

                            </div>


                            <FaTruck className="text-[#9de7f2] text-[22px]" />

                          </div>


                          {/* ================= TIMELINE ================= */}

                          <div className="flex flex-col">


                            {trackingSteps.map((step, index) => {

                              const isCompleted =
                                currentStatusIndex >= index;

                              const isLast =
                                index === trackingSteps.length - 1;


                              return (

                                <div
                                  key={step}
                                  className="flex gap-[15px]"
                                >


                                  {/* ICON + LINE */}

                                  <div className="flex flex-col items-center">


                                    <div
                                      className={`w-[32px] h-[32px] rounded-full flex items-center justify-center flex-shrink-0
                                      ${
                                        isCompleted
                                          ? "bg-[#9de7f2]"
                                          : "border border-gray-600 bg-transparent"
                                      }`}
                                    >

                                      {isCompleted ? (

                                        <FaCheckCircle className="text-[#07191e] text-[15px]" />

                                      ) : (

                                        <div className="w-[8px] h-[8px] rounded-full bg-gray-600"></div>

                                      )}

                                    </div>


                                    {!isLast && (

                                      <div
                                        className={`w-[2px] h-[55px]
                                        ${
                                          currentStatusIndex > index
                                            ? "bg-[#9de7f2]"
                                            : "bg-gray-700"
                                        }`}
                                      ></div>

                                    )}

                                  </div>


                                  {/* STEP INFORMATION */}

                                  <div className="pb-[25px]">

                                    <p
                                      className={`text-[14px] font-medium
                                      ${
                                        isCompleted
                                          ? "text-white"
                                          : "text-gray-600"
                                      }`}
                                    >

                                      {step}

                                    </p>


                                    <p
                                      className={`text-[11px] mt-[4px]
                                      ${
                                        isCompleted
                                          ? "text-gray-500"
                                          : "text-gray-700"
                                      }`}
                                    >

                                      {step === "Order Placed" &&
                                        "Your order has been placed successfully."
                                      }

                                      {step === "Processing" &&
                                        "Your order is being prepared."
                                      }

                                      {step === "Shipped" &&
                                        "Your order has been shipped."
                                      }

                                      {step === "Out for Delivery" &&
                                        "Your order is on the way."
                                      }

                                      {step === "Delivered" &&
                                        "Your order has been delivered."
                                      }

                                    </p>

                                  </div>

                                </div>

                              );

                            })}

                          </div>


                          {/* ================= CURRENT STATUS ================= */}

                          <div className="mt-[5px] p-[12px] rounded-[10px] bg-[#9de7f2]/10 border border-[#9de7f2]/20">

                            <p className="text-gray-500 text-[10px] uppercase tracking-[2px]">
                              Current Status
                            </p>

                            <p className="text-[#9de7f2] text-[14px] font-semibold mt-[3px]">
                              {order.status}
                            </p>

                          </div>

                        </div>

                      )}

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        )}

      </div>

    </div>

  );

}

export default Order;