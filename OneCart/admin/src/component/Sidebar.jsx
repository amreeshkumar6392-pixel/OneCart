import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  return (

    <div className="w-[18%] min-h-[100vh] bg-white border-r border-gray-200 fixed left-0 top-0 z-40 pt-[70px] shadow-sm">


      {/* ================= SIDEBAR CONTENT ================= */}

      <div className="flex flex-col gap-[12px] pt-[35px] px-[12%] md:px-[18%]">


        {/* ================= ADD ITEMS ================= */}

        <div
          className="group flex items-center justify-center md:justify-start gap-[12px] px-[12px] py-[13px] rounded-[10px] cursor-pointer border border-transparent hover:border-[#89daea]/40 hover:bg-[#89daea]/10 transition-all duration-300"
          onClick={() => navigate("/add")}
        >

          <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center bg-[#89daea]/10 group-hover:bg-[#89daea]/20 transition-all">

            <IoIosAddCircleOutline
              className="w-[21px] h-[21px] text-[#1a6f85] group-hover:scale-110 transition-all"
            />

          </div>


          <p className="hidden md:block text-[14px] text-gray-600 font-medium group-hover:text-[#1a6f85] transition-all">
            Add Items
          </p>

        </div>



        {/* ================= LIST ITEMS ================= */}

        <div
          className="group flex items-center justify-center md:justify-start gap-[12px] px-[12px] py-[13px] rounded-[10px] cursor-pointer border border-transparent hover:border-[#89daea]/40 hover:bg-[#89daea]/10 transition-all duration-300"
          onClick={() => navigate("/lists")}
        >

          <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center bg-[#89daea]/10 group-hover:bg-[#89daea]/20 transition-all">

            <FaRegListAlt
              className="w-[19px] h-[19px] text-[#1a6f85] group-hover:scale-110 transition-all"
            />

          </div>


          <p className="hidden md:block text-[14px] text-gray-600 font-medium group-hover:text-[#1a6f85] transition-all">
            Lists Items
          </p>

        </div>



        {/* ================= VIEW ORDERS ================= */}

        <div
          className="group flex items-center justify-center md:justify-start gap-[12px] px-[12px] py-[13px] rounded-[10px] cursor-pointer border border-transparent hover:border-[#89daea]/40 hover:bg-[#89daea]/10 transition-all duration-300"
          onClick={() => navigate("/orders")}
        >

          <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center bg-[#89daea]/10 group-hover:bg-[#89daea]/20 transition-all">

            <SiTicktick
              className="w-[18px] h-[18px] text-[#1a6f85] group-hover:scale-110 transition-all"
            />

          </div>


          <p className="hidden md:block text-[14px] text-gray-600 font-medium group-hover:text-[#1a6f85] transition-all">
            View Orders
          </p>

        </div>


      </div>

    </div>

  );

}

export default Sidebar;