import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import S1Hero from "../component/HomeComponent/S1Hero.jsx";
import S2HowWorks from "../component/HomeComponent/S2HowWorks.jsx";
import S3WhyChoose from "../component/HomeComponent/S3WhyChoose.jsx";
import S4About from "../component/HomeComponent/S4About.jsx";
import S5Portfolio from "../component/HomeComponent/S5Portfolio.jsx";
import S6HowMoney from "../component/HomeComponent/S6HowMoney.jsx";
import S7RegulationSection from "../component/HomeComponent/S7RegulationSection.jsx";
import S1Secondsection from "../component/HomeComponent/S1Secondsection.jsx";
import Login from "../Login/Login.jsx"
import Signup from "../Login/Signup.jsx"
import Header from "../component/Directives/Header.jsx"
import Footer from "../component/Directives/Footer.jsx";
// Directive Components

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const { search } = location;
    const params = new URLSearchParams(search);
    const scrollToId = params.get("section");

    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        // Adding a slight timeout ensures the DOM is fully rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
    <Header/>
      <section id="home">
        <S1Hero />
      </section>
 <section id="secondsection">
        <S1Secondsection />
      </section>
      <section id="how-works">
        <S2HowWorks />
      </section>

        <section id="why-choose">
        <S3WhyChoose />
      </section>

      <section id="about-us">
        <S4About />
      </section>

      <section id="portfolio">
        <S5Portfolio />
      </section>

         <section id="howtomakemoney">
        <S6HowMoney />
      </section>


      
         <section id="regulation-section">
        <S7RegulationSection />
      </section>

      {/* <Login/> */}
      {/* <Signup/> */}
      <Footer/>
    </>
  );
}

export default HomePage;
