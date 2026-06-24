import { useState } from "react";

const styles = {
  // CSS variables injected via a style tag below
};

const NAV_LINKS = ["Who we are", "What we do", "Sustainability", "Finance", "News"];

const STATS = [
  { num: "$243B", label: "Revenue FY2024" },
  { num: "13,000+", label: "Employees worldwide" },
  { num: "1993", label: "Founded" },
  { num: "50+", label: "Countries of operation" },
];

const NEWS = [
  {
    tag: "Press release",
    date: "20 May 2026",
    title: "Trafigura signs 434MW hybrid power purchase agreement with Nadara in Spain",
  },
  {
    tag: "Insights",
    date: "7 May 2026",
    title: "Europe's Smelters: The Strategic Assets We Cannot Afford to Lose",
  },
  {
    tag: "Press release",
    date: "6 May 2026",
    title: "Trafigura signs term sheet for development of new aluminium smelter in Egypt",
  },
];

const PILLARS = [
  {
    icon: "🌍",
    title: "Oil & Petroleum",
    desc: "Trading crude oil and refined products across all major markets and transportation corridors.",
  },
  {
    icon: "⬡",
    title: "Metals & Minerals",
    desc: "The world's largest private metal trader, handling base metals and bulk minerals globally.",
  },
  {
    icon: "⚡",
    title: "Power & Renewables",
    desc: "Active participant in the energy transition, investing in renewables and power solutions.",
  },
  {
    icon: "🚢",
    title: "Logistics & Infrastructure",
    desc: "Ports, storage terminals, pipelines and shipping assets supporting global trade flows.",
  },
];

const LEADER_CARDS = [
  {
    title: "Sustainability",
    desc: "Our role in the energy transition — responsibly supplying vital commodities.",
  },
  {
    title: "Our story",
    desc: "From a standing start in 1993 to one of the world's biggest commodity suppliers.",
  },
  {
    title: "Compliance & conduct",
    desc: "A comprehensive framework built on internationally recognised legal standards.",
  },
  {
    title: "Careers",
    desc: "Join approximately 14,500 employees connecting resources around the world.",
  },
];

const FOOTER_COLS = [
  { heading: "About", links: ["Who we are", "Leadership", "Our story", "Locations"] },
  { heading: "Business", links: ["What we do", "Oil & Petroleum", "Metals & Minerals", "Power & Renewables"] },
  { heading: "Information", links: ["News & insights", "Financial reports", "Sustainability", "Careers"] },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav style={{
      background: "var(--navy)",
      padding: "0 3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 64,
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#fff", fontWeight: 700, letterSpacing: "0.04em" }}>
        TRAFI<span style={{ color: "var(--red)" }}>G</span>URA
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {NAV_LINKS.map((l) => (
          <a key={l} href="#" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#fff"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.7)"}>
            {l}
          </a>
        ))}
      </div>
      <button style={{ background: "var(--red)", color: "#fff", padding: "8px 20px", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500, border: "none", cursor: "pointer" }}>
        Contact us
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{
      background: "var(--navy)",
      minHeight: 520,
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      padding: "4rem 3rem",
    }}>
      <div style={{ position: "absolute", right: -80, top: -80, width: 600, height: 600, border: "1px solid rgba(255,255,255,0.04)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", right: 80, top: 80, width: 400, height: 400, border: "1px solid rgba(200,16,46,0.12)", borderRadius: "50%" }} />
      <div style={{ maxWidth: 640, position: "relative", zIndex: 1 }}>
        <div style={{ color: "var(--red)", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-block", width: 24, height: 1, background: "var(--red)" }} />
          Global Commodities
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,54px)", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: "1.5rem" }}>
          We connect vital resources to{" "}
          <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.5)" }}>power and build</em>{" "}
          the world
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, fontWeight: 300, maxWidth: 460, marginBottom: "2.5rem", lineHeight: 1.8 }}>
          One of the world's largest independent commodity trading and logistics houses, connecting producers and consumers of minerals, metals and energy.
        </p>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <button style={{ background: "var(--red)", color: "#fff", padding: "13px 28px", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500, border: "none", cursor: "pointer" }}>
            Discover who we are
          </button>
          <a href="#" style={{ color: "#fff", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 400, display: "flex", alignItems: "center", gap: 8, opacity: 0.7, textDecoration: "none" }}>
            Annual Report 2025 →
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <div style={{ background: "#fff", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-around", padding: "2rem 3rem" }}>
      {STATS.map((s, i) => (
        <div key={i} style={{ textAlign: "center", flex: 1, borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 400, color: "var(--navy)", lineHeight: 1 }}>{s.num}</div>
          <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-light)", marginTop: 6 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function NewsSection() {
  return (
    <section style={{ padding: "5rem 3rem" }}>
      <div style={{ color: "var(--red)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, marginBottom: "1rem", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 20, height: 1, background: "var(--red)", display: "inline-block" }} />
        Latest news
      </div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,38px)", fontWeight: 400, color: "var(--navy)", marginBottom: "2rem" }}>
        News & Insights
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", border: "1px solid var(--border)" }}>
        {NEWS.map((n, i) => (
          <NewsCard key={i} {...n} last={i === NEWS.length - 1} />
        ))}
      </div>
    </section>
  );
}

function NewsCard({ tag, date, title, last }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRight: !last ? "1px solid var(--border)" : "none",
        padding: "2rem",
        background: hovered ? "var(--off-white)" : "#fff",
        cursor: "pointer",
        transition: "background 0.2s",
      }}>
      <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--red)", fontWeight: 500, marginBottom: "0.75rem" }}>{tag}</div>
      <div style={{ fontSize: 11, color: "var(--text-light)", marginBottom: "0.75rem" }}>{date}</div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 400, color: "var(--navy)", lineHeight: 1.4, marginBottom: "1rem" }}>{title}</div>
      <div style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-mid)", display: "flex", alignItems: "center", gap: 6, fontWeight: 500 }}>
        Read more <span style={{ display: "inline-block", transform: hovered ? "translateX(4px)" : "translateX(0)", transition: "transform 0.2s" }}>→</span>
      </div>
    </div>
  );
}

function WhatWeDo() {
  return (
    <section style={{ padding: "5rem 3rem", background: "var(--off-white)" }}>
      <div style={{ color: "var(--red)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, marginBottom: "1rem", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 20, height: 1, background: "var(--red)", display: "inline-block" }} />
        What we do
      </div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,38px)", fontWeight: 400, color: "var(--navy)", maxWidth: 540, marginBottom: "1rem" }}>
        Bringing efficiency to complex supply chains
      </h2>
      <p style={{ color: "var(--text-mid)", fontSize: 14, fontWeight: 300, maxWidth: 480, lineHeight: 1.8, marginBottom: "3rem" }}>
        We deploy infrastructure, logistics and our deep understanding of markets to make global supply chains more efficient, connecting producers and consumers worldwide.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2 }}>
        {PILLARS.map((p, i) => <PillarCard key={i} {...p} />)}
      </div>
    </section>
  );
}

function PillarCard({ icon, title, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        padding: "2rem 1.75rem",
        borderTop: hovered ? "2px solid var(--red)" : "2px solid transparent",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.2s",
        cursor: "pointer",
      }}>
      <div style={{ width: 36, height: 36, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", fontSize: 18 }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 400, color: "var(--navy)", marginBottom: "0.75rem" }}>{title}</h3>
      <p style={{ fontSize: 13, color: "var(--text-mid)", fontWeight: 300, lineHeight: 1.7 }}>{desc}</p>
    </div>
  );
}

function Banner() {
  return (
    <div style={{ background: "var(--navy)", color: "#fff", padding: "4rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 400, maxWidth: 520, lineHeight: 1.3 }}>
        A resilient financial performance with net profit of{" "}
        <em style={{ color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>USD 2.7 billion</em>
        {" "}— reflecting the strength of our diversified business
      </h2>
      <button style={{ background: "var(--red)", color: "#fff", padding: "13px 28px", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500, border: "none", cursor: "pointer", flexShrink: 0 }}>
        2025 Annual Report
      </button>
    </div>
  );
}

function Leadership() {
  const [active, setActive] = useState(0);
  return (
    <section style={{ padding: "5rem 3rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
        <div style={{ paddingRight: "4rem" }}>
          <div style={{ color: "var(--red)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, marginBottom: "1rem", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 20, height: 1, background: "var(--red)", display: "inline-block" }} />
            Leadership
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,38px)", fontWeight: 400, color: "var(--navy)", marginBottom: "1rem" }}>
            Our people make Trafigura who we are
          </h2>
          <p style={{ color: "var(--text-mid)", fontSize: 14, fontWeight: 300, lineHeight: 1.8, marginBottom: "2rem" }}>
            Since the beginning, Trafigura has been an employee-owned business. Our leadership is made up of people from diverse backgrounds and fields of expertise.
          </p>
          <blockquote style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontStyle: "italic", fontWeight: 400, color: "var(--navy)", lineHeight: 1.5, margin: "2rem 0", paddingLeft: "1.5rem", borderLeft: "2px solid var(--red)" }}>
            "Metals impact energy in a crucial way and are the means to achieve the energy transition."
          </blockquote>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "1rem" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 500 }}>GS</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "var(--navy)" }}>Georgios Stamopoulos</div>
              <div style={{ fontSize: 12, color: "var(--text-light)" }}>Team Leader, Metals & Minerals Operations — Athens</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {LEADER_CARDS.map((c, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                background: active === i ? "#fff" : "var(--off-white)",
                padding: "1.75rem",
                borderLeft: active === i ? "3px solid var(--red)" : "3px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 400, color: "var(--navy)", marginBottom: "0.5rem" }}>{c.title}</h4>
              <p style={{ fontSize: 12, color: "var(--text-mid)", fontWeight: 300 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#152040", color: "rgba(255,255,255,0.6)", padding: "3rem 3rem 2rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#fff", marginBottom: "1rem" }}>
            TRAFI<span style={{ color: "var(--red)" }}>G</span>URA
          </div>
          <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.8 }}>
            Trafigura is one of the world's largest independent commodity trading and logistics houses, founded in 1993 and operating across 50+ countries.
          </p>
        </div>
        {FOOTER_COLS.map((col) => (
          <div key={col.heading}>
            <h5 style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1rem", fontWeight: 500 }}>{col.heading}</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {col.links.map((link) => (
                <li key={link} style={{ fontSize: 13, fontWeight: 300, marginBottom: "0.6rem", cursor: "pointer" }}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>© 2026 Trafigura Group Pte. Ltd. All rights reserved.</span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Privacy policy · Legal notices · Speak up</span>
      </div>
    </footer>
  );
}

// ─── Root Component ────────────────────────────────────────────────────────────

export default function TrafiguraWebsite() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --navy: #0a1628;
          --navy-mid: #152040;
          --red: #c8102e;
          --red-light: #e8213f;
          --off-white: #f5f3ee;
          --text-dark: #1a1a2e;
          --text-mid: #4a4a5a;
          --text-light: #8a8a9a;
          --border: #e2dfd8;
        }
        body {
          font-family: 'DM Sans', sans-serif;
          color: var(--text-dark);
          background: #fff;
          font-size: 15px;
          line-height: 1.6;
        }
        a { text-decoration: none; color: inherit; }
      `}</style>

      <Navbar />
      <Hero />
      <StatsBar />
      <NewsSection />
      <WhatWeDo />
      <Banner />
      <Leadership />
      <Footer />
    </>
  );
}
