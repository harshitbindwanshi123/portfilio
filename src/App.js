import Navbar from './components/Navbar';
import MyDive from './pages/home/Home'
import { Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import AboutUs from './pages/aboutUs/AboutUs'
import Skill from './pages/skills/Skill'
import Projects from './pages/projects/Projects'
import Contact from './pages/contactUs/ContactUs'
import Footer  from './components/Footer';
import { useEffect, useState } from 'react';
import './App.css'


function App() {
  const [data,setData]=useState([])
  useEffect(()=>
  {
//     fetch('https://dummyjson.com/products/')
// .then(res => res.json())
// .then(json => setData(json.products))

  },[])
  return (
    <div className="App">
       <Navbar/>  
     
     <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/aboutus' element={<AboutUs/>}></Route>
<Route path='/skill' element={<Skill/>}></Route>
<Route path='/projects' element={<Projects/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>


     </Routes>
     <Footer/> 
<div className="all_cards">
{
  data.map((item)=>
  {
    return(
      <div className="card_main"> 
      
      <img className='imag' src={item.images[0]} alt=""  />
       <div className="title">{item.title}</div> 
       {/* <div className="title">{item.description}</div>  */}
       </div>
     
     
    )
  })
}


</div>
    </div>
  );
}

export default App;