import React from "react";
import { useNavigate } from "react-router-dom";
import "./TermsOfUse.css";
import useScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import { LuScale } from "react-icons/lu";
import { BsInfoCircle } from "react-icons/bs";
import { TbAlertCircle } from "react-icons/tb";
import { IoAlertCircle } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import { LiaClipboardCheckSolid } from "react-icons/lia";
import { LiaCopyright } from "react-icons/lia";
import { FiShield } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { FaBan } from "react-icons/fa6";
import { RiRefreshLine } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";


const TERMS = [
  {
    id: 1,
    number: "01",
    icon: <BsInfoCircle />,
    title: "Informational Purposes Only",
    content: "The information provided on this website is intended for general informational purposes only. Nothing contained on this website constitutes an offer to sell, a solicitation to purchase, legal advice, financial advice, investment advice, or a binding commercial commitment.",
  },
  {
    id: 2,
    number: "02",
    icon: <TbAlertCircle />,
    title: "No Guarantee of Availability",
    content: "Products, commodities, services, supply opportunities, and procurement activities described on this website may be subject to availability, regulatory requirements, commercial agreements, and other conditions. Availability may change without notice.",
  },
  {
    id: 3,
    number: "03",
    icon: <TbUsers />,
    title: "No Commercial Relationship Created",
    content: "Use of this website, submission of inquiries, or communication with Vessalion does not create a partnership, agency relationship, joint venture, fiduciary relationship, or contractual obligation between any party and Vessalion.",
  },
  {
    id: 4,
    number: "04",
    icon: <LiaClipboardCheckSolid />,
    title: "Accuracy of Information",
    content: "While Vessalion strives to maintain accurate and current information, we make no representations or warranties regarding the completeness, accuracy, reliability, or suitability of information contained on this website.",
  },
  {
    id: 5,
    number: "05",
    icon: <LiaCopyright />,
    title: "Intellectual Property",
    content: "All website content, including text, graphics, logos, trademarks, designs, images, and other materials, is the property of Vessalion LLC or its licensors and is protected by applicable intellectual property laws. Unauthorized reproduction, distribution, or use is prohibited.",
  },
  {
    id: 6,
    number: "06",
    icon: <FiShield />,
    title: "Compliance Responsibilities",
    content: "Visitors, suppliers, buyers, and counterparties remain responsible for complying with all applicable laws, regulations, sanctions requirements, import/export controls, and industry standards applicable to their activities.",
  },
  {
    id: 7,
    number: "07",
    icon: <FiExternalLink />,
    title: "Third-Party Links",
    content: "This website may contain links to third-party websites for informational purposes. Vessalion does not control and is not responsible for the content, policies, or practices of third-party websites.",
  },
  {
    id: 8,
    number: "08",
    icon: <FaBan />,
    title: "Limitation of Liability",
    content: "To the fullest extent permitted by law, Vessalion LLC shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from the use of this website or reliance upon information contained herein.",
  },
  {
    id: 9,
    number: "09",
    icon: <RiRefreshLine />,
    title: "Modifications",
    content: "Vessalion reserves the right to modify these Terms of Use at any time without prior notice. Continued use of the website following any changes constitutes acceptance of the revised terms.",
  },
  {
    id: 10,
    number: "10",
    icon: <MdMailOutline />,
    title: "Contact Information",
    content: "Questions regarding these Terms of Use may be directed through the contact information provided on this website.",
  },
];

const RevealItem = ({ children, direction = "up", className = "" }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`reveal reveal--${direction} ${visible ? "reveal--visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

const TermsOfUse = () => {
  const navigate = useNavigate();
  const [heroRef, heroVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <div className="tou-page">

      {/* ── Hero ── */}
      <div className="tou-hero">
        <div className="tou-hero-bg" />
        <div ref={heroRef} className={`tou-hero-content reveal reveal--up ${heroVisible ? "reveal--visible" : ""}`}>
          <span className="tou-eyebrow">Legal</span>
          <h1 className="tou-hero-title">Terms of Use</h1>
          <div className="tou-hero-divider" />
          <p className="tou-effective">Effective Date: June 10, 2026</p>
          <p className="tou-hero-desc">
            Welcome to the Vessalion website. By accessing or using this website,
            you agree to be bound by the following Terms of Use. If you do not
            agree with these terms, please discontinue use of the website.
          </p>
        </div>
        {/* Decorative */}
        <div className="tou-hero-deco">
          <LuScale className="tou-hero-deco-icon"/>
        </div>
      </div>

      {/* ── Quick nav ── */}
      <RevealItem direction="up" className="tou-quicknav">
        <p className="tou-quicknav-label">Sections</p>
        <div className="tou-quicknav-links">
          {TERMS.map(t => (
            <a key={t.id} href={`#tou-${t.id}`} className="tou-quicknav-link">
              {t.title}
            </a>
          ))}
        </div>
      </RevealItem>

      {/* ── Terms list ── */}
      <div className="tou-list">
        {TERMS.map((term, i) => (
          <RevealItem
            key={term.id}
            direction={i % 2 === 0 ? "left" : "right"}
            className={`tou-item ${i % 2 === 0 ? "tou-item--left" : "tou-item--right"}`}
          >
            <div id={`tou-${term.id}`} className="tou-item-inner">
              <div className="tou-item-left">
                <div className="tou-item-icon">
                {term.icon}
                </div>
                <span className="tou-item-num">{term.number}</span>
              </div>
              <div className="tou-item-right">
                <h2 className="tou-item-title">{term.title}</h2>
                <div className="tou-item-divider" />
                <p className="tou-item-content">{term.content}</p>
              </div>
            </div>
          </RevealItem>
        ))}
      </div>



      {/* ── CTA ── */}
      <div ref={ctaRef} className={`tou-cta reveal reveal--up ${ctaVisible ? "reveal--visible" : ""}`}>
        <div className="tou-cta-inner">
          <div className="tou-cta-line" />
          <h2 className="tou-cta-title">Have Questions?</h2>
          <p className="tou-cta-desc">
            Questions regarding these Terms of Use may be directed through our secure communications gateway.
          </p>
          <div className="tou-cta-btns">
            <button className="tou-btn tou-btn--solid" onClick={() => navigate("/contact")}>
              CONTACT US →
            </button>
            <button className="tou-btn tou-btn--outline" onClick={() => navigate("/privacy-policy")}>
              PRIVACY POLICY →
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TermsOfUse;