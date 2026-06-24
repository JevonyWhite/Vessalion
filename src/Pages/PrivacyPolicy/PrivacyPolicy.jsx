import React from "react";
import { useNavigate } from "react-router-dom";
import "./PrivacyPolicy.css";
import useScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { IoMdRefreshCircle } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";

const REMAINING_SECTIONS = [
  {
    id: 1,
    number: "04",
    icon: <IoShieldCheckmark />,
    title: "Compliance & Due Diligence",
    content: "As part of our commercial and compliance procedures, Vessalion may collect and review information necessary to satisfy Know Your Customer (KYC), Anti-Money Laundering (AML), sanctions-screening, and other applicable regulatory requirements.",
  },
  {
    id: 2,
    number: "05",
    icon: <MdOutlineSecurity />,
    title: "Data Security",
    content: "Vessalion utilizes commercially reasonable administrative, technical, and organizational safeguards designed to protect information from unauthorized access, disclosure, alteration, or destruction. While no system can guarantee absolute security, we maintain security practices intended to protect the confidentiality and integrity of information under our control.",
  },
  {
    id: 3,
    number: "05",
    icon: <FaClock />,
    title: "Data Retention",
    content: "Information is retained only for as long as necessary to support legitimate business purposes, comply with legal and regulatory obligations, resolve disputes, and maintain appropriate business records.",
  },
  {
    id: 4,
    number: "06",
    icon: <FaExternalLinkSquareAlt />,
    title: "Third-Party Websites",
    content: "Our website may contain links to third-party websites. Vessalion is not responsible for the privacy practices, content, or security of external websites.",
  },
  {
    id: 5,
    number: "07",
    icon: <IoMdRefreshCircle />,
    title: "Changes to This Policy",
    content: "Vessalion may update this Privacy Policy periodically. Any revisions will be posted on this page together with the updated effective date.",
  },
];

/* ── Abstract SVG Patterns ── */
const PatternGrid = () => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="pp-pattern">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(204,153,51,0.7)" strokeWidth="0.8"/>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#grid)" />
    {[80,160,240,320].map((x, i) =>
      [80,160,240,320].map((y, j) => (
        <circle key={`${i}-${j}`} cx={x} cy={y} r="3" fill="rgba(204,153,51)" />
      ))
    )}
    <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(204,153,51)" strokeWidth="1" />
    <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(204,153,51)" strokeWidth="1" />
    <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(204,153,51)" strokeWidth="1" />
    <circle cx="200" cy="200" r="8" fill="rgba(204,153,51)" />
  </svg>
);

const PatternNodes = () => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="pp-pattern">
    {[[60,80],[200,60],[340,100],[80,200],[200,200],[320,200],[60,320],[200,340],[340,300]].map(([x,y], i) =>
      [[60,80],[200,60],[340,100],[80,200],[200,200],[320,200],[60,320],[200,340],[340,300]].map(([x2,y2], j) => {
        if (j <= i) return null;
        const dist = Math.sqrt((x2-x)**2 + (y2-y)**2);
        if (dist > 180) return null;
        return <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke="rgba(204,153,51,0.7)" strokeWidth="0.8" />;
      })
    )}
    {[[60,80],[200,60],[340,100],[80,200],[200,200],[320,200],[60,320],[200,340],[340,300]].map(([x,y], i) => (
      <circle key={i} cx={x} cy={y} r={i === 4 ? 8 : 4} fill={i === 4 ? "rgba(204,153,51,0.5)" : "rgba(204,153,51)"} />
    ))}
  </svg>
);

const PatternShield = () => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="pp-pattern">
    <defs>
      <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="rgba(204,153,51,0.4)" />
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#dots)" />
    <path d="M200 60 L320 110 L320 230 C320 300 200 350 200 350 C200 350 80 300 80 230 L80 110 Z"
      fill="none" stroke="rgba(204,153,51)" strokeWidth="1.5" />
    <path d="M200 90 L295 132 L295 225 C295 282 200 322 200 322 C200 322 105 282 105 225 L105 132 Z"
      fill="none" stroke="rgba(204,153,51)" strokeWidth="1" />
    <path d="M165 200 L190 225 L240 175" stroke="rgba(204,153,51)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(204,153,51,0.4)" strokeWidth="1" strokeDasharray="4 6" />
  </svg>
);

const RevealItem = ({ children, direction = "up", className = "" }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`reveal reveal--${direction} ${visible ? "reveal--visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const [heroRef, heroVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <div className="pp-page">

      {/* ── Hero ── */}
      <div className="pp-hero">
        <div className="pp-hero-bg" />
        <div ref={heroRef} className={`pp-hero-content reveal reveal--up ${heroVisible ? "reveal--visible" : ""}`}>
          <span className="pp-eyebrow">Legal</span>
          <h1 className="pp-hero-title">Privacy Policy</h1>
          <div className="pp-hero-divider" />
          <p className="pp-effective">Effective Date: May 28, 2026</p>
          <p className="pp-hero-desc">
            Vessalion LLC is committed to protecting the privacy and security of
            the information shared with us through our website, communications
            channels, and business activities. This Privacy Policy explains what
            information we collect, how we use it, how we protect it, and the
            circumstances under which it may be shared.
          </p>
        </div>
        <div className="pp-hero-badge">
          <i className="ti ti-shield-lock" />
          <span>Data Protected</span>
        </div>
      </div>

      {/* ── Section 1 — Information We Collect (image left) ── */}
      <RevealItem direction="left" className="pp-alt-section pp-alt-section--light">
        <div className="pp-alt-visual">
          <PatternGrid />
          <div className="pp-alt-visual-label">
            <span className="pp-alt-num">01</span>
            <span className="pp-alt-tag">Data Collection</span>
          </div>
        </div>
        <div className="pp-alt-content">
          <span className="pp-eyebrow">Information We Collect</span>
          <h2 className="pp-alt-title">What We Gather & Why</h2>
          <div className="pp-alt-divider" />
          <p className="pp-alt-text">
            We collect information necessary to support legitimate business
            communications, procurement activities, compliance procedures, and
            commercial operations. This information may include:
          </p>
          <div className="pp-alt-bullets">
            {[
              "Company names and business information",
              "Business email addresses and telephone numbers",
              "Contact names and job titles",
              "Product, sourcing, logistics, or procurement inquiries",
              "Information submitted through contact forms or email",
            ].map((b, i) => (
              <div key={i} className="pp-alt-bullet">
                <span className="pp-alt-bullet-dot" />
                <span>{b}</span>
              </div>
            ))}
          </div>
          <p className="pp-alt-note">
            We may also collect limited technical information when you visit our website, including:
          </p>

          <div className="pp-alt-bullets">
            {[
              "IP address",
              "Browser type",
              "Device Information",
              "Access dates and times",
              "Website usage information",
            ].map((b, i) => (
              <div key={i} className="pp-alt-bullet">
                <span className="pp-alt-bullet-dot" />
                <span>{b}</span>
              </div>
            ))}
          </div>

          <p className="pp-alt-note"> This information is collected to support website functionality, security, and performance monitoring.

</p>
        </div>
      </RevealItem>

      {/* ── Section 2 — How We Use It (image right) ── */}
      <RevealItem direction="right" className="pp-alt-section pp-alt-section--dark">
        <div className="pp-alt-content pp-alt-content--right">
          <span className="pp-eyebrow">How We Use Information</span>
          <h2 className="pp-alt-title">Purpose & Application</h2>
          <div className="pp-alt-divider" />
          <p className="pp-alt-text">
            Information collected may be used to: 
          </p>
          <div className="pp-alt-bullets">
            {[
              "Respond to inquiries and business requests",
              "Evaluate procurement and sourcing opportunities","Facilitate communications with suppliers, buyers, and commercial partners",
              "Conduct compliance and due diligence reviews",
              "Improve website performance and security",
              "Fulfill legal, regulatory, and contractual obligations",
            ].map((b, i) => (
              <div key={i} className="pp-alt-bullet">
                <span className="pp-alt-bullet-dot" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="pp-alt-visual">
          <PatternNodes />
          <div className="pp-alt-visual-label">
            <span className="pp-alt-num">02</span>
            <span className="pp-alt-tag">Data Usage</span>
          </div>
        </div>
      </RevealItem>

      {/* ── Section 3 — Data Security (image left) ── */}
      <RevealItem direction="left" className="pp-alt-section pp-alt-section--light">
        <div className="pp-alt-visual">
          <PatternShield />
          <div className="pp-alt-visual-label">
            <span className="pp-alt-num">03</span>
            <span className="pp-alt-tag">Data Security</span>
          </div>
        </div>
        <div className="pp-alt-content">
          <span className="pp-eyebrow">Information Sharing</span>
          <h2 className="pp-alt-title">How We Protect & Share</h2>
          <div className="pp-alt-divider" />
          <p className="pp-alt-text">
            Vessalion does not sell, rent, or distribute personal or corporate
            information to third-party marketing organizations.
          </p>
          <p className="pp-alt-text">
            Information may be shared only when necessary with:
          </p>
          <div className="pp-alt-bullets">
            {[
              "Inspection and verification providers",
              "Logistics and transportation partners","Banking and financial institutions",
              "Professional advisors",
              "Government agencies or regulatory authorities when required by law",
            ].map((b, i) => (
              <div key={i} className="pp-alt-bullet">
                <span className="pp-alt-bullet-dot" />
                <span>{b}</span>
              </div>
            ))}
          </div>
          <div className="pp-alt-security-badge">
            <i className="ti ti-lock" />
            <span>Encrypted end-to-end communications</span>
          </div>

            <p className="pp-alt-note"> All information sharing is limited to what is reasonably necessary to support legitimate business activities.



</p>
        </div>
      </RevealItem>

      {/* ── Remaining sections compact list ── */}
      <div className="pp-remaining">
        <RevealItem direction="up" className="pp-remaining-header">
          <span className="pp-eyebrow">Additional Provisions</span>
          <h2 className="pp-remaining-title">Further Policy Details</h2>
          <div className="pp-alt-divider" />
        </RevealItem>
        <div className="pp-remaining-grid">
          {REMAINING_SECTIONS.map((s, i) => (
            <RevealItem key={s.id} direction={i % 2 === 0 ? "left" : "right"} className="pp-remaining-item">
              <div className="pp-remaining-icon">
              {s.icon}
              </div>
              <div>
                <div className="pp-remaining-num">{s.number}</div>
                <h3 className="pp-remaining-item-title">{s.title}</h3>
                <p className="pp-remaining-item-text">{s.content}</p>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>

      {/* ── Contact note ── */}
      <RevealItem direction="left" className="pp-contact-note">
        <div className="pp-contact-note-inner">
          <i className="ti ti-mail pp-contact-icon" />
          <div>
            <p className="pp-contact-title">Privacy Inquiries</p>
            <p className="pp-contact-desc">
              Questions regarding this Privacy Policy may be directed to{" "}
              <a href="mailto:procurement@vessalion.com" className="pp-contact-link">
                procurement@vessalion.com
              </a>
              . All inquiries are reviewed and routed through the appropriate
              commercial or compliance channels for response.
            </p>
          </div>
        </div>
      </RevealItem>

      {/* ── CTA ── */}
      <div ref={ctaRef} className={`pp-cta reveal reveal--up ${ctaVisible ? "reveal--visible" : ""}`}>
        <div className="pp-cta-inner">
          <div className="pp-cta-line" />
          <h2 className="pp-cta-title">Questions or Concerns?</h2>
          <p className="pp-cta-desc">Contact our team through our secure communications gateway.</p>
          <button className="pp-cta-btn" onClick={() => navigate("/contact")}>GET IN TOUCH →</button>
        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicy;