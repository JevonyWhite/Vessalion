import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../FAQs/FAQs.css";
import useScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

const FAQS = [
  {
    q: "What does Vessalion do?",
    a: "Vessalion is an international procurement, sourcing, logistics, and commodity supply-chain company. We help connect qualified producers, processors, logistics providers, and industrial buyers through structured procurement and distribution networks.",
    id: 1,
  },
  {
    q: "What commodities does Vessalion support?",
    a: "Vessalion focuses on industrial minerals, strategic raw materials, bulk commodities, and related industrial feedstocks. Product availability may vary based on market conditions, supplier capacity, and commercial requirements.",
    id: 2,
  },
  {
    q: "Does Vessalion operate as a broker?",
    a: "No. Vessalion does not participate in unverified broker chains or circular brokerage structures. We focus on direct commercial relationships, structured transactions, and verified supply-chain partnerships.",
    id: 3,
  },
  {
    q: "Do you work with both buyers and suppliers?",
    a: "Yes. We work with qualified producers, processors, logistics providers, industrial buyers, and commercial partners seeking reliable procurement and supply-chain solutions.",
    id: 4,
  },
  {
    q: "How is material quality verified?",
    a: "Material quality may be verified through independent inspection and testing organizations, including internationally recognized laboratories such as SGS, Intertek, and Bureau Veritas. Verification requirements are determined by the specifications of each transaction.",
    id: 5,
  },
  {
    q: "What shipping terms do you support?",
    a: "Shipping terms vary depending on the transaction structure, destination, and commercial agreement. FOB (Free on Board, Incoterms 2020) arrangements are commonly utilized where appropriate.",
    id: 6,
  },
  {
    q: "Why are materials shipped in containers?",
    a: "Containerized shipping helps protect material quality, improve cargo security, reduce contamination risk, and support efficient international transportation and handling.",
    id: 7,
  },
  {
    q: "Which shipping companies do you work with?",
    a: "Vessalion may coordinate with internationally recognized shipping lines, freight forwarders, logistics providers, and transportation partners depending on the requirements of each transaction.",
    id: 8,
  },
  {
    q: "Can buyers request supplier identities or mine locations?",
    a: "Certain supply-chain information may be treated as confidential commercial information. Information disclosure is subject to applicable agreements, compliance requirements, and transaction-specific considerations.",
    id: 9,
  },
  {
    q: "Can Vessalion coordinate third-party inspections?",
    a: "Yes. We may coordinate independent inspection, testing, and verification services through qualified third-party organizations when required by a transaction.",
    id: 10,
  },
  {
    q: "What documents are typically required for onboarding?",
    a: "Documentation requirements vary depending on the nature of the transaction. Corporate registration documents, company profiles, identification information, banking references, and compliance documentation may be required as part of the onboarding process.",
    id: 11,
  },
  {
    q: "How does Vessalion address compliance requirements?",
    a: "Vessalion operates under a compliance-focused framework that may include Know Your Customer (KYC), Anti-Money Laundering (AML), sanctions screening, due diligence procedures, and documentation review where appropriate.",
    id: 12,
  },
  {
    q: "What countries and markets do you operate in?",
    a: "Vessalion supports procurement and supply-chain activities across multiple international markets. Please refer to our Markets page for additional information regarding regional coverage and commercial activity.",
    id: 13,
  },
  {
    q: "How do I request a quotation or begin discussions?",
    a: "Qualified buyers, suppliers, and commercial partners may submit inquiries through our Contact Us page. Please provide as much information as possible regarding your requirements so that our team can review and respond appropriately.",
    id: 14,
  },
  {
    q: "Do you offer long-term supply arrangements?",
    a: "Depending on supplier capacity, market conditions, and commercial requirements, Vessalion may support both project-based and long-term supply arrangements for qualified counterparties.",
    id: 15,
  },
  {
    q: "Who should contact Vessalion?",
    a: "Producers, processors, industrial buyers, logistics providers, laboratories, government entities, procurement teams, and commercial organizations seeking sourcing, procurement, logistics, or supply-chain support are encouraged to contact us.",
    id: 16,
  },
];

const FAQItem = ({ item, index, direction = "up", className = "" }) => {
  const [open, setOpen] = useState(false);
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`faq-item reveal reveal--${direction} ${visible ? "reveal--visible" : ""} ${open ? "faq-item--open" : ""} ${className}`}
      onClick={() => setOpen(!open)}
    >
      <div className="faq-item-header">
        <div className="faq-item-left">
          <span className="faq-item-num">Q{String(index + 1)}</span>
          <h3 className="faq-item-question">{item.q}</h3>
        </div>
        <div className={`faq-item-icon ${open ? "faq-item-icon--open" : ""}`}>
          {open ? <LuMinus /> : <LuPlus />}
        </div>
      </div>
      {open && (
        <div className="faq-item-answer">
          <p>{item.a}</p>
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  const navigate = useNavigate();
  const [heroRef, heroVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <div className="faq-page">
      {/* ── Hero ── */}
      <div className="faq-hero">
        <div className="faq-hero-bg" />
        <div
          ref={heroRef}
          className={`faq-hero-content reveal reveal--left ${heroVisible ? "reveal--visible" : ""}`}
        >
          <span className="faq-eyebrow">Frequently Asked Questions</span>
          <h1 className="faq-hero-title">
            Operational, Procurement
            <br />& Compliance FAQ
          </h1>
          <div className="faq-hero-divider" />
          <p className="faq-hero-desc">
            Answers to common questions about Vessalion's operations,
            procurement processes, compliance framework, and commercial
            activities.
          </p>
        </div>
      </div>

      {/* ── FAQ list ── */}
      <div className="faq-list">
        {FAQS.map((item, i) => (
          <FAQItem
            key={i}
            item={item}
            index={i}
            direction={i % 2 === 0 ? "left" : "right"}
            className={`faq-item ${i % 2 === 0 ? "faq-item--left" : "faq-item--right"}`}
          />
        ))}
      </div>

      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`faq-cta reveal reveal--up ${ctaVisible ? "reveal--visible" : ""}`}
      >
        <div className="faq-cta-inner">
          <div className="faq-cta-line" />
          <h2 className="faq-cta-title">Still have questions?</h2>
          <p className="faq-cta-desc">
            Our team is available to assist qualified buyers, suppliers, and
            commercial partners.
          </p>
          <button className="faq-cta-btn" onClick={() => navigate("/contact")}>
            CONTACT US →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
