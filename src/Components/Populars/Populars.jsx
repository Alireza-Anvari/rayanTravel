import React from 'react'
import './Populars.css'
import Popular from './Popular/Popular'

import { imagesSourcePopular } from '../../Services/AllData'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {PiSpeakerSimpleHighFill} from 'react-icons/pi'
const Populars = () => {
 
  let compare=4;
  return (
    <div id='Popular' className='popular my-9 py-5 '>
      <div className="section container mx-auto ">
        <div className="popularTiter py-2 mb-3">

        <h2 className=' text-2xl text-right'>   محبوب ترین تورها </h2>
        <p> دوستان عزیزی که قصد سفرهای خاص  با امکانات خاصی رو دارند میتوانند از پیشنهاد های ویژه ما استفاده کنند </p>
        <div className='flex my-3 gap-x-1' style={{direction:"rtl"}}>
        <span><PiSpeakerSimpleHighFill className='w-6 h-6' style={{transform:"rotate(180deg)"}}/></span>
        <p className='text-right md:text-xl'> به دوستان عزیری که جزو 10 نفر اول ثبت نام باشند 10% تخفیف داده میشود .</p>
      
        </div>
        <div className='OfferIcon flex'>
        <BsFillArrowLeftSquareFill className='w-7 h-7'/>
        <BsFillArrowRightSquareFill className='w-7 h-7 ml-2'/>

        </div>
        </div>
        <div className="popularContent ">
        <div className="cards grid grid-cols-1   auto-rows-[450px] gap-y-5 ">
          {
            imagesSourcePopular.map((item,index)=>{return (compare>index? (<Popular  key={index} id={index+1} image={item.image}  city={item.city} rang={item.rang} date={item.date}   des1={item.description1} des2={item.description2} /> ):null)})
          }
  </div>
  </div>
  <div className="popularMore mt-5" style={{direction:"rtl",textAlign:"left"}}>
    <span className='px-6 py-1 ' style={{background:"#c4c4c4e6"}}>ادامه ...</span>
  </div>
      </div>

    </div>
  )
}

export default Populars