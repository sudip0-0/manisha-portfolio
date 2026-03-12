import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] flex flex-col md:flex-row bg-bg-primary overflow-hidden">
      {/* Mobile Background (Blurred Image) */}
      <div className="absolute inset-0 md:hidden z-0">
        {/* landing page hero professional editorial portrait */}
        <img 
          src="/manisha-hero.jpeg" 
          alt="Manisha Shrestha Background" 
          className="w-full h-full object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent" />
      </div>
      {/* Left Column (Image - Desktop Only) */}
      <div className="hidden md:block w-[55%] h-full relative z-10">
        <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-primary z-10"></div>
        {/* landing page hero professional editorial portrait */}
        <img 
          src="/manisha-hero.jpeg" 
          alt="Manisha Shrestha Portrait" 
          className="w-full h-full object-cover object-top grayscale-[10%] contrast-110"
        />
      </div>
      {/* Right Column (Text Content) */}
      <div className="w-full md:w-[45%] h-full relative z-20 flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-body uppercase text-[10px] sm:text-xs tracking-[0.2em] text-gold mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-gold inline-block"></span>
            Kathmandu, Nepal
          </p>
          
          <div className="relative mb-2">
            <span className="absolute -top-8 -left-4 font-script text-5xl sm:text-7xl text-gold-pale/30 -rotate-6 select-none">
              Manisha
            </span>
            <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] text-text-primary tracking-tight">
              Shrestha<span className="text-gold">.</span>
            </h1>
          </div>

          <h2 className="font-display italic text-2xl sm:text-3xl text-text-muted mt-4 mb-6">Emcee · Voice Artist · Video Presenter </h2>

          <p className="font-body text-text-muted text-base sm:text-lg max-w-md leading-relaxed mb-10 text-balance">
            Bringing elegance, energy, and authenticity to every stage, screen, and campaign.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="px-8 py-4 bg-gold text-bg-primary font-body uppercase text-xs tracking-widest font-semibold hover:bg-gold-pale hover:shadow-[0_0_20px_rgba(201,169,110,0.3)] transition-all duration-300 ease-out flex items-center gap-2 group"
            >
              Book Me 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, "#portfolio")}
              className="px-8 py-4 bg-transparent border border-border text-text-primary font-body uppercase text-xs tracking-widest hover:border-gold hover:text-gold transition-colors duration-300"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 md:left-[55%] -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="font-body text-[10px] uppercase tracking-widest text-text-muted [writing-mode:vertical-rl]">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
