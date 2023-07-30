import React from 'react'
import './Blog.css'
const Blog = ({title,image,des}) => {
  return (
<div className="blogCard" >
<h2 className='blogCardTiter text-lg  text-center   w-1/2 mx-auto   py-1 mt-2'>{title}</h2>

        <div className="blogImage">
          <img src={image} alt="" />
        </div>
        <div className="blogContent  " >
          <div className="blogContentBox absolute top-[100%] flex flex-col justify-evenly items-evenly ">

<p className='px-3 text-center my-1 text-sm my-3' style={{lineHeight:"1.3rem"}}>{des}</p>
<span className=' px-9 py-1 mx-auto  text-sm ' >ادامه ....</span>
          </div>
        </div>
</div>

  )
}

export default Blog