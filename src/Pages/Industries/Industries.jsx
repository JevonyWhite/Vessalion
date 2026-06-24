import React from "react";
import { useNavigate } from "react-router-dom";
import "../Industries/Industries.css";
import MiningEquipment from "../../assets/BodyImages/First set/Mining Equipment.png";
import CommodityInspection from "../../assets/BodyImages/First set/Commodity Inspection Site.png";
import useScrollReveal from "../../components/ScrollReveal/ScrollReveal.js";

const INDUSTRIES = [
  {
    id: 1,
    number: "01",
    title: "Mining & Minerals",
    body: "Supporting the sourcing and movement of industrial minerals, raw materials, and mining-related commodities required for manufacturing, infrastructure, and export markets.",
    tags: ["Industrial Minerals", "Raw Materials", "Export Markets"],
  },
  {
    id: 2,
    number: "02",
    title: "Infrastructure & Construction",
    body: "Facilitating access to construction materials, industrial inputs, and project-related procurement solutions for public and private sector developments.",
    tags: [
      "Construction Materials",
      "Industrial Inputs",
      "Project Procurement",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Manufacturing",
    body: "Helping manufacturers secure reliable sources of raw materials, components, and industrial products required to maintain production continuity and operational efficiency.",
    tags: ["Raw Materials", "Production Continuity", "Industrial Products"],
  },
  {
    id: 4,
    number: "04",
    title: "Energy & Industrial Operations",
    body: "Supporting organizations that require consistent access to industrial commodities, equipment, and supply chain coordination across multiple jurisdictions.",
    tags: ["Industrial Commodities", "Equipment Supply", "Multi-Jurisdiction"],
  },
  {
    id: 5,
    number: "05",
    title: "Government & Institutional Procurement",
    body: "Assisting qualified entities with supplier identification, procurement support, compliance coordination, and logistics management for approved projects and initiatives.",
    tags: [
      "Supplier Identification",
      "Compliance Coordination",
      "Logistics Management",
    ],
  },
  {
    id: 6,
    number: "06",
    title: "International Trade & Distribution",
    body: "Connecting buyers and suppliers across borders through coordinated procurement, logistics planning, documentation support, and supply chain management.",
    tags: ["Cross-Border Trade", "Logistics Planning", "Documentation Support"],
  },
];

const RevealSection = ({ children, className = "", direction = "up" }) => {
  const [ref, visible] = useScrollReveal();
 
  return (
    <div
      ref={ref}
      className={`reveal reveal--${direction} ${visible ? "reveal--visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

const Industries = () => {
  const navigate = useNavigate();
  const [heroRef, heroVisible] = useScrollReveal();
  const [introRef, introVisible] = useScrollReveal();
  const [closingRef, closingVisible] = useScrollReveal();

  return (
    <div className="ind-page">
      {/* ── Hero ── */}
      <div className="ind-hero">
        <img
          src={MiningEquipment}
          alt="Mining operations"
          className="ind-hero-img"
        />
        <div className="ind-hero-overlay" />
        <div
          ref={heroRef}
          className={`ind-hero-content reveal reveal--left ${heroVisible ? "reveal--visible" : ""}`}
        >
          <span className="ind-hero-eyebrow">Industries Served</span>
          <h1 className="ind-hero-title">
            Built for the
            <br />
            Industries That
            <br />
            Move the World
          </h1>
        </div>
      </div>

      {/* ── Intro ── */}
      <div
        ref={introRef}
        className={`ind-intro reveal reveal--up ${introVisible ? "reveal--visible" : ""}`}
      >
        <div className="ind-intro-inner">
          <p className="ind-intro-lead">
            Vessalion supports organizations operating across mining,
            manufacturing, infrastructure, energy, industrial processing, and
            international trade sectors.
          </p>
          <p className="ind-intro-body">
            Our procurement and logistics network is designed to help clients
            secure reliable access to the materials, suppliers, and distribution
            channels required to operate at scale. Our network-driven approach
            allows us to identify qualified suppliers, coordinate complex
            transactions, and facilitate the movement of commodities across
            international markets while maintaining a commitment to compliance,
            transparency, and operational efficiency.
          </p>
        </div>
      </div>

      {/* ── Industries 1–3 ── */}
      <div className="ind-sections">
        {INDUSTRIES.slice(0, 3).map((ind, i) => (
          <RevealSection
            key={ind.id}
            direction={i % 2 === 0 ? "left" : "right"}
            className={`ind-item ${i % 2 === 0 ? "ind-item--left" : "ind-item--right"}`}
          >
            <div className="ind-item-number">{ind.number}</div>
            <div className="ind-item-content">
              <h2 className="ind-item-title">{ind.title}</h2>
              <div className="ind-item-divider" />
              <p className="ind-item-body">{ind.body}</p>
              <div className="ind-item-tags">
                {ind.tags.map((tag) => (
                  <span key={tag} className="ind-item-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealSection>
        ))}
      </div>

      {/* ── Mid-page image break ── */}
      <RevealSection className="ind-break">
        <div className="ind-break-img-wrap">
          <img
            src={CommodityInspection}
            alt="Commodity inspection"
            className="ind-break-img"
          />
          <div className="ind-break-overlay">
            <div className="ind-break-text">
              <p className="ind-break-quote">"Quality is our standard."</p>
              <p className="ind-break-sub">Inspection · Analysis · Integrity</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── Industries 4–6 ── */}
      <div className="ind-sections">
        {INDUSTRIES.slice(3).map((ind, i) => (
          <RevealSection
            key={ind.id}
            direction={i % 2 !== 0 ? "left" : "right"}
            className={`ind-item ${i % 2 !== 0 ? "ind-item--left" : "ind-item--right"}`}
          >
            <div className="ind-item-number">{ind.number}</div>
            <div className="ind-item-content">
              <h2 className="ind-item-title">{ind.title}</h2>
              <div className="ind-item-divider" />
              <p className="ind-item-body">{ind.body}</p>
              <div className="ind-item-tags">
                {ind.tags.map((tag) => (
                  <span key={tag} className="ind-item-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealSection>
        ))}
      </div>

      {/* ── Closing statement ── */}
      <div
        ref={closingRef}
        className={`ind-closing reveal ${closingVisible ? "reveal--visible" : ""}`}
      >
        <div className="ind-closing-inner">
          <div className="ind-closing-line" />
          <p className="ind-closing-text">
            At Vessalion, our objective is simple: connect opportunity with
            execution through disciplined procurement, trusted partnerships, and
            global market access.
          </p>
          <button
            className="ind-closing-btn"
            onClick={() => navigate("/contact")}
          >
            SUBMIT AN INQUIRY →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Industries;
