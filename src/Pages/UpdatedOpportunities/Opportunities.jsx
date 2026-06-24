import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../UpdatedOpportunities/Opportunities.css";
import OPPORTUNITIES from "../UpdatedOpportunities/OpportunitiesData";
import useScrollReveal from "../../components/ScrollReveal/ScrollReveal";

/* ── Single allocation row ── */
const AllocationRow = ({ alloc, navigate }) => (
  <div className="opp-alloc-row">
    <span className="opp-alloc-ref">{alloc.ref}</span>
    <span className="opp-alloc-qty">{alloc.qty}</span>
    <button
      className="opp-row-btn opp-row-btn--available"
      onClick={() => navigate("/contact")}
    >
      SUBMIT INTEREST
    </button>
  </div>
);

/* ── Commodity card ── */
const CommodityCard = ({ commodity, navigate }) => {
  const [expanded, setExpanded] = useState(true);
  const hasAllocations = commodity.allocations.length > 0;

  return (
    <div className={`opp-section ${expanded ? "opp-section--expanded" : ""}`}>
      {/* Card header — always visible */}
      <button
        className="opp-section-header"
        onClick={() => hasAllocations && setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        style={{ cursor: hasAllocations ? "pointer" : "default" }}
      >
        <div className="opp-section-header-left">
          <p className="opp-section-name">{commodity.name}</p>
          <p className="opp-section-grade">{commodity.grade}</p>
        </div>
        <div className="opp-section-header-right">
          {/* <div className="opp-section-meta">
            <div className="opp-section-meta-item">
              <span className="opp-section-meta-label">Region</span>
              <span className="opp-section-meta-value">{commodity.region}</span>
            </div>
            <div className="opp-section-meta-item">
              <span className="opp-section-meta-label">Master Inventory</span>
              <span className="opp-section-meta-value">
                {commodity.masterQty}
              </span>
            </div>
            <div className="opp-section-meta-item">
              <span className="opp-section-meta-label">Master Ref</span>
              <span className="opp-section-meta-value opp-section-ref">
                {commodity.masterRef}
              </span>
            </div>
          </div> */}

          {hasAllocations && (
            <div
              className={`opp-section-chevron ${expanded ? "opp-section-chevron--open" : ""}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          )}
        </div>
      </button>

      {/* Expandable allocations table */}
      {hasAllocations && expanded && (
        <div className="opp-section-body">
          <div className="opp-alloc-header">
            <span>Reference</span>
            <span>Allocation</span>
            <span />
          </div>
          <div className="opp-alloc-rows">
            {commodity.allocations.map((alloc) => (
              <AllocationRow
                key={alloc.ref}
                alloc={alloc}
                navigate={navigate}
              />
            ))}
          </div>
        </div>
      )}

      {/* No allocations state */}
      {!hasAllocations && (
        <div className="opp-section-no-alloc">
          <button
            className="opp-row-btn opp-row-btn--available"
            onClick={() => navigate("/compliance")}
          >
            SUBMIT INTEREST
          </button>
        </div>
      )}
    </div>
  );
};

/* ── Animated filter button ── */
const FilterButton = ({ f, i, activeFilter, setActiveFilter, commodity }) => {
  const [btnRef, btnVisible] = useScrollReveal();
  

  return (
    <button
      key={f}
      ref={btnRef}
      style={{ transitionDelay: `${i * 60}ms` }}
      className={`opps-filter opps-filter--commodity reveal reveal--up ${btnVisible ? "reveal--visible" : ""} ${activeFilter === f ? "opps-filter--active" : ""}`}
      onClick={() => setActiveFilter(f)}
    >
      {f === "ALL" ? "ALL COMMODITIES" : commodity?.name.toUpperCase()}
    </button>
  );
};

/* ── Page ── */
const Opportunities = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = ["ALL", ...OPPORTUNITIES.map((c) => c.id)];
  

  const visible =
    activeFilter === "ALL"
      ? OPPORTUNITIES
      : OPPORTUNITIES.filter((c) => c.id === activeFilter);
const [heroRef, heroVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();
  
  return (
    <div className="opps-page">
      {/* Hero */}
      <div className={`opps-hero reveal reveal--left ${heroVisible ? "reveal--visible" : ""}`} ref={heroRef}>
        <h1 className="opps-heading">CURRENT OPPORTUNITIES</h1>
        <div className="opps-heading-underline" />
        <p className="opps-subheading">
          A curated selection of live allocations across our global sourcing
          network.
        </p>
      </div>

      {/* Commodity filter badges */}
      <div className="opps-filters-wrapper">
      <div className="opps-filters">
        {filters.map((f) => {
          const commodity = OPPORTUNITIES.find((c) => c.id === f);
          return (
            <button
              key={f}
              className={`opps-filter opps-filter--commodity ${activeFilter === f ? "opps-filter--active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f === "ALL" ? "ALL COMMODITIES" : commodity?.name.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
   {/* <div className="opps-filters-wrapper">
  <div className="opps-filters">
    {filters.map((f, i) => {
      const commodity = OPPORTUNITIES.find((c) => c.id === f);
      return (
        <FilterButton
          key={f}
          f={f}
          i={i}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          commodity={commodity}
        />
      );
    })}
  </div>
</div> */}
      {/* Commodity cards */}
      <div className="opps-sections">
        {visible.map((commodity) => (
          <CommodityCard
            key={commodity.id}
            commodity={commodity}
            navigate={navigate}
          />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="opps-cta">
        <div className="opps-cta-left">
          <div className="opps-cta-icon-wrapper">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#CC9933"
              strokeWidth="1.5"
              className="opp-cta-icon"
            >
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <p className="opps-cta-title">SERIOUS INQUIRIES ONLY</p>
            <p className="opps-cta-desc">
              All opportunities are subject to final confirmation, contract
              execution, and compliance clearance. Contact our team to request
              full specifications, SGS reports, and commercial terms.
            </p>
          </div>
        </div>
        <button className="opps-cta-btn" onClick={() => navigate("/contact")}>
          SUBMIT YOUR INTEREST
        </button>
      </div>
    </div>
  );
};

export default Opportunities;
