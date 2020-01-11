import React, { Component, lazy, Suspense } from 'react';
import rehman from './img/rehmanmurree.jpg';
import './Homestyle.css';
import Particles from 'react-particles-js';
import {Animated} from "react-animated-css";
const particleOpt = {
 
  particles: {
  number : {
    value : 50,
    density: {
      enable :true,
      value_area:200
    }
  }
  }
  
}
const Home = () => {
    return(
        <div className="homestyle">
        <Animated animationIn="fadeOutRightBig" animationOut="fadeOut" isVisible={true}>
        <div className="maincontent">
        <img className="img-style"  src={rehman}   alt=""/>
        </div>
        </Animated>
        
              
              <Particles  params={particleOpt} type="tadpole" bg={true} /> 
              
              
        </div>
    )
}

export default Home;