import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Abdalaziz Yousif. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a href="mailto:elamin.abdulaziz@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={18} />
        </a>
        <a href="https://linkedin.com/in/abdalaziz-khalafalla-25b600391" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="https://github.com/ElaminAbdalaziz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
