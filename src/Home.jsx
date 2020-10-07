import React from 'react';
import { NavLink } from 'react-router-dom';
import kiarko from '../src/Images/kiarko.jpg'
import Common from "./Common";

const Home = () =>{
   return (
     <>
       <Common  
        name="Grow your business with"
        imgsrc={kiarko}
        visit="/products"
        btname="Get Started"
       />
    
     </>


   );
};
 

export default Home; 
