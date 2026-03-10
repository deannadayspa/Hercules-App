import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[520px] flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #006064 0%, #00838F 40%, #00ACC1 75%, #4DD0E1 100%)"
      }}>
      
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1605718700628-19eb58d0e8e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }} />
      

      {/* Decorative stones and candles image on right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block opacity-70"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1696342000662-dc2417d34692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080)`,
          backgroundSize: "cover",
          backgroundPosition: "center left"
        }} />
      

      {/* Dark overlay for right side blend */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00696e]/80 via-[#00838F]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:py-32 py-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl">
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-sm font-sans font-medium tracking-[0.3em] uppercase mb-4">
            
            Welcome to Deanna
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight text-balance mb-6">
            
            Our Luxury
            <br />
            <span className="italic font-normal">Spa Treatments</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-white/75 font-sans text-base font-light leading-relaxed mb-10 max-w-sm">
            
            Indulge in a world of relaxation and beauty. Experience our premium treatments crafted for your well-being.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}>
            
            <a
              href="#contact"
              className="inline-block px-10 py-3.5 bg-white text-[#00838F] font-sans font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-[#00838F] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
              
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 20C480 40 240 10 0 30L0 60Z" fill="oklch(0.99 0.005 85)" />
        </svg>
      </div>
    </section>);

}
