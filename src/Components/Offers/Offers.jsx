

import React from 'react'
import './Offers.css'
import Offer from './Offer/Offer'

import { imagesSourceOffer } from '../../Services/AllData'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {PiSpeakerSimpleHighFill} from 'react-icons/pi'
const Offers = () => {
  let compare=4;
  return (
    <div id='Offers' className='offer my-9 py-5 '>
      <div className="section container mx-auto ">
        <div className="offerTiter py-2 mb-3">

       <h2 className=' text-2xl text-right'>   پیشنهادات ویژه </h2>
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
        <div className="offerContent">
         <div className="cards grid grid-cols-1   auto-rows-[450px] gap-y-5">
           {
             imagesSourceOffer.map((item,index)=>{return (compare>index? (<Offer  key={index} id={index+1} image={item.image} price={item.price} city={item.city} date={item.date}   des1={item.description1} des2={item.description2} distance={item.distance}/>): null)})
           }
   </div>
   </div>
   <div className="offerMore mt-5" style={{direction:"rtl",textAlign:"left"}}>
  <span className='px-6 py-1 bg-[#c4c4c4e6]'>ادامه ...</span>
   </div>
       </div>

     </div>
   )
 }

 export default Offers



// import React from 'react'
// import './Offers.css'
// import Offer from './Offer/Offer'

// import { imagesSourceOffer } from '../../Services/AllData'
// import {BsFillArrowRightSquareFill} from 'react-icons/bs'
// import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
// import {PiSpeakerSimpleHighFill} from 'react-icons/pi'
// const Offers = () => {
//   let compare=4;
//   return (
//     <div id='Offers' className='offer my-9 py-5 '>
//       <div className="section container  ">
//         <div className="offerTiter py-2 mb-3">

//         <h2 className=' text-2xl text-right'>   پیشنهادات ویژه </h2>
//         <p> دوستان عزیزی که قصد سفرهای خاص  با امکانات خاصی رو دارند میتوانند از پیشنهاد های ویژه ما استفاده کنند </p>
//         <div className='flex my-3 gap-x-1'>
//         <p className='text-right'> به دوستان عزیری که جزو 10 نفر اول ثبت نام باشند 10% تخفیف داده میشود .</p>
//         <span><PiSpeakerSimpleHighFill className='w-6 h-6' style={{transform:"rotate(180deg)"}}/></span>
//         </div>
//         <div className='OfferIcon flex'>
//         <BsFillArrowLeftSquareFill className='w-7 h-7'/>
//         <BsFillArrowRightSquareFill className='w-7 h-7 ml-2'/>

//         </div>
//         </div>
//         <div className="offerContent ">
//         <div className="cards grid grid-cols-1   auto-rows-[450px] gap-y-5">
//           {
//             imagesSourceOffer.map((item,index)=>{return (compare>index? (<Offer  key={index} id={index+1} image={item.image} price={item.price} city={item.city} date={item.date}   des1={item.description1} des2={item.description2} distance={item.distance}/>): null)})
//           }
//   </div>
//   </div>
//   <div className="offerMore mt-5" style={{direction:"rtl",textAlign:"left"}}>
//     <span className='px-6 py-1 bg-slate-100'>ادامه ...</span>
//   </div>
//       </div>

//     </div>
//   )
// }

// export default Offers