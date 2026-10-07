import React from 'react';
import { ASSETS } from '../data/museumData';

export const TheGalleryWalk: React.FC = () => {
  return (
    <section id="the-gallery" className="relative w-full py-28 sm:py-36 bg-[#0e0c0b] border-b border-[#211d19]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#2b251f] pb-8 mb-20 gap-4">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#8c8273] font-sans block mb-2">
              THE PROMENADE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#ede8df] tracking-[0.06em] font-normal uppercase">
              The Gallery Walk
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs font-mono tracking-widest text-[#a89980] block">
              NATURAL LIGHT & SHADOW
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#665e52]">
              SILENCE AS ARCHITECTURE
            </span>
          </div>
        </div>

        {/* 1. Monumental Wide-Scale Promenade Gallery */}
        <div className="relative group overflow-hidden bg-[#171412] aspect-[21/9] mb-16 border border-[#2b251e]">
          <img
            src={ASSETS.hero}
            alt="Solitary visitor walking through soaring palatial galleries of Museum Aurelia"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09]/80 via-transparent to-transparent opacity-60" />

          <div className="absolute bottom-6 left-6 sm:left-10 flex items-end justify-between right-6 sm:right-10">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a86d] uppercase block mb-1">
                GALLERIA DI MEZZOGIORNO
              </span>
              <p className="text-sm sm:text-lg font-serif text-[#ede8df]">
                The visitor diminishes; the volume of stone expands.
              </p>
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#8a8172] uppercase hidden sm:block">
              CEILING 14M · 42 PACES LENGTH
            </div>
          </div>
        </div>

        {/* 2. Rhythm of Walking: Staircase Ascend & Solitary Reflection */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 relative group overflow-hidden bg-[#171412] aspect-[3/4] border border-[#2b251e]">
            <img
              src={ASSETS.staircase}
              alt="Marble staircase ascending beneath classical daylight"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0b]/75 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a86d] uppercase block mb-0.5">
                ASCENT TO UPPER SALONS
              </span>
              <span className="text-base font-serif text-[#ede8df]">
                Footsteps swallowed by honed stone
              </span>
            </div>
          </div>

          <div className="md:col-span-7 space-y-8 md:pl-8">
            <div className="space-y-3">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#736a5c]">
                SOLITARY PRESENCE
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-[#ede8df] leading-tight font-normal">
                No crowds. No ropes. Time expands to accommodate looking.
              </h3>
            </div>

            <p className="text-xs sm:text-sm font-serif italic text-[#9e9485] leading-relaxed max-w-xl">
              &ldquo;One does not tour Museum Aurelia. One walks until the pace of the external street slows to the cadence of the masonry.&rdquo;
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#26211c] text-xs font-mono text-[#a3998b]">
              <div>
                <span className="block text-[10px] text-[#696154] tracking-widest uppercase">CAPACITY</span>
                <span className="mt-1 block text-sm font-serif text-[#ded8cb]">12 Guests / Hr</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#696154] tracking-widest uppercase">VOICING</span>
                <span className="mt-1 block text-sm font-serif text-[#ded8cb]">Whisper Only</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#696154] tracking-widest uppercase">ATMOSPHERE</span>
                <span className="mt-1 block text-sm font-serif text-[#ded8cb]">Natural Daylight</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
