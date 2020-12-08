import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import Pnf from './components/Pnf';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' exact component={Home} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route component={Pnf}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
