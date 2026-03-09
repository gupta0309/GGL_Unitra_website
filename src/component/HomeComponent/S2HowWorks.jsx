import React, { useState, useEffect } from "react";
import "../../Styles/S2HowWorks.css";
import browse from "../../assets/S2HowWorks/right1.png";
import invest from "../../assets/S2HowWorks/invest.webp";
import sell from "../../assets/S2HowWorks/SELL.png"
const DATA = [
  {
    id: "browse",
    tag: "BROWSE",
    heading: "UNLOCK PRIME REAL ESTATE OPPORTUNITIES ACROSS GLOBAL MARKETS.",
    description:
     "Discover curated real estate investment opportunities across prime locations. Filter by city, budget, and expected ROI.",
    img: browse,
  },
  {
    id: "invest",
    tag: "INVEST",
    heading: "Own a portion of high-value properties starting at affordable entry points.",
    description:
      "Invest in your preferred real estate opportunities from anywhere in the world — we’ll handle the rest with expertise and care",
    img: invest,
  },
  {
    id: "manage",
    tag: "SELL & EARN",
    heading: "Sell smart. Earn consistently. Grow through premium real estate opportunities",
    description: "View real-time value updates and performance indicators.",
    img: sell,
  },
];

const S2HowWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DATA.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextIndex = (activeIndex + 1) % DATA.length;

  return (
    <section className="how-works-wrapper">
      <div className="works-header-section">
        <div className="works-badge">HOW IT WORKS</div>
        <h1 className="works-heading">
          <span className="highlight">Real estate </span> estate investing made simple —
          <br className="desktop-break"></br>
          FULLY DIGITAL. FULLY FRACTIONAL. FULLY SECURE.
        </h1>
      </div>

   
      <div className="how-works-container">
        {/* LEFT CONTENT */}
        <div className="how-works-left">
          {/* Active */}
          <div key={activeIndex} className="active-content">
            <span className="step-tag">{DATA[activeIndex].tag}</span>
            <h2 className="step-heading">{DATA[activeIndex].heading}</h2>
            <p className="step-description">{DATA[activeIndex].description}</p>
          </div>

          {/* Hold */}
          <div key={nextIndex} className="hold-content">
            <span className="step-tag">{DATA[nextIndex].tag}</span>
            <h3 className="step-heading small">{DATA[nextIndex].heading}</h3>
          </div>
        </div>

        {/* RIGHT IMAGE (Direct Image No Container) */}
        {/* <div className="how-works-right">
          <img
            key={activeIndex}
            src={DATA[activeIndex].img}
            alt="section visual"
            className="dynamic-image"
          />
        </div> */}
        <div className="how-works-right">
  {/* <div className="image-wrapper">
    <img
      key={activeIndex}
      src={DATA[activeIndex]?.img || null}
      alt="section visual"
      className="dynamic-image"
    />
  </div> */}
  <div className="image-wrapper">
  {DATA.map((item, index) => (
    <img
      key={item.id}
      src={item.img}
      alt="section visual"
      className={`dynamic-image ${
        index === activeIndex ? "active" : ""
      }`}
    />
  ))}
</div>
</div>
      </div>
    </section>
  );
};

export default S2HowWorks;
