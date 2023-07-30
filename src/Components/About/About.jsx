import React from 'react'
import './About.css'
import {imagesSourceAbout} from '../../Services/AllData'

const About = () => {
  return (
    <div id='About' className='about my-9 py-5 '>
      <div className="section container  md:mx-auto">
      
      <div className="aboutTiter py-2 mb-3">

<h2 className=' text-2xl text-right'>   درباره رایان گشت  </h2>
          <img src={imagesSourceAbout[0].image} className='   h-[150px] mx-auto' alt="" />
<p  className='text-justify'>شرکت  گردشگری رایان گشت با بیش از 10 سال سایقه در زمینه تور های داخلی و خارجی  با مجوز قانونی از طرف سازمان گردشگری   فعالیت میکند . شرکت گردشگری رایان گشت  برای اولین بار بطوره ویژه اقدام به برگزرای  تورهای ویژه کودکان و از کار افتادگان  کرده .  مختصری از فعالیت های شرکت به شرح زیر میباشد . </p>

</div>
   <div className="aboutContent grid grid-cols-1 gap-x-2">

   
    <div className="aboutMountains my-9 md:my-3 w-full md:bg-[#bfc2c57d] p-2">
      <img src={imagesSourceAbout[1].image} alt="" />
        <h2 className='my-2 text-center text-2xl font-bold'>20 + تور کوهنوردی</h2>
        <p className='text-center'>        شرکت رایان گشت مفتخر بوده بیش از 20 تور صعود از قلل مرتفع ایران از جمله دماوند ، سبلان ، سهند و.... را با موفقیت به انجام رسانده <div className=""></div>
</p>
    </div>
    <div className="aboutMountains my-3 w-full md:bg-[#bfc2c57d] p-2">
      <img src={imagesSourceAbout[2].image} alt="" />
        <h2 className='my-2 text-center text-2xl font-bold'>100 + تور ایران گردی'</h2>
        <p className='text-center'>        شرکت رایان گشت مفتخر بوده بیش از 100 تور گردشگری به نقاط مختلف ایران برگزار کند  <div className=""></div>
</p>
    </div>

    <div className="aboutMountains my-3 w-full md:bg-[#bfc2c57d] p-2">
      <img src={imagesSourceAbout[3].image} alt="" />
        <h2 className='my-2 text-center text-2xl font-bold'>30 + تور جهان گردی</h2>
        <p className='text-center'>        شرکت رایان گشت مفتخر بوده بیش از 30 تور گردشگری به نقاط مختلف جهان از جمله پاریس ، رم ، مادرید ، .... برگزار کند  <div className=""></div>
</p>
    </div>
    <div className="aboutMountains my-3 w-full md:bg-[#bfc2c57d] p-2">
      <img src={imagesSourceAbout[4].image} alt="" />
        <h2 className='my-2 text-center text-2xl font-bold'>3000 + گردشگران </h2>
        <p className='text-center'>   شرکت گردشگری رایان گشت در این سالهای فعالیت خود مفتخر بوده با بیش از 3000 نفر از گردشگران همکاری کند .   </p>
    </div>

    <div className="aboutMountains my-3 w-full h-[400px] p-3 grid"  >
    {/* <img src={imagesSourceAbout[5].image} alt="" /> */}

        <h2 className='my-2 text-center text-2xl font-bold text-white'>ایران جان خود را بیشتر بشناسیم  </h2>
    <video src={imagesSourceAbout[6].image} autoPlay loop muted type="video/mp4"></video>
        <p className='text-center text-white'> آیا میدانستید که ایران زیبا با قدمتی کهن و طبیعت زیبا جزو 10 کشور دارای ویژگی توریستی در دنیا میباشد .  </p>
    </div>
    <div className='video'>

    </div>
  </div>
  </div>
    </div>
  )
}

export default About