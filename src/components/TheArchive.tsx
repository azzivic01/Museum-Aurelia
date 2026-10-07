import React, { useState } from 'react';
import { ASSETS, ARCHIVE_ENTRIES, ArchiveEntry } from '../data/museumData';
import { FileText, ChevronRight } from 'lucide-react';

export const TheArchive: React.FC = () => {
  const [selectedEntry, setSelectedEntry] = useState<ArchiveEntry>(ARCHIVE_ENTRIES[0]);

  return (
    <section id="the-archive" className="relative w-full py-28 sm:py-36 bg-[#090807] border-b border-[#1c1815]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#211c17] pb-8 mb-20 gap-4">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#8c8273] font-sans block mb-2">
              DOCUMENTARY MEMORY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#ede8df] tracking-[0.06em] font-normal uppercase">
              The Archive
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs font-mono tracking-widest text-[#a89980] block">
              VAULT COLLECTION · EST. 1894
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#665e52]">
              LEDGERS · SEALS · CORRESPONDENCE
            </span>
          </div>
        </div>

        {/* Archival Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Main Archival Still Life Image */}
          <div className="lg:col-span-7 group relative overflow-hidden bg-[#14110e] aspect-[4/3] border border-[#2b251e]">
            <img
              src={ASSETS.archive}
              alt="1894 leather-bound accession ledger and handwritten parchment documents with antique bronze seal in Museum Aurelia archive"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/80 via-transparent to-transparent opacity-60" />

            {/* Archival Tags Stamp */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-[#090807]/90 text-[#c5a86d] border border-[#3d3428]">
                {selectedEntry.code}
              </span>
              <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-[#090807]/90 text-[#b5ab9e] border border-[#2e271f]">
                ANNO {selectedEntry.year}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#736a5c] uppercase block mb-1">
                PRIVATE ARCHIVE · FOLIO COLLECTION
              </span>
              <h3 className="text-base sm:text-xl font-serif text-[#ede8df]">
                {selectedEntry.title}
              </h3>
            </div>
          </div>

          {/* Archival Document Notes & Selector */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#736a5c]">
                TRANSCRIPTION RECORD
              </span>
              <h4 className="text-xl sm:text-2xl font-serif text-[#ede8df]">
                {selectedEntry.title}
              </h4>
            </div>

            {/* Handwritten Note Callout */}
            <div className="p-5 bg-[#120f0d] border-l-2 border-[#c5a86d] border-y border-r border-[#26201a] space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#8a7f70] uppercase">
                <FileText className="w-3.5 h-3.5 text-[#c5a86d]" />
                <span>EXCERPT RECORD:</span>
              </div>
              <p className="text-xs sm:text-sm font-serif italic text-[#ded8cb] leading-relaxed">
                {selectedEntry.note}
              </p>
              <div className="text-[10px] font-mono tracking-widest text-[#696053] uppercase pt-2 border-t border-[#211b15]">
                SEAL: {selectedEntry.seal}
              </div>
            </div>

            {/* Folio Navigator */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-mono tracking-widest text-[#736a5c] uppercase block">
                EXAMINE ACCESSION DOSSIERS:
              </span>
              {ARCHIVE_ENTRIES.map((entry) => {
                const isSelected = selectedEntry.code === entry.code;
                return (
                  <button
                    key={entry.code}
                    type="button"
                    onClick={() => setSelectedEntry(entry)}
                    className={`w-full text-left p-3 border transition-all text-xs font-mono uppercase tracking-wider flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#1b1713] border-[#c5a86d] text-[#ede8df]'
                        : 'bg-[#120f0d] border-[#29221a] text-[#807669] hover:text-[#c4b9a8] hover:border-[#42382c]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#c5a86d]">{entry.code}</span>
                      <span className="text-[11px] font-sans lowercase capitalize text-[#ded7c8]">
                        {entry.title.slice(0, 32)}...
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-[#6b6255]" />
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
