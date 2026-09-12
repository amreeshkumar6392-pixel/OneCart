import React, { useContext } from "react";
import { shopDataContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function Wishlist() {

  const {
    products,
    wishlist,
    addToWishlist,
    currency,
      addToCart
  } = useContext(shopDataContext);

  const navigate = useNavigate();

  const wishlistProducts = products.filter((item) =>
    wishlist.includes(item._id)
  );

  return (
 <div className="w-full min-h-screen bg-white pt-[20px] md:pt-[110px] pb-[90px]">

      {/* Wishlist Heading */}

      <div className="w-[90%] mx-auto mb-[45px]">

        <h1 className="text-[#172554] text-[24px] md:text-[28px] font-semibold">
          My Wishlist{" "}
          <span className="font-normal text-[18px] md:text-[20px]">
            {wishlistProducts.length} items
          </span>
        </h1>

      </div>


      {/* Empty Wishlist */}

      {wishlistProducts.length === 0 ? (

        <div className="w-full flex flex-col items-center justify-center mt-[100px]">

          <p className="text-gray-500 text-[18px]">
            Your wishlist is empty
          </p>

          <button
            onClick={() => navigate("/collections")}
            className="mt-[20px] px-[30px] py-[10px] bg-[#1a6f85] text-white rounded-sm cursor-pointer"
          >
            CONTINUE SHOPPING
          </button>

        </div>

      ) : (

        /* Wishlist Products */

        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">

          {wishlistProducts.map((item) => (

            <div
              key={item._id}
              className="border border-[#e0e0e0] bg-white flex flex-col"
            >

              {/* Product Image */}

              <div className="w-full h-[330px] relative">

                <img
                  src={item.image1}
                  alt={item.name}
                  onClick={() =>
                    navigate(`/productdetail/${item._id}`)
                  }
                  className="w-full h-full object-cover cursor-pointer"
                />

                {/* Remove Button */}

                <button
                  onClick={() => addToWishlist(item._id)}
                  className="absolute top-[14px] right-[14px] w-[32px] h-[32px] bg-white rounded-full border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all"
                >
                  <IoClose className="text-[22px] text-gray-600" />
                </button>

              </div>


              {/* Product Details */}

              <div className="px-[15px] py-[12px]">

                <p
                  onClick={() =>
                    navigate(`/productdetail/${item._id}`)
                  }
                  className="text-[#172554] text-[17px] truncate cursor-pointer"
                >
                  {item.name}
                </p>


                {/* Price */}

                <div className="flex items-center gap-[8px] mt-[10px]">

                  <span className="text-[#172554] text-[17px] font-bold">
                    {currency}{item.price}
                  </span>

                  <span className="text-gray-500 text-[13px] line-through">
                    {currency}{Math.round(item.price * 2)}
                  </span>

                  <span className="text-[#ff5b35] text-[12px] font-semibold">
                    (50% OFF)
                  </span>

                </div>

              </div>


              {/* Move To Bag */}

              <button
  onClick={async () => {

    const size = item.sizes[0];

    await addToCart(item._id, size);

    addToWishlist(item._id);

    navigate("/cart");

  }}
  className="w-full h-[58px] border-t border-[#e0e0e0] text-[#ff3864] font-semibold text-[16px] cursor-pointer hover:bg-[#fff5f7] transition-all mt-auto"
>
  MOVE TO BAG
</button>
            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Wishlist;