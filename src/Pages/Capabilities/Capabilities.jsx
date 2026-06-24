import React from "react";
import { useNavigate } from "react-router-dom";
import "./Capabilities.css";
import MeetingImage from "../../assets/BodyImages/Second set/Strategic Operations Meeting.jpg";
import useScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import { FaSearch } from "react-icons/fa";
import { TbArrowsExchange2 } from "react-icons/tb";
import { PiFileTextFill } from "react-icons/pi";
import { LuMicroscope } from "react-icons/lu";
import { TbBuildingWarehouse } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";

const CAPABILITIES = [
  {
    id: 1,
    number: "01",
    title: "Commodity Sourcing",
    desc: "Identification and coordination of suppliers for industrial minerals, raw materials, and commodity-based transactions across domestic and international markets.",
    icon: <FaSearch />,
  },
  {
    id: 2,
    number: "02",
    title: "Supply Chain Coordination",
    desc: "Management of supplier communications, shipment scheduling, documentation requirements, and logistics workflows to support efficient transaction execution.",
    icon: <TbArrowsExchange2 />,
  },
  {
    id: 3,
    number: "03",
    title: "Procurement Support",
    desc: "Assistance with supplier discovery, quotation management, contract coordination, and procurement planning for commercial and institutional clients.",
    icon: <PiFileTextFill />,
  },
  {
    id: 4,
    number: "04",
    title: "Quality Verification & Inspection",
    desc: "Coordination with qualified inspection, testing, and verification providers to help ensure materials meet agreed specifications before shipment and delivery.",
    icon: <LuMicroscope />,
  },
  {
    id: 5,
    number: "05",
    title: "Warehousing & Distribution",
    desc: "Support for inventory management, storage coordination, freight planning, and distribution strategies designed to move goods efficiently from source to destination.",
    icon: <TbBuildingWarehouse />,
  },
  {
    id: 6,
    number: "06",
    title: "Cross-Border Trade Facilitation",
    desc: "Assistance navigating the operational requirements associated with international procurement, shipping, customs documentation, and transaction management.",
    icon: <BiWorld />,
  },
  {
    id: 7,
    number: "07",
    title: "Strategic Partnerships",
    desc: "Development of commercial relationships that connect buyers, suppliers, logistics providers, and service organizations to create efficient, scalable procurement solutions.",
    icon: <FaHandshake />,
  },
];

const RevealItem = ({ children, direction = "up", className = "" }) => {
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

const Capabilities = () => {
  const navigate = useNavigate();
  const [heroRef, heroVisible] = useScrollReveal();
  const [imgRef, imgVisible] = useScrollReveal();
  const [closingRef, closingVisible] = useScrollReveal();

  return (
    <div className="cap-page">
      {/* ── Image break ── */}
      <div
        ref={imgRef}
        className={`cap-img-break reveal reveal--up ${imgVisible ? "reveal--visible" : ""}`}
      >
        <img
          src={MeetingImage}
          alt="Strategic operations meeting"
          className="cap-img-break-img"
        />
        <div className="cap-img-break-overlay">
          <div className="cap-img-break-content">
            <span className="cap-eyebrow">Capabilities</span>
          <h1 className="cap-hero-title">
            What We're
            <br />
            Positioned To Do
          </h1>
         
          
          </div>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="cap-hero">
        <div className="cap-hero-bg" />
        <div
          ref={heroRef}
          className={`cap-hero-content reveal reveal--up ${heroVisible ? "reveal--visible" : ""}`}
        >

          <div className="cap-img-break-quote-container">
            <p className="cap-img-break-quote">"Every project is unique."</p>
             <div className="cap-hero-divider" />
            <p className="cap-img-break-sub">
              Vessalion approaches each engagement with a focus on reliability,
              transparency, compliance, and long-term value creation for all
              parties involved.
            </p>
          </div>
          <p className="cap-hero-desc">
            The following examples illustrate the types of procurement,
            sourcing, logistics, and transaction support activities Vessalion is
            positioned to facilitate on behalf of qualified clients and
            partners.
          </p>
         
          
            
        </div>

        {/* Decorative number */}
        <div className="cap-hero-deco">07</div>
      </div>

      {/* ── Capabilities list ── */}
      <div className="cap-list">
        {CAPABILITIES.map((cap, i) => (
          <RevealItem
            key={cap.id}
            direction={i % 2 === 0 ? "left" : "right"}
            className={`cap-item ${i % 2 === 0 ? "cap-item--left" : "cap-item--right"}`}
          >
            <div className="cap-item-left">
              {/* <span className="cap-item-number">{cap.number}</span> */}
              <div className="cap-item-icon">
              {cap.icon} 
              </div>
            </div>
            <div className="cap-item-right">
              <h2 className="cap-item-title">{cap.title}</h2>
              <div className="cap-item-divider" />
              <p className="cap-item-desc">{cap.desc}</p>
                 <div className="cap-item-deco">0{cap.id}</div>
            </div>
         
          </RevealItem>
        ))}
      </div>

      

      {/* ── Closing CTA ── */}
      <div
        ref={closingRef}
        className={`cap-closing reveal reveal--up ${closingVisible ? "reveal--visible" : ""}`}
      >
        <div className="cap-closing-inner">
          <div className="cap-closing-line" />
          <h2 className="cap-closing-title">
            Ready to Discuss Your Requirements?
          </h2>
          <p className="cap-closing-desc">
            Every project is unique. Contact our team to discuss how Vessalion
            can support your procurement, sourcing, or supply-chain objectives.
          </p>
          <div className="cap-closing-btns">
            <button
              className="cap-btn cap-btn--solid"
              onClick={() => navigate("/contact")}
            >
              SUBMIT AN INQUIRY →
            </button>
            <button
              className="cap-btn cap-btn--outline"
              onClick={() => navigate("/opportunities")}
            >
              VIEW OPPORTUNITIES →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
