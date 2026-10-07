import React from 'react';
import { X, MapPin, ArrowUpRight } from 'lucide-react';

interface FloorDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (anchor: string) => void;
}

export const FloorDirectoryModal: React.FC<FloorDirectoryModalProps> = ({
  isOpen,
  onClose,
  onSelectSection,
}) => {
  if (!isOpen) return null;

  const palaceRooms = [
    {
      level: 'LEVEL 0 · THRESHOLD',
      rooms: [
        { name: 'Cour d’Honneur & Bronze Gates', anchor: '#the-house', note: 'Ashlar limestone & 1742 bronze entrance' },
        { name: 'The Vestibule of Echoes', anchor: '#the-house', note: 'Ionic column gallery & Carrara floor' },
      ],
    },
    {
      level: 'LEVEL 1 · PIANO NOBILE',
      rooms: [
        { name: 'The Grand Escalier', anchor: '#the-house', note: 'Curved baroque marble flight into upper light' },
        { name: 'Salon VII · The Masterpiece', anchor: '#the-masterpiece', note: 'Walnut boiserie & 1642 portrait in chiaroscuro' },
        { name: 'The Grand Loggia di Mezzogiorno', anchor: '#the-collection', note: '48m vaulted hall with classical bronzes' },
        { name: 'Cabinet of Micro-Inspection', anchor: '#the-object', note: 'High magnification conservation laboratory' },
      ],
    },
    {
      level: 'LEVEL -1 · SUBTERRANEAN',
      rooms: [
        { name: 'Vault 034 & Archival Crypt', anchor: '#the-archive', note: 'Testamentary registers 1894 & parchment documents' },
        { name: 'Nocturnal Sculpture Rotunda', anchor: '#after-hours', note: 'Silent marble Roman busts in midnight shadows' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#0f0d0b] border border-[#382f24] p-8 sm:p-10 shadow-2xl text-[#ede8df] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#8c8273] hover:text-[#ede8df] transition-colors"
          aria-label="Close directory"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8 space-y-1">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a86d] uppercase block">
            PALAIS AURELIA · ARCHITECTURAL DIRECTORY
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif uppercase tracking-wide">
            Palace Floor Guide
          </h3>
          <p className="text-xs font-serif italic text-[#8a8070]">
            Twenty-four exhibition chambers spanning three centuries of masonry.
          </p>
        </div>

        <div className="space-y-6">
          {palaceRooms.map((group) => (
            <div key={group.level} className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#c5a86d] block border-b border-[#241e17] pb-1">
                {group.level}
              </span>
              <div className="grid grid-cols-1 gap-2 pt-1">
                {group.rooms.map((room) => (
                  <button
                    key={room.name}
                    type="button"
                    onClick={() => {
                      onSelectSection(room.anchor);
                      onClose();
                    }}
                    className="group w-full text-left p-3.5 bg-[#14110e] border border-[#262019] hover:border-[#c5a86d] transition-all flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-sm font-serif text-[#ede8df] group-hover:text-[#c5a86d] transition-colors">
                        <MapPin className="w-3.5 h-3.5 text-[#6b6255]" />
                        <span>{room.name}</span>
                      </div>
                      <div className="text-[11px] font-mono text-[#786d5e] mt-1 pl-5">
                        {room.note}
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#5e5445] group-hover:text-[#c5a86d] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-[#241e17] text-center">
          <span className="text-[11px] font-mono text-[#61574a] uppercase">
            Palais Aurelia · 14 Quai des Grands-Augustins, Paris
          </span>
        </div>
      </div>
    </div>
  );
};
