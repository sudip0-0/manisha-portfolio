import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80; // offset for sticky nav
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 border border-gold rounded-full flex items-center justify-center bg-bg-secondary group-hover:bg-gold transition-colors duration-300">
              <span className="font-display font-medium text-gold group-hover:text-bg-primary transition-colors text-xl">M</span>
            </div>
            <span className="font-display text-2xl tracking-wide hidden sm:block">
              Manisha <span className="italic text-gold">Shrestha</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="font-body uppercase text-[11px] tracking-[0.15em] text-text-primary hover:text-gold transition-colors nav-link-hover py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="w-[1px] h-6 bg-border mx-2"></div>
            
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-text-muted hover:text-gold transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="px-6 py-2.5 bg-gold text-bg-primary font-body uppercase text-xs tracking-wider font-medium hover:bg-gold-pale transition-colors hover:-translate-y-0.5 duration-300"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-bg-primary flex flex-col justify-center items-center px-6"
          >
            <button
              className="absolute top-6 right-6 text-text-primary p-4 hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>

            <ul className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="font-display text-4xl tracking-wide hover:text-gold hover:italic transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  className="px-8 py-4 bg-gold text-bg-primary font-body uppercase text-sm tracking-wider font-medium inline-block w-full"
                >
                  Book Me Now
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
