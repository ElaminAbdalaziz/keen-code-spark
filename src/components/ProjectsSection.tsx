import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, ShoppingCart } from "lucide-react";

const projects = [
  {
    icon: ShoppingCart,
    title: "SCCI'24 Website & Store Module",
    role: "Full-Stack Developer · Oct 2023 – May 2024",
    description:
      "Collaborated with a team to launch the SCCI'24 website. Spearheaded the development of a dedicated store module, strengthening skills in PHP, Laravel, and Database Management.",
    tags: ["PHP", "Laravel", "MySQL", "Team Collaboration"],
  },
  {
    icon: ShieldCheck,
    title: "AI-Powered Firewall",
    role: "Final Year Project · 2025",
    description:
      "Developed an intelligent firewall system using Python and Machine Learning to demonstrate the application of AI in creating secure, scalable network solutions.",
    tags: ["Python", "Machine Learning", "Network Security", "AI"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card p-8 rounded-xl border border-border hover:border-primary/40 transition-colors group"
          >
            <p.icon className="text-primary mb-4" size={32} />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-1">{p.title}</h3>
            <p className="text-xs text-primary mb-4">{p.role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs bg-secondary text-muted-foreground px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
