import { motion } from "framer-motion";

export function About() {
  const stats = [
    { value: "50+", label: "Events Hosted" },
    { value: "70+", label: "Brand Campaigns" },
    { value: "3+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="relative w-full py-[var(--spacing-section-y)] bg-bg-secondary px-[var(--spacing-section-x)] border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-5/12 relative"
        >
          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-gold/20 translate-x-4 translate-y-4 z-0"></div>
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gold z-20 -translate-x-4 scale-y-75 origin-top"></div>

          <div className="relative z-10 aspect-[3/4] overflow-hidden bg-bg-surface">
            {/* about section secondary portrait */}
            <img
              src="/images/IMG_0358.jpeg"
              alt="Manisha Shrestha Speaking"
              className="w-full h-full object-cover object-center grayscale-[10%] hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>
        </motion.div>

        {/* Right Column - Text */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body uppercase text-xs tracking-[0.2em] text-gold mb-4 block">About</span>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-tight text-text-primary mb-8">
              The Voice Behind <br /><span className="italic text-gold">the Stage</span>
            </h2>

            <div className="font-body text-text-muted text-lg leading-relaxed space-y-6 max-w-2xl text-balance">
              <p>Based in the vibrant heart of Kathmandu, I've spent the last three years turning ordinary events into unforgettable experiences. Whether holding events, giving voice to a national campaign, or representing brands, my approach blends refined professionalism with genuine warmth.</p>
              <p>My journey began with a radio jockey and a passion for storytelling. Today, I partner with Nepal's leading organizations and international brands to craft narratives that resonate.</p>
            </div>

            <blockquote className="my-10 pl-6 border-l-2 border-gold py-2">
              <p className="font-display italic text-2xl md:text-3xl text-gold-pale leading-snug">"The stage is my space, but the audience is my inspiration." </p>
            </blockquote>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                className="flex flex-col gap-2"
              >
                <span className="font-display text-4xl lg:text-5xl text-gold">{stat.value}</span>
                <span className="font-body uppercase text-[10px] lg:text-xs tracking-widest text-text-muted">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
