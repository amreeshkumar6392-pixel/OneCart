import React, { useContext, useState } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import { FiImage, FiUploadCloud } from "react-icons/fi";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";

function Add() {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subcategory, setSubCategory] = useState("TopWear");
  const [description, setDescription] = useState("");
  const [bestseller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const { serverUrl } = useContext(authDataContext);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subcategory", subcategory);
      formData.append("bestSeller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      formData.append("image4", image4);

      console.log("Checkbox value:", bestseller);

      const result = await axios.post(
        serverUrl + "/api/product/addproduct",
        formData,
        { withCredentials: true }
      );

      console.log(result.data);

      if (result.data) {
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setBestSeller(false);
        setCategory("Men");
        setSubCategory("TopWear");
        setSizes([]);
      }
    } catch (error) {
      console.log(error);
      console.log(error.response?.data);
    }
  };

  const selectSize = (size) => {
    setSizes((prev) =>
      prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size]
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#f5f7f9] text-gray-800 overflow-x-hidden">

      <Nav />
      <Sidebar />

      {/* Main Content */}
      <div className="w-[82%] min-h-screen absolute right-0 top-0 pt-[70px] overflow-x-hidden">

        <form
          onSubmit={handleAddProduct}
          className="w-full max-w-[1200px] mx-auto box-border px-[20px] md:px-[40px] lg:px-[60px] py-[35px] md:py-[45px]"
        >

          {/* ================= HEADER ================= */}
          <div className="mb-[30px]">

            <p className="text-[#1a6f85] text-[11px] tracking-[3px] uppercase font-bold">
              Product Management
            </p>

            <h1 className="text-[#172554] text-[30px] md:text-[38px] font-semibold tracking-tight mt-[5px]">
              Add Product
            </h1>

            <p className="text-gray-500 text-[14px] mt-[5px]">
              Create and publish a new product to your store
            </p>

          </div>


          {/* ================= MAIN CARD ================= */}
          <div className="w-full bg-white rounded-[18px] border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">


            {/* ================= IMAGE SECTION ================= */}
            <div className="p-[22px] md:p-[30px] border-b border-gray-100">

              <div className="mb-[20px]">

                <h2 className="text-[#172554] text-[18px] md:text-[20px] font-semibold">
                  Product Images
                </h2>

                <p className="text-gray-400 text-[13px] mt-[4px]">
                  Upload four high-quality images of your product
                </p>

              </div>


              {/* IMAGE UPLOAD CARDS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-[12px] md:gap-[15px]">


                {/* ================= IMAGE 1 ================= */}
                <label
                  htmlFor="image1"
                  className="group w-full h-[110px] md:h-[125px]
                  rounded-[12px]
                  border border-gray-200
                  bg-gray-50
                  hover:border-[#1a6f85]
                  hover:bg-[#1a6f85]/5
                  cursor-pointer
                  overflow-hidden
                  flex items-center justify-center
                  transition-all duration-300"
                >

                  {image1 ? (

                    <img
                      src={URL.createObjectURL(image1)}
                      alt=""
                      className="w-full h-full object-cover"
                    />

                  ) : (

                    <div className="flex flex-col items-center justify-center gap-[7px]">

                      <div
                        className="w-[42px] h-[42px]
                        rounded-[10px]
                        bg-white
                        border border-gray-200
                        flex items-center justify-center
                        group-hover:bg-[#1a6f85]
                        transition-all duration-300"
                      >

                        <FiUploadCloud
                          className="text-[#1a6f85] group-hover:text-white text-[21px] transition-all"
                        />

                      </div>

                      <p className="text-[11px] text-gray-500 font-medium">
                        Upload Image
                      </p>

                      <span className="text-[9px] text-gray-400">
                        Image 01
                      </span>

                    </div>

                  )}

                  <input
                    type="file"
                    id="image1"
                    hidden
                    onChange={(e) => setImage1(e.target.files[0])}
                    required
                  />

                </label>


                {/* ================= IMAGE 2 ================= */}
                <label
                  htmlFor="image2"
                  className="group w-full h-[110px] md:h-[125px]
                  rounded-[12px]
                  border border-gray-200
                  bg-gray-50
                  hover:border-[#1a6f85]
                  hover:bg-[#1a6f85]/5
                  cursor-pointer
                  overflow-hidden
                  flex items-center justify-center
                  transition-all duration-300"
                >

                  {image2 ? (

                    <img
                      src={URL.createObjectURL(image2)}
                      alt=""
                      className="w-full h-full object-cover"
                    />

                  ) : (

                    <div className="flex flex-col items-center justify-center gap-[7px]">

                      <div
                        className="w-[42px] h-[42px]
                        rounded-[10px]
                        bg-white
                        border border-gray-200
                        flex items-center justify-center
                        group-hover:bg-[#1a6f85]
                        transition-all duration-300"
                      >

                        <FiImage
                          className="text-[#1a6f85] group-hover:text-white text-[21px] transition-all"
                        />

                      </div>

                      <p className="text-[11px] text-gray-500 font-medium">
                        Upload Image
                      </p>

                      <span className="text-[9px] text-gray-400">
                        Image 02
                      </span>

                    </div>

                  )}

                  <input
                    type="file"
                    id="image2"
                    hidden
                    onChange={(e) => setImage2(e.target.files[0])}
                    required
                  />

                </label>


                {/* ================= IMAGE 3 ================= */}
                <label
                  htmlFor="image3"
                  className="group w-full h-[110px] md:h-[125px]
                  rounded-[12px]
                  border border-gray-200
                  bg-gray-50
                  hover:border-[#1a6f85]
                  hover:bg-[#1a6f85]/5
                  cursor-pointer
                  overflow-hidden
                  flex items-center justify-center
                  transition-all duration-300"
                >

                  {image3 ? (

                    <img
                      src={URL.createObjectURL(image3)}
                      alt=""
                      className="w-full h-full object-cover"
                    />

                  ) : (

                    <div className="flex flex-col items-center justify-center gap-[7px]">

                      <div
                        className="w-[42px] h-[42px]
                        rounded-[10px]
                        bg-white
                        border border-gray-200
                        flex items-center justify-center
                        group-hover:bg-[#1a6f85]
                        transition-all duration-300"
                      >

                        <FiImage
                          className="text-[#1a6f85] group-hover:text-white text-[21px] transition-all"
                        />

                      </div>

                      <p className="text-[11px] text-gray-500 font-medium">
                        Upload Image
                      </p>

                      <span className="text-[9px] text-gray-400">
                        Image 03
                      </span>

                    </div>

                  )}

                  <input
                    type="file"
                    id="image3"
                    hidden
                    onChange={(e) => setImage3(e.target.files[0])}
                    required
                  />

                </label>


                {/* ================= IMAGE 4 ================= */}
                <label
                  htmlFor="image4"
                  className="group w-full h-[110px] md:h-[125px]
                  rounded-[12px]
                  border border-gray-200
                  bg-gray-50
                  hover:border-[#1a6f85]
                  hover:bg-[#1a6f85]/5
                  cursor-pointer
                  overflow-hidden
                  flex items-center justify-center
                  transition-all duration-300"
                >

                  {image4 ? (

                    <img
                      src={URL.createObjectURL(image4)}
                      alt=""
                      className="w-full h-full object-cover"
                    />

                  ) : (

                    <div className="flex flex-col items-center justify-center gap-[7px]">

                      <div
                        className="w-[42px] h-[42px]
                        rounded-[10px]
                        bg-white
                        border border-gray-200
                        flex items-center justify-center
                        group-hover:bg-[#1a6f85]
                        transition-all duration-300"
                      >

                        <FiImage
                          className="text-[#1a6f85] group-hover:text-white text-[21px] transition-all"
                        />

                      </div>

                      <p className="text-[11px] text-gray-500 font-medium">
                        Upload Image
                      </p>

                      <span className="text-[9px] text-gray-400">
                        Image 04
                      </span>

                    </div>

                  )}

                  <input
                    type="file"
                    id="image4"
                    hidden
                    onChange={(e) => setImage4(e.target.files[0])}
                    required
                  />

                </label>

              </div>

            </div>


            {/* ================= PRODUCT INFORMATION ================= */}
            <div className="p-[22px] md:p-[30px] border-b border-gray-100">

              <div className="mb-[22px]">

                <h2 className="text-[#172554] text-[18px] md:text-[20px] font-semibold">
                  Product Information
                </h2>

                <p className="text-gray-400 text-[13px] mt-[4px]">
                  Enter the basic details of your product
                </p>

              </div>


              {/* PRODUCT NAME */}
              <div className="mb-[24px]">

                <label className="block text-[13px] font-semibold text-gray-600 mb-[8px]">
                  Product Name
                </label>

                <input
                  type="text"
                  placeholder="Enter product name"
                  className="w-full h-[48px]
                  rounded-[10px]
                  border border-gray-200
                  bg-gray-50
                  px-[15px]
                  text-[14px]
                  text-gray-700
                  outline-none
                  focus:border-[#1a6f85]
                  focus:bg-white
                  transition-all"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />

              </div>


              {/* DESCRIPTION */}
              <div>

                <label className="block text-[13px] font-semibold text-gray-600 mb-[8px]">
                  Product Description
                </label>

                <textarea
                  placeholder="Write a detailed description of your product..."
                  className="w-full min-h-[120px]
                  rounded-[10px]
                  border border-gray-200
                  bg-gray-50
                  px-[15px]
                  py-[13px]
                  text-[14px]
                  text-gray-700
                  outline-none
                  resize-none
                  focus:border-[#1a6f85]
                  focus:bg-white
                  transition-all"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                />

              </div>

            </div>


            {/* ================= PRODUCT DETAILS ================= */}
            <div className="p-[22px] md:p-[30px] border-b border-gray-100">

              <div className="mb-[22px]">

                <h2 className="text-[#172554] text-[18px] md:text-[20px] font-semibold">
                  Product Details
                </h2>

                <p className="text-gray-400 text-[13px] mt-[4px]">
                  Select category and pricing information
                </p>

              </div>


              <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">


                {/* CATEGORY */}
                <div>

                  <label className="block text-[13px] font-semibold text-gray-600 mb-[8px]">
                    Product Category
                  </label>

                  <select
                    className="w-full h-[48px]
                    rounded-[10px]
                    border border-gray-200
                    bg-gray-50
                    px-[12px]
                    text-[14px]
                    text-gray-700
                    outline-none
                    focus:border-[#1a6f85]
                    focus:bg-white
                    cursor-pointer
                    transition-all"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    required
                  >

                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>

                  </select>

                </div>


                {/* SUBCATEGORY */}
                <div>

                  <label className="block text-[13px] font-semibold text-gray-600 mb-[8px]">
                    Sub-Category
                  </label>

                  <select
                    className="w-full h-[48px]
                    rounded-[10px]
                    border border-gray-200
                    bg-gray-50
                    px-[12px]
                    text-[14px]
                    text-gray-700
                    outline-none
                    focus:border-[#1a6f85]
                    focus:bg-white
                    cursor-pointer
                    transition-all"
                    onChange={(e) => setSubCategory(e.target.value)}
                    value={subcategory}
                    required
                  >

                    <option value="TopWear">TopWear</option>
                    <option value="BottomWear">BottomWear</option>
                    <option value="WinterWear">WinterWear</option>

                  </select>

                </div>


                {/* PRICE */}
                <div>

                  <label className="block text-[13px] font-semibold text-gray-600 mb-[8px]">
                    Product Price
                  </label>

                  <div className="relative">

                    <span className="absolute left-[14px] top-[14px] text-gray-500 text-[14px]">
                      ₹
                    </span>

                    <input
                      type="number"
                      placeholder="100"
                      className="w-full h-[48px]
                      rounded-[10px]
                      border border-gray-200
                      bg-gray-50
                      pl-[30px]
                      pr-[15px]
                      text-[14px]
                      text-gray-700
                      outline-none
                      focus:border-[#1a6f85]
                      focus:bg-white
                      transition-all"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                      required
                    />

                  </div>

                </div>

              </div>

            </div>


            {/* ================= SIZES ================= */}
            <div className="p-[22px] md:p-[30px] border-b border-gray-100">

              <div className="mb-[20px]">

                <h2 className="text-[#172554] text-[18px] md:text-[20px] font-semibold">
                  Available Sizes
                </h2>

                <p className="text-gray-400 text-[13px] mt-[4px]">
                  Select the sizes available for this product
                </p>

              </div>


              <div className="flex items-center gap-[10px] flex-wrap">

                {["S", "M", "L", "XL", "XXL"].map((size) => (

                  <div
                    key={size}
                    onClick={() => selectSize(size)}
                    className={`
                      min-w-[52px]
                      px-[16px]
                      py-[10px]
                      rounded-[10px]
                      text-[14px]
                      font-semibold
                      flex items-center justify-center
                      cursor-pointer
                      border
                      transition-all duration-300

                      ${
                        sizes.includes(size)
                          ? "bg-[#1a6f85] text-white border-[#1a6f85] shadow-lg shadow-[#1a6f85]/20 scale-[1.03]"
                          : "bg-white text-gray-600 border-gray-200 hover:border-[#1a6f85] hover:text-[#1a6f85] hover:bg-[#1a6f85]/5"
                      }
                    `}
                  >
                    {size}
                  </div>

                ))}

              </div>

            </div>


            {/* ================= BESTSELLER ================= */}
            <div className="p-[22px] md:p-[30px] border-b border-gray-100">

              <label
                htmlFor="checkbox"
                className={`
                  flex items-center justify-between
                  w-full max-w-[500px]
                  p-[15px]
                  rounded-[12px]
                  border
                  cursor-pointer
                  transition-all duration-300

                  ${
                    bestseller
                      ? "border-[#1a6f85] bg-[#1a6f85]/5"
                      : "border-gray-200 bg-gray-50 hover:border-[#1a6f85]/50"
                  }
                `}
              >

                <div className="flex items-center gap-[12px]">

                  <div
                    className={`
                      w-[38px]
                      h-[38px]
                      rounded-[9px]
                      flex items-center justify-center
                      text-[18px]

                      ${
                        bestseller
                          ? "bg-[#1a6f85] text-white"
                          : "bg-white text-gray-400"
                      }
                    `}
                  >
                    ★
                  </div>


                  <div>

                    <p className="text-[14px] font-semibold text-gray-700">
                      Add to BestSeller
                    </p>

                    <p className="text-[11px] text-gray-400 mt-[2px]">
                      Feature this product in the bestseller section
                    </p>

                  </div>

                </div>


                {/* CHECKBOX */}
                <div
                  className={`
                    w-[22px]
                    h-[22px]
                    rounded-[6px]
                    border
                    flex items-center justify-center

                    ${
                      bestseller
                        ? "bg-[#1a6f85] border-[#1a6f85]"
                        : "bg-white border-gray-300"
                    }
                  `}
                >

                  {bestseller && (
                    <span className="text-white text-[13px] font-bold">
                      ✓
                    </span>
                  )}

                </div>


                <input
                  type="checkbox"
                  id="checkbox"
                  checked={bestseller}
                  onChange={(e) => setBestSeller(e.target.checked)}
                  className="hidden"
                />

              </label>

            </div>


            {/* ================= SUBMIT ================= */}
            <div className="p-[22px] md:p-[30px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[15px]">

              <div>

                <p className="text-[13px] font-semibold text-gray-600">
                  Ready to publish?
                </p>

                <p className="text-[11px] text-gray-400 mt-[3px]">
                  Make sure all product information is correct.
                </p>

              </div>


              <button
                type="submit"
                className="w-full sm:w-[170px]
                h-[48px]
                rounded-[10px]
                bg-[#1a6f85]
                hover:bg-[#155d70]
                text-white
                text-[14px]
                font-semibold
                shadow-lg
                shadow-[#1a6f85]/20
                hover:shadow-[#1a6f85]/30
                active:scale-[0.98]
                transition-all duration-300
                cursor-pointer"
              >
                Add Product
              </button>

            </div>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Add;