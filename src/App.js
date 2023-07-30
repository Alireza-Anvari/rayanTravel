import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Populars from './Components/Populars/Populars';
import Offers from './Components/Offers/Offers';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
function App() {
  return (
<>
<Navbar />
<Home />
 <Populars/>
 <Offers/>
<About/>
<Blogs/>
<Footer/>
</>
  );
}

export default App;
