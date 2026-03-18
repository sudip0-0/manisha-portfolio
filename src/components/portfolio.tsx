import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

type ProjectCategory = "All" | "Events" | "Brand Work" | "Voice Over";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  year: string;
  type: "image" | "video";
  src: string;
  thumb: string;
}

const projects: Project[] = [
  { id: 1, title: "Hero Motocorp Host", category: "Events", year: "2025", type: "image", src: "/images/hero_corp.jpeg?w=1200&q=80", thumb: "/images/hero_corp.jpeg?w=600&q=80" },
  { id: 2, title: "Investment Guru Host", category: "Events", year: "2025", type: "image", src: "/images/investment_guru.jpeg?w=1200&q=80", thumb: "/images/investment_guru.jpeg?w=600&q=80" },
  { id: 3, title: "CG Brand Host", category: "Events", year: "2026", type: "image", src: "/images/cg_riddara.jpeg?w=1200&q=80", thumb: "/images/cg_riddara.jpeg?w=600&q=80" },
  // { id: 4, title: "Himalayan Bank TVC", category: "Brand Work", year: "2023", type: "image", src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" },
  // { id: 5, title: "Tech Summit Nepal", category: "Events", year: "2023", type: "image", src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&q=80" },
  // { id: 6, title: "Boutique Hotel Launch", category: "Brand Work", year: "2022", type: "image", src: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&q=80" },
  // { id: 7, title: "Podcast Intro Series", category: "Voice Over", year: "2022", type: "video", src: "M7lc1UVf-VE", thumb: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=600&q=80" },
  // { id: 8, title: "Annual Awards Night", category: "Events", year: "2022", type: "image", src: "https://images.unsplash.com/photo-1511578314322-379a950e1dc9?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1511578314322-379a950e1dc9?w=600&q=80" },
];

const categories: ProjectCategory[] = ["All", "Events", "Brand Work", "Voice Over"];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const filteredProjects = projects.filter(p => activeTab === "All" || p.category === activeTab);

  // Need to find index in the original array to navigate properly, 
  // or navigate within the filtered array. We'll navigate within filtered.
  const openLightbox = (project: Project) => {
    const idx = filteredProjects.findIndex(p => p.id === project.id);
    setCurrentProjectIndex(idx);
    setLightboxOpen(true);
  };

  const nextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentProjectIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentProjectIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const currentProject = filteredProjects[currentProjectIndex];

  return (
    <section id="portfolio" className="w-full py-[var(--spacing-section-y)] bg-bg-secondary px-[var(--spacing-section-x)] border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body uppercase text-xs tracking-[0.2em] text-gold mb-4 block">Selected Work</span>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-text-primary leading-none">
              A Glimpse Into <br /><span className="italic text-gold">My World</span>
            </h2>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap gap-4 md:gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`font-body uppercase text-xs tracking-widest transition-colors duration-300 ${activeTab === cat ? "text-gold border-b border-gold pb-1" : "text-text-muted hover:text-text-primary pb-1"
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry/Grid Gallery */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer aspect-[4/5] overflow-hidden bg-bg-surface border border-border card-hover-effect"
                onClick={() => openLightbox(project)}
              >
                {/* Image / Thumbnail */}
                <img
                  src={project.thumb}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Video Play Icon overlay if video */}
                {project.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center text-bg-primary shadow-[0_0_30px_rgba(201,169,110,0.4)] group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-body uppercase text-[10px] tracking-widest text-rose-gold mb-2 block">
                    {project.category} · {project.year}
                  </span>
                  <h3 className="font-display text-xl text-text-primary group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg-primary/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-text-muted hover:text-gold transition-colors z-50 p-2"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Nav Arrows */}
            <button
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-text-muted hover:text-gold transition-colors z-50 p-4 hidden sm:block"
              onClick={prevProject}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-text-muted hover:text-gold transition-colors z-50 p-4 hidden sm:block"
              onClick={nextProject}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Content */}
            <motion.div
              className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking content
            >
              {currentProject.type === "image" ? (
                <img
                  src={currentProject.src}
                  alt={currentProject.title}
                  className="w-auto h-auto max-w-full max-h-[75vh] object-contain border border-border shadow-2xl"
                />
              ) : (
                <div className="w-full aspect-video border border-border shadow-2xl bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${currentProject.src}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}

              <div className="mt-6 text-center">
                <h3 className="font-display text-2xl md:text-3xl text-gold mb-2">{currentProject.title}</h3>
                <p className="font-body text-text-muted uppercase tracking-widest text-xs">
                  {currentProject.category} | {currentProject.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
