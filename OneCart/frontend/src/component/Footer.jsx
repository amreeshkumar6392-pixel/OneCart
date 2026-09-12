import React from "react";
import logo from "../assets/logo.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaShieldAlt,
  FaTruck,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-l from-[#141414] to-[#0c2025] mb-[77px] md:mb-0">

      {/* Main Footer */}
      <div className="w-full max-w-[1400px] mx-auto px-[20px] md:px-[70px] pt-[45px] md:pt-[60px] pb-[30px]">

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.2fr] gap-[40px] md:gap-[30px]">

          {/* LOGO / ABOUT */}
          <div className="flex flex-col items-center md:items-start">

            {/* Logo */}
            <div className="flex items-center gap-[10px]">

              <div className="w-[45px] h-[45px] md:w-[52px] md:h-[52px] rounded-[12px] bg-[#9de7f2] flex items-center justify-center shadow-[0_0_25px_#9de7f225]">

                <img
                  src={logo}
                  alt="OneCart"
                  className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] object-contain"
                />

              </div>

              <p className="text-[25px] md:text-[30px] font-bold text-white tracking-wide">
                One<span className="text-[#9de7f2]">Cart</span>
              </p>

            </div>


            {/* Description */}
            <p className="text-[#91a9ae] text-[13px] md:text-[14px] leading-[1.8] max-w-[480px] text-center md:text-left mt-[18px]">
              Everything you love, all in one place. OneCart makes shopping
              easier with quality products, trusted service, and a seamless
              shopping experience.
            </p>


            {/* Trust Badges */}
            <div className="flex items-center gap-[25px] mt-[25px]">

              <div className="flex items-center gap-[8px]">

                <FaShieldAlt className="text-[#9de7f2] text-[15px]" />

                <span className="text-[#71878b] text-[11px]">
                  Secure Shopping
                </span>

              </div>


              <div className="flex items-center gap-[8px]">

                <FaTruck className="text-[#9de7f2] text-[15px]" />

                <span className="text-[#71878b] text-[11px]">
                  Fast Delivery
                </span>

              </div>

            </div>

          </div>


          {/* COMPANY */}
          <div className="flex flex-col items-center md:items-start">

            <div className="flex items-center gap-[8px]">

              <div className="w-[22px] h-[1px] bg-[#9de7f2]"></div>

              <p className="text-[14px] md:text-[15px] text-[#9de7f2] font-semibold tracking-[2px]">
                COMPANY
              </p>

            </div>


            <ul className="flex flex-col gap-[11px] mt-[20px] text-center md:text-left">

              <li className="group flex items-center gap-[7px] text-[13px] md:text-[14px] text-[#aebfc3] cursor-pointer hover:text-[#9de7f2] transition-all duration-300">
                <FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                Home
              </li>

              <li className="group flex items-center gap-[7px] text-[13px] md:text-[14px] text-[#aebfc3] cursor-pointer hover:text-[#9de7f2] transition-all duration-300">
                <FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                About Us
              </li>

              <li className="group flex items-center gap-[7px] text-[13px] md:text-[14px] text-[#aebfc3] cursor-pointer hover:text-[#9de7f2] transition-all duration-300">
                <FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                Delivery
              </li>

              <li className="group flex items-center gap-[7px] text-[13px] md:text-[14px] text-[#aebfc3] cursor-pointer hover:text-[#9de7f2] transition-all duration-300">
                <FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                Privacy Policy
              </li>

            </ul>

          </div>


          {/* GET IN TOUCH */}
          <div className="flex flex-col items-center md:items-start">

            <div className="flex items-center gap-[8px]">

              <div className="w-[22px] h-[1px] bg-[#9de7f2]"></div>

              <p className="text-[14px] md:text-[15px] text-[#9de7f2] font-semibold tracking-[2px]">
                GET IN TOUCH
              </p>

            </div>


            <div className="flex flex-col gap-[14px] mt-[20px]">

              {/* Phone */}
              <div className="flex items-center gap-[12px]">

                <div className="w-[32px] h-[32px] rounded-[8px] border border-[#9de7f220] bg-[#ffffff08] flex items-center justify-center">
                  <FaPhoneAlt className="text-[#9de7f2] text-[11px]" />
                </div>

                <p className="text-[12px] md:text-[13px] text-[#aebfc3]">
                  +91-6392104572
                </p>

              </div>


              {/* Email */}
              <div className="flex items-center gap-[12px]">

                <div className="w-[32px] h-[32px] rounded-[8px] border border-[#9de7f220] bg-[#ffffff08] flex items-center justify-center">
                  <FaEnvelope className="text-[#9de7f2] text-[11px]" />
                </div>

                <p className="text-[12px] md:text-[13px] text-[#aebfc3]">
                  contact@onecart.com
                </p>

              </div>


              {/* Second Phone */}
              <div className="flex items-center gap-[12px]">

                <div className="w-[32px] h-[32px] rounded-[8px] border border-[#9de7f220] bg-[#ffffff08] flex items-center justify-center">
                  <FaPhoneAlt className="text-[#9de7f2] text-[11px]" />
                </div>

                <p className="text-[12px] md:text-[13px] text-[#aebfc3]">
                  +91-8707436523
                </p>

              </div>


              {/* Admin Email */}
              <div className="flex items-center gap-[12px]">

                <div className="w-[32px] h-[32px] rounded-[8px] border border-[#9de7f220] bg-[#ffffff08] flex items-center justify-center">
                  <FaEnvelope className="text-[#9de7f2] text-[11px]" />
                </div>

                <p className="text-[12px] md:text-[13px] text-[#aebfc3]">
                  admin@onecart.com
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#9de7f225] to-transparent mt-[40px]"></div>


        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-[10px] pt-[20px]">

          <p className="text-[10px] md:text-[11px] text-[#60767a]">
            © {new Date().getFullYear()} OneCart. All Rights Reserved.
          </p>

          <p className="text-[10px] md:text-[11px] text-[#60767a]">
            Designed for a better shopping experience.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;