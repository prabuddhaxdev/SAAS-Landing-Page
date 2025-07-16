"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LandingPagePreview from "@/components/LandingPagePreview";
import ProofSection from "@/components/ProofSection";
import { useScrollPosition, useScrollTransform } from "@/hooks/useScrollEffects";
import { companyLogos, statistics } from "@/lib/data";

export default function Home() {
  const scrollY = useScrollPosition();
  const { rotation, scale } = useScrollTransform(scrollY);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e17] via-[#111018] to-[#111018]"></div>
      <div 
        className="relative"
        style={{
          backgroundImage: "url('https://www.leadpages.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbackground-gradient-image.051f7f86.png&w=828&q=75')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',  
        }}
      >
        <Navbar scrollY={scrollY} />
        <HeroSection />
        <LandingPagePreview rotation={rotation} scale={scale} />
      </div>
      
      <ProofSection logos={companyLogos} statistics={statistics} />
    </div>
  );
}
