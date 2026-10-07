import React from 'react';
import { Compass, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenVisitModal: () => void;
  onOpenDirectoryModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVisitModal, onOpenDirectoryModal }) => {
  return (
    <footer className="relative w-full bg-[#070605] border-t border-[#1a1713] py-20 text-[#a39a8c]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#1c1814]">
          {/* Col 1: Wordmark & Heritage */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif uppercase tracking-[0.2em] text-[#ede8df]">
              MUSEUM AURELIA
            </h3>
            <p className="text-xs sm:text-sm font-serif italic text-[#7d7465] max-w-sm leading-relaxed">
              A private repository of European fine art, sculpture, architectural memory, and material culture housed in an uninterrupted 17th-century palace.
            </p>
            <div className="text-[11px] font-mono tracking-widest text-[#5e5548] uppercase">
              FOUNDED 1894 BY TESTAMENTARY BEQUEST
            </div>
          </div>

          {/* Col 2: Visiting Protocol */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#c5a86d] uppercase block">
              VISITATION PROTOCOL
            </span>
            <div className="text-xs sm:text-sm font-serif space-y-1 text-[#b8ae9f]">
              <div>Palais Aurelia</div>
              <div>14 Quai des Grands-Augustins</div>
              <div>75006 Paris, France</div>
            </div>
            <p className="text-[11px] font-mono text-[#6e6557] pt-2">
              Wednesday – Sunday · 11:00 – 17:30
              <br />
              Admission exclusively by advance reservation.
            </p>
          </div>

          {/* Col 3: Direct Actions */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-start">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#c5a86d] uppercase block">
              CURATORIAL ACCESS
            </span>
            <button
              type="button"
              onClick={onOpenVisitModal}
              className="w-full flex items-center justify-between p-3 border border-[#2e261e] hover:border-[#c5a86d] text-xs font-mono tracking-wider uppercase text-[#ede8df] transition-colors"
            >
              <span>Request Private Viewing</span>
              <Calendar className="w-3.5 h-3.5 text-[#c5a86d]" />
            </button>
            <button
              type="button"
              onClick={onOpenDirectoryModal}
              className="w-full flex items-center justify-between p-3 border border-[#2e261e] hover:border-[#c5a86d] text-xs font-mono tracking-wider uppercase text-[#a89d8f] transition-colors"
            >
              <span>Palace Floor Index</span>
              <Compass className="w-3.5 h-3.5 text-[#c5a86d]" />
            </button>
          </div>
        </div>

        {/* Bottom Baseline Legal & Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono tracking-widest text-[#544b3f] uppercase gap-4">
          <div>
            © 1894 – 2026 MUSEUM AURELIA FOUNDATION. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <a href="#the-house" className="hover:text-[#ded8cb] transition-colors">The House</a>
            <span className="text-[#2b251d]">·</span>
            <a href="#the-collection" className="hover:text-[#ded8cb] transition-colors">Collection</a>
            <span className="text-[#2b251d]">·</span>
            <a href="#the-archive" className="hover:text-[#ded8cb] transition-colors">Archive</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
