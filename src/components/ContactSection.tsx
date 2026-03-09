import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-8 mx-auto" />
        <p className="text-muted-foreground mb-10">
          I'm currently looking for entry-level Back-End Developer opportunities. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:elamin.abdulaziz@gmail.com"
            className="flex items-center gap-3 bg-card border border-border px-6 py-4 rounded-xl hover:border-primary transition-colors group w-full sm:w-auto"
          >
            <Mail className="text-primary" size={20} />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              elamin.abdulaziz@gmail.com
            </span>
          </a>
          <a
            href="https://linkedin.com/in/abdalaziz-khalafalla-25b600391"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-border px-6 py-4 rounded-xl hover:border-primary transition-colors group w-full sm:w-auto"
          >
            <Linkedin className="text-primary" size={20} />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
          </a>
          <a
            href="https://github.com/ElaminAbdalaziz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-border px-6 py-4 rounded-xl hover:border-primary transition-colors group w-full sm:w-auto"
          >
            <Github className="text-primary" size={20} />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
