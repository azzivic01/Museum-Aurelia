/**
 * MUSEUM AURELIA — THE WEIGHT OF MEMORY
 * Curatorial dataset & architectural records
 */

import heroPalaceGallery from '../assets/images/hero_palace_gallery_1791338691033.jpg';
import facadePortal from '../assets/images/facade_portal_monument_1791338701762.jpg';
import palaceStaircase from '../assets/images/palace_grand_staircase_1791338755518.jpg';
import collectionBronze from '../assets/images/collection_bronze_statue_1791338779696.jpg';
import masterpieceSalonVii from '../assets/images/masterpiece_salon_vii_1791338712420.jpg';
import macroTexture from '../assets/images/macro_material_texture_1791338721984.jpg';
import archiveLedger from '../assets/images/archive_parchment_ledger_1791338765422.jpg';
import afterHoursNocturne from '../assets/images/after_hours_silence_1791338732898.jpg';

export const ASSETS = {
  hero: heroPalaceGallery,
  facade: facadePortal,
  staircase: palaceStaircase,
  bronze: collectionBronze,
  masterpiece: masterpieceSalonVii,
  macro: macroTexture,
  archive: archiveLedger,
  afterHours: afterHoursNocturne,
};

export interface ArchitecturalStep {
  id: string;
  stageNumber: string;
  title: string;
  subtitle: string;
  space: string;
  image: string;
  orientation: 'landscape' | 'portrait' | 'square';
  material: string;
}

export const ARCHITECTURAL_SEQUENCE: ArchitecturalStep[] = [
  {
    id: 'facade',
    stageNumber: 'I',
    title: 'THE MONUMENTAL FAÇADE',
    subtitle: 'Ashlar limestone carved under northern skies',
    space: 'COUR D’HONNEUR',
    image: ASSETS.facade,
    orientation: 'landscape',
    material: 'Richemont Limestone · Antique Bronze',
  },
  {
    id: 'portal',
    stageNumber: 'II',
    title: 'THE GREAT BRONZE GATES',
    subtitle: 'Cast 1742 · Bearing three hundred winters',
    space: 'NORTHERN THRESHOLD',
    image: ASSETS.facade,
    orientation: 'portrait',
    material: 'Patinated Bronze · Hand-Forged Iron',
  },
  {
    id: 'vestibule',
    stageNumber: 'III',
    title: 'THE VESTIBULE OF ECHOES',
    subtitle: 'A high stone transition into solemn silence',
    space: 'HALL OF COLUMNS',
    image: ASSETS.hero,
    orientation: 'landscape',
    material: 'Veined Carrara Marble · Ionic Capitals',
  },
  {
    id: 'staircase',
    stageNumber: 'IV',
    title: 'THE GRAND ESCALIER',
    subtitle: 'Curving upward beneath soaring vaults',
    space: 'SOUTH WING ROTUNDA',
    image: ASSETS.staircase,
    orientation: 'portrait',
    material: 'Statuary White Marble · Gilded Balustrade',
  },
  {
    id: 'salon',
    stageNumber: 'V',
    title: 'THE GREAT STATE SALON',
    subtitle: 'Where light filters across centuries of oil and pigment',
    space: 'SALON VII',
    image: ASSETS.masterpiece,
    orientation: 'landscape',
    material: 'Aged French Walnut · Gold Leaf',
  },
];

export interface CollectionItem {
  id: string;
  room: string;
  title: string;
  century: string;
  creator: string;
  medium: string;
  dimensions: string;
  acquisition: string;
  image: string;
  provenance: string;
}

export const FEATURED_WORKS: CollectionItem[] = [
  {
    id: 'work-1',
    room: 'ROOM 07',
    title: 'PORTRAIT OF AN UNKNOWN PATRICIAN IN SHADOW',
    century: '17TH CENTURY · CIRCA 1642',
    creator: 'UNKNOWN FLEMISH MASTER',
    medium: 'Oil and gesso on hand-loomed flax linen',
    dimensions: '242 × 186 cm',
    acquisition: 'Private bequest of Count Aurelius, 1894',
    image: ASSETS.masterpiece,
    provenance: 'Palais Aurelia Collection since late Baroque era; survived the 1870 siege.',
  },
  {
    id: 'work-2',
    room: 'ROOM 03',
    title: 'STUDY IN SEVERED BRONZE',
    century: 'EARLY 18TH CENTURY',
    creator: 'ATTRIBUTED TO WORKSHOP OF GIRARDON',
    medium: 'Lost-wax cast bronze, naturally patinated',
    dimensions: '68 × 44 × 38 cm',
    acquisition: 'Inventory ledger accession No. 118',
    image: ASSETS.bronze,
    provenance: 'Displayed continuously in the marble loggia since 1898.',
  },
  {
    id: 'work-3',
    room: 'THE GRAND LOGGIA',
    title: 'VAULTED PERSPECTIVE WITH LIGHT',
    century: '1780 — 1894',
    creator: 'ARCHITECT LOUIS-GABRIEL DE SAINT-GERMAIN',
    medium: 'Honed limestone, Istrian marble, vaulted plaster',
    dimensions: 'Length 48 m · Vault Height 12 m',
    acquisition: 'Permanent architectural foundation',
    image: ASSETS.hero,
    provenance: 'Commissioned under royal warrant; opened as private museum in November 1894.',
  },
];

export interface MacroDetail {
  id: string;
  name: string;
  scale: string;
  material: string;
  observation: string;
  image: string;
}

export const MACRO_DETAILS: MacroDetail[] = [
  {
    id: 'craquelure',
    name: 'AGE CRAQUELURE & PIGMENT CRACKING',
    scale: '10× MAGNIFICATION',
    material: 'Natural resin varnish & lapis lazuli',
    observation: 'Radial micro-fractures in drying oil binder across 380 years of seasonal temperature cycles.',
    image: ASSETS.macro,
  },
  {
    id: 'gold-leaf',
    name: 'TARNISHED 23K GOLD LEAF PATINA',
    scale: '15× MAGNIFICATION',
    material: 'Hand-beaten gold leaf on red bole clay',
    observation: 'Delicate flaking where atmospheric moisture has softened the animal hide gesso over centuries.',
    image: ASSETS.macro,
  },
  {
    id: 'bronze-oxidation',
    name: 'VERDIGRIS BRONZE SURFACE',
    scale: '8× MAGNIFICATION',
    material: 'Cuprous alloy with copper carbonate oxide',
    observation: 'Deep greenish-black oxidation forming an immutable protective crust over ancient lost-wax casts.',
    image: ASSETS.bronze,
  },
];

export interface TimelineNode {
  year: string;
  label: string;
  description: string;
  roomRef: string;
}

export const TIMELINE_NODES: TimelineNode[] = [
  {
    year: '1647',
    label: 'FOUNDATION STONES',
    description: 'First quarry blocks of Richemont limestone laid on the river embankment by royal master builders.',
    roomRef: 'THE VAULTED CRYPT',
  },
  {
    year: '1742',
    label: 'THE BRONZE AGE',
    description: 'The monumental cast-bronze portals installed; salon ceilings painted with allegorical ceiling frescoes.',
    roomRef: 'NORTH COURTYARD',
  },
  {
    year: '1894',
    label: 'MUSEUM AURELIA FOUNDED',
    description: 'Private collection opened to scholars and connoisseurs under testamentary charter. Accession ledger started.',
    roomRef: 'SALON DE LECTURE',
  },
  {
    year: '1928',
    label: 'THE QUIET CATALOGUE',
    description: 'First photographic folio published; collection protected through the world conflicts in underground limestone cellars.',
    roomRef: 'ARCHIVE VAULT 034',
  },
  {
    year: '1976',
    label: 'CONTEMPORARY LIGHTING',
    description: 'Subtle conservation lighting introduced, preserving natural daytime side illumination from palace tall casements.',
    roomRef: 'ROOM VII & GRAND LOGGIA',
  },
  {
    year: 'TODAY',
    label: 'PERMANENT SILENCE',
    description: 'The museum stands unchanged, preserving centuries of human memory against the rush of time.',
    roomRef: 'ALL ROOMS',
  },
];

export interface ArchiveEntry {
  code: string;
  year: string;
  title: string;
  medium: string;
  seal: string;
  note: string;
}

export const ARCHIVE_ENTRIES: ArchiveEntry[] = [
  {
    code: 'ARCHIVE 034',
    year: '1894',
    title: 'THE FOUNDING INVENTORY REGISTER',
    medium: 'Handmade rag vellum, iron-gall cursive script',
    seal: 'Red Spanish wax with family intaglio crest',
    note: 'Folio I, Page 1: "Everything herein gathered shall remain together, undivided by heirs or state, for as long as stone endures."',
  },
  {
    code: 'FOLIO 118',
    year: '1902',
    title: 'CONSERVATION LEDGER & PIGMENT STUDIES',
    medium: 'Bound morocco leather, albumen prints',
    seal: 'Curatorial embossment No. 4',
    note: 'Detailed chemical analysis of natural lapis lazuli pigments purchased in Venice, autumn 1644.',
  },
  {
    code: 'DOCUMENT 07',
    year: '1939',
    title: 'SUBTERRANEAN EVACUATION PROTOCOL',
    medium: 'Typewritten parchment with archival wax seal',
    seal: 'Preservation Society Archive Seal',
    note: 'Forty-two crates transferred to the limestone cellars beneath Room VII. Not a single canvas suffered moisture.',
  },
];
