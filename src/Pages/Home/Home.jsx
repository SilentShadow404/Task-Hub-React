import React from "react";
import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import FeaturesSection from "../../Components/FeaturesSection/FeaturesSection";
import AuthSection from "../../Components/AuthSection/AuthSection";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <section id="info">
        <HeroSection />
      </section>
      <section id="feature">
        <FeaturesSection />
      </section>
      <section id="auth">
        <AuthSection />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
