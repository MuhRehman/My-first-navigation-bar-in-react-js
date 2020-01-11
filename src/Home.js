import React, { Component, lazy, Suspense } from 'react';
import rehman from './img/white.png';
import './Homestyle.css';
import Particles from 'react-particles-js';

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
              <img src={rehman}  style={{
            position: "absolute",
            top: 0,
            left: 0,
            marginLeft:"304px",
            marginTop:"144px",
            width: "100%",
            height: "80%"
          }} alt=""/>
              <Particles  params={particleOpt} type="tadpole" bg={true}
               /> 
              
              
        </div>
    )
}

export default Home;