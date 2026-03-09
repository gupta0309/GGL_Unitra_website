import React from 'react';
import { motion } from 'framer-motion';
import '../../Styles/S7RegulationSection.css';
import groupone from '../../assets/S7/groupone.png';
import grouptwo from '../../assets/S7/Group.png';
import india from "../../assets/S7/india.png"
import linkarrow from "../../assets/S7/LinkArrow.png"
import avtar from "../../assets/S3WhyChoose/avtarone.png"

const S7RegulationSection = () => {
  const superunique_cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="superunique-container">
      {/* Upper Section */}
      <div className="superunique-header-wrapper">
        <span className="superunique-badge-small">SAFETY NEVER SLEEPS</span>
        <h2 className="superunique-main-heading">
          ROBUSTLY <span className="superunique-text-mint">REGULATED</span>
        </h2>
        
        <div className="superunique-toggle-group">
          <button className="superunique-tab-btn superunique-active">
            <span className="superunique-icon"><img src={groupone}></img></span> Dual regulated
          </button>
          <button className="superunique-tab-btn">
            <span className="superunique-icon"><img src={grouptwo}></img></span> Ownership protection
          </button>
        </div>
      </div>

      {/* Main Feature Card */}
      <motion.div 
        className="superunique-glass-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={superunique_cardVariants}
      >
        <div className="superunique-card-hero">
          <div className="superunique-shield-graphic"><img src={groupone}></img></div>
          <h3 className="superunique-card-title">DUAL REGULATED</h3>
          <p className="superunique-card-description">
            We operate with a compliance-first approach to ensure investor protection and transparency across all transactions.
          </p>
          <button className="superunique-cta-button">View Legal Documentation</button>
        </div>

        <div className="superunique-card-grid">
          <div className="superunique-info-tile">
            <div className="superunique-tile-header">
              <span className="superunique-flag"><img src={india}></img></span>
              <span className="superunique-external-link"><img src={linkarrow}></img></span>
            </div>
            <h4 className="superunique-tile-title">REGULATED STRUCTURE IN INDIA</h4>
            <p className="superunique-tile-text">Our investment structure aligns with India real estate and financial compliance frameworks.</p>
          </div>

          {/* <div className="superunique-info-tile">
            <div className="superunique-tile-header">
              <span className="superunique-flag"><img src={united}></img></span>
            </div>
            <h4 className="superunique-tile-title">REGULATED STRUCTURE IN USA</h4>
            <p className="superunique-tile-text">We align with applicable capital market and property compliance standards.</p>
          </div> */}
        </div>
      </motion.div>

      {/* Testimonial Section */}
      <div className="superunique-social-proof">
        <div className="superunique-badge-center">
          <span className="superunique-badge-small">SUCCESS STORIES</span>
        </div>
        <h2 className="superunique-testimonial-header">
          HEAR FROM OUR GLOBAL <span className="superunique-text-mint">INVESTORS</span>
        </h2>
        
        <div className="superunique-testimonial-layout">
          <div className="superunique-stat-box">
            <h1 className="superunique-big-stat">Trusted by Over 5,000+ Investors</h1>
            <div className="superunique-stepper">
              <span className="superunique-step"></span>
              <span className="superunique-step superunique-step-active"></span>
              <span className="superunique-step"></span>
              <span className="superunique-step"></span>
              <span className="superunique-step"></span>
            </div>
          </div>
          
          <motion.div 
            className="superunique-quote-container"
            // initial={{ opacity: 0, x: 50 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ delay: 0.2 }}
          >
            <span className="superunique-quote-icon">“</span>
            <p className="superunique-quote-body">
              The platform makes real estate investing simple and accessible. The transparency and structured documentation gave me confidence from day one.
            </p>
            <div className="superunique-author-card">
              <img src={avtar} alt="Ayesha K." className="superunique-avatar" />
              <div className="superunique-author-meta">
                <span className="superunique-author-name">Ayesha K.</span>
                <span className="superunique-author-loc">Riyadh</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default S7RegulationSection;