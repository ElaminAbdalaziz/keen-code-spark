import { motion } from "framer-motion";

const categories = [
  {
    title: "Core Competencies",
    skills: ["Software Engineering", "Full-Stack Development", "Problem Solving", "System Design"],
  },
  {
    title: "Technologies",
    skills: ["PHP", "Laravel", "Python", "Machine Learning", "MySQL", "Database Management", "Git", "REST APIs"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
          >
            <h3 className="font-heading text-lg font-semibold text-foreground mb-5">{cat.title}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-card border border-border text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
