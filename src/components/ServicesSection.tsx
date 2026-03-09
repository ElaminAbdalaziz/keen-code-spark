import { motion } from "framer-motion";
import { Globe, Cpu, BrainCircuit } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Creating functional and user-centric web interfaces with modern frameworks and responsive design principles.",
  },
  {
    icon: Cpu,
    title: "Software Design",
    description: "Engineering robust, scalable software solutions with clean architecture and best practices.",
  },
  {
    icon: BrainCircuit,
    title: "ML & Deep Learning",
    description: "Developing and implementing intelligent models and systems that solve real-world problems.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          My <span className="text-primary">Services</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card p-8 rounded-xl border border-border hover:border-primary/40 transition-colors group"
          >
            <s.icon className="text-primary mb-5 group-hover:scale-110 transition-transform" size={36} />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
