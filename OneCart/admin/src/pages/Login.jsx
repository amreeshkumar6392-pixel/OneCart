import React, { useContext, useState } from "react";
import { IoEyeOutline, IoEye } from "react-icons/io5";
import {
  FaShieldAlt,
  FaUserShield,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AdminDataContext } from "../context/AdminContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const { serverUrl } = useContext(authDataContext);
  const { getAdmin } = useContext(AdminDataContext);

  const navigate = useNavigate();

  const Adminlogin = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        serverUrl + "/api/adminlogin",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      const adminResult = await axios.get(
        serverUrl + "/api/user/getadmin",
        {
          withCredentials: true,
        }
      );

      console.log(adminResult.data);

      getAdmin();
      navigate("/");
    } catch (error) {
      console.log("Admin Login Error:", error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex items-center justify-center px-[15px] py-[30px]">

      {/* Main Admin Login Container */}
      <div className="w-full max-w-[1100px] min-h-[650px] lg:min-h-[600px] rounded-[25px] border border-[#9de7f215] bg-[#071316]/80 backdrop-blur-xl shadow-[0_0_60px_#00000060] overflow-hidden flex flex-col lg:flex-row">

        {/* ================= LEFT ADMIN PANEL ================= */}

        <div className="hidden lg:flex w-[48%] relative overflow-hidden bg-gradient-to-br from-[#0b252b] via-[#08191d] to-[#05090a] p-[55px] flex-col justify-between">

          {/* Glow Effects */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[#9de7f215] blur-[100px] -top-[100px] -left-[100px] pointer-events-none"></div>

          <div className="absolute w-[250px] h-[250px] rounded-full bg-[#38b8cc12] blur-[90px] right-[-100px] bottom-[-80px] pointer-events-none"></div>


          {/* Logo */}
          <div className="relative">

            <div className="flex items-center gap-[12px]">

              <div className="w-[55px] h-[55px] rounded-[14px] bg-[#9de7f2] flex items-center justify-center shadow-[0_0_30px_#9de7f230]">

                <img
                  src={logo}
                  alt="OneCart"
                  className="w-[42px] h-[42px] object-contain"
                />

              </div>

              <h1 className="text-[30px] font-bold tracking-wide">
                One<span className="text-[#9de7f2]">Cart</span>
              </h1>

            </div>

          </div>


          {/* Admin Content */}
          <div className="relative">

            <div className="flex items-center gap-[8px] mb-[15px]">

              <div className="w-[30px] h-[1px] bg-[#9de7f2]"></div>

              <p className="text-[#9de7f2] text-[12px] uppercase tracking-[3px] font-semibold">
                Administration
              </p>

            </div>


            <h2 className="text-[42px] leading-[1.15] font-bold">
              Manage
              <br />
              <span className="text-[#9de7f2]">
                OneCart
              </span>
            </h2>


            <p className="text-[#8da5a9] text-[15px] leading-[1.8] mt-[20px] max-w-[400px]">
              Welcome to the OneCart Admin Panel. Manage products,
              orders, customers and your entire store from one secure
              dashboard.
            </p>


            {/* Admin Features */}
            <div className="flex flex-col gap-[18px] mt-[30px]">

              {/* Secure Access */}
              <div className="flex items-center gap-[12px]">

                <div className="w-[42px] h-[42px] rounded-[10px] bg-[#ffffff08] border border-[#9de7f218] flex items-center justify-center">

                  <FaShieldAlt className="text-[#9de7f2] text-[15px]" />

                </div>

                <div>

                  <p className="text-white text-[14px] font-semibold">
                    Secure Admin Access
                  </p>

                  <p className="text-[#667d81] text-[12px] mt-[3px]">
                    Protected dashboard authentication
                  </p>

                </div>

              </div>


              {/* Admin Portal */}
              <div className="flex items-center gap-[12px]">

                <div className="w-[42px] h-[42px] rounded-[10px] bg-[#ffffff08] border border-[#9de7f218] flex items-center justify-center">

                  <FaUserShield className="text-[#9de7f2] text-[15px]" />

                </div>

                <div>

                  <p className="text-white text-[14px] font-semibold">
                    Administrator Portal
                  </p>

                  <p className="text-[#667d81] text-[12px] mt-[3px]">
                    Control your OneCart store
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* Bottom */}
          <div className="relative">

            <div className="w-full h-[1px] bg-gradient-to-r from-[#9de7f225] to-transparent mb-[15px]"></div>

            <p className="text-[#50666a] text-[11px]">
              Authorized personnel only
            </p>

          </div>

        </div>


        {/* ================= RIGHT LOGIN PANEL ================= */}

        <div className="w-full lg:w-[52%] flex items-center justify-center px-[25px] md:px-[55px] py-[45px]">

          <div className="w-full max-w-[430px]">


            {/* Mobile Logo */}
            <div className="flex lg:hidden items-center justify-center gap-[10px] mb-[35px]">

              <div className="w-[48px] h-[48px] rounded-[12px] bg-[#9de7f2] flex items-center justify-center">

                <img
                  src={logo}
                  alt="OneCart"
                  className="w-[38px] h-[38px] object-contain"
                />

              </div>

              <h1 className="text-[27px] font-bold">
                One<span className="text-[#9de7f2]">Cart</span>
              </h1>

            </div>


            {/* Heading */}
            <div className="mb-[35px]">

              <div className="flex items-center gap-[8px] mb-[12px]">

                <div className="w-[25px] h-[1px] bg-[#9de7f2]"></div>

                <p className="text-[#9de7f2] text-[12px] uppercase tracking-[3px] font-semibold">
                  Admin Portal
                </p>

              </div>


              <h2 className="text-[34px] md:text-[40px] font-bold">
                Welcome Back
              </h2>


              <p className="text-[#778d91] text-[15px] mt-[10px] leading-[1.6]">
                Sign in to access your OneCart administration panel.
              </p>

            </div>


            {/* Login Form */}
            <form
              onSubmit={Adminlogin}
              className="w-full"
            >


              {/* Email */}
              <div className="mb-[20px]">

                <label className="text-[#a5b7ba] text-[13px] font-medium uppercase tracking-[1px] mb-[9px] block">
                  Admin Email
                </label>


                <div className="relative">

                  <FaUserShield className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[#61777b] text-[14px]" />


                  <input
                    type="email"
                    placeholder="Enter admin email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[54px] pl-[45px] pr-[15px] rounded-[10px] border border-[#ffffff15] bg-[#ffffff06] outline-none text-[15px] text-white placeholder:text-[#607579] focus:border-[#9de7f2] focus:bg-[#ffffff09] transition-all duration-300"
                  />

                </div>

              </div>


              {/* Password */}
              <div className="mb-[25px]">

                <label className="text-[#a5b7ba] text-[13px] font-medium uppercase tracking-[1px] mb-[9px] block">
                  Password
                </label>


                <div className="relative">

                  <FaLock className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[#61777b] text-[14px]" />


                  <input
                    type={show ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-[54px] pl-[45px] pr-[45px] rounded-[10px] border border-[#ffffff15] bg-[#ffffff06] outline-none text-[15px] text-white placeholder:text-[#607579] focus:border-[#9de7f2] focus:bg-[#ffffff09] transition-all duration-300"
                  />


                  {!show ? (

                    <IoEyeOutline
                      className="w-[20px] h-[20px] absolute right-[15px] top-1/2 -translate-y-1/2 cursor-pointer text-[#71878b] hover:text-[#9de7f2] transition"
                      onClick={() => setShow(true)}
                    />

                  ) : (

                    <IoEye
                      className="w-[20px] h-[20px] absolute right-[15px] top-1/2 -translate-y-1/2 cursor-pointer text-[#71878b] hover:text-[#9de7f2] transition"
                      onClick={() => setShow(false)}
                    />

                  )}

                </div>

              </div>


              {/* Login Button */}
              <button
                type="submit"
                className="w-full h-[54px] rounded-[10px] bg-[#9de7f2] text-[#061417] flex items-center justify-center gap-[10px] text-[15px] font-bold cursor-pointer hover:bg-white hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 shadow-[0_0_25px_#9de7f215]"
              >

                Access Admin Panel

                <FaArrowRight className="text-[12px]" />

              </button>

            </form>


            {/* Security Note */}
            <div className="flex items-center justify-center gap-[8px] mt-[25px]">

              <FaShieldAlt className="text-[#4d6569] text-[11px]" />

              <p className="text-[#50666a] text-[12px] text-center">
                This is a restricted area for authorized administrators only.
              </p>

            </div>


            
           

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;