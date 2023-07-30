import React from 'react'
import './Footer.css'
import { logoImage } from '../../Services/AllData'
import { BiLogoWhatsappSquare,BiLogoTelegram,BiLogoInstagramAlt,BiLogoFacebookCircle } from "react-icons/bi";
import { MdLocationOn,MdLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div id='Footer' className='footer  container grid  w-full  bg-red-300 py-9 mx-auto md:grid-cols-2'>
          <div className="logoFooter py-1 flex flex-col justify-center items-center">
        <a href="" className=" ">
            <img src={logoImage} alt="" className='logoImage w-[40px] h-[40px] md:h-[80px] md:w-[80px] object-fit-cover mx-auto'/>
            <h1 className="fontTiter text-xl md:text-3xl my-2 ">رایان گشت</h1>  

        </a>
        <div className="iconFooter flex   w-full justify-evenly px-9 md:px-[70px] lg:px-[150px]">
              <BiLogoInstagramAlt/>
              <BiLogoTelegram/>
              <BiLogoWhatsappSquare/>
              <BiLogoFacebookCircle/>
            </div>
            <div className="contactUsFooter  w-full grid grid-cols-[10%_90%] p-3 -500 md:grid-cols-[35%,65%]" style={{direction:"rtl"}}>
                    <span className=' py-1 text-xl text-white justify-self-end'>  <MdLocationOn/></span>
                    <span className=' py-1 text-sm'>  کرج ، گوهردشت ، خیابان اصلی ، .....</span>
                    <span className=' py-1  text-xl  text-white justify-self-end'>  <MdLocalPhone/></span>
                    <span className=' py-1'>  0912000000</span>
           </div>
          </div>

<div className="menuFooter py-1 my-2 md:flex  md:justify-center">

        <ul className="navList flex flex-col  gap-y-1 md:items-center md:justify-center  gap-y-2">
        <li className="navItem ">
          <a href="#Home" className="navLink">خانه</a>
        </li>
        <li className="navItem">
          <a href="#Offers" className="navLink">پیشنهادات ویژه</a>
        </li>
        <li className="navItem">
          <a href="#Popular" className="navLink">محبوب ترین سفرها</a>
        </li>
        <li className="navItem">
          <a href="#About" className="navLink">درباره</a>
        </li>
        <li className="navItem">
          <a href="#Blogs" className="navLink">بلاگ</a>
        </li>

        </ul>
            </div>
            <div id="designer " className='md:col-span-2 ' style={{direction:"rtl"}}>
                <p className='text-sm pb-3 text-center'>این سایت توسط <b> علیــــرضا انــــوری</b> طراحی شده </p>
            </div>

    </div>
  )
}

export default Footer