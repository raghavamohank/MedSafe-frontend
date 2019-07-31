import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Landing from './Components/Layout/Landing';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import WrappedRegistrationForm from './Components/auth/Register';
import Login from './Components/auth/Login';
import Dashboard from './Components/doctorDashboard/dashboard';
import PatientInfo from './Components/doctorDashboard/PatientInfo';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container mt-5">
              <Route
                exact
                path="/register"
                component={WrappedRegistrationForm}
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/patientSearch" component={Dashboard} />
              <Route exact path="/patientInfo" component={PatientInfo} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
