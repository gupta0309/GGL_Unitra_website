import React from "react";
import "../styles/GGLRAAuthSignupUI.css";
import bgImage from "../assets/villa.jpg";

const GGLRAAuthSignupUI = () => {
  return (
    <div
      className="gglra-auth-signup-ui-wrapper"
      style={{
        backgroundImage: `linear-gradient(#0F172A66,#0F172A66), url(${bgImage})`
      }}
    >

      {/* Logo */}
      <div className="gglra-auth-signup-ui-brand">
        <h2 className="gglra-auth-signup-ui-logo">GGLUNITRA</h2>
        <span className="gglra-auth-signup-ui-tagline">
          Real Estate As Safe As You Live
        </span>
      </div>

      {/* Signup Card */}
      <div className="gglra-auth-signup-ui-card">

        <h1 className="gglra-auth-signup-ui-title">
          SIGN UP
        </h1>

        <p className="gglra-auth-signup-ui-subtitle">
          Create Your New GGL Unitra Account
        </p>

        {/* First + Last Name */}
        <div className="gglra-auth-signup-ui-row">
          <div className="gglra-auth-signup-ui-field">
            <label>First Name</label>
            <input type="text"/>
          </div>

          <div className="gglra-auth-signup-ui-field">
            <label>Last Name</label>
            <input type="text"/>
          </div>
        </div>

        {/* Email + Phone */}
        <div className="gglra-auth-signup-ui-row">
          <div className="gglra-auth-signup-ui-field">
            <label>Email</label>
            <input type="email"/>
          </div>

          <div className="gglra-auth-signup-ui-field">
            <label>Mobile Number</label>
            <input type="text"/>
          </div>
        </div>

        {/* Country */}
        <div className="gglra-auth-signup-ui-field gglra-auth-signup-ui-full">
          <label>Select Country</label>
          <input type="text"/>
        </div>

        {/* Password */}
        <div className="gglra-auth-signup-ui-row">
          <div className="gglra-auth-signup-ui-field">
            <label>Password</label>
            <input type="password"/>
          </div>

          <div className="gglra-auth-signup-ui-field">
            <label>Reset Password</label>
            <input type="password"/>
          </div>
        </div>

        <button className="gglra-auth-signup-ui-button">
          SIGN UP
        </button>

        <p className="gglra-auth-signup-ui-login-text">
          Already have an account? <span>Sign In</span>
        </p>

        <div className="gglra-auth-signup-ui-footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Support</span>
        </div>

      </div>

      {/* Opportunity */}
      <div className="gglra-auth-signup-ui-opportunity">
        <p className="gglra-auth-signup-ui-opportunity-tag">
          NEW OPPORTUNITY
        </p>

        <h4>The Grand Reserve Penthouse</h4>

        <span>Manhattan, New York</span>
      </div>

    </div>
  );
};

export default GGLRAAuthSignupUI;