import React, { useState } from 'react';
import { X, Check, Calendar, User, Mail } from 'lucide-react';

interface PrivateVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivateVisitModal: React.FC<PrivateVisitModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '2026-10-15',
    slot: '11:00 AM — Morning Light',
    interest: 'Room VII & Baroque Masterpieces',
    partySize: '1',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl bg-[#0f0d0b] border border-[#3b3227] p-8 sm:p-10 shadow-2xl text-[#ede8df]">
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 text-[#8c8273] hover:text-[#ede8df] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6 space-y-1">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a86d] uppercase block">
                PALAIS AURELIA · RESERVED STUDY
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif uppercase tracking-wide">
                Request Private Visit
              </h3>
              <p className="text-xs font-serif italic text-[#8a8070] pt-1">
                To preserve silence and environmental stability, admissions are strictly limited to twelve visitors per hour.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-[#8a8070] uppercase mb-1">
                  Full Name / Title
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-[#5e5548]" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lord Julian Vance"
                    className="w-full bg-[#171411] border border-[#2e261f] focus:border-[#c5a86d] pl-10 pr-4 py-2.5 text-xs text-[#ede8df] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-widest text-[#8a8070] uppercase mb-1">
                  Correspondence Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-[#5e5548]" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="curator@institution.org"
                    className="w-full bg-[#171411] border border-[#2e261f] focus:border-[#c5a86d] pl-10 pr-4 py-2.5 text-xs text-[#ede8df] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-[#8a8070] uppercase mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-[#5e5548]" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#171411] border border-[#2e261f] focus:border-[#c5a86d] pl-10 pr-4 py-2.5 text-xs text-[#ede8df] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-[#8a8070] uppercase mb-1">
                    Time Window
                  </label>
                  <select
                    value={formData.slot}
                    onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                    className="w-full bg-[#171411] border border-[#2e261f] focus:border-[#c5a86d] px-3 py-2.5 text-xs text-[#ede8df] outline-none"
                  >
                    <option value="11:00 AM — Morning Light">11:00 AM — Morning Light</option>
                    <option value="02:00 PM — Zenith Illumination">02:00 PM — Zenith Illumination</option>
                    <option value="04:30 PM — Dusking Shadows">04:30 PM — Dusking Shadows</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-widest text-[#8a8070] uppercase mb-1">
                  Primary Study Focus
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-[#171411] border border-[#2e261f] focus:border-[#c5a86d] px-3 py-2.5 text-xs text-[#ede8df] outline-none"
                >
                  <option value="Room VII & Baroque Masterpieces">Room VII & Baroque Masterpieces</option>
                  <option value="The Grand Escalier & Palace Architecture">The Grand Escalier & Palace Architecture</option>
                  <option value="Vault 034 Manuscripts & Archives">Vault 034 Manuscripts & Archives</option>
                  <option value="Complete Solitary Promenade">Complete Solitary Promenade</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#ede8df] hover:bg-[#c5a86d] text-[#0b0a09] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
                >
                  Submit Reservation Request
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full border border-[#c5a86d] flex items-center justify-center mx-auto text-[#c5a86d]">
              <Check className="w-6 h-6" />
            </div>

            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#c5a86d] block">
              RESERVATION REGISTERED
            </span>

            <h3 className="text-2xl font-serif text-[#ede8df]">
              Dossier AUR-2026-X89 Prepared
            </h3>

            <p className="text-xs font-serif italic text-[#a89d8f] max-w-md mx-auto leading-relaxed">
              We have dispatched your private access credentials to <span className="text-[#ede8df] font-mono">{formData.email}</span> for {formData.date} at {formData.slot}. The gates will be unbolted for your arrival.
            </p>

            <div className="p-4 bg-[#14110e] border border-[#2b241c] text-left text-xs font-mono space-y-1 mt-4">
              <div className="text-[#736859]">NAME: {formData.name}</div>
              <div className="text-[#736859]">AREA: {formData.interest}</div>
              <div className="text-[#736859]">VENUE: Palais Aurelia, 14 Quai des Grands-Augustins, Paris</div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2 border border-[#3b3328] hover:border-[#c5a86d] text-xs font-mono tracking-widest uppercase text-[#ede8df] transition-colors"
              >
                Return to Palace
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
