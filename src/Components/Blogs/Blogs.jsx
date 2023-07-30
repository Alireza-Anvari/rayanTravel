import React from 'react'
import './Blogs.css'
import {imagesSourceBlogs} from '../../Services/AllData'
import Blog from './Blog/Blog'
const Blogs = () => {
  let compare=4;
  return (
    <div id="Blogs" className='Blogs my-9 mb-2 '>
         <div className=" section container mx-auto ">
         <div className="blogTiter py-2 mb-3">
            <h2 className='text-2xl text-right'>بلاگ سایت </h2>
            <p className='text-right'>ما سعی کردیم در این پست (در این ماه) بلاگ سایت را به معرفی برخی از منطق دیدنی   ایران اختصاص دهیم .البته که واقعا نمیشه تمام منطق زیبای ایران را به تصویر کشید  ، ولی ما بصورت تصادفی به برخی از آنها خواهیم پرداخت . </p>
         </div>
         <div className="blogContent ">
        <div className="blogCards   p-4 ">
          {
            imagesSourceBlogs.map((item,index)=>{return (compare>index ? (<Blog  key={index} title={item.title} image={item.image}     des={item.description} />) : null)})
          }
  </div>
  </div>
        </div>
    </div>
  )
}

export default Blogs