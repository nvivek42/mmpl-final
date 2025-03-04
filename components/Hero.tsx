"use client"

import React, { useRef } from "react";
import Link from 'next/link';
import Image from 'next/image';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef<HTMLImageElement>(null);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        ref={heroRef}
        src="/image/hero-bg/background.avif"
        alt="Hero Background"
        fill
        priority
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwZH0AdJSUgKjQhKCMvMzRGNDk7QUFEMDhKTktfWlxgZmRMeWx1f2x8fv/bAEMBFRcXHhoeOyEhOH5TRlR+fHx8fH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fv/AABEIAAUACAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AlgAH/9k="
        className="absolute inset-0 animate-subtle-zoom object-cover"
      />
      <div className="absolute inset-0 animate-water-reflection" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

      {/* Text Column */}
      <div className="px-4 md:px-8 lg:px-20 py-16 text-white relative z-10 text-left max-w-[1400px] w-full">
        <div className="space-y-6 ml-0 md:ml-4 lg:ml-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Outfit'] mb-6 py-20 leading-tight">
            <div>
              Built on Precision
              <br />
              Driven by Innovation!
            </div>
          </h1>

          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide text-white smooth-fade-in">
            <br />
            {/* Transforming Complex Manufacturing Challenges into Innovative Solutions */}
            Stop Losing Time & Money on Faulty Castings – Fix It in One Call
          </p>
          <div className="space-x-4 smooth-fade-in-buttons">
            <Link
              href="/#services"
              className="hero-cta inline-block bg-[#CD1C18] text-white px-8 py-2.5 rounded-full text-lg transition-all stagger-button-1"
            >
              Explore Services
            </Link>
            <Link
              href="/#contact"
              className="hero-cta inline-block border-2 border-white text-white px-8 py-2 rounded-full text-lg transition-all stagger-button-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;