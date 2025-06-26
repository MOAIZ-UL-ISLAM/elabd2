// page.js or Home component
"use client";
import { useState } from "react";
import CustomCursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";

export default function Home() {
  const [isHoveringLinkOrButton, setIsHoveringLinkOrButton] = useState(false)
  const [hoveredElement, setHoveredElement] = useState(null)

  return (
    <>

      <CustomCursor
        isHovering={isHoveringLinkOrButton}
        hoveredElement={hoveredElement}
      />
      <Navbar
        setHoveringLinkOrButton={setIsHoveringLinkOrButton}
        setHoveredElement={setHoveredElement}
      />
      <HeroSection />
    </>
  );
}