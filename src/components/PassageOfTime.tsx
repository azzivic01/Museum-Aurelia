import React, { useState } from 'react';
import { TIMELINE_NODES, TimelineNode, ASSETS } from '../data/museumData';
import { Clock } from 'lucide-react';

interface PassageOfTimeProps {
  onSelectEra?: (era: string) => void;
}

export const PassageOfTime: React.FC<PassageOfTimeProps> = () => {
  const [activeNode, setActiveNode] = useState<TimelineNode>(TIMELINE_NODES[2]); // 1894 default

  return (
    <section id="passage-of-time" className="relative w-full py-28 sm:py-36 bg-[#0c0a09] border-b border-[#1f1b17]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#2b251f] pb-8 mb-20 gap-4">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#8c8273] font-sans block mb-2">
              SIGNATURE CHRONOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#ede8df] tracking-[0.06em] font-normal uppercase">
              The Passage of Time
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs font-mono tracking-widest text-[#a89980] block">
              1647 — TODAY
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#665e52]">
              CENTURIES COEXISTING UNDER ONE VAULT
            </span>
          </div>
        </div>

        {/* Minimal Editorial Timeline Ribbon — Elegant hairline rail */}
        <div className="relative mb-20">
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-[1px] bg-[#29221b] -translate-y-1/2 z-0" />
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {TIMELINE_NODES.map((node) => {
              const isSelected = activeNode.year === node.year;
              return (
                <button
                  key={node.year}
                  type="button"
                  onClick={() => setActiveNode(node)}
                  className={`text-center py-4 px-2 border transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#1b1713] border-[#c5a86d] -translate-y-1 shadow-lg'
                      : 'bg-[#0f0d0b] border-[#29221a] hover:border-[#42372a]'
                  }`}
                >
                  <span
                    className={`block font-serif text-xl sm:text-2xl tracking-wider transition-colors ${
                      isSelected ? 'text-[#c5a86d]' : 'text-[#857b6d]'
                    }`}
                  >
                    {node.year}
                  </span>
                  <span
                    className={`block text-[9px] font-mono tracking-widest uppercase mt-1 ${
                      isSelected ? 'text-[#ede8df]' : 'text-[#5e5549]'
                    }`}
                  >
                    {node.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Century Juxtaposition Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Active Era Narrative & Anchor */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#c5a86d] uppercase">
              <Clock className="w-3.5 h-3.5" />
              <span>EPOCH · {activeNode.year}</span>
              <span className="text-[#3b3328]">·</span>
              <span className="text-[#8c8273]">{activeNode.roomRef}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif text-[#ede8df] tracking-wide leading-tight">
              {activeNode.label}
            </h3>

            <p className="text-sm sm:text-base font-serif italic text-[#c4b9a8] leading-relaxed">
              {activeNode.description}
            </p>

            <div className="pt-4 border-t border-[#26201a] text-xs font-mono text-[#786e60] space-y-1">
              <div>PHYSICAL ANCHOR: {activeNode.roomRef}</div>
              <div>CONDITION: Preserved in undisturbed state</div>
            </div>
          </div>

          {/* Diptych of Coexisting Centuries: Old Master & Present Light */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group relative overflow-hidden bg-[#14120f] aspect-[3/4] border border-[#262019]">
              <img
                src={ASSETS.masterpiece}
                alt="17th Century Artwork"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-mono tracking-widest text-[#c5a86d] uppercase block">
                  1642 · OIL ON LINEN
                </span>
                <span className="text-xs font-serif text-[#ede8df]">
                  The Memory of the Hand
                </span>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-[#14120f] aspect-[3/4] border border-[#262019]">
              <img
                src={ASSETS.hero}
                alt="Contemporary Palace Light"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-mono tracking-widest text-[#c5a86d] uppercase block">
                  PRESENT DAY · DAYLIGHT
                </span>
                <span className="text-xs font-serif text-[#ede8df]">
                  The Space Remains
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
