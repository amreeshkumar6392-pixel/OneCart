import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import Title from "../component/Title";
import contact from "../assets/contact.png";
import NewLetterBox from "../component/NewLetterBox";

function Contact() {
  return (
<div className="w-full min-h-screen bg-gradient-to-br from-[#071417] via-[#0b1f24] to-[#020607] text-white pt-[20px] md:pt-[100px] pb-[100px] overflow-x-hidden">

      {/* ================= TITLE ================= */}

      <div className="flex justify-center mb-[50px]">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>


      {/* ================= MAIN SECTION ================= */}

      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-[50px]">


        {/* ================= IMAGE ================= */}
  {/* ================= IMAGE ================= */}

<div className="w-full lg:w-[55%] flex justify-center">

  <div className="relative w-[95%] md:w-[85%] lg:w-[95%] group">

    {/* Glow */}

    <div className="absolute -inset-[3px] bg-gradient-to-r from-[#9de7f2] via-[#38b8cc] to-[#9de7f2] rounded-[22px] blur-[10px] opacity-30 group-hover:opacity-60 transition-all duration-500">
    </div>


    {/* Image Container */}

    <div className="relative overflow-hidden rounded-[22px] border border-[#9de7f255] bg-[#0b1c20]">

      <img
        src={contact}
        alt="Contact OneCart"
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


        {/* ================= CONTACT INFORMATION ================= */}

      <div className="w-full lg:w-[45%] flex flex-col gap-[25px]">


          {/* ================= HEADING ================= */}

          <div>

            <p className="text-[#9de7f2] text-[14px] tracking-[3px] uppercase mb-[8px]">
              Get In Touch
            </p>

            <h2 className="text-[28px] md:text-[36px] font-bold">
              We'd Love To Hear From You
            </h2>

            <p className="text-[#aebfc3] text-[14px] md:text-[16px] mt-[12px] leading-[1.7] max-w-[500px]">
              Have a question, suggestion, or need help with your order?
              Our team is always ready to help you.
            </p>

          </div>


          {/* ================= CONTACT CARDS ================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">


            {/* ADDRESS */}

            <div className="group p-[20px] rounded-[15px] border border-[#ffffff15] bg-[#ffffff08] backdrop-blur-md hover:border-[#9de7f255] hover:bg-[#ffffff0d] transition-all duration-300">

              <div className="w-[45px] h-[45px] rounded-[12px] bg-[#9de7f215] flex items-center justify-center mb-[15px]">

                <FaMapMarkerAlt className="text-[#9de7f2] text-[19px]" />

              </div>

              <h3 className="font-semibold text-[16px] mb-[7px]">
                Our Store
              </h3>

              <p className="text-[#aebfc3] text-[13px] leading-[1.7]">
                12345 Random Station
                <br />
                Random City, State, India
              </p>

            </div>


            {/* PHONE */}

            <div className="group p-[20px] rounded-[15px] border border-[#ffffff15] bg-[#ffffff08] backdrop-blur-md hover:border-[#9de7f255] hover:bg-[#ffffff0d] transition-all duration-300">

              <div className="w-[45px] h-[45px] rounded-[12px] bg-[#9de7f215] flex items-center justify-center mb-[15px]">

                <FaPhoneAlt className="text-[#9de7f2] text-[17px]" />

              </div>

              <h3 className="font-semibold text-[16px] mb-[7px]">
                Contact Us
              </h3>

              <p className="text-[#aebfc3] text-[13px] leading-[1.7]">
                +91-9876543210
                <br />
                admin@onecart.com
              </p>

            </div>


          </div>


          {/* ================= CAREERS ================= */}

          <div className="relative overflow-hidden p-[25px] rounded-[18px] border border-[#9de7f225] bg-gradient-to-r from-[#9de7f210] to-transparent">

            {/* Decorative Glow */}

            <div className="absolute w-[120px] h-[120px] bg-[#9de7f215] rounded-full blur-[40px] -right-[30px] -top-[30px]"></div>


            <div className="relative">

              <p className="text-[#9de7f2] text-[13px] uppercase tracking-[2px] mb-[6px]">
                Careers
              </p>

              <h3 className="text-[20px] md:text-[22px] font-bold mb-[8px]">
                Build The Future With OneCart
              </h3>

              <p className="text-[#aebfc3] text-[13px] md:text-[14px] leading-[1.6] mb-[18px]">
                Learn more about our team and explore exciting job
                opportunities at OneCart.
              </p>


              <button
                className="
                  flex
                  items-center
                  gap-[10px]
                  px-[20px]
                  py-[11px]
                  rounded-[8px]
                  border
                  border-[#9de7f2]
                  text-[#9de7f2]
                  text-[13px]
                  font-semibold
                  hover:bg-[#9de7f2]
                  hover:text-[#071417]
                  transition-all
                  duration-300
                "
              >

                Explore Jobs

                <FaArrowRight className="text-[12px]" />

              </button>

            </div>

          </div>


        </div>

      </div>


      {/* ================= NEWSLETTER ================= */}

      <div className="w-full mt-[80px]">

        <NewLetterBox />

      </div>


    </div>
  );
}

export default Contact;