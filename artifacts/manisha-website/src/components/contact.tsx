import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Mail, Phone, Instagram, Check } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  date: z.string().optional(),
  details: z.string().min(10, "Please provide some details about your inquiry"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate network request since there's no backend
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data (client-only):", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="w-full py-[var(--spacing-section-y)] bg-bg-primary px-[var(--spacing-section-x)] border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column - Contact Info */}
        <motion.div 
          className="w-full lg:w-5/12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body uppercase text-xs tracking-[0.2em] text-gold mb-4 block">Get In Touch</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-tight text-text-primary mb-8">
            Let's Work <br/><span className="italic text-gold">Together</span>
          </h2>
          
          <p className="font-body text-text-muted text-lg mb-12 max-w-md">
            Available for domestic and international engagements. Please provide details about your upcoming event or campaign to discuss collaboration.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-border rounded-full flex items-center justify-center shrink-0 text-gold">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display text-xl text-text-primary mb-1">Location</h4>
                <p className="font-body text-text-muted">Kathmandu, Nepal<br/>Available worldwide</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-border rounded-full flex items-center justify-center shrink-0 text-gold">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display text-xl text-text-primary mb-1">Email</h4>
                <a href="mailto:hello@manishashrestha.com" className="font-body text-text-muted hover:text-gold transition-colors">iammanishashr@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-border rounded-full flex items-center justify-center shrink-0 text-gold">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display text-xl text-text-primary mb-1">Phone</h4>
                <a href="tel:+9779800000000" className="font-body text-text-muted hover:text-gold transition-colors">+977 9709066813</a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-border flex gap-6">
            <a href="https://www.instagram.com/memanisha__/" target="_blank" rel="noreferrer" className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-text-muted hover:bg-gold hover:text-bg-primary hover:border-gold transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            {/* TikTok Icon placeholder using text since lucide doesn't have official tiktok */}
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-text-muted font-display text-xl italic hover:bg-gold hover:text-bg-primary hover:border-gold transition-all duration-300">
              t
            </a>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div 
          className="w-full lg:w-7/12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-bg-secondary border border-border p-8 md:p-12 rounded-sm relative overflow-hidden">
            {isSubmitted ? (
              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center bg-bg-secondary z-10 p-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-display text-3xl text-gold mb-4">Inquiry Received</h3>
                <p className="font-body text-text-muted">
                  Thank you for reaching out. I'll review your details and get back to you within 24-48 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 font-body uppercase text-xs tracking-widest text-text-muted hover:text-gold transition-colors border-b border-border hover:border-gold pb-1"
                >
                  Send another message
                </button>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 relative">
                  <label className="font-body uppercase text-[10px] tracking-widest text-text-muted">Full Name *</label>
                  <input 
                    {...register("name")}
                    className="w-full bg-transparent border-b border-border py-3 text-text-primary focus:outline-none focus:border-gold transition-colors placeholder:text-text-muted/30"
                    placeholder="Jane Doe"
                  />
                  {errors.name && <span className="absolute -bottom-5 left-0 text-rose-gold text-[10px] uppercase tracking-wider">{errors.name.message}</span>}
                </div>

                <div className="space-y-2 relative">
                  <label className="font-body uppercase text-[10px] tracking-widest text-text-muted">Email Address *</label>
                  <input 
                    {...register("email")}
                    type="email"
                    className="w-full bg-transparent border-b border-border py-3 text-text-primary focus:outline-none focus:border-gold transition-colors placeholder:text-text-muted/30"
                    placeholder="jane@example.com"
                  />
                  {errors.email && <span className="absolute -bottom-5 left-0 text-rose-gold text-[10px] uppercase tracking-wider">{errors.email.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 relative">
                  <label className="font-body uppercase text-[10px] tracking-widest text-text-muted">Phone Number</label>
                  <input 
                    {...register("phone")}
                    type="tel"
                    className="w-full bg-transparent border-b border-border py-3 text-text-primary focus:outline-none focus:border-gold transition-colors placeholder:text-text-muted/30"
                    placeholder="+977"
                  />
                </div>

                <div className="space-y-2 relative">
                  <label className="font-body uppercase text-[10px] tracking-widest text-text-muted">Event Date</label>
                  <input 
                    {...register("date")}
                    type="date"
                    className="w-full bg-transparent border-b border-border py-3 text-text-primary focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="space-y-2 relative">
                <label className="font-body uppercase text-[10px] tracking-widest text-text-muted">Service Required *</label>
                <select 
                  {...register("service")}
                  className="w-full bg-transparent border-b border-border py-3 text-text-primary focus:outline-none focus:border-gold transition-colors appearance-none rounded-none"
                >
                  <option value="" className="bg-bg-secondary">Select a service</option>
                  <option value="emcee" className="bg-bg-secondary">Emcee & Event Hosting</option>
                  <option value="brand" className="bg-bg-secondary">Brand & Product Advertising</option>
                  <option value="voice" className="bg-bg-secondary">Voice Over</option>
                  <option value="speaking" className="bg-bg-secondary">Public Speaking</option>
                  <option value="other" className="bg-bg-secondary">Other</option>
                </select>
                {errors.service && <span className="absolute -bottom-5 left-0 text-rose-gold text-[10px] uppercase tracking-wider">{errors.service.message}</span>}
              </div>

              <div className="space-y-2 relative">
                <label className="font-body uppercase text-[10px] tracking-widest text-text-muted">Event/Project Details *</label>
                <textarea 
                  {...register("details")}
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-text-primary focus:outline-none focus:border-gold transition-colors placeholder:text-text-muted/30 resize-none"
                  placeholder="Tell me about your event..."
                />
                {errors.details && <span className="absolute -bottom-5 left-0 text-rose-gold text-[10px] uppercase tracking-wider">{errors.details.message}</span>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gold text-bg-primary font-body uppercase text-xs tracking-widest font-semibold hover:bg-gold-pale transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
