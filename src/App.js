import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Contact from './pages/contact';
import Home from './pages/home';
import Products from './pages/product';
import Services from './pages/services';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
        <Switch>
          <Route path="/services" component={Services}></Route>
        </Switch>
        <Switch>
          <Route path="/products" component={Products}></Route>
        </Switch>
        <Switch>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
