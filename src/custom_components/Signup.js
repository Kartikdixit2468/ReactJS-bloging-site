import React, { useState } from "react";
import "../css/App.css";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";

function Signup() {
  // const [username, setusername] = useState("");
  // const [email, setemail] = useState("");
  // const [scl_name, setscl_name] = useState("");
  // const [std_class, setstd_class] = useState("");
  // const [password, setpassword] = useState("");

  return (
    <section className="sign-up-sec">
      <div className="sign-up-component">
        <Topbar />

        <div className="form container" id="signup-form">
          <form action="#">
          {/* <form method="post" action="http://127.0.0.1:8000/sign-up"> */}
            {/* //     onSubmit={() => {
          //       fetch("http://127.0.0.1:8000/sign-up", {
          //         method: "post",
          //         headers: {
          //           'Accept': 'application/json',
          //           'Content-Type': 'application/json'
          //         },
                
          //         //make sure to serialize your JSON body
          //         body: JSON.stringify({
          //           username: username,
          //           email: email,
          //           password: password,
          //           class: std_class,
          //           scl_name: scl_name
          //         })
          //       })
          //       .then( (response) => { 
          //           console.log("Request sent")
          //           console.log(response)
          //          //do something awesome that makes the world a better place
          //       });
          // }}
          // > */}

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                // value={email}
                // onChange={(value) => {
                //   setemail(value.target.value)
                //   console.log(email)
                // }}
                name="email"
                type="email"
                className="form-control"
                required
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                // value={username}
                // onChange={(value) => {
                //   setusername(value.target.value)
                //   console.log(username)
                // }}
                name="username"
                type="text"
                className="form-control"
                required
                // id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                School Name
              </label>
              <input
                // value={scl_name}
                // onChange={(value) => {
                //   setscl_name(value.target.value)
                //   console.log(scl_name)
                // }}
                name="scl_name"
                type="text"
                className="form-control"
                required
                // id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Class
              </label>
              <input
                // value={std_class}
                // onChange={(value) => {
                //   setstd_class(value.target.value)
                //   console.log(std_class)
                // }}
                name="class_"
                type="text"
                className="form-control"
                required
                // id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                // value={password}
                // onChange={(value) => {
                //   setpassword(value.target.value)
                //   console.log(password)
                // }}
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            {/* <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div> */}
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                required
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I agree your{" "}
                <Link className="terms-conditions-links" to="#">
                  Terms & Conditions
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-outline-secondary submit-btn-signup"
            >
              Continue <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>

      {/* This div is for Background Animation  */}
      <div className="background-animation">
        <div className="bubbles">
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 24 }}></span>
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 23 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 16 }}></span>
          <span style={{ "--i": 20 }}></span>
          <span style={{ "--i": 22 }}></span>
          <span style={{ "--i": 25 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 21 }}></span>
          <span style={{ "--i": 15 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 26 }}></span>
          <span style={{ "--i": 17 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 16 }}></span>
          <span style={{ "--i": 15 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 26 }}></span>
          <span style={{ "--i": 17 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 28 }}></span>
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 24 }}></span>
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 23 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 25 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 21 }}></span>
          <span style={{ "--i": 15 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 26 }}></span>
          <span style={{ "--i": 17 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 28 }}></span>
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 24 }}></span>
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 23 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 24 }}></span>
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 23 }}></span>
          <span style={{ "--i": 18 }}></span>
        </div>
      </div>
    </section>
  );
}

export default Signup;
