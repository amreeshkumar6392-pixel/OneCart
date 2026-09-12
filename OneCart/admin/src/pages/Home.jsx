import React from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";

import {
  FiShoppingBag,
  FiPackage,
  FiUsers,
  FiDollarSign,
  FiArrowUpRight,
  FiActivity,
  FiClock,
  FiTruck,
  FiCheckCircle,
  FiAlertTriangle,
  FiPlus,
  FiEye,
} from "react-icons/fi";

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#f5f7f9] text-gray-800 overflow-x-hidden">

      <Nav />
      <Sidebar />

      {/* ================= MAIN CONTENT ================= */}
      <div className="w-[82%] min-h-screen absolute right-0 top-0 pt-[70px] overflow-x-hidden">

        <div className="w-full max-w-[1400px] mx-auto box-border px-[20px] md:px-[35px] lg:px-[50px] py-[30px] md:py-[40px]">


          {/* ================= HEADER ================= */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[20px] mb-[30px]">

            <div>

              <p className="text-[#1a6f85] text-[12px] tracking-[3px] uppercase font-bold">
                Admin Dashboard
              </p>

              <h1 className="text-[#172554] text-[30px] md:text-[38px] font-semibold tracking-tight mt-[6px]">
                Welcome Back
              </h1>

              <p className="text-gray-500 text-[14px] mt-[7px]">
                Here's an overview of your OneCart store.
              </p>

            </div>


            {/* Store Status */}
            <div className="flex items-center gap-[10px] bg-white border border-gray-200 rounded-[12px] px-[16px] py-[12px] shadow-sm">

              <div className="w-[9px] h-[9px] rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>

              <p className="text-[13px] text-gray-600 font-medium">
                Store is Active
              </p>

            </div>

          </div>


          {/* ================================================= */}
          {/* ================= MAIN STAT CARDS ================= */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[15px] md:gap-[20px] mb-[25px]">


            {/* TOTAL ORDERS */}
            <div className="group bg-white border border-gray-200 rounded-[16px] p-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)] hover:-translate-y-[2px] transition-all duration-300">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-[13px] text-gray-400 font-medium">
                    Total Orders
                  </p>

                  <h2 className="text-[#172554] text-[29px] font-bold mt-[7px]">
                    186
                  </h2>

                </div>


                <div className="w-[46px] h-[46px] rounded-[11px] bg-[#1a6f85]/10 flex items-center justify-center group-hover:bg-[#1a6f85] transition-all duration-300">

                  <FiShoppingBag className="text-[#1a6f85] group-hover:text-white text-[21px] transition-all" />

                </div>

              </div>


              <div className="flex items-center gap-[6px] mt-[15px]">

                <FiArrowUpRight className="text-green-500 text-[15px]" />

                <span className="text-green-500 text-[12px] font-semibold">
                  8.2%
                </span>

                <span className="text-gray-400 text-[11px]">
                  from last month
                </span>

              </div>

            </div>


            {/* TOTAL PRODUCTS */}
            <div className="group bg-white border border-gray-200 rounded-[16px] p-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)] hover:-translate-y-[2px] transition-all duration-300">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-[13px] text-gray-400 font-medium">
                    Total Products
                  </p>

                  <h2 className="text-[#172554] text-[29px] font-bold mt-[7px]">
                    48
                  </h2>

                </div>


                <div className="w-[46px] h-[46px] rounded-[11px] bg-[#1a6f85]/10 flex items-center justify-center group-hover:bg-[#1a6f85] transition-all duration-300">

                  <FiPackage className="text-[#1a6f85] group-hover:text-white text-[21px] transition-all" />

                </div>

              </div>


              <div className="flex items-center gap-[6px] mt-[15px]">

                <FiPlus className="text-green-500 text-[13px]" />

                <span className="text-green-500 text-[12px] font-semibold">
                  4 new
                </span>

                <span className="text-gray-400 text-[11px]">
                  this month
                </span>

              </div>

            </div>


            {/* CUSTOMERS */}
            <div className="group bg-white border border-gray-200 rounded-[16px] p-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)] hover:-translate-y-[2px] transition-all duration-300">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-[13px] text-gray-400 font-medium">
                    Total Customers
                  </p>

                  <h2 className="text-[#172554] text-[29px] font-bold mt-[7px]">
                    1,240
                  </h2>

                </div>


                <div className="w-[46px] h-[46px] rounded-[11px] bg-[#1a6f85]/10 flex items-center justify-center group-hover:bg-[#1a6f85] transition-all duration-300">

                  <FiUsers className="text-[#1a6f85] group-hover:text-white text-[21px] transition-all" />

                </div>

              </div>


              <div className="flex items-center gap-[6px] mt-[15px]">

                <FiArrowUpRight className="text-green-500 text-[15px]" />

                <span className="text-green-500 text-[12px] font-semibold">
                  6.4%
                </span>

                <span className="text-gray-400 text-[11px]">
                  from last month
                </span>

              </div>

            </div>


            {/* TOTAL REVENUE */}
            <div className="group bg-white border border-gray-200 rounded-[16px] p-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)] hover:-translate-y-[2px] transition-all duration-300">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-[13px] text-gray-400 font-medium">
                    Total Revenue
                  </p>

                  <h2 className="text-[#172554] text-[29px] font-bold mt-[7px]">
                    ₹24,580
                  </h2>

                </div>


                <div className="w-[46px] h-[46px] rounded-[11px] bg-[#1a6f85]/10 flex items-center justify-center group-hover:bg-[#1a6f85] transition-all duration-300">

                  <FiDollarSign className="text-[#1a6f85] group-hover:text-white text-[21px] transition-all" />

                </div>

              </div>


              <div className="flex items-center gap-[6px] mt-[15px]">

                <FiArrowUpRight className="text-green-500 text-[15px]" />

                <span className="text-green-500 text-[12px] font-semibold">
                  12.5%
                </span>

                <span className="text-gray-400 text-[11px]">
                  from last month
                </span>

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* ================= ORDER STATUS ================= */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px] md:gap-[20px] mb-[25px]">


            {/* PENDING */}
            <div className="bg-white border border-gray-200 rounded-[15px] p-[18px] flex items-center justify-between">

              <div>

                <p className="text-[12px] text-gray-400">
                  Pending Orders
                </p>

                <h3 className="text-[25px] font-bold text-orange-500 mt-[5px]">
                  12
                </h3>

              </div>

              <div className="w-[42px] h-[42px] rounded-[10px] bg-orange-50 flex items-center justify-center">

                <FiClock className="text-orange-500 text-[19px]" />

              </div>

            </div>


            {/* PROCESSING */}
            <div className="bg-white border border-gray-200 rounded-[15px] p-[18px] flex items-center justify-between">

              <div>

                <p className="text-[12px] text-gray-400">
                  Processing
                </p>

                <h3 className="text-[25px] font-bold text-yellow-500 mt-[5px]">
                  8
                </h3>

              </div>

              <div className="w-[42px] h-[42px] rounded-[10px] bg-yellow-50 flex items-center justify-center">

                <FiActivity className="text-yellow-500 text-[19px]" />

              </div>

            </div>


            {/* SHIPPED */}
            <div className="bg-white border border-gray-200 rounded-[15px] p-[18px] flex items-center justify-between">

              <div>

                <p className="text-[12px] text-gray-400">
                  Shipped
                </p>

                <h3 className="text-[25px] font-bold text-blue-500 mt-[5px]">
                  6
                </h3>

              </div>

              <div className="w-[42px] h-[42px] rounded-[10px] bg-blue-50 flex items-center justify-center">

                <FiTruck className="text-blue-500 text-[19px]" />

              </div>

            </div>


            {/* DELIVERED */}
            <div className="bg-white border border-gray-200 rounded-[15px] p-[18px] flex items-center justify-between">

              <div>

                <p className="text-[12px] text-gray-400">
                  Delivered
                </p>

                <h3 className="text-[25px] font-bold text-green-500 mt-[5px]">
                  160
                </h3>

              </div>

              <div className="w-[42px] h-[42px] rounded-[10px] bg-green-50 flex items-center justify-center">

                <FiCheckCircle className="text-green-500 text-[19px]" />

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* ================= MIDDLE SECTION ================= */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-[20px] mb-[25px]">


            {/* SALES OVERVIEW */}
            <div className="xl:col-span-2 bg-white border border-gray-200 rounded-[16px] p-[22px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">

              <div className="flex items-center justify-between mb-[25px]">

                <div>

                  <h2 className="text-[#172554] text-[18px] font-semibold">
                    Sales Overview
                  </h2>

                  <p className="text-gray-400 text-[12px] mt-[4px]">
                    Your sales performance this week
                  </p>

                </div>


                <div className="flex items-center gap-[7px]">

                  <FiActivity className="text-[#1a6f85] text-[16px]" />

                  <span className="text-[#1a6f85] text-[12px] font-semibold">
                    +18.4%
                  </span>

                </div>

              </div>


              {/* Chart */}
              <div className="w-full h-[220px] relative">

                <div className="absolute left-0 right-0 top-[20px] border-t border-gray-100"></div>

                <div className="absolute left-0 right-0 top-[70px] border-t border-gray-100"></div>

                <div className="absolute left-0 right-0 top-[120px] border-t border-gray-100"></div>

                <div className="absolute left-0 right-0 top-[170px] border-t border-gray-100"></div>

                <div className="absolute left-0 right-0 bottom-0 border-t border-gray-100"></div>


                <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-around px-[10px]">

                  <div className="w-[7%] h-[32%] bg-[#d8edf1] rounded-t-[6px]"></div>

                  <div className="w-[7%] h-[48%] bg-[#b8dfe6] rounded-t-[6px]"></div>

                  <div className="w-[7%] h-[40%] bg-[#a0d4dd] rounded-t-[6px]"></div>

                  <div className="w-[7%] h-[67%] bg-[#72bdca] rounded-t-[6px]"></div>

                  <div className="w-[7%] h-[55%] bg-[#56adbd] rounded-t-[6px]"></div>

                  <div className="w-[7%] h-[82%] bg-[#348fa3] rounded-t-[6px]"></div>

                  <div className="w-[7%] h-[94%] bg-[#1a6f85] rounded-t-[6px] shadow-lg shadow-[#1a6f85]/20"></div>

                </div>

              </div>


              <div className="flex justify-around mt-[10px] text-[11px] text-gray-400">

                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>

              </div>

            </div>


            {/* QUICK ACTIONS */}
            <div className="bg-[#172554] rounded-[16px] p-[22px] text-white shadow-[0_10px_30px_rgba(23,37,84,0.15)]">

              <p className="text-[#89daea] text-[11px] tracking-[2px] uppercase font-semibold">
                Quick Actions
              </p>

              <h2 className="text-[21px] font-semibold mt-[6px]">
                Manage Store
              </h2>

              <p className="text-white/50 text-[13px] mt-[5px]">
                Quickly access your important store tools.
              </p>


              <div className="flex flex-col gap-[10px] mt-[25px]">


                {/* Add Product */}
                <div className="flex items-center justify-between p-[13px] rounded-[10px] bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition-all">

                  <div className="flex items-center gap-[10px]">

                    <div className="w-[34px] h-[34px] rounded-[8px] bg-[#89daea]/10 flex items-center justify-center">

                      <FiPlus className="text-[#89daea] text-[16px]" />

                    </div>

                    <span className="text-[13px]">
                      Add New Product
                    </span>

                  </div>

                  <FiArrowUpRight className="text-white/50" />

                </div>


                {/* View Orders */}
                <div className="flex items-center justify-between p-[13px] rounded-[10px] bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition-all">

                  <div className="flex items-center gap-[10px]">

                    <div className="w-[34px] h-[34px] rounded-[8px] bg-[#89daea]/10 flex items-center justify-center">

                      <FiShoppingBag className="text-[#89daea] text-[16px]" />

                    </div>

                    <span className="text-[13px]">
                      View Orders
                    </span>

                  </div>

                  <FiArrowUpRight className="text-white/50" />

                </div>


                {/* Products */}
                <div className="flex items-center justify-between p-[13px] rounded-[10px] bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition-all">

                  <div className="flex items-center gap-[10px]">

                    <div className="w-[34px] h-[34px] rounded-[8px] bg-[#89daea]/10 flex items-center justify-center">

                      <FiPackage className="text-[#89daea] text-[16px]" />

                    </div>

                    <span className="text-[13px]">
                      Manage Products
                    </span>

                  </div>

                  <FiArrowUpRight className="text-white/50" />

                </div>

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* ================= BOTTOM SECTION ================= */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">


            {/* RECENT ORDERS */}
            <div className="bg-white border border-gray-200 rounded-[16px] p-[22px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">

              <div className="flex items-center justify-between mb-[20px]">

                <div>

                  <h2 className="text-[#172554] text-[18px] font-semibold">
                    Recent Orders
                  </h2>

                  <p className="text-gray-400 text-[12px] mt-[4px]">
                    Latest customer orders
                  </p>

                </div>


                <button className="flex items-center gap-[5px] text-[#1a6f85] text-[12px] font-semibold hover:underline cursor-pointer">

                  View All

                  <FiEye className="text-[13px]" />

                </button>

              </div>


              <div className="flex flex-col">


                {[
                  ["#ORD-1024", "Rahul Sharma", "₹1,299", "Delivered"],
                  ["#ORD-1023", "Aman Kumar", "₹899", "Processing"],
                  ["#ORD-1022", "Priya Singh", "₹2,499", "Shipped"],
                  ["#ORD-1021", "Neha Verma", "₹1,099", "Delivered"],
                  ["#ORD-1020", "Riya Gupta", "₹1,799", "Pending"],
                ].map((order, index) => (

                  <div
                    key={index}
                    className="flex items-center justify-between py-[14px] border-b border-gray-100 last:border-0"
                  >

                    <div className="flex items-center gap-[11px]">

                      <div className="w-[37px] h-[37px] rounded-[9px] bg-[#1a6f85]/10 flex items-center justify-center">

                        <FiShoppingBag className="text-[#1a6f85] text-[16px]" />

                      </div>


                      <div>

                        <p className="text-[13px] font-semibold text-gray-700">
                          {order[0]}
                        </p>

                        <p className="text-[11px] text-gray-400 mt-[2px]">
                          {order[1]}
                        </p>

                      </div>

                    </div>


                    <div className="text-right">

                      <p className="text-[13px] font-semibold text-gray-700">
                        {order[2]}
                      </p>


                      <span
                        className={`
                          text-[10px] font-semibold
                          ${
                            order[3] === "Delivered"
                              ? "text-green-500"
                              : order[3] === "Shipped"
                              ? "text-blue-500"
                              : order[3] === "Processing"
                              ? "text-orange-500"
                              : "text-red-500"
                          }
                        `}
                      >
                        {order[3]}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* LOW STOCK PRODUCTS */}
            <div className="bg-white border border-gray-200 rounded-[16px] p-[22px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">

              <div className="flex items-center justify-between mb-[20px]">

                <div>

                  <h2 className="text-[#172554] text-[18px] font-semibold">
                    Inventory Alert
                  </h2>

                  <p className="text-gray-400 text-[12px] mt-[4px]">
                    Products that need your attention
                  </p>

                </div>


                <div className="w-[38px] h-[38px] rounded-[10px] bg-orange-50 flex items-center justify-center">

                  <FiAlertTriangle className="text-orange-500 text-[18px]" />

                </div>

              </div>


              <div className="flex flex-col gap-[13px]">


                {/* Product 1 */}
                <div className="flex items-center justify-between p-[12px] rounded-[10px] bg-gray-50">

                  <div className="flex items-center gap-[10px]">

                    <div className="w-[38px] h-[38px] rounded-[8px] bg-[#1a6f85]/10 flex items-center justify-center">

                      <FiPackage className="text-[#1a6f85] text-[16px]" />

                    </div>

                    <div>

                      <p className="text-[13px] font-semibold text-gray-700">
                        Men's Shirt
                      </p>

                      <p className="text-[10px] text-gray-400 mt-[2px]">
                        Clothing
                      </p>

                    </div>

                  </div>


                  <span className="text-[11px] font-semibold text-red-500">
                    3 left
                  </span>

                </div>


                {/* Product 2 */}
                <div className="flex items-center justify-between p-[12px] rounded-[10px] bg-gray-50">

                  <div className="flex items-center gap-[10px]">

                    <div className="w-[38px] h-[38px] rounded-[8px] bg-[#1a6f85]/10 flex items-center justify-center">

                      <FiPackage className="text-[#1a6f85] text-[16px]" />

                    </div>

                    <div>

                      <p className="text-[13px] font-semibold text-gray-700">
                        Men's T-Shirt
                      </p>

                      <p className="text-[10px] text-gray-400 mt-[2px]">
                        Clothing
                      </p>

                    </div>

                  </div>


                  <span className="text-[11px] font-semibold text-red-500">
                    2 left
                  </span>

                </div>


                {/* Product 3 */}
                <div className="flex items-center justify-between p-[12px] rounded-[10px] bg-gray-50">

                  <div className="flex items-center gap-[10px]">

                    <div className="w-[38px] h-[38px] rounded-[8px] bg-[#1a6f85]/10 flex items-center justify-center">

                      <FiPackage className="text-[#1a6f85] text-[16px]" />

                    </div>

                    <div>

                      <p className="text-[13px] font-semibold text-gray-700">
                        Denim Jeans
                      </p>

                      <p className="text-[10px] text-gray-400 mt-[2px]">
                        Bottom Wear
                      </p>

                    </div>

                  </div>


                  <span className="text-[11px] font-semibold text-orange-500">
                    4 left
                  </span>

                </div>


                {/* Product 4 */}
                <div className="flex items-center justify-between p-[12px] rounded-[10px] bg-gray-50">

                  <div className="flex items-center gap-[10px]">

                    <div className="w-[38px] h-[38px] rounded-[8px] bg-[#1a6f85]/10 flex items-center justify-center">

                      <FiPackage className="text-[#1a6f85] text-[16px]" />

                    </div>

                    <div>

                      <p className="text-[13px] font-semibold text-gray-700">
                        Casual Shirt
                      </p>

                      <p className="text-[10px] text-gray-400 mt-[2px]">
                        Clothing
                      </p>

                    </div>

                  </div>


                  <span className="text-[11px] font-semibold text-orange-500">
                    5 left
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* ================= FOOTER SPACE ================= */}
          <div className="h-[30px]"></div>

        </div>

      </div>

    </div>
  );
}

export default Home;