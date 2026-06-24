// import React from "react";
// import "../WhoWeAre/WhoWeAre.css";
// import gasPowerImage from "../../assets/gas-power.svg";
// import metalsAndMineralsImage from "../../assets/metals-and-minerals.svg";
// import oilAndPetroImage from "../../assets/oil-and-petroleum.svg";
// import useScrollReveal from "../../components/ScrollReveal/ScrollReveal";

// const PILLARS = [
//   {
//     icon: gasPowerImage,
//     subject: "Strategic Aggregation:",
//     text: "Consolidating verified production from multiple sourcing regions to create scalable, dependable supply streams for industrial buyers while reducing market fragmentation.",
//   },
//   {
//     icon: metalsAndMineralsImage,
//     subject: "Inland Staging & Verification",
//     text: "Coordinating material staging, independent inspection, sampling, quality verification, and inventory management prior to export and port delivery.",
//   },
//   {
//     icon: oilAndPetroImage,
//     subject: "Maritime Logistics Coordination",
//     text: "Working alongside established logistics and freight partners to facilitate efficient movement of containerized and bulk cargo under internationally recognized trade frameworks and Incoterms standards.",
//   },
// ];

// const WhoWeAre = () => {

//   const [introRef, introVisible] = useScrollReveal();
// const [circlesRef, circlesVisible] = useScrollReveal();

//   return (
//     <div className="wwa-page">
//       {/* breadcrumb */}
//       <div className="wwa-breadcrumb">Home &rsaquo; Who we are</div>

//       {/* intro section */}
//       <section ref={introRef} className={`wwa-intro reveal ${introVisible ? "reveal--visible" : ""}`}>
//         <div className="wwa-intro-left">
//           <span className="wwa-eyebrow">WHO WE ARE</span>
//           <h1 className="wwa-heading">
//             Global Reach. Uncompromising Standards
//           </h1>
//         </div>
//         <div className="wwa-intro-right">
//           <p className="wwa-desc">
//             At Vessalion LLC, we operate as a private commodity origination and
//             supply-chain coordination firm focused on industrial minerals,
//             strategic raw materials, and bulk commodity allocations.
//             </p>

//             <p className="wwa-desc">We
//             identify, verify, aggregate, and structure off-market supply
//             opportunities, connecting qualified producers with industrial buyers
//             through disciplined sourcing, independent verification, and
//             transparent logistics frameworks.
//             </p>

//             <p className="wwa-desc">
//             Our approach is built on
//             compliance, risk management, and long-term commercial relationships.
//             By coordinating with trusted legal, banking, inspection, and
//             logistics partners across multiple jurisdictions, we help move
//             verified materials from origin to market while maintaining the
//             quality, documentation, and supply consistency required by global
//             enterprise buyers.
//             </p>

//             <p className="wwa-desc">
//             Rather than pursuing speculative transactions, we
//             focus on creating reliable supply channels that support long-term
//             procurement objectives and sustainable commercial growth for all
//             parties involved.
//           </p>
//           <button className="wwa-btn">Our story</button>
//         </div>
//       </section>

//       {/* circles section */}
//       <section ref={circlesRef} className={`wwa-circles reveal ${circlesVisible ? "reveal--visible" : ""}`}>
//         {PILLARS.map((p, i) => (
//           <div key={i} className={`wwa-circle-item wwa-circle-item--${i}`}>
//             <div className="wwa-circle wwa-circle--large">
//               <div className="wwa-circle-content">
//                 <p className="wwa-circle-heading">{p.subject}</p>
//                 <p className="wwa-circle-text">{p.text}</p>
//               </div>
//             </div>
//             <div className="wwa-circle wwa-circle--small">
//               <img className="wwa-circle-icon" src={p.icon} alt={p.subject} />
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default WhoWeAre;

import React from "react";
import "../WhoWeAre/WhoWeAre.css";
import gasPowerImage from "../../assets/gas-power.svg";
import metalsAndMineralsImage from "../../assets/metals-and-minerals.svg";
import oilAndPetroImage from "../../assets/oil-and-petroleum.svg";
import useScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import HQSkyline from "../../assets/BodyImages/Second set/Headquarters Skyline2.png";
import Boardroom from "../../assets/BodyImages/First set/Executive Boardroom.jpg";


const PILLARS = [
  {
    icon: gasPowerImage,
    subject: "Strategic Aggregation:",
    text: "Consolidating verified production from multiple sourcing regions to create scalable, dependable supply streams for industrial buyers while reducing market fragmentation.",
  },
  {
    icon: metalsAndMineralsImage,
    subject: "Inland Staging & Verification",
    text: "Coordinating material staging, independent inspection, sampling, quality verification, and inventory management prior to export and port delivery.",
  },
  {
    icon: oilAndPetroImage,
    subject: "Maritime Logistics Coordination",
    text: "Working alongside established logistics and freight partners to facilitate efficient movement of containerized and bulk cargo under internationally recognized trade frameworks and Incoterms standards.",
  },
];

const RevealCircle = ({ pillar, index }) => {
  const [ref, visible] = useScrollReveal();
  const direction = index % 2 === 0 ? "reveal--left" : "reveal--right";
  return (
    <div
      ref={ref}
      className={`wwa-circle-item wwa-circle-item--${index} reveal ${direction} ${visible ? "reveal--visible" : ""}`}
    >
      <div className="wwa-circle wwa-circle--large">
        <div className="wwa-circle-content">
          <p className="wwa-circle-heading">{pillar.subject}</p>
          <p className="wwa-circle-text">{pillar.text}</p>
        </div>
      </div>
      <div className="wwa-circle wwa-circle--small">
        <img
          className="wwa-circle-icon"
          src={pillar.icon}
          alt={pillar.subject}
        />
      </div>
    </div>
  );
};

const WhoWeAre = () => {
  const [heroRef, heroVisible] = useScrollReveal();
  const [introRef, introVisible] = useScrollReveal();
  const [boardroomRef, boardroomVisible] = useScrollReveal();
  const [circlesRef, circlesVisible] = useScrollReveal();

  return (
    <div className="wwa-page">
      {/* ── Hero banner — HQ Skyline ── */}
      <div className="wwa-hero">
        <img
          src={HQSkyline}
          alt="Vessalion headquarters"
          className="wwa-hero-img"
        />
        <div className="wwa-hero-overlay" />
        {/* Add wwa-hero-content to position it inside the hero */}
<div
  ref={heroRef}
  className={`wwa-hero-content reveal reveal--up ${heroVisible ? "reveal--visible" : ""}`}
>
          {/* <span className="wwa-hero-eyebrow">Who We Are</span> */}
          <h1 className="wwa-hero-title">
           <span className="wwa-hero-title-one">Global Reach</span> 
            <br />
           <span className="wwa-hero-title-two"> Uncompromising
            <br />
            Standards</span>
          </h1>
        </div>
      </div>

      {/* breadcrumb */}
      {/* <div className="wwa-breadcrumb">Home &rsaquo; Who we are</div> */}

      {/* intro section */}
      <section
        ref={introRef}
        className={`wwa-intro reveal reveal--left ${introVisible ? "reveal--visible" : ""}`}
      >
        <div className="wwa-intro-left">
          <span className="wwa-eyebrow">WHO WE ARE</span>
          {/* <h1 className="wwa-heading">
            Global Reach. Uncompromising Standards
          </h1> */}
        </div>
        <div className="wwa-intro-right">
          <p className="wwa-desc">
            At Vessalion LLC, we operate as a private commodity origination and
            supply-chain coordination firm focused on industrial minerals,
            strategic raw materials, and bulk commodity allocations.
          </p>
          <p className="wwa-desc">
            We identify, verify, aggregate, and structure off-market supply
            opportunities, connecting qualified producers with industrial buyers
            through disciplined sourcing, independent verification, and
            transparent logistics frameworks.
          </p>
          <p className="wwa-desc">
            Our approach is built on compliance, risk management, and long-term
            commercial relationships. By coordinating with trusted legal,
            banking, inspection, and logistics partners across multiple
            jurisdictions, we help move verified materials from origin to market
            while maintaining the quality, documentation, and supply consistency
            required by global enterprise buyers.
          </p>
          <p className="wwa-desc">
            Rather than pursuing speculative transactions, we focus on creating
            reliable supply channels that support long-term procurement
            objectives and sustainable commercial growth for all parties
            involved.
          </p>
          <button className="wwa-btn">Our story</button>
        </div>
      </section>

      {/* ── Boardroom image break ── */}
      <div
        ref={boardroomRef}
        className={`wwa-img-break reveal reveal--right ${boardroomVisible ? "reveal--visible" : ""}`}
      >
        <img
          src={Boardroom}
          alt="Executive boardroom"
          className="wwa-img-break-img"
        />
        <div className="wwa-img-break-overlay">
          <div className="wwa-img-break-text">
            <p className="wwa-img-break-quote">
              "Disciplined procurement.
              <br />
              Trusted partnerships.
              <br />
              Global market access."
            </p>
          </div>
        </div>
      </div>

      {/* circles section */}
      <section className="wwa-circles">
        {PILLARS.map((p, i) => (
          <RevealCircle key={i} pillar={p} index={i} />
        ))}
      </section>
    </div>
  );
};

export default WhoWeAre;
