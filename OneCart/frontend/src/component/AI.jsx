import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ai from "../assets/ai.png";

import { shopDataContext } from "../Context/ShopContext";


function AI() {

  const navigate = useNavigate();


  // ================= SHOP CONTEXT =================

  const {
    setShowSearch
  } = useContext(shopDataContext);


  // ================= SPEAK FUNCTION =================

  const speak = (text) => {

    const speech =
      new SpeechSynthesisUtterance(text);

    speech.lang = "en-IN";

    speech.rate = 1;

    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

  };


  // ================= SPEECH RECOGNITION =================

  const startSpeechRecognition = () => {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;


    // ================= BROWSER SUPPORT =================

    if (!SpeechRecognition) {

      alert(
        "Speech Recognition is not supported in this browser."
      );

      return;

    }


    // ================= CREATE RECOGNITION =================

    const recognition =
      new SpeechRecognition();


    recognition.lang = "en-IN";

    recognition.continuous = false;

    recognition.interimResults = false;


    // ================= START MICROPHONE =================

    recognition.start();


    // ================= USER SPEECH =================

    recognition.onresult = (event) => {

      const transcript =
        event.results[0][0].transcript
          .trim()
          .toLowerCase();


      console.log(
        "User said:",
        transcript
      );


      // =================================================
      // HOME
      // =================================================

      if (

        transcript.includes("home") ||

        transcript.includes("homepage") ||

        transcript.includes("main page")

      ) {

        speak("Opening home");

        navigate("/");

      }


      // =================================================
      // COLLECTIONS
      // =================================================

      else if (

        transcript.includes("collection") ||

        transcript.includes("collections")

      ) {

        speak(
          "Opening collections"
        );

        navigate("/collections");

      }


      // =================================================
      // PRODUCTS
      // =================================================

      else if (

        transcript.includes("product") ||

        transcript.includes("products")

      ) {

        speak(
          "Opening products"
        );

        navigate("/product");

      }


      // =================================================
      // CART
      // =================================================

      else if (

        transcript.includes("cart") ||

        transcript.includes("shopping cart")

      ) {

        speak(
          "Opening your cart"
        );

        navigate("/cart");

      }


      // =================================================
      // WISHLIST
      // =================================================

      else if (

        transcript.includes("wishlist") ||

        transcript.includes("wish list")

      ) {

        speak(
          "Opening your wishlist"
        );

        navigate("/wishlist");

      }


      // =================================================
      // ORDERS
      // =================================================

      else if (

        transcript.includes("order") ||

        transcript.includes("orders") ||

        transcript.includes("track my order") ||

        transcript.includes("track order")

      ) {

        speak(
          "Opening your orders"
        );

        navigate("/order");

      }


      // =================================================
      // CHECKOUT
      // =================================================

      else if (

        transcript.includes("checkout") ||

        transcript.includes("place order") ||

        transcript.includes("buy now")

      ) {

        speak(
          "Opening checkout"
        );

        navigate("/placeorder");

      }


      // =================================================
      // ABOUT
      // =================================================

      else if (

        transcript.includes("about") ||

        transcript.includes("about us")

      ) {

        speak(
          "Opening about page"
        );

        navigate("/about");

      }


      // =================================================
      // CONTACT
      // =================================================

      else if (

        transcript.includes("contact") ||

        transcript.includes("contact us")

      ) {

        speak(
          "Opening contact page"
        );

        navigate("/contact");

      }


      // =================================================
      // SEARCH
      // =================================================

      else if (

        transcript.includes("search") ||

        transcript.includes("open search")

      ) {

        speak(
          "Opening search"
        );


        // OPEN SEARCH

        setShowSearch(true);


        // GO TO COLLECTIONS

        navigate("/collections");

      }


      // =================================================
      // NOTHING MATCHED
      // =================================================

      else {

        speak(
          "Sorry, I don't understand. Please tell me where you want to go."
        );

      }

    };


    // ================= ERROR =================

    recognition.onerror = (event) => {

      console.log(
        "Speech Recognition Error:",
        event.error
      );

    };


    // ================= END =================

    recognition.onend = () => {

      console.log(
        "Speech recognition stopped"
      );

    };

  };


  // =================================================
  // AI UI
  // =================================================

  return (

    <div
      className="
        fixed
        lg:bottom-[20px]
        md:bottom-[40px]
        bottom-[80px]
        left-[2%]
        z-[9999]
      "
      onClick={startSpeechRecognition}
    >

      <img
        src={ai}
        alt="AI Assistant"
        className="
         w-[60px] md:w-[100px]
          cursor-pointer
          hover:scale-110
          transition-all
          duration-300
        "
      />

    </div>

  );

}


export default AI;