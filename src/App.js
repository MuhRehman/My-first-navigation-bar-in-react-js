import React, { Component, lazy, Suspense } from 'react';
// import React from 'react';
import './App.css';
import Menu from './Menu';
// import rehman from './img/black1.png';
// import About from './About';
import Contact from './Contact';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Particles from 'react-particles-js';
const AsyncHome = lazy (() => import('./Home'));
const AsyncAbout = lazy (() => import('./About'));

// const particleOpt = {
 
//   particles: {
//   number : {
//     value : 50,
//     density: {
//       enable :true,
//       value_area:200
//     }
//   }
//   }
  
// }

function App() {
  return (

    <Suspense fallback={<div> Loading..</div>}>
    <BrowserRouter>
            <div>
        <Menu />
        <Switch>
        <Route path="/" exact component= {AsyncHome} />
        <Route path="/about" component= {AsyncAbout} />
        <Route path="/contact" component= {Contact} />
        </Switch>
        
            </div>
     </BrowserRouter>
     </Suspense>
  );
}


export default App;
