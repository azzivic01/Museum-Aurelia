import React, { useState, useRef, MouseEvent } from 'react';
import { ASSETS, MACRO_DETAILS, MacroDetail } from '../data/museumData';
import { Search } from 'lucide-react';

export const TheObject: React.FC = () => {
  const [selectedMacro, setSelectedMacro] = useState<MacroDetail>(MACRO_DETAILS[0]);
  const [isHovering, setIsHovering] = useState(false);
  const [loupePos, setLoupePos] = useState({ x: 0, y: 0, percentX: 50, percentY: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const percentY = Math.max(0, Math.min(100, (y / rect.height) * 100));

    setLoupePos({ x, y, percentX, percentY });
  };

  return (
    <section id="the-object" className="relative w-full py-28 sm:py-36 bg-[#0b0a09] border-b border-[#211d19]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Curatorial Header */}
        <div className="border-b border-[#26211c] pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#8c8273] font-sans block mb-2">
              THE OBJECT · MACRO MATERIALITY
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#ede8df] tracking-[0.05em] font-normal uppercase">
              Matter Survives.
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs font-mono tracking-widest text-[#a89980] block">
              10× CONSERVATION MAGNIFICATION
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#665e52]">
              CRAQUELURE · GOLD LEAF · VERDIGRIS
            </span>
          </div>
        </div>

        {/* Macro Tactile Stage with Interactive Optical Loupe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16">
          {/* Main Inspection Viewport */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onMouseMove={handleMouseMove}
              className="relative group overflow-hidden bg-[#171412] aspect-[4/3] sm:aspect-[16/10] cursor-crosshair border border-[#2e2821]"
            >
              <img
                src={selectedMacro.image}
                alt={selectedMacro.name}
                className="w-full h-full object-cover object-center select-none"
                referrerPolicy="no-referrer"
              />

              {/* Optical Magnifier Loupe Floating Lens */}
              {isHovering && (
                <div
                  className="pointer-events-none absolute hidden sm:block w-44 h-44 rounded-full border-2 border-[#c5a86d] shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden z-20 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${loupePos.x}px`,
                    top: `${loupePos.y}px`,
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${selectedMacro.image})`,
                      backgroundSize: '320%',
                      backgroundPosition: `${loupePos.percentX}% ${loupePos.percentY}%`,
                    }}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#c5a86d]/40 rounded-full" />
                </div>
              )}

              {/* Overlay Guidance Pill */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 text-[10px] tracking-wider uppercase font-mono bg-[#0b0a09]/80 border border-[#383127] text-[#c5a86d] pointer-events-none">
                <Search className="w-3 h-3" />
                <span>Hover to Magnify</span>
              </div>

              {/* Micro Status Baseline */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#948b7d] uppercase pointer-events-none bg-[#0b0a09]/75 backdrop-blur-sm px-3 py-1.5 border border-[#2a241c]">
                <span>{selectedMacro.scale}</span>
                <span>{selectedMacro.material}</span>
              </div>
            </div>
          </div>

          {/* Material Selector & Observation Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#736a5c] uppercase block mb-1">
                MATERIAL OBSERVATION
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#ede8df] tracking-wide mb-3">
                {selectedMacro.name}
              </h3>
              <p className="text-xs sm:text-sm font-serif italic text-[#a39a8c] leading-relaxed">
                {selectedMacro.observation}
              </p>
            </div>

            {/* Material Selector Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-[#26211c]">
              <span className="text-[10px] font-mono tracking-widest text-[#736a5c] uppercase block">
                SELECT SPECIMEN:
              </span>
              {MACRO_DETAILS.map((macro) => {
                const isActive = selectedMacro.id === macro.id;
                return (
                  <button
                    key={macro.id}
                    type="button"
                    onClick={() => setSelectedMacro(macro)}
                    className={`w-full text-left p-3 border transition-all text-xs font-mono uppercase tracking-wider ${
                      isActive
                        ? 'bg-[#1b1714] border-[#c5a86d] text-[#ede8df]'
                        : 'bg-[#12100e] border-[#29231c] text-[#786f62] hover:text-[#b8ad9c] hover:border-[#473c30]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{macro.name.split('&')[0]}</span>
                      <span className="text-[9px] text-[#c5a86d]">{macro.scale}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
