import { motion } from "framer-motion";
import { Mic, Megaphone, Headphones, Users, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Emcee & Event Hosting",
      icon: <Mic strokeWidth={1} className="w-10 h-10 text-gold mb-6" />,
      desc: "Professional event hosting for corporate galas, product launches, weddings, cultural shows, and large-scale public events across Nepal."
    },
    {
      title: "Brand Advertising",
      icon: <Megaphone strokeWidth={1} className="w-10 h-10 text-gold mb-6" />,
      desc: "Compelling on-camera and on-ground promotion for brands, lifestyle campaigns, and consumer products — with quick script retention for seamless, efficient shoots."
    },
    {
      title: "Voice Over Artistry",
      icon: <Headphones strokeWidth={1} className="w-10 h-10 text-gold mb-6" />,
      desc: "Warm, articulate, and versatile voice-over work for commercials, explainers, corporate films, and digital content."
    },
    {
      title: "Public Speaking",
      icon: <Users strokeWidth={1} className="w-10 h-10 text-gold mb-6" />,
      desc: "Fluent in public speaking with a strong background in national level debate competitions — commanding any stage with clarity, confidence, and presence."
    }
  ];

  return (
    <section id="services" className="w-full py-[var(--spacing-section-y)] bg-bg-primary px-[var(--spacing-section-x)]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body uppercase text-xs tracking-[0.2em] text-gold mb-4 block">Expertise</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-text-primary">
            What I <span className="italic text-gold">Offer</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-bg-surface border border-border p-[var(--spacing-card-p)] rounded-sm card-hover-effect flex flex-col h-full group"
            >
              {svc.icon}
              <h3 className="font-display italic text-2xl md:text-3xl text-text-primary mb-4 group-hover:text-gold-pale transition-colors">
                {svc.title}
              </h3>
              <p className="font-body text-text-muted leading-relaxed mb-8 flex-grow">
                {svc.desc}
              </p>
              
              <a href="#contact" className="inline-flex items-center gap-2 font-body uppercase text-xs tracking-widest text-gold mt-auto group-hover:translate-x-2 transition-transform duration-300 w-fit">
                Inquire Now <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
