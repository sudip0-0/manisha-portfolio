export function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-bg-primary border-t-2 border-gold/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div className="font-body text-text-muted text-sm order-3 md:order-1">
            © {new Date().getFullYear()} Manisha Shrestha. All rights reserved.
          </div>

          <a 
            href="#hero" 
            onClick={(e) => handleSmoothScroll(e, "#hero")}
            className="w-16 h-16 border border-gold rounded-full flex items-center justify-center bg-bg-secondary hover:bg-gold transition-colors duration-500 group order-1 md:order-2"
          >
            <span className="font-display font-medium text-gold group-hover:text-bg-primary transition-colors text-2xl">M</span>
          </a>

          <div className="flex gap-6 order-2 md:order-3">
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="font-body uppercase text-[10px] tracking-widest text-text-muted hover:text-gold transition-colors">About</a>
            <a href="#portfolio" onClick={(e) => handleSmoothScroll(e, "#portfolio")} className="font-body uppercase text-[10px] tracking-widest text-text-muted hover:text-gold transition-colors">Work</a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="font-body uppercase text-[10px] tracking-widest text-text-muted hover:text-gold transition-colors">Contact</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
