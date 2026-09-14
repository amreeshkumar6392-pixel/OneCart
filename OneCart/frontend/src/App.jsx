import React, { useContext } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Nav from "./component/Nav";

import { userDataContext } from "./Context/UserContext.jsx";

import Collections from "./pages/Collections.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import Contact from "./pages/Contact.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Cart from "./pages/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Order from "./pages/order.jsx";
import NotFound from "./pages/NotFound.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AI from "./component/AI.jsx";

function App() {

  // ================= USER CONTEXT =================

  const {
    userData,
    loading,
  } = useContext(userDataContext);


  // ================= LOCATION =================

  const location = useLocation();


  // ================= VALID PATHS =================

  const validPaths = [
    "/",
    "/login",
    "/signup",
    "/about",
    "/collections",
    "/product",
    "/contact",
    "/cart",
    "/wishlist",
    "/placeorder",
    "/order",
  ];


  // ================= PRODUCT DETAIL =================

  const isProductDetailPage =
    location.pathname.startsWith("/productdetail/");


  // ================= NOT FOUND =================

  const isNotFoundPage =
    !validPaths.includes(location.pathname) &&
    !isProductDetailPage;


  // ================= LOADING =================

  if (loading) {

    return (
      <div className="w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center">

        <div className="text-center">

          <div className="w-[45px] h-[45px] border-[4px] border-[#ffffff30] border-t-[#9de7f2] rounded-full animate-spin mx-auto"></div>

          <p className="text-white text-[14px] mt-[15px]">
            Loading...
          </p>

        </div>

      </div>
    );

  }


  return (
    <>

      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      {!isNotFoundPage && <Nav />}


      {/* ================================================= */}
      {/* TOAST */}
      {/* ================================================= */}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />


      {/* ================================================= */}
      {/* ROUTES */}
      {/* ================================================= */}

      <Routes>


        {/* ================================================= */}
        {/* LOGIN */}
        {/* ================================================= */}

        <Route
          path="/login"
          element={
            userData ? (
              <Navigate
                to={location.state?.from || "/"}
                replace
              />
            ) : (
              <Login />
            )
          }
        />


        {/* ================================================= */}
        {/* SIGNUP */}
        {/* ================================================= */}

        <Route
          path="/signup"
          element={
            userData ? (
              <Navigate
                to="/"
                replace
              />
            ) : (
              <Registration />
            )
          }
        />


        {/* ================================================= */}
        {/* HOME - PUBLIC */}
        {/* ================================================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ================================================= */}
        {/* ABOUT - PUBLIC */}
        {/* ================================================= */}

        <Route
          path="/about"
          element={<About />}
        />


        {/* ================================================= */}
        {/* COLLECTIONS - PUBLIC */}
        {/* ================================================= */}

        <Route
          path="/collections"
          element={<Collections />}
        />


        {/* ================================================= */}
        {/* PRODUCT - PUBLIC */}
        {/* ================================================= */}

        <Route
          path="/product"
          element={<Product />}
        />


        {/* ================================================= */}
        {/* CONTACT - PUBLIC */}
        {/* ================================================= */}

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* ================================================= */}
        {/* PRODUCT DETAIL - PUBLIC */}
        {/* ================================================= */}

        <Route
          path="/productdetail/:productId"
          element={<ProductDetail />}
        />


        {/* ================================================= */}
        {/* CART - PROTECTED */}
        {/* ================================================= */}

        <Route
          path="/cart"
          element={
            userData ? (
              <Cart />
            ) : (
              <Navigate
                to="/login"
                state={{
                  from: location.pathname,
                }}
                replace
              />
            )
          }
        />


        {/* ================================================= */}
        {/* WISHLIST - PROTECTED */}
        {/* ================================================= */}

        <Route
          path="/wishlist"
          element={
            userData ? (
              <Wishlist />
            ) : (
              <Navigate
                to="/login"
                state={{
                  from: location.pathname,
                }}
                replace
              />
            )
          }
        />


        {/* ================================================= */}
        {/* PLACE ORDER - PROTECTED */}
        {/* ================================================= */}

        <Route
          path="/placeorder"
          element={
            userData ? (
              <PlaceOrder />
            ) : (
              <Navigate
                to="/login"
                state={{
                  from: location.pathname,
                }}
                replace
              />
            )
          }
        />


        {/* ================================================= */}
        {/* ORDERS - PROTECTED */}
        {/* ================================================= */}

        <Route
          path="/order"
          element={
            userData ? (
              <Order />
            ) : (
              <Navigate
                to="/login"
                state={{
                  from: location.pathname,
                }}
                replace
              />
            )
          }
        />


        {/* ================================================= */}
        {/* NOT FOUND */}
        {/* ================================================= */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>


      {/* ================================================= */}
      {/* AI ASSISTANT */}
      {/* ================================================= */}

      <AI />

    </>
  );
}

export default App;