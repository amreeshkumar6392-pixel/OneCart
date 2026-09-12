import React from "react";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

function NewLetterBox() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
<section className="w-full bg-gradient-to-l from-[#141414] to-[#0c2025] px-[15px] md:px-[30px] pt-[45px] md:pt-[60px] pb-[25px]">

      {/* Newsletter Card */}
      <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden rounded-[20px] border border-[#9de7f225] bg-gradient-to-br from-[#0c252b] via-[#091b20] to-[#050b0d] px-[20px] py-[35px] md:px-[50px] md:py-[40px]">

        {/* Background Glow */}
        <div className="absolute w-[180px] h-[180px] bg-[#38b8cc15] rounded-full blur-[70px] -right-[70px] -top-[80px] pointer-events-none"></div>

        <div className="absolute w-[150px] h-[150px] bg-[#9de7f210] rounded-full blur-[60px] -left-[60px] -bottom-[70px] pointer-events-none"></div>

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-[30px]">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[55%] text-center lg:text-left">

            {/* Small Heading */}
            <div className="flex items-center justify-center lg:justify-start gap-[8px] mb-[10px]">

              <div className="w-[30px] h-[1px] bg-[#9de7f2]"></div>

              <p className="text-[#9de7f2] text-[11px] md:text-[12px] uppercase tracking-[2px] font-semibold">
                OneCart Newsletter
              </p>

            </div>

            {/* Main Heading */}
            <h2 className="text-white text-[24px] md:text-[30px] lg:text-[34px] font-bold leading-tight">
              Stay Ahead of the{" "}
              <span className="text-[#9de7f2]">
                Trend
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#91a9ae] text-[12px] md:text-[15px] leading-[1.7] mt-[10px] max-w-[550px] mx-auto lg:mx-0">
              Get the latest styles, exclusive offers, and new arrivals from
              OneCart directly in your inbox.
            </p>

          </div>


          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[45%]">

            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col sm:flex-row items-center gap-[10px]"
            >

              {/* Email Input */}
              <div className="relative w-full">

                <FaEnvelope className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[#71878b] text-[13px]" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-[46px] rounded-[9px] border border-[#ffffff18] bg-[#ffffff08] outline-none text-white text-[13px] pl-[40px] pr-[12px] placeholder:text-[#71878b] focus:border-[#9de7f2] focus:bg-[#ffffff0c] transition-all duration-300"
                  required
                />

              </div>


              {/* Subscribe Button */}
              <button
                type="submit"
                className="w-full sm:w-auto h-[46px] px-[22px] rounded-[9px] bg-[#9de7f2] text-[#061417] text-[13px] font-semibold flex items-center justify-center gap-[8px] whitespace-nowrap cursor-pointer hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Subscribe

                <FaArrowRight className="text-[11px]" />
              </button>

            </form>


            {/* Small Text */}
            <p className="text-[#60767a] text-[10px] mt-[10px] text-center lg:text-left">
              No spam. Only useful updates from OneCart.
            </p>

          </div>

        </div>

      </div>


      {/* Copyright */}
      <p className="text-center text-[#60767a] text-[10px] mt-[20px]">
        © {new Date().getFullYear()} OneCart. All rights reserved.
      </p>

    </section>
  );
}

export default NewLetterBox;