import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Calendar, Compass, Menu, X } from 'lucide-react';
import { palaceAmbience } from '../utils/audioAmbience';

interface HeaderProps {
  onOpenVisitModal: () => void;
  onOpenDirectoryModal: () => void;
  currentYearEra?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenVisitModal,
  onOpenDirectoryModal,
  currentYearEra = '1894',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = palaceAmbience.toggle();
    setIsAudioActive(active);
  };

  const navLinks = [
    { label: 'The House', href: '#the-house' },
    { label: 'Collection', href: '#the-collection' },
    { label: 'The Masterpiece', href: '#the-masterpiece' },
    { label: 'Matter', href: '#the-object' },
    { label: 'The Archive', href: '#the-archive' },
    { label: 'After Hours', href: '#after-hours' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-[#0b0a09]/92 backdrop-blur-md border-b border-[#26221e]/80 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#0b0a09]/85 via-[#0b0a09]/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single text element in display serif) */}
          <a
            href="#"
            className="text-lg sm:text-xl tracking-[0.22em] uppercase font-serif text-[#ede8df] hover:text-[#c5a86d] transition-colors whitespace-nowrap"
          >
            MUSEUM AURELIA
          </a>

          {/* Zone 2: 4-6 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.16em] uppercase text-[#a9a296]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#ede8df] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c5a86d] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Subtle palace ambient silence acoustic toggle */}
            <button
              onClick={toggleSound}
              type="button"
              className="group flex items-center gap-2 px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase text-[#c2baad] hover:text-[#ede8df] border border-[#2e2924] hover:border-[#524940] rounded-none transition-all duration-300"
              title="Palace Ambient Acoustic Resonance"
            >
              {isAudioActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#c5a86d] animate-pulse" />
                  <span className="hidden sm:inline text-[#c5a86d]">Palace Silence: On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#736c62] group-hover:text-[#ede8df]" />
                  <span className="hidden sm:inline">Palace Silence: Off</span>
                </>
              )}
            </button>

            {/* Palace Room Index / Directory */}
            <button
              onClick={onOpenDirectoryModal}
              type="button"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase text-[#c2baad] hover:text-[#ede8df] border border-[#2e2924] hover:border-[#524940] transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-[#c5a86d]" />
              <span>Rooms</span>
            </button>

            {/* Primary Action: Plan Visit */}
            <button
              onClick={onOpenVisitModal}
              type="button"
              className="flex items-center gap-2 px-4 py-1.5 text-[11px] tracking-[0.18em] uppercase font-medium text-[#0b0a09] bg-[#ede8df] hover:bg-[#c5a86d] transition-all duration-300 shadow-sm whitespace-nowrap"
            >
              <Calendar className="w-3 h-3 text-[#0b0a09]" />
              <span>Private Visit</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 text-[#ede8df] hover:text-[#c5a86d] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0b0a09]/98 flex flex-col justify-center px-8 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-6 text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#786f63]">
              Museum Aurelia · Est. 1894
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-[#ede8df] hover:text-[#c5a86d] transition-colors tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 border-t border-[#26221e] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDirectoryModal();
                }}
                className="py-3 text-xs uppercase tracking-[0.2em] text-[#a9a296] border border-[#2e2924]"
              >
                Palace Directory & Rooms
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVisitModal();
                }}
                className="py-3 text-xs uppercase tracking-[0.2em] font-medium text-[#0b0a09] bg-[#ede8df]"
              >
                Request Private Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
