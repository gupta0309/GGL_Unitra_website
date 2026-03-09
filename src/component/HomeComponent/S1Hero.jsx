import React from 'react';
import '../../Styles/S1Hero.css';
import left from '../../assets/S1Hero/left.png';
import left_card from "../../assets/S1Hero/left-card.png"
import right_card from "../../assets/S1Hero/right-card.png"

const S1Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge">PREMIUM REAL ESTATE</div>

        {/* Heading */}
        <h1 className="hero-title">
          Transforming Real Estate Into <span className="text-highlight">Future Wealth</span>
        </h1>

        {/* Description */}
        <p className="hero-description">
          A smarter way to invest in real estate — transparent, <br />
          diversified, and accessible.
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <button className="btn-primary">
            Explore Properties <span className="arrow">→</span>
          </button>
          <button className="btn-secondary">
            <span className="play-icon">▶</span> How it Works
          </button>
        </div>
      </div>

      {/* Hero Image Section with Floating Cards */}
      <div className="hero-image-wrapper">
        <img 
          src={left} 
          alt="Modern Architecture" 
          className="main-building"
        />
        
        {/* Floating Card 1 - Bottom Left */}
        <div className="floating-card card-left">
          <img src={left_card} alt="Marina Gate" className='left-card'/>
          <div className="card-info">
            <h4>Marina Gate 1, Dubai Marina</h4>
            <p className="percentage">+12.4%</p>
          </div>
        </div>

        {/* Floating Card 2 - Top Right */}
        <div className="floating-card card-right">
          <img src={right_card} alt="Estate Fund" />
          <div className="card-info">
            <h4>Khuzama Real Estate Fund</h4>
            <p className="percentage">12%</p>
          </div>
        </div>
      </div>
      

      
    </section>
    

    
  );
};

export default S1Hero;