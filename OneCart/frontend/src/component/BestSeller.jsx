import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../Context/ShopContext'
import Card from './Card'
import Title from "./Title"

function BestSeller() {
  const {products} = useContext(shopDataContext)
  const [bestSeller, setBestSeller] = useState([])

  // useEffect(()=>{
  //   const filterProducts = products.filter((item)=>item.bestSeller)
  //   setBestSeller(filterProducts.slice(0,4));
  // } , [products])
     useEffect(() => {


  const filterProducts = products.filter((item) => {
    console.log(item.name, item.bestSeller);
    return item.bestSeller === true;
  });
  setBestSeller(filterProducts.slice(0, 4));
}, [products]);
  
  
  
  return (
    <div>
      
      <div className='h-[8%] w-[100%] text-center mt-[50px]'>
  <Title text1={"BEST"} text2={"SELLER"}/>

  <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100'>
   Explore our most popular picks, chosen and loved by our customers.
  </p>
</div>

<div className='w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]'>
{
bestSeller.map((item,index)=>(
  <Card key={index} name={item.name} image={item.image1} id={item._id} price={item.price}/>
))
}
</div>
    </div>
  )
}

export default BestSeller