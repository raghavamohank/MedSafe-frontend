import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div className=" landing-inner container d-flex h-100 align-item-center text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mx-auto text-center">
                  <h1 className="display-3 mx-auto my-0 mt-5 mb-4 text-success">
                    MedSafe
                  </h1>
                  <h2 className="lead text-dark text-center">
                    {" "}
                    Because right information at the right time matters
                  </h2>
                  <hr />
                  <a
                    href="register.html"
                    className="btn btn-outline-dark js-scroll-trigger"
                  >
                    Sign Up
                  </a>
                  <a
                    href="login.html"
                    className="btn btn-outline-dark js-scroll-trigger ml-1"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
