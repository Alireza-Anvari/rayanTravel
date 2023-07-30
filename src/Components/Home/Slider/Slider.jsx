import React,{useState,useEffect} from 'react'
import './slider.css'
import './slider.scss'
import {imagesSourceSlider} from '../../../Services/AllData'
import { BsFillReplyAllFill } from 'react-icons/bs';

const Slider = () => {
  const [current,setCurrent]=useState(0)
  const length=imagesSourceSlider.length
let rest;


  const nextSlide=()=>{


    setCurrent(current===length-1 ? 0 : current+1)
  

  }

  const prevSlide=()=>{
  

    setCurrent(current===0 ? length-1 : current-1 )
    // console.log(current);
   

  }


let pauseSlideInterVal;
let autoScroll=true;
let timeInterVal=3000;
  function autoPlaySlider(){
    pauseSlideInterVal=setInterval(nextSlide,timeInterVal)
}
useEffect(()=>{
  if(autoScroll){
  autoPlaySlider()}
  return ()=> clearInterval(pauseSlideInterVal)
 },[current])
  return (
    <>
  {/* {   console.log(current)} */}
  <div id="slider" className='slider w-full h-full'>
    <div className="slides w-full h-full">


      {imagesSourceSlider.map((item,index)=>(
        <div className={' w-full h-full ' +(index === current ? 'slide active':'slide')}> 
        <div style={{direction:"rtl"}} className={'absolute z-90 top-[100%] right-[15%]  translate-x[-40%] showTitleSlide '+(index===current ? 'activeShowTitleSlide':null)}>
        <p className='text-sm text-right w-1/2'>{item.title}</p>
        <p className='text-sm text-right'>{item.description}</p>
          
          
         </div>
        {index===current &&   ( <img src={item.image} className='w-full h-full' alt="" />)
}

        </div>
      ))}
          </div>
          <div className="controls">
                <span id='nextControl' onClick={nextSlide}><BsFillReplyAllFill/></span>   
                <span id='prevControl' onClick={prevSlide}><BsFillReplyAllFill/></span>   
          </div>
  </div>
    </>
  )
}

export default Slider