import React from "react";
import Form from "./Form";
import Topbar from "./Topbar";
import "../css/App2.css";

export default function Signup() {
  return (
    <div id="signin-body">
      <Topbar
        text="Don't have account ?"
        btn_name="Sign-up"
        btn_class="signup-btn"
        btn_color="#00001cb6"
        btn_link="/sign-up"
      />
      <section id="sign-in">
        <div id="ad">
          <div className="heading-signin">
            <p>Welcome Back,</p>
          </div>
          <div className="text-signin">
            <p>Sign-in to continue access page</p>
          </div>
        </div>
        <div id="form">
          <Form />
        </div>
      </section>
      {/* <section className="sign-up-sec" id="background-section">
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
                <span style={{ "--i": 28 }}></span>
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
                <span style={{ "--i": 28 }}></span>
                <span style={{ "--i": 11 }}></span>
                <span style={{ "--i": 12 }}></span>
                <span style={{ "--i": 24 }}></span>
                <span style={{ "--i": 10 }}></span>
                <span style={{ "--i": 14 }}></span>
                <span style={{ "--i": 23 }}></span>
                <span style={{ "--i": 18 }}></span>
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
                <span style={{ "--i": 28 }}></span>
                <span style={{ "--i": 11 }}></span>
                <span style={{ "--i": 12 }}></span>
                <span style={{ "--i": 24 }}></span>
                <span style={{ "--i": 10 }}></span>
                <span style={{ "--i": 14 }}></span>
                <span style={{ "--i": 23 }}></span>
                <span style={{ "--i": 18 }}></span>
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
                <span style={{ "--i": 28 }}></span>
                <span style={{ "--i": 11 }}></span>
                <span style={{ "--i": 12 }}></span>
                <span style={{ "--i": 24 }}></span>
                <span style={{ "--i": 10 }}></span>
                <span style={{ "--i": 14 }}></span>
                <span style={{ "--i": 23 }}></span>
                <span style={{ "--i": 18 }}></span>
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
              </div>
            </div>
          </section> */}
      {/* </div> </section> */}
      {/* This div is for Background Animation  */}
    </div>
  );
}
