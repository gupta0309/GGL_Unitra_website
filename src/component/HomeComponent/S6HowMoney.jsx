import React, { useState, useEffect } from 'react';
import '../../Styles/S6HowMoney.css';
import leftimg from '../../assets/S5Portfolio/Phone Mockup.png';
import graph from '../../assets/S5Portfolio/graph.png';
const slideData = [
  {
    id: 1,
    image: leftimg,
    titleparts: [
      { text: "EARN ", className: "s6hm-green-text" },
      { text: "CONSISTENT PASSIVE INCOME" }
    ],
    description:
      "Unlock the power of structured real estate investments designed to generate long-term wealth and steady returns.",
    stat1Value: "INR 75M+",
    stat1Label: "Total Rental Income Distributed",
    stateparts: [
      { stat2Value: "6.5" },
      { stat2Value: "%", className: "s6hm-green-text" },
      { stat2Value: " – 18" },
      { stat2Value: "%", className: "s6hm-green-text" }
    ],
    stat2Label: "Average Annual Target ROI"
  },
  {
    id: 2,
    image: leftimg,
    titleparts: [
      { text: "GROW ", className: "s6hm-green-text" },
      { text: "YOUR FINANCIAL FUTURE" }
    ],
    description:
      "Our AI-driven platform helps you identify the best properties with the highest growth potential in the market.",
    stat1Value: "12K+",
    stat1Label: "Active Investors",
    stateparts: [
      { stat2Value: "24" },
      { stat2Value: "/7", className: "s6hm-green-text" }
    ],
    stat2Label: "Support & Monitoring"
  }
];

const S6HowMoney = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % slideData.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slideData[currentIndex];

  return (
    <section className="s6hm-section">
      <div className="s6hm-container">

        <div className="s6hm-text-content">
          <p className="s6hm-subtitle">IT’S YOUR MONEY. GROW IT</p>
          <h1 className="s6hm-main-title">
            SO, HOW DO I MAKE <span className="s6hm-highlight">MONEY?</span>
          </h1>
        </div>

        <div className="s6hm-wrapper s6hm-fade" key={currentIndex}>
          
          {/* LEFT SIDE */}
          <div className="s6hm-left">

            <div className="s6hm-green-circle"></div>

            <div className="s6hm-floating-card">
              <p>Income Generated</p>
              <img src={graph} alt="" />
              <h4>+12.4%</h4>
            </div>

            <img
              src={currentSlide.image}
              alt="Investment Dashboard"
              className="s6hm-image"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="s6hm-right">

            <h2 className="s6hm-header">
              {currentSlide.titleparts.map((part, index) => (
                <span key={index} className={part.className}>
                  {part.text}
                </span>
              ))}
            </h2>

            <p className="s6hm-description">
              {currentSlide.description}
            </p>

            <div className="s6hm-stats">

              <div className="s6hm-stat-item">
                <div className="s6hm-stat-value">
                  {currentSlide.stat1Value}
                </div>
                <div className="s6hm-stat-label">
                  {currentSlide.stat1Label}
                </div>
              </div>

              <div className="s6hm-stat-item">
                <div className="s6hm-stat-value">
                  {currentSlide.stateparts.map((part, index) => (
                    <span key={index} className={part.className}>
                      {part.stat2Value}
                    </span>
                  ))}
                </div>
                <div className="s6hm-stat-label">
                  {currentSlide.stat2Label}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default S6HowMoney;