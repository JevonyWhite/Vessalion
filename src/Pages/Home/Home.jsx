import React from "react";
import { useEffect, useState, useRef } from "react";
import "../Home/Home.css";
import ShipImage from "../../assets/BodyImages/First set/Container Vessel.png";
import HandshakeImage from "../../assets/BodyImages/First set/International Handshake.png";
import Preview from "../../components/Preview/Preview";
import OpportunityCard from "../../components/OpportunityCard/OpportunityCard";
import cards from "./HomeCardsData/Home_cards_data.js";
import { useNavigate } from "react-router-dom";
import useScrollReveal from "../../components/ScrollReveal/ScrollReveal.js";
import video from "../../assets/Homepage_Video.mp4";

const Home = () => {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const video = videoRef.current;
  //     if (!video) return;
  //     video.style.transform = `translateY(${window.scrollY * 0.4}px)`;
  //   };
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const navigate = useNavigate();
  const sliderRef = useRef(null);

  // scroll reveal refs
  const [videoRef, videoVisble] = useScrollReveal();
  const [reportRef, reportVisible] = useScrollReveal();
  const [oppsTitleRef, oppsTitleVisible] = useScrollReveal();
  const [oppsRef, oppsVisible] = useScrollReveal();
  const [insightRef, insightVisible] = useScrollReveal();
  const [titleRef, titleVisible] = useScrollReveal();
  const [secondTitleRef, secondTitleVisible] = useScrollReveal();

  const scrollLeft = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (slider.scrollLeft <= 1) {
      // at the start → jump to last card
      slider.scrollTo({ left: slider.scrollWidth, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: -440, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft >= maxScroll - 1) {
      // at the end → jump back to first card
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div style={{ width: "100%" }} className="home-page">
      <section className="hero">
        <video
          ref={videoRef}
          className={`hero-video  reveal reveal--right ${videoVisble ? "reveal--visible" : ""}`}
          autoPlay
          muted
          playsInline
          preload="auto"
          loop
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="hero-content">
          {/* <h1>
            Principal Intermediaries in Global Strategic Feedstocks & Commodity
            Aggregation.
          </h1> */}
          {/* <button className="hero-btn" onClick={() => navigate("/about#who-we-are")}>Discover who we are</button> */}
        </div>
      </section>
      
      <div className="home-content">

        <button
        className="hero-btn"
        onClick={() => navigate("/about#who-we-are")}
      >
        Discover Who We Are
      </button>

      
        <div
          ref={reportRef}
          className={`report-banner reveal reveal-left ${reportVisible ? "reveal--visible" : ""}`}
        >
          <img
            src={ShipImage}
            alt="2025 Annual Report"
            className="report-img"
          />
          <div ref={titleRef} className="report-content">
            <h1
              className={`report-title reveal reveal--left ${titleVisible ? "reveal--visible" : ""}`}
            >
              CONNECTING
              <br />
              GLOBAL RESOURCES
              <br />
              <span className="report-title--gold">
                DELIVERING VALUE
                <br />
                WORLDWIDE
              </span>
              <div className="report-title-underline" />
            </h1>

            <p className="report-desc">
              Vessalion connects producers, processors, logistics providers, and
              industrial buyers through a structured global supply-chain
              network. We specialize in sourcing, verifying, and delivering
              industrial minerals, strategic raw materials, and bulk commodities
              that support manufacturing, infrastructure, energy, and industrial
              development worldwide.
            </p>

            <div className="report-btns">
              <button
                className="report-btn report-btn--solid"
                onClick={() => navigate("/about#who-we-are")}
              >
                WHO WE ARE →
              </button>
              <button
                className="report-btn report-btn--outline"
                onClick={() => navigate("/contact")}
              >
                CONTACT US →
              </button>
            </div>
          </div>
        </div>
        <p
          ref={oppsTitleRef}
          className={`home-content-text reveal ${oppsTitleVisible ? "reveal--visible" : ""}`}
        >
          CURRENT OPPORTUNITIES
        </p>

        <div
          ref={oppsRef}
          className={`news-section reveal reveal--up ${oppsVisible ? "reveal--visible" : ""}`}
        >
          <div className="news-slider" ref={sliderRef}>
            {cards.map((card) => (
              <OpportunityCard key={card.id} card={card} />
            ))}
          </div>

          {/* Controls */}
          <div className="news-controls">
            <button className="arrow-btn" onClick={scrollLeft}>
              ←
            </button>
            <button className="arrow-btn" onClick={scrollRight}>
              →
            </button>
            <button
              className="view-all-btn"
              onClick={() => navigate("/opportunities")}
            >
              View all
            </button>
          </div>
        </div>
      </div>

      <div
        ref={insightRef}
        className={`insight-card reveal reveal--right ${insightVisible ? "reveal--visible" : ""}`}
      >
        <div className="insight-card-img-wrap">
          <img
            src={HandshakeImage}
            alt="Global partnerships"
            className="insight-card-img"
          />
        </div>
        <div className="insight-card-content">
          <h3
            ref={secondTitleRef}
            className={`insight-card-title reveal reveal--right ${secondTitleVisible ? "reveal--visible" : ""}`}
          >
            Where Trust
          </h3>
          <h3
            ref={secondTitleRef}
            className={`insight-card-title2 reveal reveal--left ${secondTitleVisible ? "reveal--visible" : ""}`}
          >
            Meets Trade
          </h3>
          <p className="insight-card-desc">
            Vessalion connects producers, processors, logistics providers, and
            industrial buyers through a structured global supply-chain network.
            We specialize in sourcing, verification, and trade across industrial
            minerals, strategic raw materials, and bulk commodities.
          </p>
          <button
            className="insight-card-btn"
            onClick={() => navigate("/markets")}
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
