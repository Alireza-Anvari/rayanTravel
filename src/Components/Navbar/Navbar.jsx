import React,{useState,useEffect,useRef} from 'react'
import './Navbar.css'
import './Navbar.scss'
import { logoImage } from '../../Services/AllData'
import LogoImage from './../../Assets/Image/logoImage.jpg'
import { FaWindowClose } from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
const Navbar = () => {

// ------------------------- start code click toggle & close & out side menu -----------------------
  const navBarRef=useRef()
  const refToggle=useRef()
  const [active,setActive]=useState(false)

let showMenu=()=>{
setActive(prev=>!prev)

}


useEffect(()=>{
  const removeMenu=(e)=>{
    const array = ["svg", "path"];
    // const array = ["DIV","svg", "path"];
        if (!array.includes(e.target.tagName)) {
      console.log("in if ", e.target.parentElement.tagName);
      setActive(false);
    }
    

  }
  document.body.addEventListener("click",removeMenu);
  return () =>  document.body.removeEventListener("click",removeMenu);

  },[])
// ------------------------- end code click toggle & close & out side menu -----------------------




// --------------------start code change background header when scroll down ------------------------


const [bgHeader,setBgHeader]=useState(false)
let changeHeaderFunc=()=>{
if(window.scrollY>60){

setBgHeader(true)

}
else{
  setBgHeader(false)
}
}
document.addEventListener("scroll",changeHeaderFunc)


  return (
  <section id="Navbar" className="navBarSection">
    <div className={" header "+(bgHeader===true ? "changeHeader":null)}>
      <div className="logoDiv  md:flex-[.2] ">
        <a href="" className="logo md:flex ">
            <img src={logoImage} alt="" className='logoImage w-[40px] h-[40px] object-fit-cover md:w-[60px] md:h-[60px] md:mx-auto'/>
            <h1 className="fontTiter  hidden  flex justify-center items-end text-2xl">رایان گشت</h1>  
        </a>
      </div>

        <div ref={navBarRef} className={ ' md:flex md:items-center md:justify-between md:flex-[.8] md:h-[80px]  navBar '+(active ? 'activeNavbar':null)}>
        <ul className="navList flex  md:w-full md:justify-between md:items:center">
            <li className="navItem w-1/6">
              <a href="#Home" className="navLink">خانه</a>
            </li>
            <li className="navItem w-1/6">
              <a href="#Popular" className="navLink">محبوب ترین </a>
            </li>
            <li className="navItem w-1/6">
              <a href="#Offers" className="navLink">پیشنهاد ویژه</a>
            </li>
            
            <li className="navItem w-1/6">
              <a href="#About" className="navLink">درباره ما</a>
            </li>
            
            <li className="navItem w-1/6">
              <a href="#Blogs" className="navLink">بلاگ</a>
            </li>
            <div className="headerBtn flex  flex-col w-full justify-center items-center md:flex-row  md:justify-end md:w-1/3 ">
                  <button className="btn loginBtn md:mr-1">
                  <a href="#" className='md:px-2 '>Login</a>
                  </button>  
                  <button className="btn mb-[10px] md:m-0 md:mr-1">
                  <a href="#" >Sign Up</a>
                  </button>  

            </div>
         </ul> 
         <div onClick={showMenu} className="closeNavBar md:hidden">
          
          <FaWindowClose className='icon'/>
         </div>
        </div>

        <div ref={refToggle} onClick={showMenu} className="toggleNavbar md:hidden">
                <BsFillGrid3X3GapFill className='icon'/>
        </div>
    </div>
  </section>
  )
}

export default Navbar