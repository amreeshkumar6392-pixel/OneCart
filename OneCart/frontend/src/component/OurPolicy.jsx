import React from "react";
import Title from "./Title";
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function OurPolicy() {
  return (
    <section className="w-full bg-gradient-to-l from-[#141414] to-[#0c2025] px-[15px] md:px-[30px] py-[65px] md:py-[90px]">

      {/* Heading */}
      <div className="w-full max-w-[1000px] mx-auto text-center">

        <div className="flex justify-center">
          <Title text1={"OUR"} text2={"POLICY"} />
        </div>

        <p className="max-w-[700px] mx-auto mt-[12px] px-[10px] text-[#aebfc3] text-[12px] md:text-[15px] leading-[1.7]">
          We are committed to providing you with a safe, secure, and
          hassle-free shopping experience.
        </p>

      </div>


      {/* Policy Cards */}
      <div className="w-full max-w-[1200px] mx-auto mt-[45px] md:mt-[60px] grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[25px]">


        {/* Exchange Policy */}
        <div className="group relative overflow-hidden rounded-[18px] border border-[#9de7f215] bg-[#ffffff05] backdrop-blur-[10px] px-[25px] py-[35px] md:py-[40px] flex items-center justify-center flex-col text-center transition-all duration-300 hover:-translate-y-[6px] hover:border-[#9de7f250] hover:bg-[#ffffff08]">

          {/* Glow */}
          <div className="absolute w-[120px] h-[120px] rounded-full bg-[#9de7f210] blur-[50px] -top-[50px] -right-[40px] pointer-events-none"></div>

          {/* Icon */}
          <div className="relative w-[65px] h-[65px] rounded-[16px] border border-[#9de7f225] bg-[#9de7f208] flex items-center justify-center group-hover:border-[#9de7f260] transition-all duration-300">

            <RiExchangeFundsLine className="w-[35px] h-[35px] text-[#9de7f2] group-hover:scale-110 transition-all duration-300" />

          </div>


          {/* Small Label */}
          <p className="text-[#9de7f2] text-[10px] uppercase tracking-[2px] mt-[22px] mb-[7px]">
            Customer Friendly
          </p>


          {/* Title */}
          <h3 className="font-semibold text-[18px] md:text-[21px] text-white">
            Easy Exchange Policy
          </h3>


          {/* Description */}
          <p className="font-normal text-[12px] md:text-[13px] text-[#91a9ae] leading-[1.7] mt-[10px] max-w-[300px]">
            Exchange Made Easy – Quick, Simple, and Customer-Friendly Process.
          </p>

        </div>



        {/* Return Policy */}
        <div className="group relative overflow-hidden rounded-[18px] border border-[#9de7f215] bg-[#ffffff05] backdrop-blur-[10px] px-[25px] py-[35px] md:py-[40px] flex items-center justify-center flex-col text-center transition-all duration-300 hover:-translate-y-[6px] hover:border-[#9de7f250] hover:bg-[#ffffff08]">

          {/* Glow */}
          <div className="absolute w-[120px] h-[120px] rounded-full bg-[#9de7f210] blur-[50px] -top-[50px] -right-[40px] pointer-events-none"></div>

          {/* Icon */}
          <div className="relative w-[65px] h-[65px] rounded-[16px] border border-[#9de7f225] bg-[#9de7f208] flex items-center justify-center group-hover:border-[#9de7f260] transition-all duration-300">

            <TbRosetteDiscountCheckFilled className="w-[35px] h-[35px] text-[#9de7f2] group-hover:scale-110 transition-all duration-300" />

          </div>


          {/* Small Label */}
          <p className="text-[#9de7f2] text-[10px] uppercase tracking-[2px] mt-[22px] mb-[7px]">
            Hassle Free
          </p>


          {/* Title */}
          <h3 className="font-semibold text-[18px] md:text-[21px] text-white">
            7 Days Return Policy
          </h3>


          {/* Description */}
          <p className="font-normal text-[12px] md:text-[13px] text-[#91a9ae] leading-[1.7] mt-[10px] max-w-[300px]">
            Not satisfied with your purchase? Return it within 7 days for a
            hassle-free experience.
          </p>

        </div>



        {/* Customer Support */}
        <div className="group relative overflow-hidden rounded-[18px] border border-[#9de7f215] bg-[#ffffff05] backdrop-blur-[10px] px-[25px] py-[35px] md:py-[40px] flex items-center justify-center flex-col text-center transition-all duration-300 hover:-translate-y-[6px] hover:border-[#9de7f250] hover:bg-[#ffffff08]">

          {/* Glow */}
          <div className="absolute w-[120px] h-[120px] rounded-full bg-[#9de7f210] blur-[50px] -top-[50px] -right-[40px] pointer-events-none"></div>

          {/* Icon */}
          <div className="relative w-[65px] h-[65px] rounded-[16px] border border-[#9de7f225] bg-[#9de7f208] flex items-center justify-center group-hover:border-[#9de7f260] transition-all duration-300">

            <BiSupport className="w-[38px] h-[38px] text-[#9de7f2] group-hover:scale-110 transition-all duration-300" />

          </div>


          {/* Small Label */}
          <p className="text-[#9de7f2] text-[10px] uppercase tracking-[2px] mt-[22px] mb-[7px]">
            Always Here For You
          </p>


          {/* Title */}
          <h3 className="font-semibold text-[18px] md:text-[21px] text-white">
            24/7 Customer Support
          </h3>


          {/* Description */}
          <p className="font-normal text-[12px] md:text-[13px] text-[#91a9ae] leading-[1.7] mt-[10px] max-w-[300px]">
            We're always here to help and ensure you have the best shopping
            experience.
          </p>

        </div>

      </div>


      {/* Bottom Decorative Line */}
      <div className="flex items-center justify-center gap-[10px] mt-[45px] md:mt-[60px]">

        <div className="w-[35px] md:w-[50px] h-[1px] bg-[#9de7f230]"></div>

        <div className="w-[6px] h-[6px] rounded-full bg-[#9de7f2] shadow-[0_0_10px_#9de7f2]"></div>

        <div className="w-[35px] md:w-[50px] h-[1px] bg-[#9de7f230]"></div>

      </div>

    </section>
  );
}

export default OurPolicy;