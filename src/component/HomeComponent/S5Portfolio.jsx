import React from "react";
import { motion } from "framer-motion";
import "../../Styles/S5Portfolio.css";
import properties from "../../assets/S5Portfolio/properties.png";
import cardone from "../../assets/S5Portfolio/cardone.jpg";
import cardtwo from "../../assets/S5Portfolio/cardtwo.png"
import bedsIcon from "../../assets/S5Portfolio/first.png"
import bath from "../../assets/S5Portfolio/second.png"
import sqft from "../../assets/S5Portfolio/thierd.png"
import avtar from "../../assets/S5Portfolio/avtar.jpg"
import like from "../../assets/S5Portfolio/like.png"
import share from "../../assets/S5Portfolio/share.png"
import location from "../../assets/S5Portfolio/location.png"

const propertyData = [
  {
    id: "2048-PBT",
    category: "Properties",
    mainHeading: "INVEST IN PROPERTIES IN PRIME AREAS",
    description: "Own fractional shares of high-demand properties located in rapidly growing urban markets.",
    title: "The Skyline Business Tower",
    location: "Downtown Business District",
    price: "50,000",
    totalPrice: "8,500,000",
    return: "14% - 18%",
    img: cardone
  },
  {
    id: "3055-LXT",
    category: "Funds",
    mainHeading: "INVEST IN PRIVATE SINGLE-ASSET REAL ESTATE FUNDS",
    description: "Own fractional shares of high-demand properties located in rapidly growing urban markets.",
    title: "Oceanic Wellness Center",
    location: "Marina Bay Plaza",
    price: "75,000",
    totalPrice: "12,200,000",
    return: "12% - 15%",
    img: cardtwo
  }
  
];

const S5Portfolio = () => {
  return (
    <div className="portfolio-page">
      {/* Fixed Global Title */}
      <div className="global-title">
        <span className="top-badge">Leading Digital Real Estate Platform</span>
        <h1>BUILD A <span className="green">GLOBAL</span> AND DIVERSIFIED <br></br>REAL ESTATE PORTFOLIO</h1>
      </div>

      <div className="main-stack-container">
        {propertyData.map((data, index) => (
          <div 
            className="stack-layer" 
            key={data.id} 
            style={{ top: `${0 + index * 20}px` }}
          >
            {/* HEADING SECTION - Inside the sticky layer */}
            <div className="content-header-row">
              <div className="header-left">
                <div className="type-tag"><img src={properties}></img> {data.category}</div>
                <h2>{data.mainHeading}</h2>
              </div>
              <div className="header-right">
                <p>{data.description}</p>
                <button className="discover-btn">Discover More →</button>
              </div>
            </div>

            {/* CARD SECTION - Directly underneath the heading */}
            <motion.div 
              className="glass-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="card-grid">
                <div className="image-side">
                  <img src={data.img} alt={data.title} />
                  {/* <div className="img-tags">
                    <span className="exclusive"><img src={exit}></img><div className="share"><img src={share}></img><img src={like}></img></div></span>
                    <div className="glass-price">
                       <div className="live-tag">LIVE</div>
                       <small>Asking Price</small>
                       <strong>USD {data.price}</strong>
                    </div>
                    <div className="bottom-text">
                        <h3>{data.title}</h3>
                        <p>📍 {data.location}</p>
                    </div>
                  </div> */}
                  <div className="img-tags">

  {/* TOP ROW */}
  <div className="top-icons">
    <div className="back-btn">←</div>
    <div className="right-icons">
      <div className="circle"><img src={share} /></div>
      <div className="circle"><img src={like} /></div>
    </div>
  </div>

  {/* BOTTOM ROW */}
  <div className="bottom-row">

    <div className="bottom-text">
      <div className="exclusive-tag"><i class="fa-solid fa-circle"></i>  EXCLUSIVE LISTING</div>
      <h3>{data.title}</h3>
      <p><img src={location} className="location-folio"></img> {data.location}</p>
    </div>

    <div className="glass-price">
      <small>Asking Price <span className="live-small">LIVE</span></small>
      <strong>INR {data.price}</strong>
    </div>

  </div>

</div>
                </div>

                <div className="info-side">
                   <div className="info-top">
                      <div>
                        <h4>Property ID: {data.id}</h4>
                        <p>San Jose, CA 95119</p>
                      </div>
                      {/* <button className="bm">🔖</button> */}
                   </div>
                   <div className="features">
                      <span><img src={bedsIcon} alt="Beds" /> 4 Beds</span><span><img src={bath}></img> Baths</span><span><img src={sqft}></img> 1,868 sqft</span>
                   </div>
                   <div className="price-info">
                      <div><p>PRICE</p><h3>INR {data.totalPrice}</h3></div>
                      <div><p className="expected">Expected Return <span>{data.return}</span></p></div>
                   </div>
                   <div className="agent">
                      <div className="avatar"><img src={avtar}></img></div>
                      <div><strong>Amelia Stephenson</strong><p>Premier Agent • 12 years exp.</p></div>
                      <button className="enq">Send Enquiry</button>
                   </div>
                   <button className="main-btn">Request Property Brochure</button>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default S5Portfolio;