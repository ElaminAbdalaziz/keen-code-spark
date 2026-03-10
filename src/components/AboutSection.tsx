import { motion } from "framer-motion";
import { GraduationCap, Heart, Target } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="bg-card p-6 rounded-xl border border-border">
            <GraduationCap className="text-primary mb-4" size={28} />
            <h3 className="font-heading font-semibold text-foreground mb-2">Education</h3>
            <p className="text-sm text-muted-foreground">
              BSc in Computer Science and Artificial Intelligence, University of Cairo (Graduated Sep 2025).
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border">
            <Heart className="text-primary mb-4" size={28} />
            <h3 className="font-heading font-semibold text-foreground mb-2">Volunteer Work</h3>
            <p className="text-sm text-muted-foreground">
              Active contributor at SCCI, collaborating on impactful tech projects that bridge communities and innovation.
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border">
            <Target className="text-primary mb-4" size={28} />
            <h3 className="font-heading font-semibold text-foreground mb-2">Career Goal</h3>
            <p className="text-sm text-muted-foreground">
              Seeking an entry-level Back-End Developer role to build secure, scalable, and intelligent systems.
            </p>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          I'm a recent Computer Science and Artificial Intelligence graduate from the University of Cairo, passionate about combining back-end development with intelligent systems. Through my volunteer work with SCCI and hands-on project experience, I've built a strong foundation in full-stack development, software engineering, and machine learning. I thrive on solving complex problems and am eager to contribute to teams building impactful, technology-driven solutions.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
