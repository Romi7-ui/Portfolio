import React, { useState } from "react";
import { useEffect } from "react";
import About from "./About";
import "./App.css";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Service from "./Service";
import '/home/romi/webapp/src/theme.scss';






function App() {
  
  const [state, setState] = useState(false);
  const [colorTheme, setcolorTheme] = useState('theme-white');
  

  useEffect(()=>{
    const currentThemeColor = localStorage.getItem('theme-color');
    if(currentThemeColor){
      setcolorTheme(currentThemeColor);
    }
  },[]); 

  const handleClick = (theme) => {
      setcolorTheme(theme);
      localStorage.setItem('theme-color',theme)
  }


  return (
    
    
    <div className={`App ${colorTheme}`}>
    <div className={`theme-options ${state && 'theme-options--open'}` }>
    <button className="setting" onClick={() => setState(prevState => !prevState)}><i class="ri-settings-5-fill"></i></button>
    <h7 className="select">Select Theme</h7> 
    

    <div id='theme-black' 
      onClick={() => handleClick('theme-black')}
      className={`${colorTheme === 'theme-black' ? 'active' : ''}`}
    />

    <div id='theme-white'  
      onClick={() => handleClick('theme-white')}
      className={`${colorTheme === 'theme-white' ? 'active' : ''}`}
    />
     
   

    <div id='theme-blue' 
      onClick={() => handleClick('theme-blue')}
      className={`${colorTheme === 'theme-blue' ? 'active' : ''}`}
    />
  
    <div id='theme-orange' 
      onClick={() => handleClick('theme-orange')}
      className={`${colorTheme === 'theme-orange' ? 'active' : ''}`}
    />
    <div id='theme-purple' 
      onClick={() => handleClick('theme-purple')}
      className={`${colorTheme === 'theme-purple' ? 'active' : ''}`}
    />
  
  </div>
    
    
   


       <Home />
       <About />
       <Service />
      
       
       <Blog />
       <Contact />
       <Footer />
       </div>
    
  );
}

export default App;
