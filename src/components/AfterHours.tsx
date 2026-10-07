import React from 'react';
import { ASSETS } from '../data/museumData';
import { Moon } from 'lucide-react';

export const AfterHours: React.FC = () => {
  return (
    <section id="after-hours" className="relative w-full py-36 sm:py-48 bg-[#040403] text-[#ede8df] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Nocturnal Curatorial Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.35em] uppercase text-[#8a806f]">
            <Moon className="w-3.5 h-3.5 text-[#c5a86d]" />
            <span>AFTER HOURS · 02:40 AM</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#ede8df] tracking-[0.08em] font-normal uppercase">
            Still Here.
          </h2>

          <div className="w-16 h-[1px] bg-[#2e2720] mx-auto mt-4" />
        </div>

        {/* Monumental Nocturnal Solitary Sculpture Frame */}
        <div className="relative group max-w-[1280px] mx-auto overflow-hidden bg-[#0c0a09] border border-[#1f1b16] shadow-[0_30px_90px_rgba(0,0,0,0.95)]">
          <div className="aspect-[16/9] w-full">
            <img
              src={ASSETS.afterHours}
              alt="Museum Aurelia after hours at midnight with solitary spotlight on classical marble sculpture in dark silent gallery"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Quiet nocturnal overlay caption */}
          <div className="p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#171410] bg-[#070605] gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#73695c] block mb-1">
                ROTUNDA DI NOTTE
              </span>
              <p className="text-base sm:text-lg font-serif text-[#c4b9a8] italic">
                When the last guard turns the heavy key, the stone remembers what it held all day.
              </p>
            </div>

            <div className="text-[11px] font-mono tracking-widest text-[#5e5548] uppercase whitespace-nowrap">
              LIGHTING LEVEL: 1.5% · TEMPERATURE: 18.2°C
            </div>
          </div>
        </div>

        {/* Closing Thought */}
        <div className="mt-16 text-center max-w-xl mx-auto space-y-4">
          <p className="text-xs sm:text-sm font-serif italic text-[#70675a] leading-relaxed">
            The collection does not perform for an audience. It simply exists, immune to the centuries that come and pass.
          </p>
        </div>
      </div>
    </section>
  );
};
