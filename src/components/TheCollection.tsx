import React from 'react';
import { FEATURED_WORKS, CollectionItem } from '../data/museumData';
import { Plus } from 'lucide-react';

interface TheCollectionProps {
  onSelectWork: (work: CollectionItem) => void;
}

export const TheCollection: React.FC<TheCollectionProps> = ({ onSelectWork }) => {
  return (
    <section id="the-collection" className="relative w-full py-28 sm:py-36 bg-[#0b0a09] border-b border-[#211d19]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#2b251f] pb-8 mb-20 gap-4">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#8c8273] font-sans block mb-2">
              THE PERMANENT REPOSITORY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#ede8df] tracking-[0.06em] font-normal uppercase">
              The Collection
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs font-mono tracking-widest text-[#a89980] block">
              1,420 REGISTERED OBJECTS
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#665e52]">
              PAINTING · STATUARY · BRONZE · CODICES
            </span>
          </div>
        </div>

        {/* Piece 1: The Patinated Bronze — Large Format Portrait Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-36">
          <div className="lg:col-span-7 group relative overflow-hidden bg-[#171412] aspect-[4/5]">
            <img
              src={FEATURED_WORKS[1].image}
              alt={FEATURED_WORKS[1].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09]/80 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

            <button
              type="button"
              onClick={() => onSelectWork(FEATURED_WORKS[1])}
              className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase bg-[#0b0a09]/75 backdrop-blur-sm border border-[#3b342a] text-[#ede8df] hover:border-[#c5a86d] transition-colors"
            >
              <span>Examine Accession</span>
              <Plus className="w-3.5 h-3.5 text-[#c5a86d]" />
            </button>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1.5 text-xs font-mono tracking-widest text-[#8f8576] uppercase">
              <span className="text-[#c5a86d] font-semibold">{FEATURED_WORKS[1].room}</span>
              <span className="mx-2 text-[#473f34]">·</span>
              <span>{FEATURED_WORKS[1].century}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif text-[#ede8df] tracking-wide leading-tight">
              {FEATURED_WORKS[1].title}
            </h3>

            <div className="pt-2 pb-4 space-y-2 text-xs font-mono tracking-wider text-[#a39b8e] border-y border-[#26211c]">
              <div className="flex justify-between">
                <span className="text-[#635b4f]">CREATOR:</span>
                <span>{FEATURED_WORKS[1].creator}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#635b4f]">MEDIUM:</span>
                <span>{FEATURED_WORKS[1].medium}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#635b4f]">DIMENSIONS:</span>
                <span>{FEATURED_WORKS[1].dimensions}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-serif italic text-[#8c8273] leading-relaxed">
              &ldquo;Bronze does not decay; it merely darkens, receiving the quiet dust of centuries like anointing oil.&rdquo;
            </p>
          </div>
        </div>

        {/* Piece 2: The Grand Architecture as Artwork */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="space-y-1.5 text-xs font-mono tracking-widest text-[#8f8576] uppercase">
              <span className="text-[#c5a86d] font-semibold">{FEATURED_WORKS[2].room}</span>
              <span className="mx-2 text-[#473f34]">·</span>
              <span>1780 — 1894</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif text-[#ede8df] tracking-wide leading-tight">
              {FEATURED_WORKS[2].title}
            </h3>

            <div className="pt-2 pb-4 space-y-2 text-xs font-mono tracking-wider text-[#a39b8e] border-y border-[#26211c]">
              <div className="flex justify-between">
                <span className="text-[#635b4f]">MATERIAL:</span>
                <span>{FEATURED_WORKS[2].medium}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#635b4f]">SCALE:</span>
                <span>{FEATURED_WORKS[2].dimensions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#635b4f]">STATUS:</span>
                <span>Permanent Installation</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-serif italic text-[#8c8273] leading-relaxed">
              Natural side light floods the polished floor. The volume of the room dwarfs the viewer into contemplation.
            </p>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 group relative overflow-hidden bg-[#171412] aspect-[16/10]">
            <img
              src={FEATURED_WORKS[2].image}
              alt={FEATURED_WORKS[2].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09]/80 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

            <button
              type="button"
              onClick={() => onSelectWork(FEATURED_WORKS[2])}
              className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase bg-[#0b0a09]/75 backdrop-blur-sm border border-[#3b342a] text-[#ede8df] hover:border-[#c5a86d] transition-colors"
            >
              <span>Examine Accession</span>
              <Plus className="w-3.5 h-3.5 text-[#c5a86d]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
