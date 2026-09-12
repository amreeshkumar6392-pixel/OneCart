import React, { useContext } from 'react'
import { shopDataContext } from '../Context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({name , image , id , price }) {
  const {currency} = useContext(shopDataContext)
  const navigate = useNavigate()
  return (
    <div className=' w-[300px] max-w-[90%] h-[400px]
    bg-[#ffffff0a] backdrop-blur-lg rounded-lg
    hover:scale-[102%]
    flex items-start justify-start flex-col
    p-[10px] cursor-pointer
    border-[1px] border-[#80808049]' onClick={()=>navigate(`/productdetail/${id}`)}>
<img src={image} alt="" className='w-[100%] h-[80%] rounded-sm object-cover' />
<div className='text-white text-[18px] mt-[5px]'>
  {name}
</div>

<div className='text-gray-300 text-[16px] mt-[3px]'>
  {currency} {price}
</div>
    </div>
  )
}

export default Card