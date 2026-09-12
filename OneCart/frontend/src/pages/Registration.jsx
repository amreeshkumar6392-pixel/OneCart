import React, { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import google from "../assets/google.webp";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEye } from "react-icons/io5";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaShoppingBag,
  FaShieldAlt,
  FaTruck,
  FaTag,
  FaArrowRight,
} from "react-icons/fa";
import { authDataContext } from "../Context/AuthContext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/Firebase";
import { userDataContext } from "../Context/UserContext";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const { serverUrl } = useContext(authDataContext);

  const { getCurrentUser } = useContext(userDataContext);

  const navigate = useNavigate();


  // ================= NORMAL REGISTRATION =================

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        serverUrl + "/api/registration",
        {
          name,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(result.data);

      getCurrentUser();

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  // ================= GOOGLE REGISTRATION =================

  const googleSignUp = async () => {
    try {
      const response = await signInWithPopup(auth, provider);

      const user = response.user;

      const name = user.displayName;
      const email = user.email;

      const result = await axios.post(
        serverUrl + "/api/googlelogin",
        {
          name,
          email,
        },
        {
          withCredentials: true,
        }
      );

      console.log(result.data);

      getCurrentUser();

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="min-h-[100vh] w-full bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex items-center justify-center px-[15px] py-[25px] md:px-[30px] md:py-[40px]">


      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative w-full max-w-[1150px] min-h-[650px] lg:min-h-[700px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[24px] border border-[#9de7f220] bg-[#07171b]/80 backdrop-blur-[15px] shadow-[0_25px_80px_#00000070]">


        {/* ================= LEFT SIDE ================= */}

        <div className="relative hidden lg:flex flex-col justify-between overflow-hidden px-[50px] py-[45px] bg-gradient-to-br from-[#0c252b] via-[#091b20] to-[#050b0d]">


          {/* Background Glow */}

          <div className="absolute w-[350px] h-[350px] rounded-full bg-[#9de7f215] blur-[120px] -top-[150px] -left-[150px]"></div>

          <div className="absolute w-[300px] h-[300px] rounded-full bg-[#38b8cc12] blur-[100px] -right-[120px] bottom-[30px]"></div>


          {/* Logo */}

          <div
            className="relative flex items-center gap-[12px] cursor-pointer"
            onClick={() => navigate("/")}
          >

            <div className="w-[52px] h-[52px] rounded-[13px] bg-[#9de7f2] flex items-center justify-center shadow-[0_0_30px_#9de7f230]">

              <img
                src={Logo}
                alt="OneCart"
                className="w-[40px] h-[40px] object-contain"
              />

            </div>

            <h1 className="text-[28px] font-bold tracking-wide">
              One<span className="text-[#9de7f2]">Cart</span>
            </h1>

          </div>


          {/* Main Content */}

          <div className="relative mt-[35px]">

            <p className="text-[#9de7f2] text-[11px] uppercase tracking-[3px] font-semibold">
              Welcome to OneCart
            </p>


            <h2 className="text-white text-[42px] xl:text-[48px] font-bold leading-[1.1] mt-[14px]">

              Shop More,

              <br />

              <span className="text-[#9de7f2]">
                Live Better.
              </span>

            </h2>


            <p className="text-[#91a9ae] text-[14px] leading-[1.8] max-w-[440px] mt-[20px]">

              Create your account and unlock a world of fashion, quality
              products, and exclusive deals.

            </p>


            {/* Benefits */}

            <div className="flex flex-col gap-[15px] mt-[35px]">


              {/* Benefit 1 */}

              <div className="flex items-center gap-[13px]">

                <div className="w-[42px] h-[42px] rounded-[11px] border border-[#9de7f225] bg-[#ffffff08] flex items-center justify-center">

                  <FaShoppingBag className="text-[#9de7f2] text-[16px]" />

                </div>


                <div>

                  <p className="text-white text-[13px] font-semibold">
                    Wide Range of Products
                  </p>

                  <p className="text-[#71878b] text-[11px] mt-[2px]">
                    Everything you love, all in one place.
                  </p>

                </div>

              </div>


              {/* Benefit 2 */}

              <div className="flex items-center gap-[13px]">

                <div className="w-[42px] h-[42px] rounded-[11px] border border-[#9de7f225] bg-[#ffffff08] flex items-center justify-center">

                  <FaShieldAlt className="text-[#9de7f2] text-[16px]" />

                </div>


                <div>

                  <p className="text-white text-[13px] font-semibold">
                    Safe & Secure Shopping
                  </p>

                  <p className="text-[#71878b] text-[11px] mt-[2px]">
                    Your information is always protected.
                  </p>

                </div>

              </div>


              {/* Benefit 3 */}

              <div className="flex items-center gap-[13px]">

                <div className="w-[42px] h-[42px] rounded-[11px] border border-[#9de7f225] bg-[#ffffff08] flex items-center justify-center">

                  <FaTruck className="text-[#9de7f2] text-[16px]" />

                </div>


                <div>

                  <p className="text-white text-[13px] font-semibold">
                    Fast & Reliable Delivery
                  </p>

                  <p className="text-[#71878b] text-[11px] mt-[2px]">
                    Get your orders delivered with ease.
                  </p>

                </div>

              </div>


              {/* Benefit 4 */}

              <div className="flex items-center gap-[13px]">

                <div className="w-[42px] h-[42px] rounded-[11px] border border-[#9de7f225] bg-[#ffffff08] flex items-center justify-center">

                  <FaTag className="text-[#9de7f2] text-[16px]" />

                </div>


                <div>

                  <p className="text-white text-[13px] font-semibold">
                    Exclusive Offers
                  </p>

                  <p className="text-[#71878b] text-[11px] mt-[2px]">
                    Special deals only for our members.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* Bottom */}

          <div className="relative mt-[30px]">

            <p className="text-[#52676b] text-[10px]">
              Your journey to better shopping starts here.
            </p>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="relative flex items-center justify-center p-[15px] md:p-[30px] lg:p-[40px] bg-[#061417]">


          {/* Glow */}

          <div className="absolute w-[250px] h-[250px] rounded-full bg-[#9de7f20c] blur-[100px] right-[-100px] top-[-80px] pointer-events-none"></div>


          {/* Registration Card */}

          <div className="relative w-full max-w-[520px] rounded-[20px] border border-[#9de7f225] bg-gradient-to-br from-[#0d2429] via-[#091b20] to-[#050b0d] p-[25px] md:p-[35px] shadow-[0_15px_50px_#00000050]">


            {/* Heading */}

            <div className="mb-[25px]">

              <div className="flex items-center gap-[9px] mb-[10px]">

                <div className="w-[30px] h-[1px] bg-[#9de7f2]"></div>

                <p className="text-[#9de7f2] text-[10px] md:text-[11px] uppercase tracking-[3px] font-semibold">
                  Create Your Account
                </p>

              </div>


              <h2 className="text-[28px] md:text-[36px] font-bold leading-tight">

                Join{" "}

                <span className="text-[#9de7f2]">
                  OneCart
                </span>{" "}

                Today

              </h2>


              <p className="text-[#91a9ae] text-[12px] md:text-[13px] mt-[8px]">

                Already have an account?

                <span
                  className="ml-[6px] text-[#9de7f2] cursor-pointer hover:text-white transition-all duration-300"
                  onClick={() => navigate("/login")}
                >
                  Login here
                </span>

              </p>

            </div>


            {/* ================= GOOGLE BUTTON ================= */}

            <button
              type="button"
              onClick={googleSignUp}
              className="w-full h-[48px] rounded-[10px] border border-[#9de7f225] bg-[#ffffff06] hover:bg-[#ffffff0c] hover:border-[#9de7f250] transition-all duration-300 flex items-center justify-center gap-[10px] text-[13px] text-[#d8e4e6] cursor-pointer"
            >

              <img
                src={google}
                alt="Google"
                className="w-[22px] h-[22px] rounded-full bg-white p-[2px] object-contain"
              />

              Registration with Google

            </button>


            {/* OR */}

            <div className="flex items-center gap-[12px] my-[20px]">

              <div className="h-[1px] bg-[#ffffff15] flex-1"></div>

              <span className="text-[#60767a] text-[10px] tracking-[2px]">
                OR
              </span>

              <div className="h-[1px] bg-[#ffffff15] flex-1"></div>

            </div>


            {/* ================= FORM ================= */}

            <form onSubmit={handleSignUp}>


              {/* Name */}

              <div className="mb-[15px]">

                <label className="block text-[#dbe7e9] text-[12px] font-medium mb-[7px]">
                  Full Name
                </label>


                <div className="relative">

                  <FaUser className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[#71878b] text-[13px]" />


                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Enter your full name"
                    className="w-full h-[48px] rounded-[10px] border border-[#ffffff18] bg-[#ffffff05] outline-none text-[13px] text-white pl-[42px] pr-[15px] placeholder:text-[#60767a] focus:border-[#9de7f2] focus:bg-[#ffffff08] transition-all duration-300"
                  />

                </div>

              </div>


              {/* Email */}

              <div className="mb-[15px]">

                <label className="block text-[#dbe7e9] text-[12px] font-medium mb-[7px]">
                  Email Address
                </label>


                <div className="relative">

                  <FaEnvelope className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[#71878b] text-[13px]" />


                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter your email address"
                    className="w-full h-[48px] rounded-[10px] border border-[#ffffff18] bg-[#ffffff05] outline-none text-[13px] text-white pl-[42px] pr-[15px] placeholder:text-[#60767a] focus:border-[#9de7f2] focus:bg-[#ffffff08] transition-all duration-300"
                  />

                </div>

              </div>


              {/* Password */}

              <div className="mb-[10px]">

                <label className="block text-[#dbe7e9] text-[12px] font-medium mb-[7px]">
                  Password
                </label>


                <div className="relative">

                  <FaLock className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[#71878b] text-[13px]" />


                  <input
                    type={show ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Create a password"
                    className="w-full h-[48px] rounded-[10px] border border-[#ffffff18] bg-[#ffffff05] outline-none text-[13px] text-white pl-[42px] pr-[45px] placeholder:text-[#60767a] focus:border-[#9de7f2] focus:bg-[#ffffff08] transition-all duration-300"
                  />


                  {!show ? (

                    <IoEyeOutline
                      className="w-[19px] h-[19px] absolute right-[15px] top-1/2 -translate-y-1/2 text-[#71878b] hover:text-[#9de7f2] cursor-pointer transition-all duration-300"
                      onClick={() => setShow(true)}
                    />

                  ) : (

                    <IoEye
                      className="w-[19px] h-[19px] absolute right-[15px] top-1/2 -translate-y-1/2 text-[#9de7f2] cursor-pointer transition-all duration-300"
                      onClick={() => setShow(false)}
                    />

                  )}

                </div>

              </div>


              {/* Password Info */}

              <div className="flex flex-col gap-[5px] mb-[20px]">

                <p className="text-[#71878b] text-[10px]">
                  ✓ At least 8 characters
                </p>

                <p className="text-[#71878b] text-[10px]">
                  ✓ Include a number
                </p>

                <p className="text-[#71878b] text-[10px]">
                  ✓ Include a special character
                </p>

              </div>


              {/* Create Account */}

              <button
                type="submit"
                className="w-full h-[50px] rounded-[10px] bg-[#9de7f2] hover:bg-white text-[#061417] text-[14px] font-semibold flex items-center justify-center gap-[10px] cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
              >

                Create Account

                <FaArrowRight className="text-[12px]" />

              </button>

            </form>


            {/* Terms */}

            <p className="text-center text-[#60767a] text-[10px] leading-[1.6] mt-[18px]">

              By creating an account, you agree to our

              <br />

              <span className="text-[#9de7f2]">
                Terms of Service
              </span>{" "}

              and{" "}

              <span className="text-[#9de7f2]">
                Privacy Policy
              </span>

              .

            </p>


            {/* Bottom Login */}

            <div className="flex items-center justify-center mt-[20px] pt-[18px] border-t border-[#ffffff10]">

              <p className="text-[#71878b] text-[17px]">

                You have an account?

                <span
                  className="ml-[6px] text-[#9de7f2] cursor-pointer hover:text-white transition-all duration-300"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>

              </p>

            </div>

          </div>

        </div>

      </div>


      {/* Copyright */}

      <p className="fixed bottom-[8px] text-[#52676b] text-[9px] hidden md:block">
        © {new Date().getFullYear()} OneCart. All rights reserved.
      </p>

    </div>
  );
}

export default Registration;