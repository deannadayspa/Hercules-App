import { SparklesIcon, MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#006064] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Reservations */}
          <div>
            <h3 className="font-sans font-semibold text-sm tracking-widest uppercase mb-4 text-white/80">
              Reservations
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MailIcon className="w-4 h-4 mt-0.5 text-[#4DD0E1] flex-shrink-0" />
                <span className="text-sm text-white/80 font-sans">info@deannaspa.com</span>
              </li>
              <li className="flex items-start gap-2">
                <PhoneIcon className="w-4 h-4 mt-0.5 text-[#4DD0E1] flex-shrink-0" />
                <span className="text-sm text-white/80 font-sans">+00 (000) 000 027 03</span>
              </li>
              <li className="flex items-start gap-2">
                <PhoneIcon className="w-4 h-4 mt-0.5 text-[#4DD0E1] flex-shrink-0" />
                <span className="text-sm text-white/80 font-sans">Whatsapp: +00 (000) 000 027 03</span>
              </li>
            </ul>
          </div>

          {/* Logo + Tagline */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center">
              <SparklesIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="font-serif text-2xl font-semibold text-white tracking-wide">DEANNA</p>
              <p className="text-xs text-white/60 tracking-widest uppercase font-sans">Spa & Cafe</p>
            </div>
            <p className="text-xs text-white/60 font-sans max-w-[180px] leading-relaxed">
              Your sanctuary for beauty and relaxation.
            </p>
          </div>

          {/* Opening Hours + Location */}
          <div className="space-y-5">
            <div>
              <h3 className="font-sans font-semibold text-sm tracking-widest uppercase mb-3 text-white/80">
                Opening Hours
              </h3>
              <div className="flex items-start gap-2">
                <ClockIcon className="w-4 h-4 mt-0.5 text-[#4DD0E1] flex-shrink-0" />
                <div className="text-sm text-white/80 font-sans">
                  <p>Mon - Fri: 09:00 - 21:00</p>
                  <p>7 days a week</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-sm tracking-widest uppercase mb-3 text-white/80">
                Location
              </h3>
              <div className="flex items-start gap-2">
                <MapPinIcon className="w-4 h-4 mt-0.5 text-[#4DD0E1] flex-shrink-0" />
                <div className="text-sm text-white/80 font-sans">
                  <p>Camping House, Block 32,</p>
                  <p>Place 3RD Floor, 5th</p>
                  <p>Camping House, 102 A,</p>
                  <p>Achema, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/40 font-sans">
            &copy; {new Date().getFullYear()} Deanna Spa &amp; Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
