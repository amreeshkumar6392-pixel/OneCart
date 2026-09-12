import React, { useContext, useEffect, useState } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import {
  FiPackage,
  FiTrash2,
  FiTag,
  FiDollarSign,
  FiBox,
} from "react-icons/fi";

function Lists() {
  const [list, setList] = useState([]);
  const { serverUrl } = useContext(authDataContext);

  const fetchList = async () => {
    try {
      const result = await axios.get(
        serverUrl + "/api/product/list"
      );

      setList(result.data.products);
      console.log(result.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const removeList = async (id) => {
    try {
      const result = await axios.post(
        `${serverUrl}/api/product/remove/${id} `,
        {},
        { withCredentials: true }
      );

      if (result.data) {
        fetchList();
      } else {
        console.log("Failed to remove Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#f5f7f9] text-gray-800 overflow-x-hidden">

      <Nav />
      <Sidebar />

      {/* ================= MAIN CONTENT ================= */}
      <div className="w-[82%] min-h-screen absolute right-0 top-0 pt-[70px] overflow-x-hidden">

        <div className="w-full max-w-[1400px] mx-auto box-border px-[20px] md:px-[35px] lg:px-[50px] py-[30px] md:py-[40px]">


          {/* ================= HEADER ================= */}
          <div className="flex items-center justify-between mb-[30px]">

            <div>

              <p className="text-[#1a6f85] text-[11px] tracking-[3px] uppercase font-bold">
                Product Management
              </p>

              <h1 className="text-[#172554] text-[30px] md:text-[38px] font-semibold tracking-tight mt-[5px]">
                All Products
              </h1>

              <p className="text-gray-500 text-[14px] mt-[5px]">
                Manage all products available in your store
              </p>

            </div>


            {/* Product Count */}
            <div className="hidden sm:flex items-center gap-[10px] bg-white border border-gray-200 rounded-[12px] px-[15px] py-[11px] shadow-sm">

              <div className="w-[35px] h-[35px] rounded-[9px] bg-[#1a6f85]/10 flex items-center justify-center">

                <FiPackage className="text-[#1a6f85] text-[17px]" />

              </div>

              <div>

                <p className="text-[10px] text-gray-400">
                  Total Products
                </p>

                <p className="text-[17px] font-bold text-[#172554]">
                  {list?.length || 0}
                </p>

              </div>

            </div>

          </div>


          {/* ================= PRODUCTS ================= */}

          {list?.length > 0 ? (

            <div className="flex flex-col gap-[14px]">

              {list.map((item, index) => (

                <div
                  key={index}
                  className="
                    group
                    w-full
                    bg-white
                    border border-gray-200
                    rounded-[16px]
                    p-[12px]
                    md:p-[15px]
                    flex
                    items-center
                    gap-[12px]
                    md:gap-[20px]
                    shadow-[0_5px_20px_rgba(0,0,0,0.03)]
                    hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)]
                    hover:border-[#1a6f85]/30
                    transition-all
                    duration-300
                  "
                >

                  {/* ================= IMAGE ================= */}
                  <div className="w-[75px] h-[85px] md:w-[105px] md:h-[105px] flex-shrink-0 rounded-[12px] overflow-hidden bg-gray-100">

                    <img
                      src={item.image1}
                      alt={item.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-105
                        transition-transform
                        duration-500
                      "
                    />

                  </div>


                  {/* ================= PRODUCT INFO ================= */}
                  <div className="flex-1 min-w-0">

                    {/* Product Name */}
                    <h2 className="
                      text-[#172554]
                      text-[14px]
                      md:text-[17px]
                      font-semibold
                      truncate
                    ">
                      {item.name}
                    </h2>


                    {/* Category */}
                    <div className="flex items-center gap-[6px] mt-[7px]">

                      <FiTag className="text-[#1a6f85] text-[12px] flex-shrink-0" />

                      <span className="text-[11px] md:text-[12px] text-gray-500">
                        {item.category}
                      </span>

                    </div>


                    {/* Price */}
                    <div className="flex items-center gap-[6px] mt-[5px]">

                      <FiDollarSign className="text-green-500 text-[12px] flex-shrink-0" />

                      <span className="text-[13px] md:text-[15px] text-gray-700 font-semibold">
                        ₹{item.price}
                      </span>

                    </div>

                  </div>


                  {/* ================= DESKTOP DETAILS ================= */}
                  <div className="hidden md:flex items-center gap-[8px] mr-[10px]">

                    {/* Product Badge */}
                    <div className="px-[10px] py-[6px] rounded-[8px] bg-[#1a6f85]/5 border border-[#1a6f85]/10">

                      <div className="flex items-center gap-[5px]">

                        <FiBox className="text-[#1a6f85] text-[12px]" />

                        <span className="text-[10px] text-[#1a6f85] font-semibold">
                          Product
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* ================= DELETE BUTTON ================= */}
                  <button
                    type="button"
                    onClick={() => removeList(item._id)}
                    className="
                      w-[38px]
                      h-[38px]
                      md:w-[42px]
                      md:h-[42px]
                      flex-shrink-0
                      rounded-[10px]
                      border
                      border-gray-200
                      bg-gray-50
                      flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:text-red-500
                      hover:bg-red-50
                      hover:border-red-200
                      hover:scale-105
                      active:scale-95
                      transition-all
                      duration-200
                      cursor-pointer
                    "
                    title="Remove Product"
                  >

                    <FiTrash2 className="text-[16px] md:text-[17px]" />

                  </button>

                </div>

              ))}

            </div>

          ) : (

            /* ================= EMPTY STATE ================= */
            <div className="
              w-full
              min-h-[350px]
              bg-white
              border border-gray-200
              rounded-[18px]
              flex
              flex-col
              items-center
              justify-center
              shadow-[0_5px_20px_rgba(0,0,0,0.03)]
            ">

              <div className="
                w-[65px]
                h-[65px]
                rounded-[16px]
                bg-[#1a6f85]/10
                flex
                items-center
                justify-center
                mb-[15px]
              ">

                <FiPackage className="text-[#1a6f85] text-[28px]" />

              </div>

              <h2 className="text-[#172554] text-[18px] font-semibold">
                No Products Available
              </h2>

              <p className="text-gray-400 text-[12px] mt-[5px]">
                Products you add will appear here.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Lists;