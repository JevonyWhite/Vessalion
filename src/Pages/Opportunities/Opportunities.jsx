import React from 'react'
import { useNavigate } from "react-router-dom";
import "../Opportunities/Opportunities.css";
import { useState } from "react";
import OPPORTUNITIES from './opportunitiesData';

const Opportunities = () => {

  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
 
  const showAvailable = activeFilter === "all" || activeFilter === "available";
  const showContract = activeFilter === "all" || activeFilter === "contract";
  const showSold = activeFilter === "all" || activeFilter === "sold";
 
  const Row = ({ item, status }) => (
    <div className='opp-row-container'>
    <div className={`opp-row opp-row--${status}`}>
      
      <div className="opp-row-left">
        <p className="opp-row-name">{item.name}</p>
        <p className="opp-row-grade">{item.grade}</p>
      </div>
      
        <span className="opp-row-qty">{item.qty}</span>
        <span className="opp-row-location">{item.location}</span>
        <span className="opp-row-ref">{item.ref}</span>
      
      
    </div>
    <div className="opp-row-action">
        {status === "sold" ? (
          <div className="opp-row-stamp">SOLD</div>
        ) : (
          <button
            className={`opp-row-btn opp-row-btn--${status}`}
            onClick={() => navigate("/compliance")}
          >
            SUBMIT INTEREST
          </button>
        )}
      </div>
    </div>
    
  );
 
  const Column = ({ title, status, items }) => (
    <div className={`opp-col opp-col--${status}`}>
      <h3 className={`opp-col-title opp-col-title--${status}`}>{title}</h3>
      <div className="opp-col-header">
        <span>Mineral / Commodity</span>
        <span>QTY (MT)</span>
        <span>Location</span>
        <span>Ref Code</span>
      </div>
      <div className="opp-col-rows">
        {items.map((item) => (
          <Row key={item.id} item={item} status={status} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="opps-page">
      {/* Hero */}
      <div className="opps-hero">
        <h1 className="opps-heading">CURRENT OPPORTUNITIES</h1>
        <div className="opps-heading-underline" />
        <p className="opps-subheading">
          A curated selection of live and recently completed allocations across our global sourcing network.
        </p>
      </div>
 
      {/* Filter badges */}
      <div className="opps-filters">
        <button
          className={`opps-filter opps-filter--available ${activeFilter === "available" ? "opps-filter--active" : ""}`}
          onClick={() => setActiveFilter(activeFilter === "available" ? "all" : "available")}
        >
          <span className="opps-filter-dot opps-filter-dot--available" />
          AVAILABLE NOW
          <span className="opps-filter-count">{OPPORTUNITIES.available.length}</span>
        </button>
        <button
          className={`opps-filter opps-filter--contract ${activeFilter === "contract" ? "opps-filter--active" : ""}`}
          onClick={() => setActiveFilter(activeFilter === "contract" ? "all" : "contract")}
        >
          <span className="opps-filter-dot opps-filter-dot--contract" />
          UNDER CONTRACT
          <span className="opps-filter-count">{OPPORTUNITIES.contract.length}</span>
        </button>
        <button
          className={`opps-filter opps-filter--sold ${activeFilter === "sold" ? "opps-filter--active" : ""}`}
          onClick={() => setActiveFilter(activeFilter === "sold" ? "all" : "sold")}
        >
          <span className="opps-filter-dot opps-filter-dot--sold" />
          SOLD
          <span className="opps-filter-count">{OPPORTUNITIES.sold.length}</span>
        </button>
      </div>
 
      {/* Columns */}
      <div className="opps-grid">
        {showAvailable && (
          <Column title="AVAILABLE NOW" status="available" items={OPPORTUNITIES.available} />
        )}
        {showContract && (
          <Column title="UNDER CONTRACT" status="contract" items={OPPORTUNITIES.contract} />
        )}
        {showSold && (
          <Column title="SOLD" status="sold" items={OPPORTUNITIES.sold} />
        )}
      </div>
 
      {/* Footer CTA */}
      <div className="opps-cta">
        <div className="opps-cta-left">
          <div className="opps-cta-icon-wrapper">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CC9933" strokeWidth="1.5" className='opp-cta-icon'>
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <div>
            <p className="opps-cta-title">SERIOUS INQUIRIES ONLY</p>
            <p className="opps-cta-desc">
              All opportunities are subject to final confirmation, contract execution, and compliance clearance.
              Contact our team to request full specifications, SGS reports, and commercial terms.
            </p>
          </div>
        </div>
        <button className="opps-cta-btn" onClick={() => navigate("/contact")}>
          SUBMIT YOUR INTEREST
        </button>
      </div>
    </div>
  )
}

export default Opportunities