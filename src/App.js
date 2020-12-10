import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import LandingPage from 'pages/LandingPage'
import DetailsPage from 'pages/DetailsPage'
import Checkout from 'pages/Checkout'
import Example from 'pages/Example'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/properties/:id" component={DetailsPage}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/example/one" component={Example}/>
        <ToastContainer></ToastContainer>
      </Router>
    </div>
  );
}

export default App;