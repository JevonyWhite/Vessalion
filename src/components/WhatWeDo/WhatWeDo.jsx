import React from "react";
import { useRef } from "react";
import "../WhatWeDo/WhatWeDo.css";
import electronicsImage from "../../assets/electronics-and-manufacturing.svg";
import mobilityImage from "../../assets/mobility.svg";
import renewablesImage from "../../assets/renewables-and-hydrogen.svg";
import gasPowerImage from "../../assets/gas-power.svg";
import metalsAndMineralsImage from "../../assets/metals-and-minerals.svg";
import oilAndPetroImage from "../../assets/oil-and-petroleum.svg";
import RevealSection from "../RevealSection/RevealSection";
import useScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import LaboratoryImage from "../../assets/BodyImages/Second set/Laboratory.png";
import WarehouseImage from "../../assets/BodyImages/First set/Warehouse.png";


// const SECTIONS = [
//   {
//     num: "01",
//     title: "Industrial Minerals & Strategic Feedstocks",
//     intro:
//       "Supporting global buyers with access to verified mineral resources used across pigment production, metallurgy, infrastructure, energy, manufacturing, and advanced industrial applications.",
//     bullets: [
//       {
//         icon: electronicsImage,
//         title: "Titanium-Bearing Mineral Sands",
//         desc: "Sourcing and allocating materials such as rutile, leucoxene, ilmenite, zircon, and related heavy mineral concentrates for industrial processing and downstream manufacturing.",
//       },
//       {
//         icon: mobilityImage,
//         title: "High-Purity Silica & Quartz Materials",
//         desc: "Supporting industries requiring high-grade silica and quartz feedstocks for glass manufacturing, ceramics, foundry applications, solar technologies, and advanced industrial processes.",
//       },
//       {
//         icon: renewablesImage,
//         title: "Infrastructure & Energy Materials",
//         desc: "Providing access to selected mineral and raw material supply streams supporting construction, energy, industrial processing, and large-scale infrastructure development.",
//       },
//     ],
//     tags: [],
//   },
//   {
//     num: "02",
//     title: "Precious Metals & High-Value Materials",
//     intro:
//       "Working with qualified counterparties and independent verification partners to support transparent sourcing and responsible trade of high-value mineral and precious metal assets.",
//     bullets: [],
//     tags: [
//       "Independent Verification",
//       "Chain-of-Custody Controls",
//       "Financial & Settlement Coordination",
//     ],
//   },
//   {
//     num: "03",
//     title: "Trade Infrastructure & Global Logistics",
//     intro:
//       "Vessalion operates through an asset-light commercial model supported by established logistics, inspection, legal, and financial partners, allowing us to remain flexible while serving opportunities across multiple commodity sectors.",
//     bullets: [
//       {
//         icon: gasPowerImage,
//         title: "Global Logistics Network",
//         desc: "Coordination of containerized and bulk commodity movements through trusted freight and logistics providers.",
//       },
//       {
//         icon: metalsAndMineralsImage,
//         title: "Trade Finance Support",
//         desc: "Collaboration with banking and trade-finance institutions to facilitate qualified transactions and commercial settlements.",
//       },
//       {
//         icon: oilAndPetroImage,
//         title: "International Market Access",
//         desc: "Supporting buyers and suppliers across multiple jurisdictions through structured compliance, documentation, and commercial coordination.",
//       },
//     ],
//     tags: [],
//   },
// ];


// const ImgBreak = ({ src, alt, quote, align = "right" }) => {
//   const [ref, visible] = useScrollReveal(); 


//     return (
//     <div ref={ref} className={`wwd-img-break reveal reveal--up ${visible ? "reveal--visible" : ""}`}>
//       <img src={src} alt={alt} className="wwd-img-break-img" />
//       <div className={`wwd-img-break-overlay wwd-img-break-overlay--${align}`}>
//         <p className="wwd-img-break-quote">{quote}</p>
//       </div>
//     </div>
//   );
// };

// const WhatWeDo = () => {
//   return (
//     <div className="wwd-page">
//       {/* what we do */}
//       <section className="wwa-whatwedo">
//         <span className="wwa-eyebrow">What we do</span>
//         <h2 className="wwa-whatwedo-heading">Core Asset Portfolio & Feedstock Materials</h2>
//         <p className="wwa-whatwedo-desc">
//           Vessalion specializes in the sourcing, verification, aggregation, and allocation
//           of industrial minerals, strategic raw materials, and bulk commodity feedstocks
//           used throughout global manufacturing, infrastructure, energy, and advanced
//           industrial supply chains.
//         </p>
//       </section>
 
//       {/* sections with image breaks */}
//       <div className="wwd-sections">
 
//         {/* Section 01 */}
//         <RevealSection key={SECTIONS[0].num}>
//           <div className="wwd-section">
//             <div className="wwd-section-num">{SECTIONS[0].num}</div>
//             <h2 className="wwd-section-title">{SECTIONS[0].title}</h2>
//             <p className="wwd-section-intro">{SECTIONS[0].intro}</p>
//             <ul className="wwd-bullets">
//               {SECTIONS[0].bullets.map((b) => (
//                 <li key={b.title} className="wwd-bullet">
//                   <div className="wwd-bullet-image-container">
//                     <img src={b.icon} className="wwd-bullet-image" aria-hidden="true" />
//                   </div>
//                   <div>
//                     <p className="wwd-bullet-title">{b.title}</p>
//                     <p className="wwd-bullet-desc">{b.desc}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </RevealSection>
 
//         {/* Laboratory image break */}
//         <ImgBreak
//           src={LaboratoryImage}
//           alt="Laboratory analysis"
//           quote="Every allocation is verified. Every sample is tested."
//           align="right"
//         />
 
//         {/* Section 02 */}
//         <RevealSection key={SECTIONS[1].num}>
//           <div className="wwd-section">
//             <div className="wwd-section-num">{SECTIONS[1].num}</div>
//             <h2 className="wwd-section-title">{SECTIONS[1].title}</h2>
//             <p className="wwd-section-intro">{SECTIONS[1].intro}</p>
//             <div className="wwd-tags">
//               {SECTIONS[1].tags.map((tag) => (
//                 <span key={tag} className="wwd-tag">
//                   <i className="ti ti-check" aria-hidden="true" /> {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </RevealSection>
 
//         {/* Warehouse image break */}
//         <ImgBreak
//           src={WarehouseImage}
//           alt="Warehouse operations"
//           quote="Structured storage. Verified inventory. On-time delivery."
//           align="left"
//         />
 
//         {/* Section 03 */}
//         <RevealSection key={SECTIONS[2].num}>
//           <div className="wwd-section">
//             <div className="wwd-section-num">{SECTIONS[2].num}</div>
//             <h2 className="wwd-section-title">{SECTIONS[2].title}</h2>
//             <p className="wwd-section-intro">{SECTIONS[2].intro}</p>
//             <ul className="wwd-bullets">
//               {SECTIONS[2].bullets.map((b) => (
//                 <li key={b.title} className="wwd-bullet">
//                   <div className="wwd-bullet-image-container">
//                     <img src={b.icon} className="wwd-bullet-image" aria-hidden="true" />
//                   </div>
//                   <div>
//                     <p className="wwd-bullet-title">{b.title}</p>
//                     <p className="wwd-bullet-desc">{b.desc}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </RevealSection>
 
//       </div>
//     </div>
//   );
// };

// export default WhatWeDo;

const SECTIONS = [
  {
    num: "01",
    title: "Industrial Minerals & Strategic Feedstocks",
    intro:
      "Supporting global buyers with access to verified mineral resources used across pigment production, metallurgy, infrastructure, energy, manufacturing, and advanced industrial applications.",
    bullets: [
      {
        icon: electronicsImage,
        title: "Titanium-Bearing Mineral Sands",
        desc: "Sourcing and allocating materials such as rutile, leucoxene, ilmenite, zircon, and related heavy mineral concentrates for industrial processing and downstream manufacturing.",
      },
      {
        icon: mobilityImage,
        title: "High-Purity Silica & Quartz Materials",
        desc: "Supporting industries requiring high-grade silica and quartz feedstocks for glass manufacturing, ceramics, foundry applications, solar technologies, and advanced industrial processes.",
      },
      {
        icon: renewablesImage,
        title: "Infrastructure & Energy Materials",
        desc: "Providing access to selected mineral and raw material supply streams supporting construction, energy, industrial processing, and large-scale infrastructure development.",
      },
    ],
    tags: [],
  },
  {
    num: "02",
    title: "Precious Metals & High-Value Materials",
    intro:
      "Working with qualified counterparties and independent verification partners to support transparent sourcing and responsible trade of high-value mineral and precious metal assets.",
    bullets: [],
    tags: [
      "Independent Verification",
      "Chain-of-Custody Controls",
      "Financial & Settlement Coordination",
    ],
  },
  {
    num: "03",
    title: "Trade Infrastructure & Global Logistics",
    intro:
      "Vessalion operates through an asset-light commercial model supported by established logistics, inspection, legal, and financial partners, allowing us to remain flexible while serving opportunities across multiple commodity sectors.",
    bullets: [
      {
        icon: gasPowerImage,
        title: "Global Logistics Network",
        desc: "Coordination of containerized and bulk commodity movements through trusted freight and logistics providers.",
      },
      {
        icon: metalsAndMineralsImage,
        title: "Trade Finance Support",
        desc: "Collaboration with banking and trade-finance institutions to facilitate qualified transactions and commercial settlements.",
      },
      {
        icon: oilAndPetroImage,
        title: "International Market Access",
        desc: "Supporting buyers and suppliers across multiple jurisdictions through structured compliance, documentation, and commercial coordination.",
      },
    ],
    tags: [],
  },
];
 
const ImgBreak = ({ src, alt, quote, align = "right" }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`wwd-img-break reveal ${visible ? "reveal--visible" : ""}`}>
      <img src={src} alt={alt} className="wwd-img-break-img" />
      <div className="wwd-img-break-overlay">
        <p className="wwd-img-break-quote">{quote}</p>
      </div>
  </div>
  );
};
 
const WhatWeDo = () => {
  return (
    <div className="wwd-page">
      {/* what we do */}
      <section className="wwa-whatwedo">
        <span className="wwa-eyebrow">What we do</span>
        <h2 className="wwa-whatwedo-heading">Core Asset Portfolio & Feedstock Materials</h2>
        <p className="wwa-whatwedo-desc">
          Vessalion specializes in the sourcing, verification, aggregation, and allocation
          of industrial minerals, strategic raw materials, and bulk commodity feedstocks
          used throughout global manufacturing, infrastructure, energy, and advanced
          industrial supply chains.
        </p>
      </section>
 
      {/* sections with image breaks */}
      <div className="wwd-sections">
 
        {/* Section 01 */}
        <RevealSection key={SECTIONS[0].num}>
          <div className="wwd-section">
            <div className="wwd-section-num">{SECTIONS[0].num}</div>
            <h2 className="wwd-section-title">{SECTIONS[0].title}</h2>
            <p className="wwd-section-intro">{SECTIONS[0].intro}</p>
            <ul className="wwd-bullets">
              {SECTIONS[0].bullets.map((b) => (
                <li key={b.title} className="wwd-bullet">
                  <div className="wwd-bullet-image-container">
                    <img src={b.icon} className="wwd-bullet-image" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="wwd-bullet-title">{b.title}</p>
                    <p className="wwd-bullet-desc">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>
 
        {/* Laboratory image break */}
        <ImgBreak
          src={LaboratoryImage}
          alt="Laboratory analysis"
          quote="Every allocation is verified. Every sample is tested."
          
        />
 
        {/* Section 02 */}
        <RevealSection key={SECTIONS[1].num}>
          <div className="wwd-section">
            <div className="wwd-section-num">{SECTIONS[1].num}</div>
            <h2 className="wwd-section-title">{SECTIONS[1].title}</h2>
            <p className="wwd-section-intro">{SECTIONS[1].intro}</p>
            <div className="wwd-tags">
              {SECTIONS[1].tags.map((tag) => (
                <span key={tag} className="wwd-tag">
                  <i className="ti ti-check" aria-hidden="true" /> {tag}
                </span>
              ))}
            </div>
          </div>
        </RevealSection>
 
        {/* Warehouse image break */}
        <ImgBreak
          src={WarehouseImage}
          alt="Warehouse operations"
          quote="Structured storage. Verified inventory. On-time delivery."
          
        />
 
        {/* Section 03 */}
        <RevealSection key={SECTIONS[2].num}>
          <div className="wwd-section">
            <div className="wwd-section-num">{SECTIONS[2].num}</div>
            <h2 className="wwd-section-title">{SECTIONS[2].title}</h2>
            <p className="wwd-section-intro">{SECTIONS[2].intro}</p>
            <ul className="wwd-bullets">
              {SECTIONS[2].bullets.map((b) => (
                <li key={b.title} className="wwd-bullet">
                  <div className="wwd-bullet-image-container">
                    <img src={b.icon} className="wwd-bullet-image" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="wwd-bullet-title">{b.title}</p>
                    <p className="wwd-bullet-desc">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>
 
      </div>
    </div>
  );
};
 
export default WhatWeDo;