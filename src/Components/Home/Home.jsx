import React from 'react'
import './Home.css'
import Slider from './Slider/Slider'
const Home = () => {
  return (
    <section id="Home" className='h-[10rem] md:h-[35rem] w-full overflow-hidden '>
      <Slider/>
    </section>
  )
}

export default Home