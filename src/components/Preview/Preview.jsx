import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Preview/Preview.css";

const SLIDES = [
  {
    id: 0,
    eyebrow: "Who We Are",
    title: "Global Reach. Uncompromising Principals.",
    desc: "At Vessalion LLC, we operate as a private, high-performing commodity trade desk built on structural permanence, deep compliance integration, and long-term risk mitigation.",
    // image: ,
    route: "/who-we-are",
  },
  {
    id: 1,
    eyebrow: "What We Do",
    title: "Core Asset Portfolio & Feedstock Substrates",
    desc: "We operate an elite, highly specialized principal intermediary desk managing the long-term, multi-decade logistical allocation of advanced industrial mineral feedstocks and strategic raw substrates.",
    // image: whatWeDoImg,
    route: "/what-we-do",
  },
  {
    id: 2,
    eyebrow: "Compliance",
    title: "Global Compliance Registry & Inquiries",
    desc: "Vessalion LLC operates under a strict, non-negotiable international trade compliance framework underwritten exclusively by globally accredited independent testing laboratories.",
    // image: complianceImg,
    route: "/compliance",
  },
];

const NAV_LABELS = ["Who We Are", "What We Do", "Compliance"];

const Preview = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const navigate = useNavigate();
  const timerRef = useRef(null);

  const prev = () => {
    const index = (active - 1 + SLIDES.length) % SLIDES.length;
    goTo(index, "prev");
  };

  const next = () => {
    const index = (active + 1) % SLIDES.length;
    goTo(index, "next");
  };

  const goTo = (index, dir = "next") => {
    if (animating || index === active) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 10);
  };

  const handleNav = (index) => {
    const dir = index > active ? "next" : "prev";
    goTo(index, dir);
  };

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection("next");
      setAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % SLIDES.length);
        setAnimating(false);
      }, 420);
    }, 10000);
    return () => clearInterval(timerRef.current);
  }, [active]);

  const slide = SLIDES[active];

  return (
    <div className="preview-root">
      {/* Tab nav */}
      <nav className="preview-nav">
        {NAV_LABELS.map((label, i) => (
          <button
            key={label}
            className={`preview-nav-tab ${active === i ? "preview-nav-tab--active" : ""}`}
            onClick={() => handleNav(i)}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Dots */}
      <div className="preview-dots">
        <button className="preview-arrow preview-arrow--left" onClick={prev}>
          &#8592;
        </button>
        <div className="preview-dots-inner">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`preview-dot ${active === i ? "preview-dot--active" : ""}`}
              onClick={() => handleNav(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
        </div>
        <button className="preview-arrow preview-arrow--right" onClick={next}>
          &#8594;
        </button>
      </div>

      {/* Card */}
      <div className="preview-card-wrapper">
        

        <div className="preview-card">
          {/* Image */}
          <div className="preview-img-wrap">
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.title}
              className={`preview-img preview-img--${animating ? direction + "-out" : "in"}`}
            />
            <div className="preview-img-overlay" />
          </div>

          {/* Content */}
          <div
            key={active}
            className={`preview-content ${animating ? "preview-content--out" : "preview-content--in"}`}
          >
            <span className="preview-eyebrow">{slide.eyebrow}</span>
            <h1 className="preview-title">{slide.title}</h1>
            <p className="preview-desc">{slide.desc}</p>
            <button
              className="preview-cta"
              onClick={() => navigate(slide.route)}
            >
              Find out more
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Preview;
