import React from "react";
import "../OpportunityCard/OpportunityCard.css";
import { FiMapPin } from "react-icons/fi";
import { TbBarrel } from "react-icons/tb";
import { AiOutlineTag } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa6";

// status: "available" | "sold" | "contract"
const OpportunityCard = ({ card }) => {
  const isSold = card.status === "sold";
  const isContract = card.status === "contract";
  const isAvailable = card.status === "available";

  const statusLabel = isSold
    ? "Sold"
    : isContract
    ? "Under Contract"
    : "Available Now";

  return (
    <div className={`opp-card opp-card--${card.status}`}>
      {/* Status badge */}
      <div className={`opp-badge opp-badge--${card.status}`}>
        <span className="opp-badge-dot" />
        {statusLabel}
      </div>

      <div className="opp-card-body">
        {/* LEFT COLUMN */}
        <div className="opp-left">
          <h2 className="opp-title">{card.title}</h2>
          <div className="opp-divider" />
          <div className="opp-location">
            {/* pin icon */}
            <FiMapPin className=""/>

            {card.location}
          </div>

          <div className="opp-separator" />

          <div className="opp-quantity">
            {/* barrel icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opp-qty-icon">
              <rect x="4" y="3" width="16" height="18" rx="3"/>
              <line x1="4" y1="8" x2="20" y2="8"/>
              <line x1="4" y1="16" x2="20" y2="16"/>
              <line x1="8" y1="3" x2="8" y2="21"/>
              <line x1="16" y1="3" x2="16" y2="21"/>
            </svg>
            <div>
              <p className="opp-qty-label">
                {isSold ? "Final Allocated Quantity" : "Estimated Inventory"}
              </p>
              <p className="opp-qty-value">
                {card.quantity} <span className="opp-qty-unit">Metric Tons</span>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="opp-right">
          {/* Grade */}
          <div className="opp-detail-row">
            <div className="opp-detail-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 17l4-8 4 4 4-6 4 10"/>
                <path d="M3 17h18"/>
              </svg>
            </div>
            <div>
              <p className="opp-detail-label">Indicative Grade</p>
              <p className="opp-detail-value">{card.grade}</p>
            </div>
          </div>
          <div className="opp-detail-divider" />

          {/* Pricing */}
          <div className="opp-detail-row">
           <div className="opp-detail-icon2">
             <AiOutlineTag className="opp-detail-react-icon"/>
            </div>
            <div>
              <p className="opp-detail-label">Pricing</p>
              <p className={`opp-detail-value ${isSold ? "opp-detail-value--sold" : ""}`}>
                {card.pricing}
              </p>
            </div>
          </div>
          <div className="opp-detail-divider" />

          {/* Reference */}
          <div className="opp-detail-row">
            
             <FaRegBookmark className="opp-detail-react-icon"/>
            
            <div>
              <p className="opp-detail-label">Reference</p>
              <p className="opp-detail-value opp-detail-value--mono">{card.reference}</p>
            </div>
          </div>

          {/* Checkmarks */}
          <div className="opp-checks">
            {card.checks.map((check) => (
              <div key={check} className="opp-check">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opp-check-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-4.5-4.5 1.41-1.41L10 13.67l7.09-7.09 1.41 1.41L10 16.5z"/>
                </svg>
                {check}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className={`opp-footer opp-footer--${card.status}`}>
        {isSold ? (
          <span className="opp-footer-sold">— &nbsp; SOLD &nbsp; —</span>
        ) : (
          <button className="opp-footer-btn">SUBMIT INTEREST &nbsp;→</button>
        )}
      </div>

      {/* Sold stamp overlay */}
      {isSold && (
        <div className="opp-stamp">
          <span>SOLD</span>
        </div>
      )}
    </div>
  );
};

export default OpportunityCard;
