import React from "react";
import Title from "../component/Title";
import about from "../assets/about.png";
import NewLetterBox from "../component/NewLetterBox";

import {
  FaShieldAlt,
  FaGem,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

function About() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#071417] via-[#0b1f24] to-[#020607] text-white pt-[100px] pb-[50px] overflow-x-hidden">

      {/* ================= ABOUT TITLE ================= */}

      <div className="flex justify-center mb-[50px]">

        <Title
          text1={"ABOUT"}
          text2={"US"}
        />

      </div>


      {/* ================================================= */}
      {/* ABOUT MAIN SECTION */}
      {/* ================================================= */}

      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-[50px]">


        {/* ================= IMAGE ================= */}

        <div className="w-full lg:w-[55%] flex justify-center">

          <div className="relative w-[95%] md:w-[85%] lg:w-[95%] group">


            {/* GLOW */}

            <div className="absolute -inset-[3px] bg-gradient-to-r from-[#9de7f2] via-[#38b8cc] to-[#9de7f2] rounded-[22px] blur-[10px] opacity-30 group-hover:opacity-60 transition-all duration-500">
            </div>


            {/* IMAGE */}

            <div className="relative overflow-hidden rounded-[22px] border border-[#9de7f255] bg-[#0b1c20]">

              <img
                src={about}
                alt="About OneCart"
                className="
                  w-full
                  h-[350px]
                  md:h-[450px]
                  lg:h-[520px]
                  object-cover
                  group-hover:scale-105
                  transition-all
                  duration-700
                "
              />

            </div>

          </div>

        </div>


        {/* ================================================= */}
        {/* ABOUT CONTENT */}
        {/* ================================================= */}

        <div className="w-full lg:w-[45%] flex flex-col gap-[22px]">


          {/* SMALL TITLE */}

          <div>

            <p className="text-[#9de7f2] text-[13px] tracking-[3px] uppercase mb-[8px]">
              Who We Are
            </p>

            <h2 className="text-[28px] md:text-[36px] font-bold leading-tight">
              Shopping Made
              <span className="text-[#9de7f2]">
                {" "}Simple.
              </span>
            </h2>

          </div>


          {/* INTRODUCTION */}

          <p className="text-[#aebfc3] text-[13px] md:text-[15px] leading-[1.8]">
            Welcome to OneCart, your trusted destination for fashion,
            style, and everyday essentials—all in one convenient place.
          </p>


          <p className="text-[#aebfc3] text-[13px] md:text-[15px] leading-[1.8]">
            We believe shopping should be simple, enjoyable, and
            accessible. That's why we bring you quality products,
            exciting collections, and great value designed to match
            your lifestyle.
          </p>


          {/* ================================================= */}
          {/* MISSION */}
          {/* ================================================= */}

          <div className="relative overflow-hidden p-[22px] rounded-[18px] border border-[#9de7f225] bg-[#ffffff08] backdrop-blur-md">


            {/* GLOW */}

            <div className="absolute w-[100px] h-[100px] bg-[#9de7f215] rounded-full blur-[35px] -right-[20px] -top-[20px]">
            </div>


            <div className="relative">

              <div className="flex items-center gap-[10px] mb-[10px]">

                <div className="w-[35px] h-[35px] rounded-[9px] bg-[#9de7f215] flex items-center justify-center">

                  <FaGem className="text-[#9de7f2] text-[15px]" />

                </div>

                <h3 className="text-[18px] font-semibold">
                  Our Mission
                </h3>

              </div>


              <p className="text-[#aebfc3] text-[13px] md:text-[14px] leading-[1.7]">
                At OneCart, our mission is to make online shopping
                simple, reliable, and enjoyable for everyone. We are
                committed to bringing quality products, great value,
                and the latest trends together in one convenient place.
              </p>

            </div>

          </div>


          {/* TRUST POINTS */}

          <div className="flex flex-wrap gap-[10px] mt-[3px]">

            <div className="flex items-center gap-[7px] text-[12px] text-[#c8d7da]">

              <FaCheckCircle className="text-[#9de7f2]" />

              Quality Products

            </div>


            <div className="flex items-center gap-[7px] text-[12px] text-[#c8d7da]">

              <FaCheckCircle className="text-[#9de7f2]" />

              Secure Shopping

            </div>


            <div className="flex items-center gap-[7px] text-[12px] text-[#c8d7da]">

              <FaCheckCircle className="text-[#9de7f2]" />

              Trusted Service

            </div>

          </div>


        </div>

      </div>


      {/* ================================================= */}
      {/* WHY CHOOSE US */}
      {/* ================================================= */}

      <div className="w-[90%] max-w-[1200px] mx-auto mt-[90px]">


        {/* TITLE */}

        <div className="flex justify-center mb-[40px]">

          <Title
            text1={"WHY"}
            text2={"CHOOSE US"}
          />

        </div>


        {/* CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">


          {/* ================= QUALITY ================= */}

          <div className="group relative overflow-hidden min-h-[260px] rounded-[18px] border border-[#ffffff15] bg-[#ffffff08] backdrop-blur-md p-[30px] flex items-center justify-center flex-col text-center hover:border-[#9de7f255] hover:bg-[#ffffff0d] transition-all duration-300">


            {/* ICON */}

            <div className="w-[55px] h-[55px] rounded-[14px] bg-[#9de7f215] flex items-center justify-center mb-[18px] group-hover:scale-110 transition-all duration-300">

              <FaGem className="text-[#9de7f2] text-[22px]" />

            </div>


            <h3 className="text-[19px] font-semibold text-[#bff1f9] mb-[12px]">
              Quality Assurance
            </h3>


            <p className="text-[#aebfc3] text-[13px] leading-[1.7]">
              We carefully select and inspect our products to ensure
              they meet high standards of quality, comfort, and
              reliability.
            </p>


          </div>


          {/* ================= SECURITY ================= */}

          <div className="group relative overflow-hidden min-h-[260px] rounded-[18px] border border-[#ffffff15] bg-[#ffffff08] backdrop-blur-md p-[30px] flex items-center justify-center flex-col text-center hover:border-[#9de7f255] hover:bg-[#ffffff0d] transition-all duration-300">


            {/* ICON */}

            <div className="w-[55px] h-[55px] rounded-[14px] bg-[#9de7f215] flex items-center justify-center mb-[18px] group-hover:scale-110 transition-all duration-300">

              <FaShieldAlt className="text-[#9de7f2] text-[22px]" />

            </div>


            <h3 className="text-[19px] font-semibold text-[#bff1f9] mb-[12px]">
              Secure Shopping
            </h3>


            <p className="text-[#aebfc3] text-[13px] leading-[1.7]">
              Shop with confidence knowing that your information and
              transactions are handled safely and securely.
            </p>


          </div>


          {/* ================= CUSTOMER ================= */}

          <div className="group relative overflow-hidden min-h-[260px] rounded-[18px] border border-[#ffffff15] bg-[#ffffff08] backdrop-blur-md p-[30px] flex items-center justify-center flex-col text-center hover:border-[#9de7f255] hover:bg-[#ffffff0d] transition-all duration-300">


            {/* ICON */}

            <div className="w-[55px] h-[55px] rounded-[14px] bg-[#9de7f215] flex items-center justify-center mb-[18px] group-hover:scale-110 transition-all duration-300">

              <FaUsers className="text-[#9de7f2] text-[22px]" />

            </div>


            <h3 className="text-[19px] font-semibold text-[#bff1f9] mb-[12px]">
              Customer Satisfaction
            </h3>


            <p className="text-[#aebfc3] text-[13px] leading-[1.7]">
              Your happiness is our priority. We are committed to
              providing excellent service and a smooth shopping
              experience.
            </p>


          </div>


        </div>

      </div>


      {/* ================================================= */}
      {/* NEWSLETTER */}
      {/* ================================================= */}

      <div className="w-full mt-[80px]">

        <NewLetterBox />

      </div>


    </div>
  );
}

export default About;