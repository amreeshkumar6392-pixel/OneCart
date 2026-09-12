import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

import { IoSearchOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

import { userDataContext } from "../Context/UserContext";
import { authDataContext } from "../Context/AuthContext";
import { shopDataContext } from "../Context/ShopContext";

import axios from "axios";

import { MdHome } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { HiOutlineCollection } from "react-icons/hi";

function Nav() {
  // ================= USER CONTEXT =================
const {
  getCurrentUser,
  userData,
  setUserData,
} = useContext(userDataContext);

  // ================= AUTH CONTEXT =================

  const { serverUrl } = useContext(authDataContext);

  // ================= SHOP CONTEXT =================

  const {
    showSearch,
    setShowSearch,
    search,
    setSearch,
    wishlist,
    getCartCount,
  } = useContext(shopDataContext);

  // ================= STATES =================

  const [showProfile, setShowProfile] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // ================= NAVIGATE =================

  const navigate = useNavigate();

  // ======================================================
  // LOGOUT
const handleLogOut = async () => {
  if (isLoggingOut) return;

  try {
    setIsLoggingOut(true);

    const result = await axios.get(
      serverUrl + "/api/logout",
      {
        withCredentials: true,
      }
    );

    console.log(result.data);

    // Clear user immediately
    setUserData(null);

    // Close profile
    setShowProfile(false);

    // Go to login
    navigate("/login", {
      replace: true,
    });

  } catch (error) {
    console.log(
      "Logout Error:",
      error.response?.data || error.message
    );
  } finally {
    setIsLoggingOut(false);
  }
};
  return (
    <div className="w-full md:h-[72px] md:bg-white md:fixed md:top-0 md:left-0 md:z-50 md:shadow-[0_2px_10px_rgba(0,0,0,0.08)]">

      {/* ================================================= */}
      {/* DESKTOP NAVBAR */}
      {/* ================================================= */}

      <div className="hidden md:flex w-full h-full items-center px-[4%] gap-[30px]">

        {/* ================= LOGO ================= */}

        <div
          className="w-[100px] flex items-center justify-start cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="OneCart"
            className="w-[55px] h-[55px] object-contain"
          />
        </div>

        {/* ================= NAVIGATION ================= */}

        <div className="flex items-center gap-[38px]">

          {/* HOME */}

          <p
            onClick={() => navigate("/")}
            className="text-[16px] font-semibold text-[#282c3f] cursor-pointer hover:text-[#ff3f6c] transition-all"
          >
            HOME
          </p>

          {/* COLLECTIONS */}

          <p
            onClick={() => navigate("/collections")}
            className="text-[16px] font-semibold text-[#282c3f] cursor-pointer hover:text-[#ff3f6c] transition-all"
          >
            COLLECTIONS
          </p>

          {/* ABOUT */}

          <p
            onClick={() => navigate("/about")}
            className="text-[16px] font-semibold text-[#282c3f] cursor-pointer hover:text-[#ff3f6c] transition-all"
          >
            ABOUT
          </p>

          {/* CONTACT */}

          <p
            onClick={() => navigate("/contact")}
            className="text-[16px] font-semibold text-[#282c3f] cursor-pointer hover:text-[#ff3f6c] transition-all"
          >
            CONTACT
          </p>

        </div>

        {/* ================================================= */}
        {/* SEARCH */}
        {/* ================================================= */}

        <div className="flex-1 max-w-[500px] ml-[10px]">

          <div className="w-full h-[48px] bg-[#f5f5f6] flex items-center px-[15px] rounded-[4px]">

            <IoSearchOutline
              className="w-[22px] h-[22px] text-[#696e79] cursor-pointer"
              onClick={() => {
                setShowSearch(true);
                navigate("/collections");
              }}
            />

            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full h-full bg-transparent outline-none px-[12px] text-[15px] text-[#282c3f] placeholder:text-[#696e79]"
              onFocus={() => {
                setShowSearch(true);
              }}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowSearch(true);
                navigate("/collections");
              }}
              value={search}
            />

          </div>

        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* ================================================= */}

        <div className="flex items-center justify-end gap-[28px] ml-auto">

          {/* ================= PROFILE ================= */}

          <div
            className="relative flex flex-col items-center justify-center cursor-pointer min-w-[45px]"
            onClick={() => setShowProfile((prev) => !prev)}
          >

            {!userData ? (
              <IoPersonOutline
                className="w-[23px] h-[23px] text-[#282c3f]"
              />
            ) : (
              <div className="w-[25px] h-[25px] flex items-center justify-center bg-[#080808] text-white rounded-full text-[13px]">
                {userData?.name?.slice(0, 1)}
              </div>
            )}

            <p className="text-[12px] font-semibold text-[#282c3f] mt-[2px]">
              Profile
            </p>

          </div>

          {/* ================= WISHLIST ================= */}

          <div
            className="relative flex flex-col items-center justify-center cursor-pointer min-w-[50px]"
            onClick={() => navigate("/wishlist")}
          >

            <FaHeart
              className="w-[21px] h-[21px] text-[#282c3f]"
            />

            <p className="text-[12px] font-semibold text-[#282c3f] mt-[4px]">
              Wishlist
            </p>

            {wishlist?.length > 0 && (
              <p className="absolute w-[17px] h-[17px] flex items-center justify-center bg-[#ff3f6c] text-white rounded-full text-[8px] -top-[7px] right-[1px]">
                {wishlist.length}
              </p>
            )}

          </div>

          {/* ================= BAG ================= */}

          <div
            className="relative flex flex-col items-center justify-center cursor-pointer min-w-[40px]"
            onClick={() => navigate("/cart")}
          >

            <FiShoppingBag
              className="w-[22px] h-[22px] text-[#282c3f]"
            />

            <p className="text-[12px] font-semibold text-[#282c3f] mt-[3px]">
              Bag
            </p>

            <p className="absolute w-[17px] h-[17px] flex items-center justify-center bg-[#ff3f6c] text-white rounded-full text-[8px] -top-[7px] right-[-3px]">
              {getCartCount()}
            </p>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* PROFILE DROPDOWN */}
      {/* ================================================= */}

      {showProfile && (
        <div className="absolute w-[220px] h-[150px] bg-[#000000e8] top-[75px] right-[4%] border border-[#aaa9a9] rounded-[10px] z-50">

          <ul className="w-full h-full flex items-center justify-around flex-col text-[17px] py-[10px] text-white">

            {/* ================= LOGIN ================= */}

            {!userData && (
              <li
                className="w-full hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
                onClick={() => {
                  navigate("/login");
                  setShowProfile(false);
                }}
              >
                Login
              </li>
            )}

            {/* ================= LOGOUT ================= */}

            {userData && (
              <li
                className={`w-full hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer ${
                  isLoggingOut ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleLogOut}
              >
                {isLoggingOut ? "Logging out..." : "LogOut"}
              </li>
            )}

            {/* ================= ORDERS ================= */}

            <li
              className="w-full hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
              onClick={() => {
                navigate("/order");
                setShowProfile(false);
              }}
            >
              Orders
            </li>

            {/* ================= ABOUT ================= */}

            <li
              className="w-full hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
              onClick={() => {
                navigate("/about");
                setShowProfile(false);
              }}
            >
              About
            </li>

          </ul>

        </div>
      )}

      {/* ================================================= */}
      {/* MOBILE NAVBAR */}
      {/* ================================================= */}

      <div className="w-full h-[75px] flex items-center justify-around fixed bottom-0 left-0 bg-[#191818] md:hidden text-sm z-[9999]">

        {/* ================= HOME ================= */}

        <button
          className="text-white flex items-center justify-center flex-col gap-[2px]"
          onClick={() => navigate("/")}
        >
          <MdHome className="w-[28px] h-[28px] text-white" />
          Home
        </button>

        {/* ================= COLLECTIONS ================= */}

        <button
          className="text-white flex items-center justify-center flex-col gap-[2px]"
          onClick={() => navigate("/collections")}
        >
          <HiOutlineCollection className="w-[28px] h-[28px] text-white" />
          Collections
        </button>

        {/* ================= WISHLIST ================= */}

        <div className="relative">

          <button
            className="text-white flex items-center justify-center flex-col gap-[2px]"
            onClick={() => navigate("/wishlist")}
          >
            <FaHeart className="w-[25px] h-[25px] text-white" />

            <span>Wishlist</span>
          </button>

          {wishlist?.length > 0 && (
            <p className="absolute w-[18px] h-[18px] flex items-center justify-center bg-[#ff3f6c] text-white font-bold rounded-full text-[9px] -top-2 -right-2">
              {wishlist.length}
            </p>
          )}

        </div>

        {/* ================= CONTACT ================= */}

        <button
          className="text-white flex items-center justify-center flex-col gap-[2px]"
          onClick={() => navigate("/contact")}
        >
          <MdPermContactCalendar
            className="w-[28px] h-[28px] text-white"
          />

          Contact
        </button>

        {/* ================= CART ================= */}

        <div className="relative">

          <button
            className="text-white flex items-center justify-center flex-col gap-[2px]"
            onClick={() => navigate("/cart")}
          >
            <FiShoppingBag
              className="w-[28px] h-[28px] text-white"
            />

            Cart
          </button>

          <p className="absolute w-[18px] h-[18px] flex items-center justify-center bg-white text-black font-bold rounded-full text-[9px] -top-2 -right-2">
            {getCartCount()}
          </p>

        </div>

      </div>

      {/* ================================================= */}
      {/* OLD SEARCH DROPDOWN */}
      {/* ================================================= */}

      {showSearch && (
        <div className="hidden">

          <input
            type="text"
            placeholder="Search here"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />

        </div>
      )}

    </div>
  );
}

export default Nav;