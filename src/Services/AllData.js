
import{BsStarFill} from 'react-icons/bs'
 import LogoImage from '../Assets/Image/logoImage.jpg'


// --------------------image foe slider --------------
import sliderImage1 from '../Assets/Image/imageOffer/esfehan1.jpg'
import sliderImage2 from '../Assets/Image/Blog/blogImage3.jpg'
import sliderImage3 from '../Assets/Image/Blog/blogImage2.jpg'



// --------------------image foe popular --------------

import popularImage1 from '../Assets/Image/imagesPopular/masal.jpg'
import popularImage2 from '../Assets/Image/imagesPopular/yazd1.jpg'
import popularImage3 from '../Assets/Image/imagesPopular/shiraz2.jpg'
import popularImage4 from '../Assets/Image/imagesPopular/kish1.jpg'
import popularImage5 from '../Assets/Image/imagesPopular/masal2.jpg'
import popularImage6 from '../Assets/Image/imagesPopular/masuleh1.jpg'
import popularImage7 from '../Assets/Image/imagesPopular/astara2.jpg'
import popularImage8 from '../Assets/Image/imagesPopular/hormoz1.jpg'




// --------------------image foe offer --------------

import offerImage1 from '../Assets/Image/imageOffer/esfehan1.jpg'
import offerImage2 from '../Assets/Image/imageOffer/kashan1.jpg'
import offerImage3 from '../Assets/Image/imageOffer/natanz1.jpg'
import offerImage4 from '../Assets/Image/imageOffer/shiraz.jpg'
import offerImage5 from '../Assets/Image/imageOffer/karaj1.jpg'
import offerImage6 from '../Assets/Image/imageOffer/esfehan1.jpg'
import offerImage7 from '../Assets/Image/imageOffer/shiraz.jpg'
import offerImage8 from '../Assets/Image/imageOffer/karaj1.jpg'


// --------------------image for about --------------
import mountainsImage from '../Assets/Image/About/climbing.jpg'
import travelNature from '../Assets/Image/About/travelNature.jpg'
import foreignImage from '../Assets/Image/About/travelForign.jpg'
import customerImage from '../Assets/Image/About/customer.jpg'
import iranjanImage from '../Assets/Image/About/iranJan.jpg'
import video from '../Assets/video/iranBeatiful.mp4'


// --------------------image for blog --------------
import blogImage1 from '../Assets/Image/Blog/jadeh-chalus.jpg'
import blogImage3 from '../Assets/Image/Blog/blogImage1.jpg'
import blogImage4 from '../Assets/Image/Blog/blogImage2.jpg'
import blogImage2 from '../Assets/Image/Blog/blogImage3.jpg'









export  const logoImage=LogoImage;



let rang=()=>{
    let array=[];
    for (let index=0;index<5;index++)
    {
       array=[...array,<BsStarFill/>]
    } 
    return array  
   }
   


export const imagesSourceSlider=
[
{
    image:sliderImage1,
    title:"اسلایدر اول",
    description:"لورم ایپسوم متن ساختگی اسلایدر اول "

},
{
    image:sliderImage2,
    title:"اسلایدر دوم",
    description:"لورم ایپسوم متن ساختگی اسلایدر دوم "
},
{
    image:sliderImage3,
    title:"اسلایدر سوم",
    description:"لورم ایپسوم متن ساختگی اسلایدر سوم "
}
]









export let imagesSourcePopular=
[
{
    image:popularImage1,
    city:"ماسال",
   
    date:"  02/10",
    rang:rang(),
    description1:"این سفر به مدت 3 روز و ",
    description2:"با هزینه 2,000,000 تومان برگزار گردید"
},
{
    image:popularImage2,
    city:"یزد",
   
    date:"  01/10",
    rang:rang(),
    description1:"این سفر به مدت 3 روز و ",
    description2:"با هزینه 2,000,000 تومان برگزار گردید"
},
{
    image:popularImage3,
    city:"شیراز",
   
    date:"  03/10",
    rang:rang(),
    description1:"این سفر به مدت 3 روز و ",
    description2:"با هزینه 2,000,000 تومان برگزار گردید"
},
{
    image:popularImage4,
    city:"کیش",
   
    date:"  01/20",
    rang:rang(),
    description1:"این سفر به مدت 3 روز و ",
    description2:"با هزینه 2,000,000 تومان برگزار گردید"
},

{
    image:popularImage5,
    city:"ماسال",
   
    date:"  02/10",
    rang:rang(),
    description1:"این سفر به مدت 3 روز و ",
    description2:"با هزینه 2,000,000 تومان برگزار گردید"
},
{
    image:popularImage6,
    city:"ماسوله",
   
    date:"  01/15",
    rang:rang(),
    description1:"این سفر به مدت 3 روز و ",
    description2:"با هزینه 2,000,000 تومان برگزار گردید"
},
{
    image:popularImage7,
    city:"آستارا",
   
    date:"  03/25",
    rang:rang(),
    description1:"این سفر به مدت 3 روز و ",
    description2:"با هزینه 2,000,000 تومان برگزار گردید"
},
{
    image:popularImage8,
    city:"هرمز",
   
    date:"  01/05",
    rang:rang(),
    description1:"این سفر به مدت 3 روز و ",
    description2:"با هزینه 2,000,000 تومان برگزار گردید"
},

]





export let imagesSourceOffer=
[
{
    image:offerImage1,
    price:"~ 5,000,000 T",
    city:"اصفهان",
    date:"  03/10",
    // rang:rang(),
    description1:"مدت زمان این سفر  4 روز میباشد ",
    description2:"برای کسب اطلاعات بیشتر دکمه نمایش جزئیات  را بزنید ",
    distance:"700 k/m",

},
{
    image:offerImage2,
    price:"~ 5,500,000 T",
    city:"یزد",
    date:"  02/15",
    // mount:"پاییز",
    // rang:rang(),
    description1:"مدت زمان این سفر  4 روز میباشد ",
    description2:"برای کسب اطلاعات بیشتر دکمه نمایش جزئیات  را بزنید ",
    distance:"800 k/m",

    
},
{
    image:offerImage3,
    price:"~ 5,000,000 T",
    city:"ابیانه",
    date:"  02/20",
    // mount:"بهار",
    // rang:rang(),
    description1:"مدت زمان این سفر  5 روز میباشد ",
    description2:"برای کسب اطلاعات بیشتر دکمه نمایش جزئیات  را بزنید ",
    distance:"750 k/m",

},
{
    image:offerImage4,
    price:"~ 6,000,000 T",
    city:"شیراز",
    date:"  02/10",
    // mount:"زمستان",
    // rang:rang(),
    description1:"مدت زمان این سفر  6 روز میباشد ",
    description2:"برای کسب اطلاعات بیشتر دکمه نمایش جزئیات  را بزنید ",
    distance:"1000 k/m",

},
{
    image:offerImage5,
    price:"~ 5,000,000 T",
    city:"اصفهان",
    date:"  03/10",
    // rang:rang(),
    description1:"مدت زمان این سفر  4 روز میباشد ",
    description2:"برای کسب اطلاعات بیشتر دکمه نمایش جزئیات  را بزنید ",
    distance:"700 k/m",

},
{
    image:offerImage6,
    price:"~ 5,500,000 T",
    city:"یزد",
    date:"  02/15",
    // mount:"پاییز",
    // rang:rang(),
    description1:"مدت زمان این سفر  4 روز میباشد ",
    description2:"برای کسب اطلاعات بیشتر دکمه نمایش جزئیات  را بزنید ",
    distance:"800 k/m",

    
},
{
    image:offerImage7,
    price:"~ 5,000,000 T",
    city:"ابیانه",
    date:"  02/20",
    // mount:"بهار",
    // rang:rang(),
    description1:"مدت زمان این سفر  5 روز میباشد ",
    description2:"برای کسب اطلاعات بیشتر دکمه نمایش جزئیات  را بزنید ",
    distance:"750 k/m",

},
{
    image:offerImage8,
    price:"~ 6,000,000 T",
    city:"شیراز",
    date:"  02/10",
    // mount:"زمستان",
    // rang:rang(),
    description1:"مدت زمان این سفر  6 روز میباشد ",
    description2:"برای کسب اطلاعات بیشتر دکمه نمایش جزئیات  را بزنید ",
    distance:"1000 k/m",

},


]




export const imagesSourceAbout=
[
{
    image:logoImage,
},
{
    image:mountainsImage,
},
{
    image:travelNature,
},
{
    image:foreignImage,
},
{
    image:customerImage,
},
{
    image:iranjanImage,
},
{
    // this object is video 
    image:video,
},
]




export const imagesSourceBlogs=
[
{title: " جاده چالوس ",
    image:blogImage1,
    description:"این یک متن لورم آزمایشی  در مورد جنگل میباشد . این یک متن لورم آزمایشی  در مورد جنگل میباشد  . این یک متن لورم آزمایشی  در مورد جنگل میباشد  . "
    
},
{    title: "جنگل گیلان",
    image:blogImage2,
    description:"این یک متن لورم آزمایشی  در مورد جنگل میباشد  . این یک متن لورم آزمایشی  در مورد جنگل میباشد  . این یک متن لورم آزمایشی  در مورد جنگل میباشد  . "

},
{title: "باغ ارم ",
    image:blogImage3,
    description:"این یک متن لورم آزمایشی  در مورد جنگل میباشد . این یک متن لورم آزمایشی  در مورد جنگل میباشد  . این یک متن لورم آزمایشی  در مورد جنگل میباشد  . "

},
{title: "  کویر لوت",
    image:blogImage4,
    description:"این یک متن لورم آزمایشی  در مورد جنگل میباشد . این یک متن لورم آزمایشی  در مورد جنگل میباشد  . این یک متن لورم آزمایشی  در مورد جنگل میباشد  . "

},
{title: "جنگل گلستان",
    image:blogImage3,
    description:"این یک متن لورم آزمایشی  در مورد جنگل میباشد . این یک متن لورم آزمایشی  در مورد جنگل میباشد  . این یک متن لورم آزمایشی  در مورد جنگل میباشد  . "

},
{title: "جنگل عباس آباد",
    image:blogImage4,
    description:"این یک متن لورم آزمایشی  در مورد جنگل میباشد . این یک متن لورم آزمایشی  در مورد جنگل میباشد  . این یک متن لورم آزمایشی  در مورد جنگل میباشد  . "

}
]
