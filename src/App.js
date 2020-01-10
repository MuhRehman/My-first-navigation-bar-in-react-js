import React from 'react';
// import React from 'react';
import './App.css';
import Menu from './Menu';
import rehman from './img/white.png';
import About from './About';
import Contact from './Contact';
import './Homestyle.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
            <div>
        <Menu />
        <Switch>
        <Route path="/" exact component= {Home} />
        <Route path="/about" component= {About} />
        <Route path="/contact" component= {Contact} />
        </Switch>
        
            </div>
     </BrowserRouter>
  );
}
const Home = () => {
    return(
        <div className="homestyle">
              <h2>Welcome to Home Page</h2>
              
              <img src={rehman} alt="Logo" />
        </div>
    )
}

export default App;
