import React from "react";
import "../Styles/Login.css";
import bgImage from "../assets/Login/villa.jpg";
import logo from "../assets/logoblack.png"
import google from "../assets/Login/SVG.png"
import fb from "../assets/Login/fb.png"
const GGLRAAuthPortalLogin = () => {
  return (
  <div
className="gglra-auth-portal-wrapper"
style={{
backgroundImage: `linear-gradient(#0F172A66,#0F172A66), url(${bgImage})`
}}
>
      <div className="gglra-auth-portal-overlay"></div>

      {/* Logo */}
      <div className="gglra-auth-portal-brand">
       <img src={logo} alt="logo"/>
      </div>

      {/* Login Card */}
      <div className="gglra-auth-portal-card">
        <h1 className="gglra-auth-portal-heading">WELCOME BACK</h1>

        <p className="gglra-auth-portal-subheading">
          Experience the pinnacle of real estate management.
        </p>

        <div className="gglra-auth-portal-field">
          <label>Email Address</label>
          <input
            type="email"
            className="gglra-auth-portal-input"
            placeholder="Enter email"
          />
        </div>

        <div className="gglra-auth-portal-field">
          <div className="gglra-auth-portal-password-row">
            <label>Password</label>
            <span className="gglra-auth-portal-forgot-link">
              Forgot Password?
            </span>
          </div>

          <input
            type="password"
            className="gglra-auth-portal-input"
            placeholder="Enter password"
          />
        </div>

        <button className="gglra-auth-portal-login-btn">
          SIGN IN
        </button>

        <div className="gglra-auth-portal-divider">
          OR CONTINUE WITH
        </div>

        <div className="gglra-auth-portal-social-row">
          <button className="gglra-auth-portal-google-btn">
           <img src={google} alt="" /> <div>Google</div>
          </button>

          <button className="gglra-auth-portal-facebook-btn">
           <img src={fb} alt="" /> <div>Facebook</div>
          </button>
        </div>

        <p className="gglra-auth-portal-signup-text">
          Don’t have an account? <span>Sign Up</span>
        </p>

        <div className="gglra-auth-portal-footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Support</span>
        </div>
      </div>

      {/* Opportunity Card */}
      <div className="gglra-auth-portal-opportunity">
        <p className="gglra-auth-portal-opportunity-tag">
          NEW OPPORTUNITY
        </p>

        <h4 className="gglra-auth-portal-opportunity-title">
          The Grand Reserve Penthouse
        </h4>

        <span className="gglra-auth-portal-opportunity-location">
          Manhattan, New York
        </span>
      </div>
    </div>
  );
};

export default GGLRAAuthPortalLogin;