import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

import { IoSearchOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

import {
  MdHome,
  MdPermContactCalendar,
  MdMenu,
  MdClose,
  MdLogout,
} from "react-icons/md";

import { HiOutlineCollection } from "react-icons/hi";

import { userDataContext } from "../Context/UserContext";
import { authDataContext } from "../Context/AuthContext";
import { shopDataContext } from "../Context/ShopContext";

import axios from "axios";

function Nav() {

  // ======================================================
  // USER CONTEXT
  // ======================================================

  const {
    userData,
    setUserData,
  } = useContext(userDataContext);


  // ======================================================
  // AUTH CONTEXT
  // ======================================================

  const { serverUrl } = useContext(authDataContext);


  // ======================================================
  // SHOP CONTEXT
  // ======================================================

  const {
    showSearch,
    setShowSearch,
    search,
    setSearch,
    wishlist,
    getCartCount,
  } = useContext(shopDataContext);


  // ======================================================
  // STATES
  // ======================================================

  const [showProfile, setShowProfile] = useState(false);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const [isLoggingOut, setIsLoggingOut] = useState(false);


  // ======================================================
  // NAVIGATE
  // ======================================================

  const navigate = useNavigate();


  // ======================================================
  // SEARCH
  // ======================================================

  const handleSearch = () => {

    setShowSearch(true);

    navigate("/collections");

  };


  // ======================================================
  // MOBILE MENU NAVIGATION
  // ======================================================

  const handleMobileNavigation = (path) => {

    navigate(path);

    setShowMobileMenu(false);

  };


  // ======================================================
  // LOGOUT
  // ======================================================

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

      // Close everything
      setShowProfile(false);
      setShowMobileMenu(false);
      setShowLogoutConfirm(false);

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

    <div className="w-full">


      {/* ================================================= */}
      {/* DESKTOP NAVBAR */}
      {/* ================================================= */}

      <div
        className="
          hidden
          md:flex
          w-full
          h-[72px]
          bg-white
          fixed
          top-0
          left-0
          z-[9998]
          shadow-[0_2px_10px_rgba(0,0,0,0.08)]
          items-center
          px-[4%]
          gap-[30px]
        "
      >


        {/* ================= LOGO ================= */}

        <div
          className="
            w-[100px]
            flex
            items-center
            justify-start
            cursor-pointer
          "
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
            className="
              text-[16px]
              font-semibold
              text-[#282c3f]
              cursor-pointer
              hover:text-[#ff3f6c]
              transition-all
            "
          >
            HOME
          </p>


          {/* COLLECTIONS */}

          <p
            onClick={() => navigate("/collections")}
            className="
              text-[16px]
              font-semibold
              text-[#282c3f]
              cursor-pointer
              hover:text-[#ff3f6c]
              transition-all
            "
          >
            COLLECTIONS
          </p>


          {/* ABOUT */}

          <p
            onClick={() => navigate("/about")}
            className="
              text-[16px]
              font-semibold
              text-[#282c3f]
              cursor-pointer
              hover:text-[#ff3f6c]
              transition-all
            "
          >
            ABOUT
          </p>


          {/* CONTACT */}

          <p
            onClick={() => navigate("/contact")}
            className="
              text-[16px]
              font-semibold
              text-[#282c3f]
              cursor-pointer
              hover:text-[#ff3f6c]
              transition-all
            "
          >
            CONTACT
          </p>

        </div>


        {/* ================================================= */}
        {/* DESKTOP SEARCH */}
        {/* ================================================= */}

        <div className="flex-1 max-w-[500px] ml-[10px]">

          <div
            className="
              w-full
              h-[48px]
              bg-[#f5f5f6]
              flex
              items-center
              px-[15px]
              rounded-[4px]
            "
          >

            <IoSearchOutline
              className="
                w-[22px]
                h-[22px]
                text-[#696e79]
                cursor-pointer
              "
              onClick={handleSearch}
            />


            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="
                w-full
                h-full
                bg-transparent
                outline-none
                px-[12px]
                text-[15px]
                text-[#282c3f]
                placeholder:text-[#696e79]
              "
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
        {/* DESKTOP RIGHT SIDE */}
        {/* ================================================= */}

        <div
          className="
            flex
            items-center
            justify-end
            gap-[28px]
            ml-auto
          "
        >


          {/* ================= PROFILE ================= */}

          <div
            className="
              relative
              flex
              flex-col
              items-center
              justify-center
              cursor-pointer
              min-w-[45px]
            "
            onClick={() =>
              setShowProfile((prev) => !prev)
            }
          >

            {!userData ? (

              <IoPersonOutline
                className="
                  w-[23px]
                  h-[23px]
                  text-[#282c3f]
                "
              />

            ) : (

              <div
                className="
                  w-[25px]
                  h-[25px]
                  flex
                  items-center
                  justify-center
                  bg-[#080808]
                  text-white
                  rounded-full
                  text-[13px]
                "
              >
                {userData?.name?.slice(0, 1)}
              </div>

            )}

            <p
              className="
                text-[12px]
                font-semibold
                text-[#282c3f]
                mt-[2px]
              "
            >
              Profile
            </p>

          </div>


          {/* ================= WISHLIST ================= */}

          <div
            className="
              relative
              flex
              flex-col
              items-center
              justify-center
              cursor-pointer
              min-w-[50px]
            "
            onClick={() => navigate("/wishlist")}
          >

            <FaHeart
              className="
                w-[21px]
                h-[21px]
                text-[#282c3f]
              "
            />

            <p
              className="
                text-[12px]
                font-semibold
                text-[#282c3f]
                mt-[4px]
              "
            >
              Wishlist
            </p>


            {wishlist?.length > 0 && (

              <p
                className="
                  absolute
                  w-[17px]
                  h-[17px]
                  flex
                  items-center
                  justify-center
                  bg-[#ff3f6c]
                  text-white
                  rounded-full
                  text-[8px]
                  -top-[7px]
                  right-[1px]
                "
              >
                {wishlist.length}
              </p>

            )}

          </div>


          {/* ================= BAG ================= */}

          <div
            className="
              relative
              flex
              flex-col
              items-center
              justify-center
              cursor-pointer
              min-w-[40px]
            "
            onClick={() => navigate("/cart")}
          >

            <FiShoppingBag
              className="
                w-[22px]
                h-[22px]
                text-[#282c3f]
              "
            />

            <p
              className="
                text-[12px]
                font-semibold
                text-[#282c3f]
                mt-[3px]
              "
            >
              Bag
            </p>


            <p
              className="
                absolute
                w-[17px]
                h-[17px]
                flex
                items-center
                justify-center
                bg-[#ff3f6c]
                text-white
                rounded-full
                text-[8px]
                -top-[7px]
                right-[-3px]
              "
            >
              {getCartCount()}
            </p>

          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* DESKTOP PROFILE DROPDOWN */}
      {/* ================================================= */}

      {showProfile && (

        <div
          className="
            hidden
            md:block
            absolute
            w-[220px]
            h-[150px]
            bg-[#000000e8]
            top-[75px]
            right-[4%]
            border
            border-[#aaa9a9]
            rounded-[10px]
            z-[9999]
          "
        >

          <ul
            className="
              w-full
              h-full
              flex
              items-center
              justify-around
              flex-col
              text-[17px]
              py-[10px]
              text-white
            "
          >


            {/* LOGIN */}

            {!userData && (

              <li
                className="
                  w-full
                  hover:bg-[#2f2f2f]
                  px-[15px]
                  py-[10px]
                  cursor-pointer
                "
                onClick={() => {

                  navigate("/login");

                  setShowProfile(false);

                }}
              >
                Login
              </li>

            )}


            {/* LOGOUT */}

            {userData && (

              <li
                className={`
                  w-full
                  hover:bg-[#2f2f2f]
                  px-[15px]
                  py-[10px]
                  cursor-pointer
                  ${
                    isLoggingOut
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }
                `}
                onClick={() => {

                  if (!isLoggingOut) {
                    setShowLogoutConfirm(true);
                  }

                }}
              >

                LogOut

              </li>

            )}


            {/* ORDERS */}

            <li
              className="
                w-full
                hover:bg-[#2f2f2f]
                px-[15px]
                py-[10px]
                cursor-pointer
              "
              onClick={() => {

                navigate("/order");

                setShowProfile(false);

              }}
            >
              Orders
            </li>


            {/* ABOUT */}

            <li
              className="
                w-full
                hover:bg-[#2f2f2f]
                px-[15px]
                py-[10px]
                cursor-pointer
              "
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
      {/* MOBILE TOP NAVBAR */}
      {/* ================================================= */}

      <div
        className="
          w-full
          h-[65px]
          bg-[#0b1518]
          fixed
          top-0
          left-0
          z-[9998]
          md:hidden
          flex
          items-center
          justify-between
          px-[15px]
          border-b
          border-white/10
        "
      >


        {/* ================= MENU ================= */}

        <button
          onClick={() =>
            setShowMobileMenu((prev) => !prev)
          }
          className="
            text-white
            flex
            items-center
            justify-center
            active:scale-90
            transition-all
          "
        >

          {showMobileMenu ? (

            <MdClose
              className="w-[32px] h-[32px]"
            />

          ) : (

            <MdMenu
              className="w-[32px] h-[32px]"
            />

          )}

        </button>


        {/* ================= LOGO ================= */}

        <div
          onClick={() => navigate("/")}
          className="
            flex
            items-center
            cursor-pointer
            select-none
            absolute
            left-[50%]
            -translate-x-[50%]
          "
        >

          <span
            className="
              text-white
              text-[25px]
              font-bold
              tracking-[-1px]
            "
          >
            One
          </span>

          <span
            className="
              text-[#49d9f0]
              text-[25px]
              font-bold
              tracking-[-1px]
            "
          >
            Cart
          </span>

        </div>


        {/* ================= RIGHT ICONS ================= */}

        <div
          className="
            flex
            items-center
            gap-[14px]
            ml-auto
          "
        >


          {/* SEARCH */}

          <button
            onClick={handleSearch}
            className="
              text-white
              flex
              items-center
              justify-center
              active:scale-90
              transition-all
            "
          >

            <IoSearchOutline
              className="
                w-[29px]
                h-[29px]
              "
            />

          </button>


          {/* LOGOUT */}

          <button
            onClick={() => {

              if (!isLoggingOut) {
                setShowLogoutConfirm(true);
              }

            }}
            className="
              text-white
              flex
              items-center
              justify-center
              active:scale-90
              transition-all
            "
          >

            <MdLogout
              className="
                w-[29px]
                h-[29px]
              "
            />

          </button>

        </div>

      </div>


      {/* ================================================= */}
      {/* MOBILE MENU */}
      {/* ================================================= */}

      {showMobileMenu && (

        <div
          className="
            fixed
            top-[65px]
            left-0
            w-full
            bg-[#0b1518]
            border-b
            border-white/10
            md:hidden
            z-[9997]
            shadow-[0_8px_20px_rgba(0,0,0,0.35)]
          "
        >

          <div className="flex flex-col px-[20px] py-[10px]">


            {/* HOME */}

            <button
              onClick={() =>
                handleMobileNavigation("/")
              }
              className="
                text-white
                text-left
                py-[14px]
                border-b
                border-white/10
                text-[15px]
              "
            >
              Home
            </button>


            {/* COLLECTIONS */}

            <button
              onClick={() =>
                handleMobileNavigation("/collections")
              }
              className="
                text-white
                text-left
                py-[14px]
                border-b
                border-white/10
                text-[15px]
              "
            >
              Collections
            </button>


            {/* WISHLIST */}

            <button
              onClick={() =>
                handleMobileNavigation("/wishlist")
              }
              className="
                text-white
                text-left
                py-[14px]
                border-b
                border-white/10
                text-[15px]
              "
            >
              Wishlist
            </button>


            {/* ORDERS */}

            <button
              onClick={() =>
                handleMobileNavigation("/order")
              }
              className="
                text-white
                text-left
                py-[14px]
                border-b
                border-white/10
                text-[15px]
              "
            >
              Orders
            </button>


            {/* ABOUT */}

            <button
              onClick={() =>
                handleMobileNavigation("/about")
              }
              className="
                text-white
                text-left
                py-[14px]
                text-[15px]
              "
            >
              About
            </button>

          </div>

        </div>

      )}


      {/* ================================================= */}
      {/* MOBILE LOGOUT CONFIRMATION */}
      {/* ================================================= */}

      {showLogoutConfirm && (

        <div
          className="
            fixed
            inset-0
            bg-black/60
            backdrop-blur-[3px]
            z-[10000]
            flex
            items-center
            justify-center
            px-[20px]
          "
        >

          <div
            className="
              w-full
              max-w-[330px]
              bg-[#101c1f]
              border
              border-white/10
              rounded-[16px]
              p-[25px]
              shadow-[0_10px_40px_rgba(0,0,0,0.5)]
            "
          >

            {/* ICON */}

            <div
              className="
                w-[55px]
                h-[55px]
                mx-auto
                rounded-full
                bg-[#49d9f0]/10
                border
                border-[#49d9f0]/20
                flex
                items-center
                justify-center
                mb-[15px]
              "
            >

              <MdLogout
                className="
                  text-[#49d9f0]
                  w-[28px]
                  h-[28px]
                "
              />

            </div>


            <h2
              className="
                text-white
                text-[20px]
                font-semibold
                text-center
              "
            >
              Logout?
            </h2>


            <p
              className="
                text-gray-400
                text-[14px]
                text-center
                mt-[8px]
                leading-[1.5]
              "
            >
              Are you sure you want to logout?
            </p>


            {/* BUTTONS */}

            <div
              className="
                flex
                items-center
                gap-[10px]
                mt-[22px]
              "
            >

              {/* CANCEL */}

              <button
                onClick={() =>
                  setShowLogoutConfirm(false)
                }
                disabled={isLoggingOut}
                className="
                  flex-1
                  h-[43px]
                  rounded-[9px]
                  border
                  border-white/15
                  text-white
                  text-[14px]
                  hover:bg-white/5
                  transition-all
                "
              >
                Cancel
              </button>


              {/* LOGOUT */}

              <button
                onClick={handleLogOut}
                disabled={isLoggingOut}
                className="
                  flex-1
                  h-[43px]
                  rounded-[9px]
                  bg-[#49d9f0]
                  text-black
                  font-semibold
                  text-[14px]
                  hover:opacity-90
                  transition-all
                  disabled:opacity-50
                "
              >

                {isLoggingOut
                  ? "Logging out..."
                  : "Logout"}

              </button>

            </div>

          </div>

        </div>

      )}


      {/* ================================================= */}
      {/* MOBILE BOTTOM NAVBAR */}
      {/* ================================================= */}

      <div
        className="
          w-full
          h-[75px]
          flex
          items-center
          justify-around
          fixed
          bottom-0
          left-0
          bg-[#191818]
          md:hidden
          text-sm
          z-[9999]
          border-t
          border-white/10
        "
      >


        {/* HOME */}

        <button
          className="
            text-white
            flex
            items-center
            justify-center
            flex-col
            gap-[2px]
          "
          onClick={() => navigate("/")}
        >

          <MdHome
            className="
              w-[28px]
              h-[28px]
              text-white
            "
          />

          Home

        </button>


        {/* COLLECTIONS */}

        <button
          className="
            text-white
            flex
            items-center
            justify-center
            flex-col
            gap-[2px]
          "
          onClick={() => navigate("/collections")}
        >

          <HiOutlineCollection
            className="
              w-[28px]
              h-[28px]
              text-white
            "
          />

          Collections

        </button>


        {/* WISHLIST */}

        <div className="relative">

          <button
            className="
              text-white
              flex
              items-center
              justify-center
              flex-col
              gap-[2px]
            "
            onClick={() => navigate("/wishlist")}
          >

            <FaHeart
              className="
                w-[25px]
                h-[25px]
                text-white
              "
            />

            <span>
              Wishlist
            </span>

          </button>


          {wishlist?.length > 0 && (

            <p
              className="
                absolute
                w-[18px]
                h-[18px]
                flex
                items-center
                justify-center
                bg-[#ff3f6c]
                text-white
                font-bold
                rounded-full
                text-[9px]
                -top-2
                -right-2
              "
            >
              {wishlist.length}
            </p>

          )}

        </div>


        {/* CONTACT */}

        <button
          className="
            text-white
            flex
            items-center
            justify-center
            flex-col
            gap-[2px]
          "
          onClick={() => navigate("/contact")}
        >

          <MdPermContactCalendar
            className="
              w-[28px]
              h-[28px]
              text-white
            "
          />

          Contact

        </button>


        {/* CART */}

        <div className="relative">

          <button
            className="
              text-white
              flex
              items-center
              justify-center
              flex-col
              gap-[2px]
            "
            onClick={() => navigate("/cart")}
          >

            <FiShoppingBag
              className="
                w-[28px]
                h-[28px]
                text-white
              "
            />

            Cart

          </button>


          <p
            className="
              absolute
              w-[18px]
              h-[18px]
              flex
              items-center
              justify-center
              bg-white
              text-black
              font-bold
              rounded-full
              text-[9px]
              -top-2
              -right-2
            "
          >
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