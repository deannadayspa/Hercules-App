import Navbar from "./home/_components/Navbar.tsx";
import HeroSection from "./home/_components/HeroSection.tsx";
import CategoryIcons from "./home/_components/CategoryIcons.tsx";
import BestDealSection from "./home/_components/BestDealSection.tsx";
import PremiumSection from "./home/_components/PremiumSection.tsx";
import ServiceSection from "./home/_components/ServiceSection.tsx";
import type { TreatmentCard } from "./home/_components/ServiceSection.tsx";
import Footer from "./home/_components/Footer.tsx";

// ── WhatsApp booking link helper ─────────────────────────────────────────────
const WA_NUMBER = "6281999231518";

function waLink(title: string, duration: string, price: string): string {
  const msg = `Hi, I'd like to book ${title} - ${duration} (${price})`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ── Thumbnail pool ───────────────────────────────────────────────────────────
const T = {
  // Massage
  sig:      "https://images.unsplash.com/photo-1649751295468-953038600bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  bali:     "https://images.unsplash.com/photo-1611073615452-4889cb93422e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  back:     "https://images.unsplash.com/photo-1650044252595-cacd425982ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  neck:     "https://images.unsplash.com/photo-1706795034887-be9a24d1ac19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  stone:    "https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  cup:      "https://images.unsplash.com/photo-1741522509438-a120c0bb5e88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  deep:     "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  foot:     "https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  footref:  "https://images.unsplash.com/photo-1728497872607-fa0b98a3eb79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  scrub:    "https://images.unsplash.com/photo-1709315610156-fda8311ee3e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  sun:      "https://images.unsplash.com/photo-1542848284-8afa78a08ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  // Wood Therapy
  wood:     "https://images.unsplash.com/photo-1767043088777-1884c2ef6c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  lymph:    "https://images.unsplash.com/photo-1620051844584-15ac31d5fccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  remedial: "https://images.unsplash.com/photo-1570174006382-148305ce4972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  mani:     "https://images.unsplash.com/photo-1613457492120-4fcfbb7c3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  pedi:     "https://images.unsplash.com/photo-1659391542239-9648f307c0b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  nails:    "https://images.unsplash.com/photo-1772322586785-3a34772cbc61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  facial:   "https://images.unsplash.com/photo-1761718210055-e83ca7e2c9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  face2:    "https://images.unsplash.com/photo-1516815989420-9cb5ef0fce78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  // Hair & Lash
  hair1:    "https://images.unsplash.com/photo-1726555147240-61952754baeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  hairwash: "https://images.unsplash.com/photo-1717160675332-1a8d1080ae3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  haircut:  "https://images.unsplash.com/photo-1718720410628-6aa1b860ea78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  haircut2: "https://images.unsplash.com/photo-1735151225764-eac694642dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  lash:     "https://images.unsplash.com/photo-1553103326-609d1bd0ca03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  brow:     "https://images.unsplash.com/photo-1737063935340-f9af0940c4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  wax1:     "https://images.unsplash.com/photo-1695044063262-ad2a4837f287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  wax2:     "https://images.unsplash.com/photo-1529982412356-901cc3a363cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  wax3:     "https://images.unsplash.com/photo-1702261952303-581dd411cc54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  face3:    "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
};

// ── SECTION 1: MASSAGES ──────────────────────────────────────────────────────
const massageCards: TreatmentCard[] = [
  {
    title: "Deanna Signature Massage",
    description: "Combination Balinese, Shiatsu & Lomi-lomi",
    image: "https://images.unsplash.com/photo-1649751295468-953038600bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "1.5 Hour", price: "IDR 300.000", thumbnail: T.sig,  bookingLink: waLink("Deanna Signature Massage", "1.5 Hour", "IDR 300.000") },
      { duration: "2 Hour",   price: "IDR 380.000", thumbnail: T.bali, bookingLink: waLink("Deanna Signature Massage", "2 Hour", "IDR 380.000") },
    ],
  },
  {
    title: "Balinese Massage",
    description: "Traditional Balinese techniques for deep relaxation and rejuvenation.",
    image: "https://images.unsplash.com/photo-1611073615452-4889cb93422e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "1 Hour",   price: "IDR 200.000", thumbnail: T.bali, bookingLink: waLink("Balinese Massage", "1 Hour", "IDR 200.000") },
      { duration: "1.5 Hour", price: "IDR 280.000", thumbnail: T.sig,  bookingLink: waLink("Balinese Massage", "1.5 Hour", "IDR 280.000") },
      { duration: "2 Hour",   price: "IDR 300.000", thumbnail: T.back, bookingLink: waLink("Balinese Massage", "2 Hour", "IDR 300.000") },
    ],
  },
  {
    title: "Back Massage",
    description: "Targeted relief for the back muscles to ease tension and soreness.",
    image: "https://images.unsplash.com/photo-1650044252595-cacd425982ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "30 Min", price: "IDR 150.000", thumbnail: T.back, bookingLink: waLink("Back Massage", "30 Min", "IDR 150.000") },
      { duration: "1 Hour", price: "IDR 200.000", thumbnail: T.sig,  bookingLink: waLink("Back Massage", "1 Hour", "IDR 200.000") },
    ],
  },
  {
    title: "Neck & Shoulder Massage",
    description: "Focused on relieving neck and shoulder tension from daily stress.",
    image: "https://images.unsplash.com/photo-1706795034887-be9a24d1ac19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "30 Min", price: "IDR 150.000", thumbnail: T.neck, bookingLink: waLink("Neck & Shoulder Massage", "30 Min", "IDR 150.000") },
      { duration: "1 Hour", price: "IDR 200.000", thumbnail: T.back, bookingLink: waLink("Neck & Shoulder Massage", "1 Hour", "IDR 200.000") },
    ],
  },
  {
    title: "Warm Stone or Bamboo Massage",
    description: "Warm volcanic stones or bamboo tools to melt away muscle tension.",
    image: "https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "1 Hour",   price: "IDR 250.000", thumbnail: T.stone, bookingLink: waLink("Warm Stone or Bamboo Massage", "1 Hour", "IDR 250.000") },
      { duration: "1.5 Hour", price: "IDR 300.000", thumbnail: T.bali,  bookingLink: waLink("Warm Stone or Bamboo Massage", "1.5 Hour", "IDR 300.000") },
      { duration: "2 Hour",   price: "IDR 380.000", thumbnail: T.sig,   bookingLink: waLink("Warm Stone or Bamboo Massage", "2 Hour", "IDR 380.000") },
    ],
  },
  {
    title: "Cupping Massage",
    description: "Traditional cupping therapy to stimulate blood flow and muscle recovery.",
    image: "https://images.unsplash.com/photo-1741522509438-a120c0bb5e88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "1 Hour",   price: "IDR 250.000", thumbnail: T.cup,  bookingLink: waLink("Cupping Massage", "1 Hour", "IDR 250.000") },
      { duration: "1.5 Hour", price: "IDR 300.000", thumbnail: T.back, bookingLink: waLink("Cupping Massage", "1.5 Hour", "IDR 300.000") },
      { duration: "2 Hour",   price: "IDR 380.000", thumbnail: T.sig,  bookingLink: waLink("Cupping Massage", "2 Hour", "IDR 380.000") },
    ],
  },
  {
    title: "Deep Tissue or Aromatherapy",
    description: "Deep muscle relief or aromatic oil therapy for total mind-body relaxation.",
    image: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "1 Hour",   price: "IDR 300.000", thumbnail: T.deep, bookingLink: waLink("Deep Tissue or Aromatherapy", "1 Hour", "IDR 300.000") },
      { duration: "1.5 Hour", price: "IDR 450.000", thumbnail: T.bali, bookingLink: waLink("Deep Tissue or Aromatherapy", "1.5 Hour", "IDR 450.000") },
      { duration: "2 Hour",   price: "IDR 550.000", thumbnail: T.sig,  bookingLink: waLink("Deep Tissue or Aromatherapy", "2 Hour", "IDR 550.000") },
    ],
  },
  {
    title: "Foot Massage",
    description: "Soothing foot massage to revive tired, aching feet.",
    image: "https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "30 Min",   price: "IDR 100.000", thumbnail: T.foot,    bookingLink: waLink("Foot Massage", "30 Min", "IDR 100.000") },
      { duration: "1 Hour",   price: "IDR 150.000", thumbnail: T.footref, bookingLink: waLink("Foot Massage", "1 Hour", "IDR 150.000") },
      { duration: "1.5 Hour", price: "IDR 200.000", thumbnail: T.foot,    bookingLink: waLink("Foot Massage", "1.5 Hour", "IDR 200.000") },
    ],
  },
  {
    title: "Foot Reflexology or Foot Scrub",
    description: "Reflexology pressure points or exfoliating foot scrub for soft, refreshed feet.",
    image: "https://images.unsplash.com/photo-1728497872607-fa0b98a3eb79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "30 Min", price: "IDR 150.000", thumbnail: T.footref, bookingLink: waLink("Foot Reflexology or Foot Scrub", "30 Min", "IDR 150.000") },
      { duration: "1 Hour", price: "IDR 200.000", thumbnail: T.foot,    bookingLink: waLink("Foot Reflexology or Foot Scrub", "1 Hour", "IDR 200.000") },
    ],
  },
  {
    title: "Body Scrub",
    description: "Full-body exfoliating scrub to remove dead skin and restore a healthy glow.",
    image: "https://images.unsplash.com/photo-1709315610156-fda8311ee3e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "30 minutes", price: "IDR 200.000", thumbnail: T.scrub, bookingLink: waLink("Body Scrub", "30 minutes", "IDR 200.000") },
    ],
  },
  {
    title: "After Sun Treatment – Aloe Vera",
    description: "Soothing massage combined with cooling aloe vera to calm sun-exposed skin.",
    image: "https://images.unsplash.com/photo-1542848284-8afa78a08ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "45min massage + aloe vera", price: "IDR 200.000", thumbnail: T.sun, bookingLink: waLink("After Sun Treatment - Aloe Vera", "45min massage + aloe vera", "IDR 200.000") },
      { duration: "1Hr massage + aloe vera",   price: "IDR 250.000", thumbnail: T.sig, bookingLink: waLink("After Sun Treatment - Aloe Vera", "1Hr massage + aloe vera", "IDR 250.000") },
    ],
  },
];

// ── SECTION 2: DEANNA WOOD THERAPY ──────────────────────────────────────────
const woodCards: TreatmentCard[] = [
  {
    title: "Lymphatic Drainage & Body Sculpting",
    description: "Wood therapy to stimulate lymph flow, reduce puffiness, and sculpt the body.",
    image: "https://images.unsplash.com/photo-1767043088777-1884c2ef6c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Lymphatic Full Body (1Hr)",           price: "IDR 550.000", thumbnail: T.wood,  bookingLink: waLink("Lymphatic Drainage & Body Sculpting", "Lymphatic Full Body (1Hr)", "IDR 550.000") },
      { duration: "Lymphatic Full Body (1.5Hr)",         price: "IDR 750.000", thumbnail: T.lymph, bookingLink: waLink("Lymphatic Drainage & Body Sculpting", "Lymphatic Full Body (1.5Hr)", "IDR 750.000") },
      { duration: "Face Sculpt: tone & define (45 Min)", price: "IDR 350.000", thumbnail: T.wood,  bookingLink: waLink("Lymphatic Drainage & Body Sculpting", "Face Sculpt: tone & define (45 Min)", "IDR 350.000") },
      { duration: "Body Sculpt Full Body (1Hr)",         price: "IDR 550.000", thumbnail: T.lymph, bookingLink: waLink("Lymphatic Drainage & Body Sculpting", "Body Sculpt Full Body (1Hr)", "IDR 550.000") },
      { duration: "Body Sculpt Full Body (1.5Hr)",       price: "IDR 750.000", thumbnail: T.wood,  bookingLink: waLink("Lymphatic Drainage & Body Sculpting", "Body Sculpt Full Body (1.5Hr)", "IDR 750.000") },
    ],
  },
  {
    title: "Lymphatic Body Sculpt Packages",
    description: "Value packages combining lymphatic drainage and body sculpting sessions.",
    image: "https://images.unsplash.com/photo-1620051844584-15ac31d5fccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "3x 1Hr Lymphatic",                   price: "IDR 1.500.000", thumbnail: T.lymph, bookingLink: waLink("Lymphatic Body Sculpt Packages", "3x 1Hr Lymphatic", "IDR 1.500.000") },
      { duration: "3x 1Hr Lymphatic + 1Hr Body Sculpt", price: "IDR 3.000.000", thumbnail: T.wood,  bookingLink: waLink("Lymphatic Body Sculpt Packages", "3x 1Hr Lymphatic + 1Hr Body Sculpt", "IDR 3.000.000") },
      { duration: "3x 1Hr Lymphatic + 1Hr Face Sculpt", price: "IDR 3.000.000", thumbnail: T.lymph, bookingLink: waLink("Lymphatic Body Sculpt Packages", "3x 1Hr Lymphatic + 1Hr Face Sculpt", "IDR 3.000.000") },
    ],
  },
  {
    title: "Deanna Healing / Remedial Massage",
    description: "Therapeutic remedial massage targeting chronic pain, frozen shoulder, and sciatica.",
    image: "https://images.unsplash.com/photo-1570174006382-148305ce4972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Neck & Back / Frozen Shoulder (1Hr)", price: "IDR 400.000", thumbnail: T.remedial, bookingLink: waLink("Deanna Healing / Remedial Massage", "Neck & Back / Frozen Shoulder (1Hr)", "IDR 400.000") },
      { duration: "Knee & Ankle (1.5Hr)",                price: "IDR 500.000", thumbnail: T.back,     bookingLink: waLink("Deanna Healing / Remedial Massage", "Knee & Ankle (1.5Hr)", "IDR 500.000") },
      { duration: "Migraine & Sciatica (2Hr)",           price: "IDR 600.000", thumbnail: T.remedial, bookingLink: waLink("Deanna Healing / Remedial Massage", "Migraine & Sciatica (2Hr)", "IDR 600.000") },
    ],
  },
  {
    title: "Manicure",
    description: "Professional nail care and polish for beautifully groomed hands.",
    image: "https://images.unsplash.com/photo-1613457492120-4fcfbb7c3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Shellac colour",       price: "IDR 300.000", thumbnail: T.mani,  bookingLink: waLink("Manicure", "Shellac colour", "IDR 300.000") },
      { duration: "Shellac French",       price: "IDR 350.000", thumbnail: T.nails, bookingLink: waLink("Manicure", "Shellac French", "IDR 350.000") },
      { duration: "Normal colour French", price: "IDR 300.000", thumbnail: T.pedi,  bookingLink: waLink("Manicure", "Normal colour French", "IDR 300.000") },
      { duration: "Normal colour",        price: "IDR 200.000", thumbnail: T.mani,  bookingLink: waLink("Manicure", "Normal colour", "IDR 200.000") },
      { duration: "With no colour",       price: "IDR 180.000", thumbnail: T.nails, bookingLink: waLink("Manicure", "With no colour", "IDR 180.000") },
    ],
  },
  {
    title: "Pedicure",
    description: "Relaxing pedicure treatment for soft, pampered feet and polished nails.",
    image: "https://images.unsplash.com/photo-1659391542239-9648f307c0b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Shellac colour",       price: "IDR 350.000", thumbnail: T.pedi,  bookingLink: waLink("Pedicure", "Shellac colour", "IDR 350.000") },
      { duration: "Shellac French",       price: "IDR 350.000", thumbnail: T.nails, bookingLink: waLink("Pedicure", "Shellac French", "IDR 350.000") },
      { duration: "Normal colour French", price: "IDR 300.000", thumbnail: T.mani,  bookingLink: waLink("Pedicure", "Normal colour French", "IDR 300.000") },
      { duration: "Normal colour",        price: "IDR 250.000", thumbnail: T.pedi,  bookingLink: waLink("Pedicure", "Normal colour", "IDR 250.000") },
      { duration: "No colour",            price: "IDR 200.000", thumbnail: T.nails, bookingLink: waLink("Pedicure", "No colour", "IDR 200.000") },
    ],
  },
  {
    title: "Nails",
    description: "Full nail services including shellac, acrylic, and extensions.",
    image: "https://images.unsplash.com/photo-1772322586785-3a34772cbc61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Shellac colour only",             price: "IDR 200.000", thumbnail: T.nails, bookingLink: waLink("Nails", "Shellac colour only", "IDR 200.000") },
      { duration: "Removal Shellac",                 price: "IDR 100.000", thumbnail: T.mani,  bookingLink: waLink("Nails", "Removal Shellac", "IDR 100.000") },
      { duration: "Removal SNS/Acrylic",             price: "IDR 150.000", thumbnail: T.pedi,  bookingLink: waLink("Nails", "Removal SNS/Acrylic", "IDR 150.000") },
      { duration: "Acrylic + Shellac Colour",        price: "IDR 550.000", thumbnail: T.nails, bookingLink: waLink("Nails", "Acrylic + Shellac Colour", "IDR 550.000") },
      { duration: "Acrylic Refill + Shellac Colour", price: "IDR 400.000", thumbnail: T.mani,  bookingLink: waLink("Nails", "Acrylic Refill + Shellac Colour", "IDR 400.000") },
    ],
  },
  {
    title: "Facials",
    description: "Restorative facial treatments using collagen, gold, light therapy, and face sculpting.",
    image: "https://images.unsplash.com/photo-1761718210055-e83ca7e2c9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Collagen Facial",                price: "IDR 280.000", thumbnail: T.facial, bookingLink: waLink("Facials", "Collagen Facial", "IDR 280.000") },
      { duration: "Add Face Steamer & Extraction",  price: "IDR 150.000", thumbnail: T.face2,  bookingLink: waLink("Facials", "Add Face Steamer & Extraction", "IDR 150.000") },
      { duration: "Add 30min face sculpt",          price: "IDR 250.000", thumbnail: T.facial, bookingLink: waLink("Facials", "Add 30min face sculpt", "IDR 250.000") },
      { duration: "Add 15min light therapy",        price: "IDR 150.000", thumbnail: T.face2,  bookingLink: waLink("Facials", "Add 15min light therapy", "IDR 150.000") },
      { duration: "Biokos / Gold / Natural Facial", price: "IDR 250.000", thumbnail: T.facial, bookingLink: waLink("Facials", "Biokos / Gold / Natural Facial", "IDR 250.000") },
    ],
  },
];

// ── SECTION 3: HAIR & LASH ───────────────────────────────────────────────────
const hairLashCards: TreatmentCard[] = [
  {
    title: "Deanna Hair Creambath",
    description: "Nourishing hair treatment with avocado or deep conditioning for lustrous locks.",
    image: "https://images.unsplash.com/photo-1717160675332-1a8d1080ae3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Avocado treatment \u2013 45 min", price: "IDR 250.000",     thumbnail: T.hairwash, bookingLink: waLink("Deanna Hair Creambath", "Avocado treatment - 45 min", "IDR 250.000") },
      { duration: "Deep conditioning \u2013 1 hour", price: "IDR 300.000",     thumbnail: T.hair1,    bookingLink: waLink("Deanna Hair Creambath", "Deep conditioning - 1 hour", "IDR 300.000") },
      { duration: "Add steamer for creambath",       price: "IDR 100.000",     thumbnail: T.hairwash, bookingLink: waLink("Deanna Hair Creambath", "Add steamer for creambath", "IDR 100.000") },
      { duration: "Alfaparf Keratin smoothing",      price: "On Consultation", thumbnail: T.haircut,  bookingLink: waLink("Deanna Hair Creambath", "Alfaparf Keratin smoothing", "On Consultation") },
    ],
  },
  {
    title: "Haircut & Styling (Part 1)",
    description: "Expert cuts and wash services tailored to your hair type and style goals.",
    image: "https://images.unsplash.com/photo-1726555147240-61952754baeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Cut Only",         price: "IDR 200.000", thumbnail: T.haircut,  bookingLink: waLink("Haircut & Styling", "Cut Only", "IDR 200.000") },
      { duration: "Hair wash",        price: "IDR 150.000", thumbnail: T.hairwash, bookingLink: waLink("Haircut & Styling", "Hair wash", "IDR 150.000") },
      { duration: "Hair wash & dry",  price: "IDR 200.000", thumbnail: T.hair1,    bookingLink: waLink("Haircut & Styling", "Hair wash & dry", "IDR 200.000") },
      { duration: "Hair wash & blow", price: "IDR 350.000", thumbnail: T.haircut,  bookingLink: waLink("Haircut & Styling", "Hair wash & blow", "IDR 350.000") },
    ],
  },
  {
    title: "Haircut & Styling (Part 2)",
    description: "Full styling sessions, braiding, and men's cut and wash options.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Hair wash & style (start from)", price: "IDR 350.000",     thumbnail: T.haircut2, bookingLink: waLink("Haircut & Styling", "Hair wash & style (start from)", "IDR 350.000") },
      { duration: "Hair wash, cut & blow",          price: "IDR 450.000",     thumbnail: T.haircut,  bookingLink: waLink("Haircut & Styling", "Hair wash, cut & blow", "IDR 450.000") },
      { duration: "Men's wash & cut",               price: "IDR 200.000",     thumbnail: T.hair1,    bookingLink: waLink("Haircut & Styling", "Men's wash & cut", "IDR 200.000") },
      { duration: "Hair Braiding",                  price: "On Consultation", thumbnail: T.hairwash, bookingLink: waLink("Haircut & Styling", "Hair Braiding", "On Consultation") },
    ],
  },
  {
    title: "Hair Colour (Part 1)",
    description: "Men's regrowth touch-ups, full colour, and grey cover by expert colourists.",
    image: "https://images.unsplash.com/photo-1718720410628-6aa1b860ea78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Men's regrowth (start from)",   price: "IDR 500.000",     thumbnail: T.haircut,  bookingLink: waLink("Hair Colour", "Men's regrowth (start from)", "IDR 500.000") },
      { duration: "Ladies full Colour/Grey Cover", price: "On Consultation", thumbnail: T.hairwash, bookingLink: waLink("Hair Colour", "Ladies full Colour/Grey Cover", "On Consultation") },
      { duration: "Styling add",                   price: "IDR 150.000",     thumbnail: T.hair1,    bookingLink: waLink("Hair Colour", "Styling add", "IDR 150.000") },
    ],
  },
  {
    title: "Hair Colour (Part 2)",
    description: "Foil highlights, full head colour, and perming for transformative looks.",
    image: "https://images.unsplash.com/photo-1735151225764-eac694642dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Ladies half head foil",     price: "On Consultation", thumbnail: T.haircut2, bookingLink: waLink("Hair Colour", "Ladies half head foil", "On Consultation") },
      { duration: "Ladies full head foil",     price: "On Consultation", thumbnail: T.haircut,  bookingLink: waLink("Hair Colour", "Ladies full head foil", "On Consultation") },
      { duration: "Hair Perming (start from)", price: "IDR 800.000",     thumbnail: T.hairwash, bookingLink: waLink("Hair Colour", "Hair Perming (start from)", "IDR 800.000") },
    ],
  },
  {
    title: "Eyelash & Eyebrow (Part 1)",
    description: "Lash extensions, lifts, and removals for bold, defined eyes.",
    image: "https://images.unsplash.com/photo-1553103326-609d1bd0ca03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Eyelash Extension (start from)", price: "IDR 500.000", thumbnail: T.lash, bookingLink: waLink("Eyelash & Eyebrow", "Eyelash Extension (start from)", "IDR 500.000") },
      { duration: "Eyelash Removal",                price: "IDR 200.000", thumbnail: T.brow, bookingLink: waLink("Eyelash & Eyebrow", "Eyelash Removal", "IDR 200.000") },
      { duration: "Eyelash lift",                   price: "IDR 350.000", thumbnail: T.lash, bookingLink: waLink("Eyelash & Eyebrow", "Eyelash lift", "IDR 350.000") },
    ],
  },
  {
    title: "Eyelash & Eyebrow (Part 2)",
    description: "Eyebrow lamination, tinting, and eyelash tinting for a polished finish.",
    image: "https://images.unsplash.com/photo-1737063935340-f9af0940c4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Eyebrow Lamination", price: "IDR 400.000", thumbnail: T.brow, bookingLink: waLink("Eyelash & Eyebrow", "Eyebrow Lamination", "IDR 400.000") },
      { duration: "Eyebrow Tint",       price: "IDR 200.000", thumbnail: T.lash, bookingLink: waLink("Eyelash & Eyebrow", "Eyebrow Tint", "IDR 200.000") },
      { duration: "Eyelash Tint",       price: "IDR 200.000", thumbnail: T.brow, bookingLink: waLink("Eyelash & Eyebrow", "Eyelash Tint", "IDR 200.000") },
    ],
  },
  {
    title: "Waxing by Lycon (Part 1)",
    description: "Premium Lycon wax for smooth, long-lasting hair removal on legs and Brazillian.",
    image: "https://images.unsplash.com/photo-1695044063262-ad2a4837f287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Full leg (start from)",  price: "IDR 300.000", thumbnail: T.wax1, bookingLink: waLink("Waxing by Lycon", "Full leg (start from)", "IDR 300.000") },
      { duration: "Half leg (start from)",  price: "IDR 200.000", thumbnail: T.wax2, bookingLink: waLink("Waxing by Lycon", "Half leg (start from)", "IDR 200.000") },
      { duration: "Full Brazillian Female", price: "IDR 450.000", thumbnail: T.wax1, bookingLink: waLink("Waxing by Lycon", "Full Brazillian Female", "IDR 450.000") },
    ],
  },
  {
    title: "Waxing by Lycon (Part 2)",
    description: "Brazillian male, bikini line, back and chest waxing with Lycon premium formula.",
    image: "https://images.unsplash.com/photo-1529982412356-901cc3a363cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Full Brazillian Male",       price: "IDR 450.000", thumbnail: T.wax2, bookingLink: waLink("Waxing by Lycon", "Full Brazillian Male", "IDR 450.000") },
      { duration: "Bikini Line (start from)",   price: "IDR 150.000", thumbnail: T.wax1, bookingLink: waLink("Waxing by Lycon", "Bikini Line (start from)", "IDR 150.000") },
      { duration: "Back or Chest (start from)", price: "IDR 400.000", thumbnail: T.wax2, bookingLink: waLink("Waxing by Lycon", "Back or Chest (start from)", "IDR 400.000") },
    ],
  },
  {
    title: "Waxing by Lycon (Part 3)",
    description: "Arms, underarms, and facial waxing for precise, gentle hair removal.",
    image: "https://images.unsplash.com/photo-1702261952303-581dd411cc54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Full Arm",         price: "IDR 250.000", thumbnail: T.wax3, bookingLink: waLink("Waxing by Lycon", "Full Arm", "IDR 250.000") },
      { duration: "Under Arm",        price: "IDR 150.000", thumbnail: T.wax1, bookingLink: waLink("Waxing by Lycon", "Under Arm", "IDR 150.000") },
      { duration: "Upper lip & chin", price: "IDR 200.000", thumbnail: T.wax3, bookingLink: waLink("Waxing by Lycon", "Upper lip & chin", "IDR 200.000") },
    ],
  },
  {
    title: "Waxing by Lycon (Part 4)",
    description: "Eyebrow shaping, full monte, and ear candling for complete grooming.",
    image: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Eye Brow",               price: "IDR 150.000", thumbnail: T.face3, bookingLink: waLink("Waxing by Lycon", "Eye Brow", "IDR 150.000") },
      { duration: "Full monte man & woman", price: "IDR 500.000", thumbnail: T.wax2,  bookingLink: waLink("Waxing by Lycon", "Full monte man & woman", "IDR 500.000") },
      { duration: "Ear Candeling",          price: "IDR 100.000", thumbnail: T.face3, bookingLink: waLink("Waxing by Lycon", "Ear Candeling", "IDR 100.000") },
    ],
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[73px]">
        <HeroSection />
        <CategoryIcons />
        <BestDealSection />
        <PremiumSection />
        <ServiceSection
          id="treatments"
          title="Massage"
          cards={massageCards}
        />
        <ServiceSection
          id="wood-therapy"
          title="Deanna Wood Therapy"
          cards={woodCards}
          bgLight
        />
        <ServiceSection
          id="hair-lash"
          title="Hair & Lash"
          cards={hairLashCards}
        />
      </main>
      <Footer />
    </div>
  );
}
