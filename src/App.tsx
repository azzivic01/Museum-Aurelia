/**
 * MUSEUM AURELIA — THE WEIGHT OF MEMORY
 * Grand European Palace · Historic Museum · Private Collection
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TheHouse } from './components/TheHouse';
import { TheCollection } from './components/TheCollection';
import { TheMasterpiece } from './components/TheMasterpiece';
import { TheObject } from './components/TheObject';
import { TheGalleryWalk } from './components/TheGalleryWalk';
import { TheArchive } from './components/TheArchive';
import { PassageOfTime } from './components/PassageOfTime';
import { AfterHours } from './components/AfterHours';
import { Footer } from './components/Footer';
import { PrivateVisitModal } from './components/PrivateVisitModal';
import { FloorDirectoryModal } from './components/FloorDirectoryModal';
import { ArtworkInspectModal } from './components/ArtworkInspectModal';
import { CollectionItem, FEATURED_WORKS } from './data/museumData';
import { X } from 'lucide-react';

export default function App() {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [isDirectoryModalOpen, setIsDirectoryModalOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<CollectionItem | null>(null);
  const [inspectedImage, setInspectedImage] = useState<{ url: string; caption: string } | null>(null);

  const handleSelectSection = (anchor: string) => {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInspectMasterpiece = () => {
    // Open detailed accession of Room VII work
    setSelectedArtwork(FEATURED_WORKS[0]);
  };

  return (
    <div className="min-h-screen bg-[#0b0a09] text-[#ede8df] selection:bg-[#c5a86d]/30 selection:text-white bg-grain relative">
      {/* Editorial Top Navigation */}
      <Header
        onOpenVisitModal={() => setIsVisitModalOpen(true)}
        onOpenDirectoryModal={() => setIsDirectoryModalOpen(true)}
      />

      {/* 07 — HERO: THE PALACE */}
      <Hero />

      {/* 08 — THE HOUSE */}
      <TheHouse
        onInspectImage={(url, caption) => setInspectedImage({ url, caption })}
      />

      {/* 09 — THE COLLECTION */}
      <TheCollection
        onSelectWork={(work) => setSelectedArtwork(work)}
      />

      {/* 10 — THE MASTERPIECE */}
      <TheMasterpiece
        onInspect={handleInspectMasterpiece}
      />

      {/* 11 — THE OBJECT (MATTER SURVIVES) */}
      <TheObject />

      {/* 12 & 13 — THE GALLERY & THE VISITOR */}
      <TheGalleryWalk />

      {/* 14 — THE ARCHIVE */}
      <TheArchive />

      {/* 15 & 16 — THE PASSAGE OF TIME & SIGNATURE INTERACTION */}
      <PassageOfTime />

      {/* 17 — AFTER HOURS */}
      <AfterHours />

      {/* Institutional Colophon Footer */}
      <Footer
        onOpenVisitModal={() => setIsVisitModalOpen(true)}
        onOpenDirectoryModal={() => setIsDirectoryModalOpen(true)}
      />

      {/* Modals & Curatorial Tools */}
      <PrivateVisitModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
      />

      <FloorDirectoryModal
        isOpen={isDirectoryModalOpen}
        onClose={() => setIsDirectoryModalOpen(false)}
        onSelectSection={handleSelectSection}
      />

      <ArtworkInspectModal
        work={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />

      {/* General Image Enlarger Modal */}
      {inspectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative max-w-5xl w-full bg-[#0e0c0b] border border-[#3b3227] p-4 text-[#ede8df]">
            <button
              onClick={() => setInspectedImage(null)}
              className="absolute top-4 right-4 p-2 text-[#8c8273] hover:text-[#ede8df] transition-colors z-10"
              aria-label="Close enlarged photograph"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[80vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={inspectedImage.url}
                alt={inspectedImage.caption}
                className="max-h-[78vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-3 px-2 flex justify-between items-center text-xs font-mono text-[#a39786] uppercase">
              <span>{inspectedImage.caption}</span>
              <span className="text-[#695f51]">ARCHITECTURAL FOLIO · PALAIS AURELIA</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
