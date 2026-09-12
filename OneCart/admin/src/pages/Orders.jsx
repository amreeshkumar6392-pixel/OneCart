import React, { useContext, useEffect, useState } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import {
  FiPackage,
  FiUser,
  FiMapPin,
  FiPhone,
  FiMail,
  FiCalendar,
  FiCreditCard,
  FiTruck,
  FiCheckCircle,
  FiClock,
  FiXCircle,
} from "react-icons/fi";

function Order() {
  const { serverUrl } = useContext(authDataContext);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // ================= GET ALL ORDERS =================

  const getAllOrders = async () => {
    try {
      const response = await axios.get(
        serverUrl + "/api/order/allorders",
        {
          withCredentials: true,
        }
      );

      setOrders(response.data.orders || []);
      setLoading(false);
    } catch (error) {
      console.log("Get All Orders Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  // ================= UPDATE ORDER STATUS =================

  const updateStatus = async (orderId, status) => {
    try {
      setUpdating(true);

      const response = await axios.post(
        serverUrl + "/api/order/status",
        {
          orderId,
          status,
        },
        {
          withCredentials: true,
        }
      );

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId
            ? { ...order, status: status }
            : order
        )
      );

      console.log(response.data);

      setUpdating(false);
    } catch (error) {
      console.log("Update Status Error:", error);
      setUpdating(false);
    }
  };

  // ================= DATE FORMAT =================

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // ================= STATUS ICON =================

  const getStatusIcon = (status) => {
    if (status === "Delivered") {
      return <FiCheckCircle />;
    }

    if (status === "Cancelled") {
      return <FiXCircle />;
    }

    if (status === "Shipped" || status === "Out for Delivery") {
      return <FiTruck />;
    }

    return <FiClock />;
  };

  // ================= STATUS COLOR =================

  const getStatusColor = (status) => {
    if (status === "Delivered") {
      return "text-green-600 bg-green-50 border-green-200";
    }

    if (status === "Cancelled") {
      return "text-red-600 bg-red-50 border-red-200";
    }

    if (status === "Shipped") {
      return "text-blue-600 bg-blue-50 border-blue-200";
    }

    if (status === "Out for Delivery") {
      return "text-purple-600 bg-purple-50 border-purple-200";
    }

    if (status === "Processing") {
      return "text-orange-600 bg-orange-50 border-orange-200";
    }

    return "text-[#1a6f85] bg-[#89daea]/10 border-[#89daea]/30";
  };

  return (
    <div className="w-full min-h-screen bg-[#f5f7f9] text-gray-800 overflow-x-hidden">

      {/* ================= NAVBAR ================= */}

      <Nav />

      {/* ================= SIDEBAR ================= */}

      <Sidebar />

      {/* ================= MAIN CONTENT ================= */}

      <div className="w-[82%] min-h-screen absolute right-0 top-0 pt-[70px] overflow-x-hidden">

        <div className="w-full max-w-[1400px] mx-auto box-border px-[20px] md:px-[35px] lg:px-[50px] py-[30px] md:py-[40px]">

          {/* ================= HEADER ================= */}

          <div className="mb-[30px]">

            <p className="text-[#1a6f85] text-[11px] tracking-[3px] uppercase font-semibold">
              Admin Panel
            </p>

            <h1 className="text-[#172554] text-[30px] md:text-[36px] font-semibold mt-[5px]">
              Orders
            </h1>

            <p className="text-gray-500 text-[14px] mt-[5px]">
              Manage and track all customer orders
            </p>

          </div>

          {/* ================= TOTAL ORDERS ================= */}

          <div className="mb-[25px]">

            <div className="bg-white rounded-[14px] border border-gray-200 p-[18px] inline-flex items-center gap-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">

              <div className="w-[48px] h-[48px] rounded-[12px] bg-[#89daea]/10 flex items-center justify-center">
                <FiPackage className="text-[#1a6f85] text-[22px]" />
              </div>

              <div>
                <p className="text-gray-500 text-[12px]">
                  Total Orders
                </p>

                <p className="text-[#172554] text-[24px] font-bold">
                  {orders.length}
                </p>
              </div>

            </div>

          </div>

          {/* ================= LOADING ================= */}

          {loading ? (

            <div className="w-full min-h-[350px] bg-white rounded-[18px] border border-gray-200 flex items-center justify-center">

              <div className="flex flex-col items-center gap-[12px]">

                <div className="w-[42px] h-[42px] border-[3px] border-gray-200 border-t-[#1a6f85] rounded-full animate-spin"></div>

                <p className="text-gray-500 text-[14px]">
                  Loading orders...
                </p>

              </div>

            </div>

          ) : orders.length === 0 ? (

            /* ================= NO ORDERS ================= */

            <div className="w-full min-h-[350px] bg-white rounded-[18px] border border-gray-200 flex flex-col items-center justify-center">

              <div className="w-[70px] h-[70px] rounded-[18px] bg-[#89daea]/10 flex items-center justify-center mb-[15px]">

                <FiPackage className="text-[#1a6f85] text-[30px]" />

              </div>

              <h2 className="text-[#172554] text-[19px] font-semibold">
                No Orders Found
              </h2>

              <p className="text-gray-400 text-[13px] mt-[5px]">
                Customer orders will appear here.
              </p>

            </div>

          ) : (

            /* ================= ORDERS ================= */

            <div className="flex flex-col gap-[20px]">

              {orders.map((order) => (

                <div
                  key={order._id}
                  className="w-full bg-white rounded-[16px] border border-gray-200 overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.03)]"
                >

                  {/* ================= ORDER HEADER ================= */}

                  <div className="w-full px-[15px] md:px-[22px] py-[18px] border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-[15px]">

                    <div>

                      <div className="flex items-center gap-[8px]">

                        <FiPackage className="text-[#1a6f85]" />

                        <p className="text-[#172554] text-[15px] font-semibold">
                          Order #{order._id.slice(-8).toUpperCase()}
                        </p>

                      </div>

                      <div className="flex items-center gap-[6px] mt-[7px]">

                        <FiCalendar className="text-gray-400 text-[12px]" />

                        <p className="text-gray-400 text-[11px]">
                          {formatDate(order.date)}
                        </p>

                      </div>

                    </div>

                    <div className="flex flex-wrap items-center gap-[10px]">

                      {/* PAYMENT */}

                      <div className="px-[10px] py-[7px] rounded-[8px] bg-gray-50 border border-gray-200 flex items-center gap-[6px]">

                        <FiCreditCard className="text-gray-500 text-[13px]" />

                        <span className="text-gray-600 text-[11px] font-medium">
                          {order.paymentMethod}
                        </span>

                      </div>

                      {/* PAYMENT STATUS */}

                      <div
                        className={`px-[10px] py-[7px] rounded-[8px] border text-[11px] font-medium ${
                          order.payment
                            ? "text-green-600 bg-green-50 border-green-200"
                            : "text-orange-600 bg-orange-50 border-orange-200"
                        }`}
                      >
                        {order.payment ? "Paid" : "Payment Pending"}
                      </div>

                      {/* TOTAL */}

                      <div className="px-[12px] py-[7px] rounded-[8px] bg-[#1a6f85]/5 border border-[#1a6f85]/10">

                        <p className="text-[#1a6f85] text-[14px] font-bold">
                          ₹{order.amount}
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* ================= CUSTOMER ================= */}

                  <div className="px-[15px] md:px-[22px] py-[18px] border-b border-gray-100">

                    <div className="flex items-center gap-[7px] mb-[13px]">

                      <div className="w-[30px] h-[30px] rounded-[8px] bg-[#89daea]/10 flex items-center justify-center">

                        <FiUser className="text-[#1a6f85] text-[15px]" />

                      </div>

                      <h3 className="text-[#172554] text-[14px] font-semibold">
                        Customer Details
                      </h3>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[12px]">

                      <div className="flex items-center gap-[8px]">

                        <FiUser className="text-gray-400 text-[14px]" />

                        <div>
                          <p className="text-gray-400 text-[10px]">
                            Name
                          </p>

                          <p className="text-gray-700 text-[12px] font-medium">
                            {order.address?.firstName}{" "}
                            {order.address?.lastName}
                          </p>
                        </div>

                      </div>

                      <div className="flex items-center gap-[8px]">

                        <FiMail className="text-gray-400 text-[14px]" />

                        <div>
                          <p className="text-gray-400 text-[10px]">
                            Email
                          </p>

                          <p className="text-gray-700 text-[12px] font-medium break-all">
                            {order.address?.email}
                          </p>
                        </div>

                      </div>

                      <div className="flex items-center gap-[8px]">

                        <FiPhone className="text-gray-400 text-[14px]" />

                        <div>
                          <p className="text-gray-400 text-[10px]">
                            Phone
                          </p>

                          <p className="text-gray-700 text-[12px] font-medium">
                            {order.address?.phone}
                          </p>
                        </div>

                      </div>

                      <div className="flex items-center gap-[8px]">

                        <FiMapPin className="text-gray-400 text-[14px]" />

                        <div>
                          <p className="text-gray-400 text-[10px]">
                            Address
                          </p>

                          <p className="text-gray-700 text-[12px] font-medium">
                            {order.address?.street},{" "}
                            {order.address?.city},{" "}
                            {order.address?.state} -{" "}
                            {order.address?.zipcode}
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>

                  {/* ================= PRODUCTS ================= */}

                  <div className="px-[15px] md:px-[22px] py-[18px] border-b border-gray-100">

                    <div className="flex items-center gap-[7px] mb-[15px]">

                      <div className="w-[30px] h-[30px] rounded-[8px] bg-[#89daea]/10 flex items-center justify-center">

                        <FiPackage className="text-[#1a6f85] text-[15px]" />

                      </div>

                      <h3 className="text-[#172554] text-[14px] font-semibold">
                        Ordered Products
                      </h3>

                    </div>

                    <div className="flex flex-col gap-[10px]">

                      {order.items?.map((item, index) => (

                        <div
                          key={index}
                          className="w-full bg-gray-50 rounded-[10px] border border-gray-100 p-[10px] flex items-center gap-[12px]"
                        >

                          {/* IMAGE */}

                          <div className="w-[60px] h-[65px] md:w-[70px] md:h-[75px] rounded-[8px] overflow-hidden bg-white flex-shrink-0">

                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />

                          </div>

                          {/* PRODUCT INFO */}

                          <div className="flex-1 min-w-0">

                            <h4 className="text-[#172554] text-[12px] md:text-[14px] font-semibold truncate">
                              {item.name}
                            </h4>

                            <div className="flex flex-wrap items-center gap-[8px] mt-[5px]">

                              <span className="text-gray-500 text-[11px]">
                                Size:{" "}
                                <span className="font-medium text-gray-700">
                                  {item.size}
                                </span>
                              </span>

                              <span className="text-gray-300">
                                |
                              </span>

                              <span className="text-gray-500 text-[11px]">
                                Qty:{" "}
                                <span className="font-medium text-gray-700">
                                  {item.quantity}
                                </span>
                              </span>

                            </div>

                          </div>

                          {/* PRICE */}

                          <div className="text-right flex-shrink-0">

                            <p className="text-[#1a6f85] text-[13px] md:text-[15px] font-bold">
                              ₹{item.price * item.quantity}
                            </p>

                            <p className="text-gray-400 text-[10px] mt-[2px]">
                              ₹{item.price} each
                            </p>

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* ================= FOOTER / STATUS ================= */}

                  <div className="px-[15px] md:px-[22px] py-[16px] flex flex-col md:flex-row md:items-center md:justify-between gap-[15px]">

                    {/* CURRENT STATUS */}

                    <div className="flex items-center gap-[8px]">

                      <span className="text-gray-500 text-[12px]">
                        Current Status:
                      </span>

                      <div
                        className={`px-[10px] py-[6px] rounded-[8px] border flex items-center gap-[6px] text-[11px] font-medium ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {getStatusIcon(order.status)}
                        {order.status}
                      </div>

                    </div>

                    {/* CHANGE STATUS */}

                    <div className="flex items-center gap-[8px]">

                      <span className="text-gray-500 text-[12px]">
                        Update Status:
                      </span>

                      <select
                        value={order.status}
                        disabled={updating}
                        onChange={(e) =>
                          updateStatus(
                            order._id,
                            e.target.value
                          )
                        }
                        className="h-[38px] px-[12px] rounded-[8px] border border-gray-200 bg-white text-gray-700 text-[12px] outline-none focus:border-[#1a6f85] cursor-pointer"
                      >

                        <option value="Order Placed">
                          Order Placed
                        </option>

                        <option value="Processing">
                          Processing
                        </option>

                        <option value="Shipped">
                          Shipped
                        </option>

                        <option value="Out for Delivery">
                          Out for Delivery
                        </option>

                        <option value="Delivered">
                          Delivered
                        </option>

                        <option value="Cancelled">
                          Cancelled
                        </option>

                      </select>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Order;