import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const taglines = [
  "Computer Science & AI Graduate",
  "Back-End Focused Full-Stack Developer",
  "Building Secure & Scalable Solutions",
];

const HeroSection = () => {
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTagIndex((i) => (i + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-4">Hello, I'm</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4">
            Abdalaziz Yousif<br />
            <span className="text-primary">Elamin Khalafalla</span>
          </h1>
          <motion.p
            key={tagIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-lg text-muted-foreground mb-8 h-7"
          >
            {taglines[tagIndex]}
          </motion.p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border border-border text-foreground px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
            >
              View Work
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 glow-primary">
            <img
              src={profileImg}
              alt="Abdalaziz Yousif Elamin Khalafalla"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
