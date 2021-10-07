import React from "react";
import Aboutsection from "../components/Aboutsection";
import Contactbanner from "../components/Contactbanner";
import HeroSection from "../components/HeroSection";
import Projectsection from "../components/Projectsection";
import Servicessection from "../components/Servicessection";
import Testinonialssection from "../components/Testinonialssection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Aboutsection />
      <Servicessection />
      <Projectsection />
      <Testinonialssection />
      <Contactbanner />
    </div>
  );
}
