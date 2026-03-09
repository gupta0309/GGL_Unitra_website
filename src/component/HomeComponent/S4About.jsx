import React from 'react';
import { motion } from 'framer-motion';
import '../../Styles/S4About.css';
import icon from "../../assets/S4About/Icon.png"
import about from "../../assets/S3WhyChoose/main.jpg"
const stats = [
  // { label: 'Registered users', value: '2 K+', color: 'green' },
  // { label: 'Total Property Value Listed', value: 'USD 15B+', color: 'dark' },
  // { label: 'Active Cities', value: '25+', color: 'green' },
  // { label: 'Fractions Allocated', value: 'USD 200M+', color: 'green' },
  
  { label: 'Registered users', left: '2', middle: 'K', right: '+' },
  { label: 'Total Property Value Listed', middle: 'INR 15', right: 'B+' },
  { label: 'Active Cities', left: '25', right: '+' },
  { label: 'Fractions Allocated', middle: 'INR 200', right: 'M+' },

];

const S4About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="re-platform__wrapper">
      <header className="re-platform__header">
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="re-platform__badge"
        >
          ABOUT US
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="re-platform__main-title"
        >
          ABOUT OUR <span className="re-platform__highlight">REAL ESTATE PLATFORM</span>
        </motion.h2>
      </header>

      <div className="re-platform__content-grid">
        {/* Left Side: Copy */}
        <motion.div 
          className="re-platform__text-area"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="re-platform__sub-heading">Finding Great Properties for Smart Investors</h3>
          <p className="re-platform__description">
            We specialize in building a secure, digital-first investment platform 
            that empowers individuals to access premium real estate opportunities — 
            without the traditional complexities of full property ownership.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: '#3bbd6d' }}
            whileTap={{ scale: 0.95 }}
            className="re-platform__cta-button"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Side: Visuals */}
        <div className="re-platform__image-area">
          <motion.div 
            className="re-platform__img-container"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={about}
              alt="Real Estate" 
              className="re-platform__hero-img"
            />
            
            {/* Animated Floating Badge */}
            <motion.div 
              className="re-platform__floating-card"
              animate={{ 
                y: [0, -12, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="re-platform__card-icon"><img src={icon}></img></div>
              <div className="re-platform__card-text">
                <span className="re-platform__card-label">Average Profit</span>
                <span className="re-platform__card-val">Upto 20%</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section with Staggered Animation */}
      <motion.div 
        className="re-platform__stats-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((item, index) => (
          <motion.div 
            key={index} 
            className="re-platform__stat-box"
            variants={itemVariants}
          >
            {/* <h4 className={`re-platform__stat-number ${item.color === 'green' ? 'is-green' : ''}`}>
              {item.value}
            </h4> */}
            {/* <h4
  className={`re-platform__stat-number ${
    item.color === 'green'
      ? 'is-green'
      : item.color === 'dark'
      ? 'is-dark'
      : ''
  }`}
>
  {item.value}
</h4> */}
<h4 className="re-platform__stat-number">
  <span className="re-platform__green">{item.left}</span>

  {item.middle && (
    <span className="re-platform__black">{item.middle}</span>
  )}

  <span className="re-platform__green">{item.right}</span>
</h4>
            <p className="re-platform__stat-label">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default S4About;