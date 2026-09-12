import React, { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

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

  const { userData } = useContext(userDataContext);

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


  return (

    <>

      {/* ================= NAVBAR ================= */}

      {userData && !isNotFoundPage && <Nav />}


      {/* ================= TOAST ================= */}

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


      {/* ================= ROUTES ================= */}

      <Routes>


        {/* ================= LOGIN ================= */}

        <Route
          path="/login"
          element={

            userData ? (

              <Navigate
                to={location.state?.from || "/"}
              />

            ) : (

              <Login />

            )

          }
        />


        {/* ================= SIGNUP ================= */}

        <Route
          path="/signup"
          element={

            userData ? (

              <Navigate
                to={location.state?.from || "/"}
              />

            ) : (

              <Registration />

            )

          }
        />


        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={

            userData ? (

              <Home />

            ) : (

              <Navigate
                to="/login"
                state={{
                  from: location.pathname
                }}
              />

            )

          }
        />


        {/* ================= ABOUT ================= */}

        <Route
          path="/about"
          element={

            userData ? (

              <About />

            ) : (

              <Navigate
                to="/login"
                state={{
                  from: location.pathname
                }}
              />

            )

          }
        />


        {/* ================= COLLECTIONS ================= */}

        <Route
          path="/collections"
          element={

            userData ? (

              <Collections />

            ) : (

              <Navigate
                to="/login"
                state={{
                  from: location.pathname
                }}
              />

            )

          }
        />


        {/* ================= PRODUCT ================= */}

        <Route
          path="/product"
          element={

            userData ? (

              <Product />

            ) : (

              <Navigate
                to="/login"
                state={{
                  from: location.pathname
                }}
              />

            )

          }
        />


        {/* ================= CONTACT ================= */}

        <Route
          path="/contact"
          element={

            userData ? (

              <Contact />

            ) : (

              <Navigate
                to="/login"
                state={{
                  from: location.pathname
                }}
              />

            )

          }
        />


        {/* ================= PRODUCT DETAIL ================= */}

        <Route
          path="/productdetail/:productId"
          element={

            userData ? (

              <ProductDetail />

            ) : (

              <Navigate
                to="/login"
                state={{
                  from: location.pathname
                }}
              />

            )

          }
        />


        {/* ================= CART ================= */}

        <Route
          path="/cart"
          element={

            userData ? (

              <Cart />

            ) : (

              <Navigate
                to="/login"
                state={{
                  from: location.pathname
                }}
              />

            )

          }
        />


        {/* ================= WISHLIST ================= */}

        <Route
          path="/wishlist"
          element={

            userData ? (

              <Wishlist />

            ) : (

              <Navigate
                to="/login"
                state={{
                  from: location.pathname
                }}
              />

            )

          }
        />


        {/* ================= PLACE ORDER ================= */}

        <Route
          path="/placeorder"
          element={

            userData ? (

              <PlaceOrder />

            ) : (

              <Navigate
                to="/login"
                state={{
                  from: location.pathname
                }}
              />

            )

          }
        />


        {/* ================= ORDERS ================= */}

        <Route
          path="/order"
          element={

            userData ? (

              <Order />

            ) : (

              <Navigate
                to="/login"
                state={{
                  from: location.pathname
                }}
              />

            )

          }
        />


        {/* ================= NOT FOUND ================= */}

        <Route
          path="*"
          element={<NotFound />}
        />


      </Routes>


      {/* ================= AI ASSISTANT ================= */}

      <AI />


    </>

  );

}


export default App;