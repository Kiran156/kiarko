import React from 'react';
import { NavLink } from 'react-router-dom';
import buildm from '../src/Images/buildm.jpg'
import Common from "./Common";

const About = () =>{
  return (
    <>
      <Common  
       name="Welcome to about page"
       imgsrc={buildm}
       visit="/contact"
       btname="Contact Now"
      />
   
    </>


  );
};


export default About; 
