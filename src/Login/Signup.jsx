import React from "react";
import bgImage from "../assets/villa.jpg";
import logo from "../assets/logo.png";

const GGLRAAuthSignupPortal = ({ switchToLogin }) => {
  return (
    <div
      className="gglra-auth-signup-portal-wrapper"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="gglra-auth-signup-portal-overlay"></div>

      {/* Brand */}
      <div className="gglra-auth-signup-portal-brand">
        <img src={logo} alt="logo" />
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
          <span onClick={switchToLogin}> Sign In</span>
        </p>

        <div className="gglra-auth-signup-portal-footer">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Support</span>
        </div>

      </div>
    </div>
  );
};

export default GGLRAAuthSignupPortal;