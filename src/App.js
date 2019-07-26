import React from 'react';
import './App.css';

import Landing from './Components/Layout/Landing';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Landing/>
    <Footer/>
    </div>
  );
}

export default App;
