import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Landing from './Components/Layout/Landing';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import WrappedRegistrationForm from './Components/auth/Register';
import Login from './Components/auth/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container mt-5">
            <Route exact path="/register" component={WrappedRegistrationForm} />
            <Route exact path="/login" component={Login} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
