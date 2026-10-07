import React from 'react';
import { ASSETS } from '../data/museumData';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-end justify-between overflow-hidden bg-[#0b0a09]">
      {/* Background Monumental Palace Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Museum Aurelia grand palatial gallery with soaring frescoed ceiling, marble floor, and solitary distant visitor"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] transition-transform duration-1000"
          style={{ animationDuration: '16s' }}
          referrerPolicy="no-referrer"
        />
        {/* Subtle curatorial lighting gradient scrim for legible elegance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09] via-[#0b0a09]/30 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0a09]/60 via-transparent to-[#0b0a09]/50" />
      </div>

      {/* Hero Typography — Strictly Minimal per Master Prompt */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 pb-16 sm:pb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          {/* Subtle Establishment Kicker */}
          <div className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#c2baad] mb-3 sm:mb-4 font-sans font-light flex items-center gap-3">
            <span>PRIVATE MUSEUM</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86d]/60 inline-block" />
            <span>EST. 1894</span>
          </div>

          {/* Main Title & Concept Subtitle */}
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-sm sm:text-base tracking-[0.35em] uppercase text-[#ded7c8] font-sans font-medium">
              MUSEUM AURELIA
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif text-[#ede8df] tracking-[0.04em] leading-[0.95] font-normal uppercase max-w-4xl text-balance">
              The Weight of Memory
            </h1>
          </div>
        </div>

        {/* Spatial Coordinates & Downward Silent Scroll Cue */}
        <div className="flex md:flex-col items-center md:items-end justify-between gap-4 text-right">
          <div className="hidden sm:block text-[11px] font-mono tracking-widest text-[#9c9384] uppercase">
            <span>48°51&apos;18&quot;N · 02°20&apos;31&quot;E</span>
            <div className="text-[#6d6558] text-[10px] mt-0.5">ROOM I–XXIV · PALACE ARCHIVE</div>
          </div>

          <a
            href="#the-house"
            className="group inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#ded7c8] hover:text-[#c5a86d] transition-colors py-2"
            aria-label="Descend into the Palace"
          >
            <span>Enter the Palace</span>
            <ChevronDown className="w-4 h-4 text-[#c5a86d] group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Delicate hairline baseline border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#453e35]/60 to-transparent z-10" />
    </section>
  );
};
