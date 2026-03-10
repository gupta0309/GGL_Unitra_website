import React from "react";
import bgImage from "../assets/Login/villa.jpg";
import logo from "../assets/logoblack.png";
import "../Styles/Signupui.css"
import opp from "../assets/Login/opp.jpg"
import location from "../assets/locationicon.png"
import { Link } from "react-router-dom";
const GGLRAAuthSignupPortal = ({ switchToLogin }) => {
  return (
    <div
      className="gglra-auth-signup-portal-wrapper"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="gglra-auth-signup-portal-overlay"></div>

      {/* Brand */}
      <div className="gglra-auth-signup-portal-brand">
        <Link to="/"> <img src={logo} alt="logo" /></Link>
      </div>

      {/* Card */}
      <div className="gglra-auth-signup-portal-card">

        <h1 className="gglra-auth-signup-portal-heading">
          SIGN UP
        </h1>

        <p className="gglra-auth-signup-portal-subheading">
          Create Your New GGL Unitra Account
        </p>

        {/* Name Row */}
        <div className="gglra-auth-signup-portal-row">

          <div className="gglra-auth-signup-portal-field">
            <label>First Name</label>
            <input className="gglra-auth-signup-portal-input" />
          </div>

          <div className="gglra-auth-signup-portal-field">
            <label>Last Name</label>
            <input className="gglra-auth-signup-portal-input" />
          </div>

        </div>

        {/* Email + Phone */}
        <div className="gglra-auth-signup-portal-row">

          <div className="gglra-auth-signup-portal-field">
            <label>Email</label>
            <input className="gglra-auth-signup-portal-input" />
          </div>

          <div className="gglra-auth-signup-portal-field">
            <label>Mobile Number</label>
            <input className="gglra-auth-signup-portal-input" />
          </div>

        </div>

        {/* Country */}
        <div className="gglra-auth-signup-portal-field">
          <label>Select Country</label>
          <input className="gglra-auth-signup-portal-input" />
        </div>

        {/* Password */}
        <div className="gglra-auth-signup-portal-row">

          <div className="gglra-auth-signup-portal-field">
            <label>Password</label>
            <input
              type="password"
              className="gglra-auth-signup-portal-input"
            />
          </div>

          <div className="gglra-auth-signup-portal-field">
            <label>Reset Password</label>
            <input
              type="password"
              className="gglra-auth-signup-portal-input"
            />
          </div>

        </div>

        <button className="gglra-auth-signup-portal-button">
          SIGN UP
        </button>

        <p className="gglra-auth-signup-portal-login-text">
          Already have an account?
        <Link to="/signin" ><span onClick={switchToLogin}> Sign In</span></Link>
        </p>

        <div className="gglra-auth-signup-portal-footer">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Support</span>
        </div>

      </div>

  <div className="gglra-auth-portal-opportunity">
        <img src={opp}></img>
        <div>
        <p className="gglra-auth-portal-opportunity-tag">
          NEW OPPORTUNITY
        </p>

        <h4 className="gglra-auth-portal-opportunity-title">
          The Grand Reserve Penthouse
        </h4>

        <span className="gglra-auth-portal-opportunity-location">
        <img src={location} alt="" /> Manhattan, New York
        </span>
        </div>
      </div>

    </div>
  );
};

export default GGLRAAuthSignupPortal;