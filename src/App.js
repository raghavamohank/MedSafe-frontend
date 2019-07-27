import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import "antd/dist/antd.css";
import Landing from './Components/Layout/Landing';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Register from './Components/auth/Register';
import NormalLoginForm from './Components/auth/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path = "/" component = {Landing} />
        <div className = "container mt-5">
          <Route exact path = "/register" component = {Register}/>
          <Route exact path = "/login" component = {NormalLoginForm}/>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
