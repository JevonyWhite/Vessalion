import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../Contact/Contact.css";
import PortImage from "../../assets/BodyImages/Second set/Major Port Terminal.png";
import useScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import { MdAttachEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiMapPin2Fill } from "react-icons/ri";
import { TbClockHour4Filled } from "react-icons/tb";
import { FaFlaskVial } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    entityName: "",
    corporateUrl: "",
    email: "",
    telephone: "",
    assetClass: "",
    allocation: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const [heroRef, heroVisible] = useScrollReveal();
  const [badgesRef, badgesVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          entity_name: formData.entityName,
          corporate_url: formData.corporateUrl,
          email: formData.email,
          telephone: formData.telephone,
          asset_class: formData.assetClass,
          allocation: formData.allocation,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(
        "Submission failed. Please try again or email us directly at procurement@vessalion.com",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-page">
      {/* ── Hero ── */}
      <div className="contact-hero">
        <img
          src={PortImage}
          alt="Major port terminal"
          className="contact-hero-img"
        />
        <div className="contact-hero-overlay" />
        <div
          ref={heroRef}
          className={`contact-hero-content reveal reveal--up ${heroVisible ? "reveal--visible" : ""}`}
        >
          <span className="contact-hero-eyebrow">Get in Touch</span>
          <h1 className="contact-hero-title">
            Connect With
            <br />
            Us
          </h1>
        </div>
      </div>

      {/* ── Info strip ── */}
      <div
        ref={badgesRef}
        className={`contact-info-strip reveal reveal--up ${badgesVisible ? "reveal--visible" : ""}`}
      >
        <div className="contact-info-item">
          <div className="contact-info-icon-container">
            <MdAttachEmail className="contact-info-icon" />
          </div>
          <div>
            <p className="contact-info-label">Email</p>
            <p className="contact-info-value">contact@vessalion.com</p>
          </div>
        </div>
        <div className="contact-info-divider" />
        <div className="contact-info-item">
          <div className="contact-info-icon-container">
            <PiPhoneCallFill className="contact-info-icon" />
          </div>
          <div>
            <p className="contact-info-label">Direct line</p>
            <p className="contact-info-value">(786) 701-6181</p>
          </div>
        </div>
        <div className="contact-info-divider" />
        <div className="contact-info-item">
          <div className="contact-info-icon-container">
            <RiMapPin2Fill className="contact-info-icon" />
          </div>
          <div>
            <p className="contact-info-label">Registered office</p>
            <p className="contact-info-value">Wyoming, USA</p>
          </div>
        </div>
        <div className="contact-info-divider" />
        <div className="contact-info-item">
          <div className="contact-info-icon-container">
            <TbClockHour4Filled className="contact-info-icon" />
          </div>
          <div>
            <p className="contact-info-label">Response time</p>
            <p className="contact-info-value">Within 1 business day</p>
          </div>
        </div>
      </div>

      {/* ── Main layout ── */}
      <div className="contact-main">
        {/* Left — context */}
        <div
          ref={formRef}
          className={`contact-left reveal reveal--left ${formVisible ? "reveal--visible" : ""}`}
        >
          <span className="contact-section-eyebrow">Secure Gateway</span>
          <h2 className="contact-left-heading">Submit a Formal Inquiry</h2>
          <div className="contact-left-divider" />
          <p className="contact-left-desc">
            Whether you are a supplier, industrial buyer, logistics provider,
            laboratory partner, or financial institution, we welcome the
            opportunity to discuss potential collaboration.
          </p>
          <p className="contact-left-desc">
            For procurement inquiries, supply opportunities, partnership
            discussions, or general information, please contact our team using
            the secure communications form below.
          </p>
          <p className="contact-left-desc">
            Our representatives will review your submission and respond through
            the appropriate commercial or compliance channel.
          </p>

          <div className="contact-compliance-badges">
            <div className="contact-badge">
              <div className="contact-badge-icon">
                <FaFlaskVial />
              </div>
              <div>
                <p className="contact-badge-title">
                  SGS / Intertek / Bureau Veritas
                </p>
                <p className="contact-badge-sub">Accredited lab verification</p>
              </div>
            </div>
            <div className="contact-badge">
              <div className="contact-badge-icon">
                <FaUserCheck />
              </div>
              <div>
                <p className="contact-badge-title">KYC / AML screening</p>
                <p className="contact-badge-sub">100% counterparty coverage</p>
              </div>
            </div>
            <div className="contact-badge">
              <div className="contact-badge-icon">
                <IoShieldCheckmark />
              </div>
              <div>
                <p className="contact-badge-title">Sanction registry</p>
                <p className="contact-badge-sub">International compliance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div
          className={`contact-form-wrap reveal reveal--right ${formVisible ? "reveal--visible" : ""}`}
        >
          <div className="contact-form-card">
            <h3 className="contact-form-heading">
              Secure communications gateway
            </h3>

            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <i className="ti ti-circle-check" />
                </div>
                <h4>Inquiry Received</h4>
                <p>
                  Your submission has been securely logged. Our commercial team
                  will respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact-field-row">
                  <div className="contact-field">
                    <label>Legal corporate entity name</label>
                    <input
                      type="text"
                      name="entityName"
                      value={formData.entityName}
                      onChange={handleChange}
                      placeholder="Acme Corp LLC"
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label>Corporate URL / domain</label>
                    <input
                      type="text"
                      name="corporateUrl"
                      value={formData.corporateUrl}
                      onChange={handleChange}
                      placeholder="acmecorp.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact-field-row">
                  <div className="contact-field">
                    <label>Authorized corporate email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ceo@acmecorp.com"
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label>Direct telephone</label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label>Target asset class / material specification</label>
                  <textarea
                    name="assetClass"
                    value={formData.assetClass}
                    onChange={handleChange}
                    placeholder="e.g. Rutile, Bauxite, Heavy Mineral Sands, Coarse Aggregates, Bulk Commodities"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label>Requested monthly allocation (metric tons)</label>
                  <input
                    type="text"
                    name="allocation"
                    value={formData.allocation}
                    onChange={handleChange}
                    placeholder="e.g. 50,000 MT/month"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      Sending
                      <span className="dots" />
                    </>
                  ) : (
                    "Submit secure inquiry"
                  )}
                </button>

                <div className="contact-lock-note">
                  <i className="ti ti-lock" />
                  Encrypted end-to-end
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
