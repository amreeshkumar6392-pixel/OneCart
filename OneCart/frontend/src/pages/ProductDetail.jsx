import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../Context/ShopContext'
import RelatedProduct from "../component/RelatedProducts";
import { FaHeart } from "react-icons/fa";

function ProductDetail() {

  const { productId } = useParams()

  const { products, currency, addToWishlist,addToCart, wishlist } = useContext(shopDataContext)

  const [productData, setProductData] = useState(false)

  const [image, setImage] = useState("")
  const [image1, setImage1] = useState("")
  const [image2, setImage2] = useState("")
  const [image3, setImage3] = useState("")
  const [image4, setImage4] = useState("")
  const [sizes, setSizes] = useState("")

const fetchProductData = () => {

  const product = products.find(
    (item) => String(item._id) === String(productId)
  )

  if (product) {

    setProductData(product)

    setImage(product.image1)
    setImage1(product.image1)
    setImage2(product.image2)
    setImage3(product.image3)
    setImage4(product.image4)

    setSizes("")
  }
}

 useEffect(() => {

    if (products.length > 0) {
      fetchProductData()
      window.scrollTo(0, 0)
    }

  }, [productId, products])

  return productData ? (

    <div className="w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] pt-[20px] md:pt-[120px] pb-[50px]">

      <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-[40px]">


        {/* Product Images Section */}
        <div className="lg:w-[50%] w-full flex gap-[15px]">

          {/* Small Images */}
          <div className="flex flex-col gap-[10px] w-[20%]">

            <img
              src={image1}
              alt=""
              onClick={() => setImage(image1)}
              className="w-full h-[90px] object-cover cursor-pointer border border-gray-500 rounded-sm"
            />

            <img
              src={image2}
              alt=""
              onClick={() => setImage(image2)}
              className="w-full h-[90px] object-cover cursor-pointer border border-gray-500 rounded-sm"
            />

            <img
              src={image3}
              alt=""
              onClick={() => setImage(image3)}
              className="w-full h-[90px] object-cover cursor-pointer border border-gray-500 rounded-sm"
            />

            <img
              src={image4}
              alt=""
              onClick={() => setImage(image4)}
              className="w-full h-[90px] object-cover cursor-pointer border border-gray-500 rounded-sm"
            />

          </div>


          {/* Main Product Image */}
          <div className="w-[80%]">

            <img
              src={image}
              alt=""
              className="w-full h-[500px] object-cover rounded-sm shadow-md shadow-black"
            />

          </div>

        </div>


        {/* Product Details Section */}
        <div className="lg:w-[50%] w-full text-white flex flex-col gap-[18px]">

          <h1 className="text-[25px] md:text-[35px] font-semibold">
            {productData.name}
          </h1>


          <p className="text-[24px] md:text-[28px] font-bold text-[#bff1f9]">
            {currency}{productData.price}
          </p>


          <p className="text-[14px] md:text-[16px] text-gray-300 leading-[1.7]">
            {productData.description}
          </p>


          {/* Size Section */}
        <div className="flex flex-col gap-[12px]">

  <p className="text-[18px] font-semibold">
    Select Size
  </p>

  <div className="flex gap-[10px] flex-wrap">

    {[...productData.sizes]
      .sort((a, b) => {
        const sizeOrder = ["S", "M", "L", "XL", "XXL"];

        return sizeOrder.indexOf(a) - sizeOrder.indexOf(b);
      })
      .map((item, index) => (

        <button
          key={index}
          onClick={() => setSizes(item)}
          className={`px-[18px] py-[8px] border cursor-pointer transition-all
            ${
              sizes === item
                ? "bg-[#bff1f9] text-black border-[#bff1f9]"
                : "border-gray-500 text-white"
            }`}
        >
          {item}
        </button>

      ))}

  </div>

</div>


          {/* Add To Cart Button */}
      <div className="flex items-center gap-[10px] mt-[10px]">

  <button
    onClick={() => addToCart(productData._id, sizes)}
    className="w-[200px] bg-[#bff1f9] text-black font-semibold py-[12px] rounded-sm cursor-pointer hover:scale-[1.02] transition-all" 
  >
    ADD TO CART
  </button>

  <button
    onClick={() => addToWishlist(productData._id)}
    className="w-[48px] h-[48px] flex items-center justify-center border border-gray-700 rounded-sm cursor-pointer hover:border-[#bff1f9] transition-all"
  >
    <FaHeart
      className={`text-[22px] transition-all ${
        wishlist.includes(productData._id)
          ? "text-[#1a6f85]"
          : "text-transparent stroke-[#1a6f85] stroke-[20px]"
      }`}
    />
  </button>

</div>


          <hr className="border-gray-600 mt-[10px]" />


          {/* Product Information */}
          <div className="text-[14px] text-gray-400 flex flex-col gap-[6px]">

            <p>✓ 100% Original Products</p>
            <p>✓ Cash on Delivery Available</p>
            <p>✓ Easy Return & Exchange Policy</p>

          </div>

        </div>

      </div>
      {/* Product Description Section */}
<div className="w-[90%] mx-auto mt-[70px] text-white">

  <div className="border border-gray-600 inline-block">

    <p className="px-[25px] py-[12px] font-semibold">
      Description
    </p>

  </div>

  <div className="border border-gray-600 p-[25px]">

    <p className="text-gray-300 text-[14px] md:text-[16px] leading-[1.8]">
      {productData.description}
    </p>

    <p className="text-gray-400 text-[14px] md:text-[16px] leading-[1.8] mt-[15px]">
      Our products are carefully selected to provide the perfect combination
      of quality, comfort, and style. Designed with attention to detail,
      this product is made to fit seamlessly into your everyday lifestyle.
    </p>

  </div>

<RelatedProduct category={productData.category}
      subcategory={productData.subcategory}
      currentProductId={productData._id}/>
</div>

    </div>

  ) : <div className='opacity-0'></div>

}

export default ProductDetail
