import React from "react";
import Header from "../Header/Header";
import MenuOverlay from "../MenuOverlay/MenuOverlay";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../RootLayout/RootLayout.css";
import Footer from "../Footer/Footer";

const RootLayout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [overlayScrolled, setOverlayScrolled] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setScrolled(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
  if (!menuOpen) setOverlayScrolled(false);
}, [menuOpen]);

  const isSolid = (scrolled || !isHome) && !menuOpen;

  return (
    <div className="root-layout">
      <header>
        <Header
          scrolled={isSolid}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
           overlayScrolled={overlayScrolled}
        />
      </header>

      {menuOpen && (
        <MenuOverlay
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          onScroll={setOverlayScrolled}
        />
      )}

      <main>
        <Outlet context={{ scrolled }} />
      </main>

      <footer>
        <Footer menuOpen={menuOpen} />
      </footer>
    </div>
  );
};

export default RootLayout;
