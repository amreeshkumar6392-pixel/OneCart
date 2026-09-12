import React, { useContext, useEffect, useState } from 'react'
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import Title from "../component/Title"
import { shopDataContext } from '../Context/ShopContext';
import Card from "../component/Card"
import { useNavigate } from 'react-router-dom'

function Collections() {

  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const {
    products,
    search,
    showSearch
  } = useContext(shopDataContext)

  const [filterProduct, setFilterProduct] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("relavent")


  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {

      setCategory((prev) =>
        prev.filter((item) => item !== e.target.value)
      );

    } else {

      setCategory((prev) => [...prev, e.target.value]);

    }

  };


  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {

      setSubCategory((prev) =>
        prev.filter((item) => item !== e.target.value)
      );

    } else {

      setSubCategory((prev) => [...prev, e.target.value]);

    }

  };


  const applyFilter = () => {

    let productCopy = products.slice();


    // SEARCH FILTER

    if (showSearch && search.trim()) {

      const searchWords = search
        .toLowerCase()
        .trim()
        .split(/\s+/);


      productCopy = productCopy.filter((item) => {

        const productName = item.name
          .toLowerCase()
          .trim()
          .split(/\s+/);


        return searchWords.every((word) =>
          productName.includes(word)
        );

      });

    }


    // CATEGORY FILTER

    if (category.length > 0) {

      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );

    }


    // SUB-CATEGORY FILTER

    if (subCategory.length > 0) {

      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subcategory)
      );

    }


    setFilterProduct(productCopy);

  };


  const sortProduct = () => {

    let fbCopy = filterProduct.slice();

    switch (sortType) {

      case 'low-high':

        setFilterProduct(
          fbCopy.sort((a, b) => a.price - b.price)
        );

        break;


      case 'high-low':

        setFilterProduct(
          fbCopy.sort((a, b) => b.price - a.price)
        );

        break;


      default:

        applyFilter();

        break;

    }

  };


  useEffect(() => {

    sortProduct();

  }, [sortType]);


  useEffect(() => {

    setFilterProduct(products);

  }, [products]);


  useEffect(() => {

    applyFilter();

  }, [category, subCategory, search, showSearch]);


  return (

<div className='w-full min-h-screen bg-gradient-to-br from-[#081719] via-[#0c2025] to-[#141414] flex flex-col md:flex-row pt-[20px] md:pt-[72px] pb-[100px] overflow-x-hidden'>


      {/* ================= FILTER SIDEBAR ================= */}

      <div
        className={`
          md:w-[280px]
          lg:w-[290px]
          w-full
          md:min-h-[calc(100vh-72px)]
          md:fixed
          left-0
          top-[72px]
          p-[20px]
          md:p-[25px]
          border-r border-white/10
          bg-[#071416]/80
          backdrop-blur-xl
          z-[5]
          transition-all duration-300
          ${showFilter ? "h-auto" : "h-[65px] md:h-[calc(100vh-72px)]"}
        `}
      >


        {/* FILTER HEADING */}

        <div
          className='flex items-center justify-between cursor-pointer md:cursor-default'
          onClick={() => setShowFilter(prev => !prev)}
        >

          <div className='flex items-center gap-[10px]'>

            <FaFilter className='text-[#bff1f9] text-[18px]' />

            <p className='text-[21px] text-white font-semibold tracking-wide'>
              FILTERS
            </p>

          </div>


          <div className='md:hidden'>

            {!showFilter ? (
              <FaChevronRight className='text-[#bff1f9]' />
            ) : (
              <FaChevronDown className='text-[#bff1f9]' />
            )}

          </div>

        </div>


        {/* ================= CATEGORY ================= */}

        <div
          className={`
            mt-[25px]
            p-[18px]
            rounded-xl
            border border-white/10
            bg-white/[0.04]
            ${showFilter ? "block" : "hidden"}
            md:block
          `}
        >

          <p className='text-white text-[15px] font-semibold tracking-[1px] mb-[15px]'>
            CATEGORIES
          </p>


          <div className='flex flex-col gap-[14px]'>

            <label className='flex items-center gap-[12px] text-gray-300 cursor-pointer hover:text-white transition-all'>

              <input
                type="checkbox"
                value={'Men'}
                onChange={toggleCategory}
                className='w-[16px] h-[16px] accent-[#bff1f9] cursor-pointer'
              />

              <span className='text-[15px]'>
                Men
              </span>

            </label>


            <label className='flex items-center gap-[12px] text-gray-300 cursor-pointer hover:text-white transition-all'>

              <input
                type="checkbox"
                value={'Women'}
                onChange={toggleCategory}
                className='w-[16px] h-[16px] accent-[#bff1f9] cursor-pointer'
              />

              <span className='text-[15px]'>
                Women
              </span>

            </label>


            <label className='flex items-center gap-[12px] text-gray-300 cursor-pointer hover:text-white transition-all'>

              <input
                type="checkbox"
                value={'Kids'}
                onChange={toggleCategory}
                className='w-[16px] h-[16px] accent-[#bff1f9] cursor-pointer'
              />

              <span className='text-[15px]'>
                Kids
              </span>

            </label>

          </div>

        </div>


        {/* ================= SUB CATEGORY ================= */}

        <div
          className={`
            mt-[18px]
            p-[18px]
            rounded-xl
            border border-white/10
            bg-white/[0.04]
            ${showFilter ? "block" : "hidden"}
            md:block
          `}
        >

          <p className='text-white text-[15px] font-semibold tracking-[1px] mb-[15px]'>
            SUB-CATEGORIES
          </p>


          <div className='flex flex-col gap-[14px]'>

            <label className='flex items-center gap-[12px] text-gray-300 cursor-pointer hover:text-white transition-all'>

              <input
                type="checkbox"
                value={'TopWear'}
                onChange={toggleSubCategory}
                className='w-[16px] h-[16px] accent-[#bff1f9] cursor-pointer'
              />

              <span className='text-[15px]'>
                Top Wear
              </span>

            </label>


            <label className='flex items-center gap-[12px] text-gray-300 cursor-pointer hover:text-white transition-all'>

              <input
                type="checkbox"
                value={'BottomWear'}
                onChange={toggleSubCategory}
                className='w-[16px] h-[16px] accent-[#bff1f9] cursor-pointer'
              />

              <span className='text-[15px]'>
                Bottom Wear
              </span>

            </label>


            <label className='flex items-center gap-[12px] text-gray-300 cursor-pointer hover:text-white transition-all'>

              <input
                type="checkbox"
                value={'WinterWear'}
                onChange={toggleSubCategory}
                className='w-[16px] h-[16px] accent-[#bff1f9] cursor-pointer'
              />

              <span className='text-[15px]'>
                Winter Wear
              </span>

            </label>

          </div>

        </div>

      </div>


      {/* ================= PRODUCTS SECTION ================= */}

      <div className='md:ml-[280px] lg:ml-[290px] w-full'>


        {/* TOP HEADER */}

        <div className='w-full px-[20px] md:px-[35px] lg:px-[45px] pt-[25px] pb-[20px]'>

          <div className='flex items-center justify-between flex-col sm:flex-row gap-[20px]'>


            {/* TITLE */}

            <div>

              <Title
                text1={"ALL"}
                text2={"COLLECTIONS"}
              />

              {search && showSearch && (

                <p className='text-gray-400 text-[14px] mt-[8px]'>

                  Search results for:
                  
                  <span className='text-[#bff1f9] ml-[5px] font-semibold'>
                    "{search}"
                  </span>

                </p>

              )}

            </div>


            {/* SORT */}

            <select
              name=""
              id=""
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className='
                bg-white/[0.07]
                backdrop-blur-lg
                border border-white/15
                text-white
                w-full
                sm:w-[210px]
                h-[48px]
                px-[15px]
                rounded-lg
                outline-none
                cursor-pointer
                hover:border-[#bff1f9]
                transition-all
              '
            >

              <option
                value="relavent"
                className='bg-[#18272a] text-white'
              >
                Sort By: Relevant
              </option>


              <option
                value="low-high"
                className='bg-[#18272a] text-white'
              >
                Sort By: Low to High
              </option>


              <option
                value="high-low"
                className='bg-[#18272a] text-white'
              >
                Sort By: High to Low
              </option>

            </select>

          </div>

        </div>


        {/* ================= PRODUCT GRID ================= */}

        <div className='
          w-full
          px-[15px]
          md:px-[25px]
          lg:px-[35px]
          flex
          items-start
          justify-center
          flex-wrap
          gap-[25px]
          md:gap-[30px]
          pb-[40px]
        '>


          {filterProduct.length > 0 ? (

            filterProduct.map((item, index) => (

              <Card
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image1}
              />

            ))

          ) : (

            /* ================= NO PRODUCT ================= */

            <div className='
              w-full
              min-h-[55vh]
              flex
              flex-col
              items-center
              justify-center
              text-center
              px-[20px]
            '>

              <div className='
                w-[80px]
                h-[80px]
                rounded-full
                bg-[#bff1f9]/10
                border
                border-[#bff1f9]/20
                flex
                items-center
                justify-center
                mb-[20px]
              '>

                <FaFilter className='text-[#bff1f9] text-[28px]' />

              </div>


              <h2 className='
                text-[30px]
                md:text-[42px]
                font-semibold
                text-white
              '>

                No Products Found

              </h2>


              <p className='
                text-gray-400
                text-[15px]
                md:text-[17px]
                mt-[10px]
                max-w-[500px]
                leading-[1.6]
              '>

                Sorry, we couldn't find any product matching

                <span className='text-[#bff1f9] font-semibold ml-[5px]'>

                  {search ? `"${search}"` : "your selection"}

                </span>

              </p>


              <div className='flex items-center justify-center gap-[12px] mt-[30px] flex-wrap'>


                <button
                  onClick={() => navigate("/")}
                  className='
                    px-[28px]
                    py-[12px]
                    bg-[#bff1f9]
                    text-black
                    font-semibold
                    rounded-lg
                    cursor-pointer
                    hover:scale-[1.03]
                    hover:shadow-lg
                    transition-all
                  '
                >

                  GO TO HOME

                </button>


                <button
                  onClick={() => navigate("/collections")}
                  className='
                    px-[28px]
                    py-[12px]
                    border
                    border-[#bff1f9]
                    text-[#bff1f9]
                    font-semibold
                    rounded-lg
                    cursor-pointer
                    hover:bg-[#bff1f9]
                    hover:text-black
                    transition-all
                  '
                >

                  VIEW COLLECTIONS

                </button>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>

  )

}

export default Collections