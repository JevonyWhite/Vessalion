import React, { useState } from "react";
import "../Compliance/Compliance.css";
import { useNavigate } from "react-router-dom";
import useScrollReveal from "../../components/ScrollReveal/ScrollReveal.js";
import ComplianceBackground from "../../assets/BodyImages/Second set/Compliance Background.jpg";
import { FaFlaskVial } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { IoIosLock } from "react-icons/io";

const FRAMEWORK_ITEMS = [
  {
    id: 1,
    icon: <FaFlaskVial />,
    title: "Independent Laboratory Verification",
    desc: "All outbound cargo allocations are underwritten exclusively by globally accredited independent testing laboratories including SGS, Intertek, and Bureau Veritas to guarantee absolute elemental purity and specification compliance.",
  },
  {
    id: 2,
    icon: <FaUserCheck />,
    title: "KYC & AML Screening",
    desc: "We enforce rigorous Know Your Customer (KYC) and Anti-Money Laundering (AML) screening across 100% of our transactional counterparts prior to engagement, onboarding, or allocation confirmation.",
  },
  {
    id: 3,
    icon: <IoShieldCheckmark />,
    title: "International Sanction Registry Checks",
    desc: "Every counterparty and related entity is screened against international sanction registries including OFAC, UN, EU, and HM Treasury databases before any commercial arrangement is initiated.",
  },
  {
    id: 4,
    icon: <AiFillSafetyCertificate />,
    title: "Chain-of-Custody Documentation",
    desc: "Complete documentation trails are maintained from point of origin through to final delivery, including certificates of analysis, weighbridge records, inspection reports, and shipping documentation.",
  },
  {
    id: 5,
    icon: <BiWorld />,
    title: "Multi-Jurisdictional Legal Compliance",
    desc: "Our operations are structured to comply with the legal and regulatory requirements of each jurisdiction in which we operate, supported by qualified legal counsel across relevant markets.",
  },
  {
    id: 6,
    icon: <IoIosLock />,
    title: "Encrypted Communications Gateway",
    desc: "All formal inquiries, SCO submissions, and counterparty onboarding requests are processed through our encrypted communications infrastructure with audit trail logging.",
  },
];

const RevealSection2 = ({ children, className = "", direction = "up" }) => {
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

const Compliance = () => {
  const navigate = useNavigate();
  const [heroRef, heroVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();
  const [framerRef, framerVisible] = useScrollReveal();
  const [legalRef, legalVisible]=useScrollReveal()
  const [closingRef, closingVisible] = useScrollReveal()

  return (
    <div className="comp-page">
      {/* ── Hero ── */}
      <div
        className={`comp-hero reveal reveal--up ${heroVisible ? "reveal--visible" : ""}`}
        ref={heroRef}
      >
        <img
          src={ComplianceBackground}
          alt="Compliance background"
          className="comp-hero-background"
        />
        {/* <div
          ref={heroRef}
          className={`comp-hero-content reveal reveal--up ${heroVisible ? "reveal--visible" : ""}`}
          
        >

          <span className="comp-eyebrow">Compliance & Legal</span>
          <h1 className="comp-hero-title">
            Compliance, Verification <br />& Trade Integrity
          </h1>
          <div className="comp-hero-divider" />
          <p className="comp-hero-desc">
              Vessalion LLC operates under a compliance-first framework designed to
  support secure, transparent, and responsible international trade.
          </p>
        </div> */}

        {/* Decorative vertical line */}
        <div className="comp-hero-line" />
      </div>

      {/* ── Stat bar ── */}
      <div className="comp-stats">
        <div className="comp-stat">
          <p className="comp-stat-num">100%</p>
          <p className="comp-stat-label">Counterparty KYC coverage</p>
        </div>
        <div className="comp-stat-divider" />
        <div className="comp-stat">
          <p className="comp-stat-num">3</p>
          <p className="comp-stat-label">Accredited lab partners</p>
        </div>
        <div className="comp-stat-divider" />
        <div className="comp-stat">
          <p className="comp-stat-num">Multi</p>
          <p className="comp-stat-label">Jurisdictional coverage</p>
        </div>
        <div className="comp-stat-divider" />
        <div className="comp-stat">
          <p className="comp-stat-num">Zero</p>
          <p className="comp-stat-label">Tolerance for non-compliance</p>
        </div>
      </div>

      {/* ── Framework grid ── */}
      <div className="comp-framework">
        <div
          ref={framerRef}
          className={`comp-framework-header reveal reveal--up ${framerVisible ? "reveal--visible" : ""}`}
        >
          <span className="comp-eyebrow">Our Framework</span>
          <h2 className="comp-framework-title">Compliance Infrastructure</h2>
          <p className="comp-framework-desc">
            All counterparties are subject to appropriate due-diligence
            procedures, including Know Your Customer (KYC), Anti-Money
            Laundering (AML), and sanctions-screening protocols where
            applicable. Material verification may be conducted through
            internationally recognized inspection and testing organizations,
            including independent laboratories and third-party verification
            partners.
          </p>
        </div>

        <div className="comp-framework-grid">
          {FRAMEWORK_ITEMS.map((item) => (
            <RevealSection2
              key={item.id}
              direction={item.id % 2 === 0 ? "left" : "right"}
              className={`comp-framework-item ${item.id % 2 === 0 ? "comp-framework-item--left" : "comp-framework-item--right"}`}
            >
              <div className="comp-framework-icon">{item.icon}</div>
              <div>
                <h3 className="comp-framework-item-title">{item.title}</h3>
                <p className="comp-framework-item-desc">{item.desc}</p>
              </div>
            </RevealSection2>
          ))}
        </div>

        <div className="comp-framework-divider"/>

        {/* After comp-framework-grid, before comp-legal-note */}
      <div ref={closingRef}className={`comp-framework-closing reveal reveal--left ${closingVisible ? "reveal--visible" : ""}`}>
        <p className="comp-framework-closing-text">
          Our objective is to maintain a transaction environment built upon
          transparency, accountability, documentation integrity, and responsible
          commercial conduct.
        </p>
 
      </div>

      {/* ── Legal note ── */}
      <div ref={legalRef}
      className={`comp-legal-note reveal reveal--right ${legalVisible ? "reveal--visible" : ""}`}>
        <div className="comp-legal-note-inner">
          <i className="ti ti-info-circle comp-legal-icon" />
          <p>
            Through disciplined compliance procedures and documented
            verification processes, we seek to provide confidence to suppliers,
            buyers, logistics partners, and financial institutions involved in
            our transactions.
          </p>
        </div>
      </div>
      </div>

  
      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`comp-cta reveal reveal--up ${ctaVisible ? "reveal--visible" : ""}`}
      >
        <div className="comp-cta-inner">
          <div className="comp-cta-line" />
          <h2 className="comp-cta-title">
            Ready to Initiate a Formal Inquiry?
          </h2>
          <p className="comp-cta-desc">
            Submit your counterparty details and asset specification through our
            secure communications gateway.
          </p>
          <button className="comp-cta-btn" onClick={() => navigate("/contact")}>
            GO TO CONTACT FORM →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
