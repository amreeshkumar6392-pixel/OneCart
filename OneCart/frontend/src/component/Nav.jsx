import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoSearchOutline, IoClose } from "react-icons/io5";
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

import logo from "../assets/logo.png";

import { userDataContext } from "../Context/UserContext";
import { authDataContext } from "../Context/AuthContext";
import { shopDataContext } from "../Context/ShopContext";

import axios from "axios";


function Nav() {
  const navigate = useNavigate();

  const { userData, setUserData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
  const {
    cartCount,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  } = useContext(shopDataContext);


  const [showProfile, setShowProfile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Mobile search open/close
  const [showMobileSearch, setShowMobileSearch] = useState(false);


  // =========================
  // LOGOUT
  // =========================

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

      setUserData(null);
      setShowProfile(false);
      setShowMobileMenu(false);
      setShowLogoutConfirm(false);

      navigate("/login", { replace: true });

    } catch (error) {
      console.log(
        "Logout Error:",
        error.response?.data || error.message
      );
    } finally {
      setIsLoggingOut(false);
    }
  };


  // =========================
  // MOBILE SEARCH
  // =========================

  const handleMobileSearch = (e) => {
    const value = e.target.value;

    setSearch(value);
    setShowSearch(true);

    if (value.trim()) {
      navigate("/collections");
    }
  };


  const clearMobileSearch = () => {
    setSearch("");
    setShowSearch(false);
  };


  return (
    <>
      {/* ================================================= */}
      {/* DESKTOP NAVBAR */}
      {/* ================================================= */}

      <div
        className="
          hidden
          md:flex
          fixed
          top-0
          left-0
          w-full
          h-[70px]
          bg-[#0b1518]
          items-center
          justify-between
          px-[5%]
          z-[9999]
          shadow-lg
        "
      >

        {/* LOGO */}
        <div
          className="cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="OneCart"
            className="w-[120px]"
          />
        </div>


        {/* DESKTOP MENU */}
        <div
          className="
            flex
            items-center
            gap-[35px]
            text-white
            text-[16px]
          "
        >

          <p
            className="cursor-pointer hover:text-[#bff1f9]"
            onClick={() => navigate("/")}
          >
            Home
          </p>

          <p
            className="cursor-pointer hover:text-[#bff1f9]"
            onClick={() => navigate("/collections")}
          >
            Collections
          </p>

          <p
            className="cursor-pointer hover:text-[#bff1f9]"
            onClick={() => navigate("/about")}
          >
            About
          </p>

          <p
            className="cursor-pointer hover:text-[#bff1f9]"
            onClick={() => navigate("/contact")}
          >
            Contact
          </p>

        </div>


        {/* DESKTOP RIGHT SIDE */}
        <div
          className="
            flex
            items-center
            gap-[20px]
            text-white
          "
        >

          {/* SEARCH */}
          <button
            onClick={() => {
              setShowSearch(true);
              navigate("/collections");
            }}
          >
            <IoSearchOutline
              className="w-[25px] h-[25px]"
            />
          </button>


          {/* PROFILE */}
          <div className="relative">

            <button
              onClick={() =>
                setShowProfile((prev) => !prev)
              }
            >
              <IoPersonOutline
                className="w-[24px] h-[24px]"
              />
            </button>


            {showProfile && (
              <div
                className="
                  absolute
                  right-0
                  top-[45px]
                  w-[180px]
                  bg-[#111c1f]
                  border
                  border-white/10
                  rounded-[8px]
                  overflow-hidden
                  shadow-xl
                "
              >

                <button
                  onClick={() => navigate("/profile")}
                  className="
                    w-full
                    text-left
                    px-[15px]
                    py-[12px]
                    text-white
                    hover:bg-white/10
                  "
                >
                  Profile
                </button>


                <button
                  onClick={() => navigate("/orders")}
                  className="
                    w-full
                    text-left
                    px-[15px]
                    py-[12px]
                    text-white
                    hover:bg-white/10
                  "
                >
                  Orders
                </button>


                <button
                  onClick={() =>
                    setShowLogoutConfirm(true)
                  }
                  className="
                    w-full
                    text-left
                    px-[15px]
                    py-[12px]
                    text-red-400
                    hover:bg-white/10
                  "
                >
                  Logout
                </button>

              </div>
            )}

          </div>


          {/* WISHLIST */}
          <button
            onClick={() => navigate("/wishlist")}
          >
            <FaHeart
              className="w-[22px] h-[22px]"
            />
          </button>


          {/* CART */}
          <button
            onClick={() => navigate("/cart")}
            className="relative"
          >

            <FiShoppingBag
              className="w-[25px] h-[25px]"
            />

            {cartCount > 0 && (
              <span
                className="
                  absolute
                  -top-[8px]
                  -right-[8px]
                  w-[18px]
                  h-[18px]
                  rounded-full
                  bg-red-500
                  text-white
                  text-[10px]
                  flex
                  items-center
                  justify-center
                "
              >
                {cartCount}
              </span>
            )}

          </button>


          {/* LOGOUT */}
          <button
            onClick={() =>
              setShowLogoutConfirm(true)
            }
          >
            <MdLogout
              className="w-[25px] h-[25px]"
            />
          </button>

        </div>

      </div>


      {/* ================================================= */}
      {/* MOBILE TOP NAVBAR */}
      {/* ================================================= */}

      <div
        className="
          md:hidden
          fixed
          top-0
          left-0
          w-full
          h-[65px]
          bg-[#0b1518]
          z-[9999]
          flex
          items-center
          justify-between
          px-[15px]
          shadow-lg
        "
      >

        {/* HAMBURGER */}
        <button
          onClick={() => {
            setShowMobileMenu((prev) => !prev);
            setShowMobileSearch(false);
          }}
          className="
            w-[40px]
            h-[40px]
            flex
            items-center
            justify-center
            text-white
          "
        >

          {showMobileMenu ? (
            <MdClose
              className="w-[30px] h-[30px]"
            />
          ) : (
            <MdMenu
              className="w-[30px] h-[30px]"
            />
          )}

        </button>


        {/* ONECART */}
        <div
          onClick={() => navigate("/")}
          className="
            absolute
            left-1/2
            -translate-x-1/2
            cursor-pointer
          "
        >

          <p
            className="
              text-white
              text-[22px]
              font-semibold
              tracking-wide
            "
          >
            OneCart
          </p>

        </div>


        {/* RIGHT SIDE */}
        <div
          className="
            flex
            items-center
            gap-[12px]
          "
        >

          {/* MOBILE SEARCH */}
          <button
            onClick={() => {
              setShowMobileSearch((prev) => !prev);
              setShowMobileMenu(false);
            }}
            className="
              w-[40px]
              h-[40px]
              flex
              items-center
              justify-center
              text-white
            "
          >

            {showMobileSearch ? (
              <IoClose
                className="w-[29px] h-[29px]"
              />
            ) : (
              <IoSearchOutline
                className="w-[29px] h-[29px]"
              />
            )}

          </button>


          {/* MOBILE LOGOUT */}
          <button
            onClick={() => {
              setShowLogoutConfirm(true);
              setShowMobileMenu(false);
              setShowMobileSearch(false);
            }}
            className="
              w-[40px]
              h-[40px]
              flex
              items-center
              justify-center
              text-white
            "
          >

            <MdLogout
              className="w-[28px] h-[28px]"
            />

          </button>

        </div>

      </div>


      {/* ================================================= */}
      {/* MOBILE SEARCH BAR */}
      {/* ================================================= */}

      {showMobileSearch && (
        <div
          className="
            fixed
            top-[65px]
            left-0
            w-full
            h-[60px]
            bg-[#0b1518]
            px-[15px]
            flex
            items-center
            z-[9998]
            border-b
            border-white/10
            md:hidden
          "
        >

          <div
            className="
              w-full
              h-[42px]
              bg-white/[0.08]
              border
              border-white/10
              rounded-[10px]
              flex
              items-center
              px-[12px]
            "
          >

            {/* SEARCH ICON */}
            <IoSearchOutline
              className="
                w-[21px]
                h-[21px]
                text-[#bff1f9]
                flex-shrink-0
              "
            />


            {/* SEARCH INPUT */}
            <input
              type="text"
              autoFocus
              placeholder="Search products..."
              value={search}
              onChange={handleMobileSearch}
              className="
                w-full
                h-full
                bg-transparent
                outline-none
                px-[10px]
                text-white
                text-[14px]
                placeholder:text-gray-500
              "
            />


            {/* CLEAR SEARCH */}
            {search && (
              <button
                onClick={clearMobileSearch}
                className="
                  text-gray-400
                  flex-shrink-0
                "
              >

                <IoClose
                  className="
                    w-[20px]
                    h-[20px]
                  "
                />

              </button>
            )}

          </div>

        </div>
      )}


      {/* ================================================= */}
      {/* MOBILE MENU */}
      {/* ================================================= */}

      {showMobileMenu && (
        <div
          className="
            md:hidden
            fixed
            top-[65px]
            left-0
            w-full
            bg-[#0b1518]
            border-t
            border-white/10
            z-[9997]
            shadow-xl
          "
        >

          <div
            className="
              flex
              flex-col
              px-[20px]
              py-[15px]
            "
          >

            {/* HOME */}
            <button
              onClick={() => {
                navigate("/");
                setShowMobileMenu(false);
              }}
              className="
                flex
                items-center
                gap-[15px]
                py-[15px]
                text-white
                border-b
                border-white/10
                text-left
              "
            >

              <MdHome
                className="
                  w-[24px]
                  h-[24px]
                "
              />

              Home

            </button>


            {/* COLLECTIONS */}
            <button
              onClick={() => {
                navigate("/collections");
                setShowMobileMenu(false);
              }}
              className="
                flex
                items-center
                gap-[15px]
                py-[15px]
                text-white
                border-b
                border-white/10
                text-left
              "
            >

              <HiOutlineCollection
                className="
                  w-[24px]
                  h-[24px]
                "
              />

              Collections

            </button>


            {/* PROFILE */}
            <button
              onClick={() => {
                navigate("/profile");
                setShowMobileMenu(false);
              }}
              className="
                flex
                items-center
                gap-[15px]
                py-[15px]
                text-white
                border-b
                border-white/10
                text-left
              "
            >

              <IoPersonOutline
                className="
                  w-[24px]
                  h-[24px]
                "
              />

              Profile

            </button>


            {/* WISHLIST */}
            <button
              onClick={() => {
                navigate("/wishlist");
                setShowMobileMenu(false);
              }}
              className="
                flex
                items-center
                gap-[15px]
                py-[15px]
                text-white
                border-b
                border-white/10
                text-left
              "
            >

              <FaHeart
                className="
                  w-[22px]
                  h-[22px]
                "
              />

              Wishlist

            </button>


            {/* CART */}
            <button
              onClick={() => {
                navigate("/cart");
                setShowMobileMenu(false);
              }}
              className="
                flex
                items-center
                gap-[15px]
                py-[15px]
                text-white
                border-b
                border-white/10
                text-left
              "
            >

              <FiShoppingBag
                className="
                  w-[24px]
                  h-[24px]
                "
              />

              <span>
                Cart
              </span>

              {cartCount > 0 && (
                <span
                  className="
                    ml-auto
                    bg-red-500
                    text-white
                    text-[11px]
                    min-w-[22px]
                    h-[22px]
                    rounded-full
                    flex
                    items-center
                    justify-center
                  "
                >
                  {cartCount}
                </span>
              )}

            </button>


            {/* CONTACT */}
            <button
              onClick={() => {
                navigate("/contact");
                setShowMobileMenu(false);
              }}
              className="
                flex
                items-center
                gap-[15px]
                py-[15px]
                text-white
                text-left
              "
            >

              <MdPermContactCalendar
                className="
                  w-[24px]
                  h-[24px]
                "
              />

              Contact

            </button>

          </div>

        </div>
      )}


      {/* ================================================= */}
      {/* LOGOUT CONFIRMATION MODAL */}
      {/* ================================================= */}

      {showLogoutConfirm && (
        <div
          className="
            fixed
            inset-0
            bg-black/70
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
              max-w-[380px]
              bg-[#101b1e]
              rounded-[14px]
              p-[25px]
              border
              border-white/10
              shadow-2xl
            "
          >

            <h2
              className="
                text-white
                text-[20px]
                font-semibold
                mb-[10px]
              "
            >
              Logout
            </h2>


            <p
              className="
                text-gray-400
                text-[14px]
                mb-[25px]
              "
            >
              Are you sure you want to logout?
            </p>


            <div
              className="
                flex
                gap-[10px]
                justify-end
              "
            >

              {/* CANCEL */}
              <button
                onClick={() =>
                  setShowLogoutConfirm(false)
                }
                disabled={isLoggingOut}
                className="
                  px-[18px]
                  py-[10px]
                  rounded-[8px]
                  bg-white/10
                  text-white
                  text-[14px]
                  hover:bg-white/20
                "
              >
                Cancel
              </button>


              {/* LOGOUT */}
              <button
                onClick={handleLogOut}
                disabled={isLoggingOut}
                className="
                  px-[18px]
                  py-[10px]
                  rounded-[8px]
                  bg-red-500
                  text-white
                  text-[14px]
                  hover:bg-red-600
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
          w-[100vw]
          h-[90px]
          flex
          items-center
          justify-center
          bottom-0
          left-0
          fixed
          bg-[#191818]
          md:hidden
          text-sm
          px-[20px]
          gap-3.5
          z-[9996]
        "
      >

        {/* HOME */}
        <button
          onClick={() => navigate("/")}
          className="
            text-white
            flex
            items-center
            justify-center
            flex-col
            gap-[2px]
          "
        >

          <MdHome
            className="
              w-[25px]
              h-[25px]
            "
          />

          <span>
            Home
          </span>

        </button>


        {/* COLLECTION */}
        <button
          onClick={() => navigate("/collections")}
          className="
            text-white
            flex
            items-center
            justify-center
            flex-col
            gap-[2px]
          "
        >

          <HiOutlineCollection
            className="
              w-[25px]
              h-[25px]
            "
          />

          <span>
            Collection
          </span>

        </button>


        {/* CART */}
        <button
          onClick={() => navigate("/cart")}
          className="
            text-white
            flex
            items-center
            justify-center
            flex-col
            gap-[2px]
            relative
          "
        >

          <FiShoppingBag
            className="
              w-[25px]
              h-[25px]
            "
          />

          {cartCount > 0 && (
            <span
              className="
                absolute
                top-[-5px]
                right-[-5px]
                bg-red-500
                text-white
                w-[17px]
                h-[17px]
                rounded-full
                text-[9px]
                flex
                items-center
                justify-center
              "
            >
              {cartCount}
            </span>
          )}

          <span>
            Cart
          </span>

        </button>


        {/* WISHLIST */}
        <button
          onClick={() => navigate("/wishlist")}
          className="
            text-white
            flex
            items-center
            justify-center
            flex-col
            gap-[2px]
          "
        >

          <FaHeart
            className="
              w-[23px]
              h-[23px]
            "
          />

          <span>
            Wishlist
          </span>

        </button>


        {/* PROFILE */}
        <button
          onClick={() => navigate("/profile")}
          className="
            text-white
            flex
            items-center
            justify-center
            flex-col
            gap-[2px]
          "
        >

          <IoPersonOutline
            className="
              w-[25px]
              h-[25px]
            "
          />

          <span>
            Profile
          </span>

        </button>

      </div>

    </>
  );
}

export default Nav;