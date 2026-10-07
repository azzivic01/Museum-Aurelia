import React, { useState } from 'react';
import { ASSETS, ARCHITECTURAL_SEQUENCE, ArchitecturalStep } from '../data/museumData';
import { Maximize2 } from 'lucide-react';

interface TheHouseProps {
  onInspectImage?: (imgUrl: string, caption: string) => void;
}

export const TheHouse: React.FC<TheHouseProps> = ({ onInspectImage }) => {
  const [activeStep, setActiveStep] = useState<ArchitecturalStep>(ARCHITECTURAL_SEQUENCE[0]);

  return (
    <section id="the-house" className="relative w-full py-28 sm:py-36 bg-[#0e0c0b] border-b border-[#211d19]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Section Minimal Title per Master Prompt */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#2b251f] pb-8 mb-16 gap-4">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#8c8273] font-sans block mb-2">
              ARCHITECTURAL SEQUENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#ede8df] tracking-[0.06em] font-normal uppercase">
              The House
            </h2>
          </div>
          <div className="text-right">
            <span className="text-xs tracking-[0.25em] uppercase text-[#b3aaa0] font-serif block">
              MUSEUM AURELIA
            </span>
            <span className="text-[11px] font-mono tracking-widest text-[#665e52]">
              PALAIS EST. 1647 · RESTORED 1894
            </span>
          </div>
        </div>

        {/* 1. Large Architectural Sequence Feature: FAÇADE & BRONZE PORTAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24">
          <div className="lg:col-span-8 group relative overflow-hidden bg-[#171412] aspect-[16/10]">
            <img
              src={activeStep.image}
              alt={activeStep.title}
              className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0b]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* In-image quiet caption */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[10px] tracking-[0.25em] font-mono text-[#c5a86d] uppercase block mb-1">
                  STAGE {activeStep.stageNumber} · {activeStep.space}
                </span>
                <h3 className="text-lg sm:text-2xl font-serif text-[#ede8df] tracking-wide">
                  {activeStep.title}
                </h3>
              </div>
              {onInspectImage && (
                <button
                  type="button"
                  onClick={() => onInspectImage(activeStep.image, `${activeStep.title} — ${activeStep.space}`)}
                  className="p-2 text-[#ede8df]/80 hover:text-white bg-[#0e0c0b]/60 backdrop-blur-sm border border-[#3d362e] transition-colors"
                  aria-label="Enlarge architectural photograph"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Sequential Step Selector (Architectural photo journey) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] tracking-[0.28em] uppercase text-[#7a7163] font-sans">
                PROGRESSION THROUGH STONE
              </span>
              <p className="text-xs sm:text-sm text-[#b8b0a2] font-serif italic leading-relaxed">
                The visitor crosses from the city into permanence. Limestone absorbs the sound of the exterior world.
              </p>
            </div>

            <div className="space-y-3">
              {ARCHITECTURAL_SEQUENCE.map((step) => {
                const isSelected = activeStep.id === step.id;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStep(step)}
                    className={`w-full text-left p-3.5 transition-all duration-300 border ${
                      isSelected
                        ? 'bg-[#1b1714] border-[#c5a86d]/60 pl-5'
                        : 'bg-[#12100e] border-[#26211c] hover:border-[#473e34]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest text-[#8c8272]">
                        {step.stageNumber}. {step.space}
                      </span>
                      <span className="text-[9px] font-mono tracking-widest text-[#a89980] uppercase">
                        {step.material.split('·')[0]}
                      </span>
                    </div>
                    <div className={`text-sm sm:text-base font-serif mt-1 ${isSelected ? 'text-[#ede8df]' : 'text-[#8f8576]'}`}>
                      {step.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. Asymmetric Photo Diptych: The Grand Escalier + Monumental Portal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-8">
          <div className="md:col-span-5 space-y-4">
            <div className="relative group overflow-hidden bg-[#171412] aspect-[3/4]">
              <img
                src={ASSETS.staircase}
                alt="Grand marble staircase curving upward beneath soaring palatial vaults"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0b]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-left">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a86d] uppercase block mb-0.5">
                  THE GRAND ESCALIER
                </span>
                <span className="text-base font-serif text-[#ede8df]">
                  Curving White Carrara Marble
                </span>
              </div>
            </div>
            <div className="text-[11px] font-mono tracking-widest text-[#696155] uppercase flex justify-between">
              <span>SOUTH ROTUNDA</span>
              <span>RESTORED 1894</span>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <div className="relative group overflow-hidden bg-[#171412] aspect-[16/11]">
              <img
                src={ASSETS.facade}
                alt="Neoclassical stone facade and heavy patinated bronze gates"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0b]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-left">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a86d] uppercase block mb-0.5">
                  THE GATES & PILLARS
                </span>
                <span className="text-base font-serif text-[#ede8df]">
                  Weathered Richemont Limestone & Lost-Wax Bronze
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[11px] font-mono tracking-widest text-[#696155] uppercase">
              <span>COUR D&apos;HONNEUR ENTRANCE</span>
              <span>CHISELED 1742</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
