import React , {useEffect, useState} from 'react'
import Background from '../component/Background'
import Hero from '../component/Hero'
import Product from './Product'
import OurPolicy from '../component/OurPolicy'
import NewLetterBox from '../component/NewLetterBox'
import Footer from '../component/Footer'


function Home() {
  const heroData = [
    {text1:"20% OFF Limited Offer",text2:"Style that"},
   {text1: "NEW COLLECTION", text2: "Dress your confidence"},
   {text1: "TRENDING NOW", text2: "Wear what inspires you"},
   {text1: "NEW ARRIVALS", text2: "Made to make a statement"}
  ]

  const [heroCount, setHeroCount] = useState(0)
   
  useEffect(()=>{
    const interval = setInterval(()=>{
      setHeroCount(prevCount=>(prevCount === 3 ? 0 : prevCount + 1))
    },3000)
    return ()=>clearInterval(interval)
  },[])


  return (
<div className="overflow-x-hidden relative md:top-[70px]">
    <div className="w-[100vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh] bg-gradient-to-l from-[#141414] to-[#0c2025]">
    <Background heroCount={heroCount}/>
    <Hero 
    heroCount={heroCount}
    setHeroCount={setHeroCount}
    heroData={heroData[heroCount]}
    />
    </div>
    <Product/>

      <OurPolicy />
      <NewLetterBox/>
      <Footer/>
  
  
    </div>
  )
}

export default Home