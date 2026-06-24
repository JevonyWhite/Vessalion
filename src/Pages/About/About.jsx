import React from 'react'
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre'
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import "../About/About.css"

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // no hash — scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <div id="who-we-are">
        <WhoWeAre/>
        </div>
        <div id="what-we-do">
        <WhatWeDo/>
        </div>
    </div>
  )
}

export default About