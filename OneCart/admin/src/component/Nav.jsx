import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { authDataContext } from "../context/AuthContext";
import { AdminDataContext } from "../context/AdminContext";
import axios from "axios";

function Nav() {

  const navigate = useNavigate();

  const { serverUrl } = useContext(authDataContext);

  const { getAdmin } = useContext(AdminDataContext);


  const logOut = async () => {

    try {

      const result = await axios.get(
        serverUrl + "/api/logout",
        {
          withCredentials: true
        }
      );

      getAdmin();

      console.log(result.data);

      navigate("/login");

    } catch (error) {

      console.log(error);

    }

  };


  return (

    <div className="w-full h-[70px] bg-white fixed top-0 left-0 z-50 flex items-center justify-between px-[20px] md:px-[40px] shadow-md shadow-black/20">


      {/* ================= LOGO ================= */}

      <div
        className="flex items-center gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >

        <img
          src={logo}
          alt="OneCart"
          className="w-[40px] h-[40px] object-contain rounded"
        />

        <h1 className="text-[24px] md:text-[27px] text-black font-serif">
          OneCart
        </h1>

      </div>


      {/* ================= ADMIN TITLE ================= */}

      <div className="hidden md:flex items-center">

        <p className="text-[#1a6f85] text-[13px] tracking-[3px] uppercase font-semibold">
          Admin Panel
        </p>

      </div>


      {/* ================= LOGOUT ================= */}

      <button
        onClick={logOut}
        className="text-[13px] md:text-[15px] text-white border border-[#89daea] bg-[#000000ca] hover:bg-[#1a6f85] cursor-pointer py-[9px] px-[17px] md:px-[20px] rounded-full transition-all"
      >
        LogOut
      </button>


    </div>

  );

}

export default Nav;