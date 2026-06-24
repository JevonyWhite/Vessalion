import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Markets.css";
import GlobalTradeMap from "../../assets/BodyImages/First set/Global Trade Map.png";
import useScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const REGIONS = [
  {
    id: 1,
    region: "North America",
    tag: "Americas",
    desc: "Supporting procurement, distribution, and supply-chain activities across the United States, Canada, and Mexico. This market remains a major destination for industrial minerals, manufacturing inputs, construction materials, and strategic raw materials.",
    highlights: ["Industrial Minerals", "Manufacturing Inputs", "Construction Materials"],
  },
  {
    id: 2,
    region: "Latin America",
    tag: "Americas",
    desc: "Engaging with suppliers, producers, logistics providers, and commercial partners throughout Latin America. The region plays a significant role in global mining, agriculture, energy production, and industrial commodity markets.",
    highlights: ["Mining", "Agriculture", "Energy Production"],
  },
  {
    id: 3,
    region: "West Africa",
    tag: "Africa",
    desc: "West Africa remains an important source of mineral resources, industrial commodities, and emerging infrastructure opportunities. Vessalion seeks to support responsible commercial relationships that connect regional production with international demand.",
    highlights: ["Mineral Resources", "Industrial Commodities", "Infrastructure"],
  },
  {
    id: 4,
    region: "East Africa",
    tag: "Africa",
    desc: "East Africa continues to experience rapid industrial and infrastructure development. The region offers growing opportunities across mining, manufacturing, logistics, construction, and international trade.",
    highlights: ["Mining", "Manufacturing", "International Trade"],
  },
  {
    id: 5,
    region: "Europe",
    tag: "Europe",
    desc: "Europe remains a critical market for advanced manufacturing, industrial processing, infrastructure development, and commodity consumption. Vessalion supports commercial relationships that help facilitate the movement of materials into and throughout European markets.",
    highlights: ["Advanced Manufacturing", "Industrial Processing", "Commodity Consumption"],
  },
  {
    id: 6,
    region: "Middle East",
    tag: "Middle East",
    desc: "The Middle East serves as a strategic hub for global trade, logistics, infrastructure investment, and industrial development. Its geographic position makes it an important connector between Africa, Asia, and Europe.",
    highlights: ["Global Trade Hub", "Logistics", "Infrastructure Investment"],
  },
  {
    id: 7,
    region: "Asia-Pacific",
    tag: "Asia-Pacific",
    desc: "The Asia-Pacific region remains one of the world's largest centers for manufacturing, industrial processing, technology production, and commodity consumption. Vessalion supports supply-chain activities that help connect producers and buyers throughout this dynamic market.",
    highlights: ["Manufacturing", "Technology Production", "Commodity Consumption"],
  },
];

const TAGS = ["All", "Americas", "Africa", "Europe", "Middle East", "Asia-Pacific"];

const RevealItem = ({ children, direction = "up", className = "" }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`reveal reveal--${direction} ${visible ? "reveal--visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

const Markets = () => {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState("All");
  const [heroRef, heroVisible] = useScrollReveal();
  const [mapRef, mapVisible] = useScrollReveal();
  const [closingRef, closingVisible] = useScrollReveal();

  const filtered = activeTag === "All" ? REGIONS : REGIONS.filter(r => r.tag === activeTag);

  return (
    <div className="mkt-page">

      {/* ── Hero ── */}
      <div className="mkt-hero">
        <div className="mkt-hero-bg" />
        <div
          ref={heroRef}
          className={`mkt-hero-content reveal reveal--up ${heroVisible ? "reveal--visible" : ""}`}
        >
          <span className="mkt-eyebrow">Markets</span>
          <h1 className="mkt-hero-title">
           <span className="mkt-hero-title-1">Global Reach</span> <br /> <span className="mkt-hero-title-2">Local Execution</span>
          </h1>
          <div className="mkt-hero-divider" />
          <p className="mkt-hero-desc">
            Vessalion supports procurement, sourcing, logistics, and supply-chain
            activities across key regions of the global economy. Through a network
            of suppliers, logistics providers, inspection partners, and commercial
            relationships, we help connect qualified buyers and sellers across
            international markets.
          </p>
        </div>
      </div>

      {/* ── Global Trade Map ── */}
      <div
        ref={mapRef}
        className={`mkt-map-section reveal reveal--up ${mapVisible ? "reveal--visible" : ""}`}
      >
        <img
          src={GlobalTradeMap}
          alt="Global trade network"
          className="mkt-map-img"
        />
        <div className="mkt-map-overlay">
          <div className="mkt-map-stats">
            <div className="mkt-map-stat">
              <p className="mkt-map-stat-num">7</p>
              <p className="mkt-map-stat-label">Global Regions</p>
            </div>
            <div className="mkt-map-stat-div" />
            <div className="mkt-map-stat">
              <p className="mkt-map-stat-num">150+</p>
              <p className="mkt-map-stat-label">Countries Connected</p>
            </div>
            <div className="mkt-map-stat-div" />
            <div className="mkt-map-stat">
              <p className="mkt-map-stat-num">Multi</p>
              <p className="mkt-map-stat-label">Commodity Sectors</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Intro text ── */}
      <RevealItem direction="up" className="mkt-intro">
        <p className="mkt-intro-text">
          Our focus is not limited to a single geography. We work across multiple
          regions where industrial development, infrastructure investment, manufacturing
          growth, and commodity production create opportunities for reliable commercial
          partnerships.
        </p>
      </RevealItem>

      {/* ── Filter tabs ── */}
      <div className="mkt-filters">
        {TAGS.map(tag => (
          <button
            key={tag}
            className={`mkt-filter ${activeTag === tag ? "mkt-filter--active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ── Regions grid ── */}
      <div className="mkt-regions">
        {filtered.map((r, i) => (
          <RevealItem
            key={r.id}
            direction={i % 2 === 0 ? "left" : "right"}
            className="mkt-region-card"
          >
            <div className="mkt-region-tag">{r.tag}</div>
            <h2 className="mkt-region-title">{r.region}</h2>
            <div className="mkt-region-divider" />
            <p className="mkt-region-desc">{r.desc}</p>
            <div className="mkt-region-highlights">
              {r.highlights.map(h => (
                <span key={h} className="mkt-region-highlight">{h}</span>
              ))}
            </div>
          </RevealItem>
        ))}
      </div>

      {/* ── Closing ── */}
      <div
        ref={closingRef}
        className={`mkt-closing reveal reveal--up ${closingVisible ? "reveal--visible" : ""}`}
      >
        <div className="mkt-closing-inner">
          <span className="mkt-eyebrow">Global Perspective</span>
          <h2 className="mkt-closing-title">
            Markets evolve. Supply chains change.<br />Demand shifts.
          </h2>
          <p className="mkt-closing-desc">
            Vessalion's objective is to maintain the relationships, processes, and
            operational discipline necessary to help clients navigate global procurement
            and supply-chain requirements with confidence, transparency, and reliability.
          </p>
          <div className="mkt-closing-btns">
            <button className="mkt-btn mkt-btn--solid" onClick={() => navigate("/contact")}>
              GET IN TOUCH →
            </button>
            <button className="mkt-btn mkt-btn--outline" onClick={() => navigate("/opportunities")}>
              VIEW OPPORTUNITIES →
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Markets;