import React from 'react';
import { X } from 'lucide-react';
import { CollectionItem } from '../data/museumData';

interface ArtworkInspectModalProps {
  work: CollectionItem | null;
  onClose: () => void;
}

export const ArtworkInspectModal: React.FC<ArtworkInspectModalProps> = ({ work, onClose }) => {
  if (!work) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-[#0f0d0b] border border-[#382f24] p-6 sm:p-10 shadow-2xl text-[#ede8df] max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#8c8273] hover:text-[#ede8df] transition-colors"
          aria-label="Close artwork view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Artwork Image Frame */}
          <div className="md:col-span-7 bg-[#14120f] border border-[#262019] overflow-hidden">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-contain max-h-[500px]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Accession Data Sheet */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a86d] uppercase block">
                {work.room} · ACCESSION REGISTER
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#ede8df] leading-tight">
                {work.title}
              </h3>
            </div>

            <div className="pt-3 pb-3 border-y border-[#241e17] space-y-2 text-xs font-mono text-[#a39889]">
              <div className="flex justify-between">
                <span className="text-[#61574a]">CREATOR:</span>
                <span className="text-right">{work.creator}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#61574a]">DATE:</span>
                <span>{work.century}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#61574a]">MEDIUM:</span>
                <span className="text-right">{work.medium}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#61574a]">DIMENSIONS:</span>
                <span>{work.dimensions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#61574a]">ACQUISITION:</span>
                <span className="text-right">{work.acquisition}</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#736757] uppercase block mb-1">
                PROVENANCE RECORD
              </span>
              <p className="text-xs font-serif italic text-[#c2b6a4] leading-relaxed">
                {work.provenance}
              </p>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-mono text-[#574d3f] uppercase block">
                Preserved in atmospheric stable conditions: 19°C · 50% RH
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
