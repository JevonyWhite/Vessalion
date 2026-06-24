import React, { useState } from "react";
import "../Header/Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import logoText from "../../assets/Vessalion File/VessalionFileG.svg";
import vessalion from "../../assets/Vessalion File/OnlyLogo.svg";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Who We Are", path: "/about#who-we-are" },
  { label: "What We Do", path: "/about#what-we-do" },
  { label: "Compliance", path: "/compliance" },
  { label: "Industries", path: "/industries" },
  { label: "Capabilities", path: "/capabilities" },
  { label: "Markets", path: "/markets" },
  { label: "Contact", path: "/contact", isButton: true },
];

const Header = ({ scrolled, menuOpen, setMenuOpen, overlayScrolled }) => {
  const location = useLocation();

  return (
    <div className={`header ${scrolled || overlayScrolled ? "solid" : "transparent"} ${menuOpen ? "menu-open" : ""}`}>
      <Link to="/" className="logo-container">
        <div className="logo-container">
          <img src={vessalion} alt="Vessalion Logo" className="onlyLogo" />
          <img src={logoText} alt="Vessalion Logo" className="logoText" />
        </div>
      </Link>

      <nav className="header-nav" aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className={link.isButton
              ? "header-cta"
              : `header-nav__link ${location.pathname + location.hash === link.path ? "active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen
          ? <IoMdClose style={{ height: "24px", width: "24px" }} />
          : <AiOutlineMenu style={{ height: "20px", width: "24px" }} />}
      </div>
    </div>
  );
};

export default Header;

// import React, { useEffect, useRef, useState } from "react";
// import "../Header/Header.css";
// import { AiOutlineMenu } from "react-icons/ai";
// import { CiSearch } from "react-icons/ci";
// import { IoMdClose } from "react-icons/io";
// import { TbWorld } from "react-icons/tb";
// import { IoIosArrowDown } from "react-icons/io";
// import logoText from "../../assets/Vessalion File/VessalionFileG.svg";
// import vessalion from "../../assets/Vessalion File/OnlyLogo.svg";
// import Footer from "../Footer/Footer";

// import { Link, useLocation} from "react-router-dom";

// const NAV_LINKS = [
//   { label: "Home", path: "/" },
//   { label: "Who We Are", path: "/about#who-we-are" },
//   { label: "What We Do", path: "/about#what-we-do" },
//   { label: "Compliance", path: "/compliance" },
//   { label: "Industries", path: "/industries" },
//   { label: "Capabilities", path: "/capabilities" },
//   { label: "Markets", path: "/markets" },
//   { label: "Contact", path: "/contact", isButton: true },
  
  
// ];

// const Header = ({ scrolled, menuOpen, setMenuOpen }) => {
//   const location = useLocation();
  

//   const overlayRef = useRef(null);
// const [overlayScrolled, setOverlayScrolled] = useState(false);

// useEffect(() => {
//   if (!menuOpen) {
//     setOverlayScrolled(false);
//     return;
//   }
//   const el = overlayRef.current;
//   if (!el) return;
//   const handleScroll = () => setOverlayScrolled(el.scrollTop > 10);
//   el.addEventListener("scroll", handleScroll);
//   return () => el.removeEventListener("scroll", handleScroll);

  
// }, [menuOpen]);

//   return (
//     <>
//     <div className={`header ${scrolled || overlayScrolled ? "solid" : "transparent"} ${menuOpen ? "menu-open" : ""}`}>

//        <Link to="/" className="logo-container">
//       <div className="logo-container">
//         <img src={vessalion} alt="Vessalion Logo" className="onlyLogo"/>
//         <img src={logoText} alt="Vessalion Logo" className="logoText"/>
       
        
//       </div>
//       </Link>

//        <nav className="header-nav" aria-label="Main navigation">
//         {NAV_LINKS.map((link) => (
//           <Link
//             key={link.label}
//             to={link.path}
//             className={link.isButton
//           ? "header-cta"
//           : `header-nav__link ${
//               location.pathname + location.hash === link.path ? "active" : ""
//             }`}
//           >
//             {link.label}
//           </Link>
//         ))}
//       </nav>

//       <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen
//     ? <IoMdClose style={{ height: "24px", width: "24px" }} />
//     : <AiOutlineMenu style={{ height: "20px", width: "24px" }} />
//   }
//       </div>

      
     
//     </div>

//     {menuOpen && (
//         <div className="menu-overlay" ref={overlayRef}>

//           <nav className="menu-overlay-nav">
//             <h2 className="menu-overlay-brand">Vessalion</h2>
//             <div className="menu-overlay-links-wrapper">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.label}
//                 to={link.path}
//                 onClick={() => setMenuOpen(false)}
//                 className="menu-overlay-link"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             </div>
//           </nav>

//           <Footer menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

//           {/* decorative circles */}
//           <div className="menu-circle menu-circle--1" />
//           <div className="menu-circle menu-circle--2" />
//           <div className="menu-circle menu-circle--3" />
//           <div className="menu-circle menu-circle--4" />
//           <div className="menu-circle menu-circle--5" />
//         </div>
        
        
//       )}
//     </>
//   );
// };

// export default Header;
