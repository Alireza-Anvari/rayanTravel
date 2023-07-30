import React,{useEffect, useState} from 'react'
import './Popular.css'
import { MdLibraryMusic,MdDirectionsBus,MdWifi,MdLocationOn,MdPunchClock } from "react-icons/md";
import { RiPinDistanceFill } from "react-icons/ri";
const Popular = ({id,image,city,rang,date,des1,des2}) => {
const [showDetail,setShowDetail]=useState(false)
const clickDetailPopular=(item,index)=>{
  if(index+1===id){
    item.addEventListener("click",()=>{showDetailPopular(true)})
  }
  else{
    item.addEventListener("click",()=>{showDetailPopular(false)})

  }
}
  const showDetailPopular=(bool)=>{
    // console.log(item);
    // console.log(index);
      // setShowDetail(id===index+1 ? true:null)
setShowDetail(bool)


  }


const closeDetailPopular=(item)=>{
  item.addEventListener("click",()=>{setShowDetail(false)})


}

useEffect(()=>{
let popularMore=document.querySelectorAll(".popularMore")
let btnCloseDetail=document.querySelectorAll(".btnCloseDetail")
popularMore.forEach(clickDetailPopular)
btnCloseDetail.forEach(closeDetailPopular)
// btnCloseDetail.forEach((item)=>{item.addEventListener("click",()=>{()=>{closeDetailOffer()}})})




})


  return (
   
    
      <div className="card  w-full h-full relative">
          <div className="imageCars h-[50%] relative overflow-hidden">
            <img src={image} alt="" className='w-full h-full object-fit-cover' />
            <div className="cover absolute top-[100%] left-0 w-full h-full bg-slate-900 opacity-80 flex flex-col justify-center items-center " style={{direction:"rtl"}}>
                    <h2 className='text-white text-center  font-bold'>{des1}</h2>    
                    <h2 className='text-white text-center'>{des2}</h2>    
            </div>
          </div>
          <div className="bodyCard  h-[50%]  grid grid-cols-2 gap-2 p-3 ">
            <div className="number text-2xl font-bold underline flex items-center justify-center"><span>{id}</span></div>
            <div className="flex  items-center justify-center"><span className='flex text-red-500 font-bold'>{rang}</span></div>
            <div className=" w-full bg-[#bfc2c57d] flex flex-row-reverse	 items-center justify-evenly"><span><MdLocationOn/> </span> <span>{city}</span></div>
            <div className=" w-full bg-[#bfc2c57d] flex flex-row-reverse	 items-center justify-evenly"><span><MdPunchClock/> </span> <span>{date}</span></div>
            <div className=" w-full bg-[#bfc2c57d] flex flex-row-reverse	 items-center justify-evenly"><span><MdWifi/> </span> <span>wifi</span></div>
            <div className=" w-full bg-[#bfc2c57d] flex flex-row-reverse	 items-center justify-evenly"><span><MdDirectionsBus/> </span> <span>bus(vip)</span></div>
            <div className=" w-full bg-[#bfc2c57d] flex flex-row-reverse	 items-center justify-evenly"><span><MdLibraryMusic/> </span> <span>زنده</span></div>
            <div className=" w-full bg-[#bfc2c57d] flex flex-row-reverse	 items-center justify-evenly"><span><RiPinDistanceFill/> </span> <span>{1}</span></div>
            <div className="popularMore  col-span-2  flex justify-center items-center" style={{direction:"rtl",textAlign:"left"}}>
              <span className='px-7 py-2 w-full text-center bg-[#bfc2c57d] cursor-pointer '>جزئیات سفر</span>
                </div>
          </div>
          
               <div className={'detailPopular p-2 invisible fixed top-0 left-0  w-0 h-0 bg-transparent '+(showDetail===true ? "activeDetailPopular":null)} style={{zIndex:"1001"}}>


      <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  w-4/5 h-full md:w-1/2 md:h-full  grid  grid-rows-[50px_200px_auto_50px] md:grid-rows-[50px_300px_150px_50px] '>





                <div className="titleDetail flex justify-center items-center bg-[#c4c4c4e6]">
                  <h2 className='font-bold text-center text-xl '>تور گردشگری {city}</h2>
                </div>
                    <div className="imageDetail w-full ">
                      <img src={image} className=' object-cover mx-auto h-full w-full' alt="" />
                    </div>
                    <div className="descriptionDetail">
                    <p className='text-justify p-3' style={{direction:"rtl"}}>دوستان عزیزی که قصد رزرو این پکیج را دارند میتوانند جهت رزرو با شماره  091233333   تماس تماس حاصل فرمایند . در صورت به حد نصاب نرسیدن گردشگران تور کنسل خواهد شد و پول شما عودت داده خواهد شد .</p>

                    </div>
                <div className='btnCloseDetail '>
                  <button className=' w-full h-full font-bold bg-[#c4c4c4e6]'>بستن</button>
                </div>





                </div>




                </div> 
      </div>
   

  )
}

export default Popular