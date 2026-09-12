import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaHome,
  FaSearch,
  FaShoppingBag,
} from "react-icons/fa";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#061014] text-white overflow-hidden relative flex items-center justify-center">

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Glow */}
        <div className="absolute w-[350px] h-[350px] bg-[#9de7f2]/10 rounded-full blur-[100px] top-[10%] left-[10%] animate-pulse" />

        <div className="absolute w-[300px] h-[300px] bg-[#9de7f2]/10 rounded-full blur-[100px] bottom-[5%] right-[10%] animate-pulse" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#9de7f2 1px, transparent 1px), linear-gradient(90deg, #9de7f2 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

      </div>


      {/* ================= TOP LOGO ================= */}

      <div className="absolute top-[25px] left-[25px] md:top-[35px] md:left-[50px]">

        <h1 className="text-[24px] md:text-[28px] font-semibold tracking-tight">
          One<span className="text-[#9de7f2]">Cart</span>
        </h1>

      </div>


      {/* ================= BACK HOME ================= */}

      <button
        onClick={() => navigate("/")}
        className="absolute top-[28px] right-[25px] md:top-[35px] md:right-[50px] flex items-center gap-[8px] text-gray-400 hover:text-[#9de7f2] transition-all duration-300 text-[13px] md:text-[15px]"
      >
        <FaArrowLeft className="text-[11px]" />
        Back to Home
      </button>


      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 flex flex-col items-center text-center px-[20px] pt-[50px]">


        {/* ================= 404 ================= */}

        <div className="relative">

          {/* Glow behind 404 */}

          <div className="absolute inset-0 bg-[#9de7f2]/20 blur-[70px] rounded-full" />

          <h1
            className="
              relative
              text-[110px]
              sm:text-[150px]
              md:text-[190px]
              lg:text-[230px]
              font-black
              leading-none
              tracking-[-10px]
              md:tracking-[-18px]
              text-transparent
              bg-clip-text
              bg-gradient-to-b
              from-white
              via-[#d7f8fc]
              to-[#6fcddd]
              animate-[float_4s_ease-in-out_infinite]
            "
          >
            404
          </h1>

        </div>


        {/* ================= SMALL LABEL ================= */}

        <div className="flex items-center gap-[10px] mt-[-5px]">

          <div className="w-[35px] h-[1px] bg-[#9de7f2]" />

          <p className="text-[#9de7f2] text-[11px] md:text-[12px] tracking-[4px] uppercase">
            Error 404
          </p>

          <div className="w-[35px] h-[1px] bg-[#9de7f2]" />

        </div>


        {/* ================= TITLE ================= */}

        <h2 className="mt-[18px] text-[28px] sm:text-[34px] md:text-[45px] font-semibold">

          Page{" "}

          <span className="text-[#9de7f2]">
            Not Found
          </span>

        </h2>


        {/* ================= DESCRIPTION ================= */}

        <p className="mt-[12px] max-w-[520px] text-gray-400 text-[13px] sm:text-[14px] md:text-[16px] leading-[1.7]">

          The page you're looking for doesn't exist or may have
          been moved to another location.

        </p>


        {/* ================= BUTTONS ================= */}

        <div className="flex flex-col sm:flex-row items-center gap-[12px] mt-[28px]">

          {/* HOME BUTTON */}

          <button
            onClick={() => navigate("/")}
            className="
              group
              min-w-[170px]
              h-[50px]
              px-[25px]
              rounded-[10px]
              bg-[#9de7f2]
              text-[#07191e]
              font-semibold
              flex
              items-center
              justify-center
              gap-[10px]
              hover:bg-white
              hover:scale-[1.04]
              active:scale-95
              transition-all
              duration-300
              shadow-[0_0_30px_rgba(157,231,242,0.15)]
            "
          >

            <FaHome className="text-[14px] group-hover:scale-110 transition-transform" />

            Go to Home

          </button>


          {/* SHOP BUTTON */}

          <button
            onClick={() => navigate("/collections")}
            className="
              group
              min-w-[170px]
              h-[50px]
              px-[25px]
              rounded-[10px]
              border
              border-white/10
              bg-white/[0.04]
              text-white
              font-semibold
              flex
              items-center
              justify-center
              gap-[10px]
              hover:bg-white/[0.1]
              hover:border-[#9de7f2]/40
              hover:text-[#9de7f2]
              hover:scale-[1.04]
              active:scale-95
              transition-all
              duration-300
            "
          >

            <FaShoppingBag className="text-[14px]" />

            Continue Shopping

          </button>

        </div>


        {/* ================= SEARCH HINT ================= */}

        <div className="flex items-center gap-[8px] mt-[30px] text-gray-600 text-[11px]">

          <FaSearch className="text-[10px]" />

          <span>
            Try exploring our collections instead
          </span>

        </div>

      </div>


      {/* ================= DECORATIVE DOTS ================= */}

      <div className="absolute top-[22%] left-[7%] w-[5px] h-[5px] rounded-full bg-[#9de7f2] animate-ping" />

      <div className="absolute top-[35%] right-[9%] w-[4px] h-[4px] rounded-full bg-white/60 animate-pulse" />

      <div className="absolute bottom-[20%] left-[15%] w-[4px] h-[4px] rounded-full bg-[#9de7f2]/60 animate-pulse" />

      <div className="absolute bottom-[15%] right-[20%] w-[6px] h-[6px] rounded-full bg-[#9de7f2]/50 animate-ping" />


      {/* ================= BOTTOM TEXT ================= */}

      <div className="absolute bottom-[20px] left-0 right-0 text-center">

        <p className="text-gray-600 text-[10px] md:text-[11px] tracking-[2px] uppercase">
          OneCart • Lost in the digital space
        </p>

      </div>


      {/* ================= CUSTOM ANIMATION ================= */}

      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-12px);
            }

            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>

    </div>
  );
}

export default NotFound;