import React from 'react';
import { ASSETS } from '../data/museumData';
import { Eye } from 'lucide-react';

interface TheMasterpieceProps {
  onInspect?: () => void;
}

export const TheMasterpiece: React.FC<TheMasterpieceProps> = ({ onInspect }) => {
  return (
    <section id="the-masterpiece" className="relative w-full py-32 sm:py-44 bg-[#080706] border-b border-[#1c1815] overflow-hidden">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8">
        {/* Visual Silence Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-[#c5a86d] block">
            ROOM VII · SALON D’HONNEUR
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#ede8df] tracking-[0.08em] font-normal uppercase">
            The Masterpiece
          </h2>
          <div className="w-12 h-[1px] bg-[#3d362d] mx-auto mt-4" />
        </div>

        {/* Near Fullscreen Artwork Presentation with Imposing Negative Space */}
        <div className="relative group mx-auto max-w-[1380px] bg-[#0f0e0c] shadow-[0_25px_70px_rgba(0,0,0,0.85)] border border-[#2b251f]/50">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src={ASSETS.masterpiece}
              alt="Monumental 17th century baroque chiaroscuro oil painting in antique carved tarnished gold frame in Room VII"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Minimal Subtle Caption in Visual Silence */}
          <div className="p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#1c1815] bg-[#0c0b0a] gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#7d7465] uppercase block">
                NO. VII · CATALOGUE 1894
              </span>
              <h3 className="text-base sm:text-xl font-serif text-[#ded7c8] tracking-wide">
                Portrait of an Unknown Patrician in Shadow
              </h3>
            </div>

            <div className="flex items-center gap-6 text-[11px] font-mono tracking-wider text-[#8a8070] uppercase">
              <span>CIRCA 1642</span>
              <span className="text-[#3b342a]">·</span>
              <span>OIL ON LINEN</span>
              <span className="text-[#3b342a]">·</span>
              <span>242 × 186 CM</span>

              {onInspect && (
                <button
                  type="button"
                  onClick={onInspect}
                  className="hidden md:flex items-center gap-1.5 px-3 py-1 text-[10px] tracking-[0.16em] uppercase text-[#c5a86d] border border-[#3b342a] hover:border-[#c5a86d] transition-colors"
                >
                  <Eye className="w-3 h-3" />
                  <span>Inspect Detail</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Atmospheric Bench Contemplation Note */}
        <div className="mt-12 text-center text-xs font-serif italic text-[#635c51]">
          No audio guides. No digital kiosks. One walnut bench stands four paces back.
        </div>
      </div>
    </section>
  );
};
