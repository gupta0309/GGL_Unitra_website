import React from "react";
import { motion } from "framer-motion";
import "../../Styles/Footer.css";
import footer from "../../assets/footer2.png";
import oneso from "../../assets/footer/one.png";
import twoso from "../../assets/footer/two.png";
import threeso from "../../assets/footer/three.png";
import fourso from "../../assets/footer/four.png";
import logo from "../../assets/logo.png";
import location from "../../assets/footer/location.png";
import call from "../../assets/footer/call.png";
import mail from "../../assets/footer/mail.png";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  return (
    <div className="nova-wrapper">
      {/* 3D App Banner */}
      <section className="nova-app-card">
        <div className="nova-content-side">
          <span className="nova-tag">Download our app</span>
          <h2 className="nova-hero-title">
            The Modern Way to Invest in Real Estate
          </h2>
          <p className="nova-hero-subtitle">
            Track investments, monitor fractions, download reports, and explore
            new opportunities — all from your mobile device.
          </p>

          <div className="nova-market-links">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              className="nova-store-img"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Play Store"
              className="nova-store-img"
            />
          </div>
        </div>

        {/* 3D Phone & Floating Elements */}
        <div className="nova-visual-side">
          <motion.div
            className="nova-phone-container"
            initial={{ rotateY: -25, rotateX: 10, opacity: 0 }}
            whileInView={{ rotateY: -15, rotateX: 5, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {/* Main Phone Image */}
            <img src={footer} alt="pp Mockup" className="nova-phone-img" />

            {/* Floating Success Card */}
            {/* <motion.div 
              className="nova-floating-popup"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="nova-check-circle">✓</div>
              <div className="nova-popup-text">
                <span className="nova-bold">Payment Successful!</span>
                <span className="nova-light">Delivered Instantly</span>
              </div>
            </motion.div> */}

            {/* Decorative Floating Icon (Shield) */}
            {/* <div className="nova-floating-shield">🛡️</div> */}
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="nova-footer">
        <div className="nova-footer-top">
          <div className="nova-brand-area">
            <h3 className="nova-logo">
              <img src={logo}></img>
            </h3>
            <p className="nova-brand-desc">
              GGL Unitra offers a seamless avenue for establishing a
              cutting-edge investment platform without necessitating coding
              expertise within a short time.
            </p>
            <div className="nova-social-row">
              <span className="nova-social-icon">
                <img src={oneso}></img>
              </span>
              <span className="nova-social-icon">
                <img src={twoso}></img>
              </span>
              <span className="nova-social-icon">
                <img src={threeso}></img>
              </span>
              <span className="nova-social-icon">
                <img src={fourso}></img>
              </span>
            </div>
          </div>

          <div className="nova-link-grid">
            <div className="nova-col">
              <h4 className="nova-col-title">Company</h4>
              <nav className="nova-nav">
                <span> <HashLink smooth to="/#about-us">About Us</HashLink></span>
          <HashLink smooth to="/#how-works">How It Works</HashLink>
          <HashLink smooth to="/#why-choose">Careers</HashLink>
          <HashLink smooth to="/#regulation-section">Investor Relations</HashLink>
      
              </nav>
            </div>
            <div className="nova-col">
              <h4 className="nova-col-title">Platform</h4>
              <nav className="nova-nav">
                <span>Marketplace</span>
                <span>Investor Dashboard</span>
                <span>Admin Access</span>
                <span>Support</span>
              </nav>
            </div>
            <div className="nova-col">
              <h4 className="nova-col-title">Legal</h4>
              <nav className="nova-nav">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
                <span>Risk Disclosure</span>
                <span>Fraction Ownership Agreement</span>
              </nav>
            </div>
            <div className="nova-col">
              <h4 className="nova-col-title">Contact us</h4>
              <div className="nova-contact-info">
                <p>
                  <img src={location}></img> 123 Main Street, Dubai
                </p>
                <p>
                  <img src={mail}></img> support@gglunitra.com
                </p>
                <p>
                  <img src={call}></img> +11111 1234 5678
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="nova-footer-bottom">
          <p className="nova-copyright">© 2026 GGL UNITRA. All Rights Reserved</p>
          <div className="nova-legal-links">
            <span>Privacy Policy</span>
            <span className="nova-divider"></span>
            <span>Terms of Service</span>
          </div>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
