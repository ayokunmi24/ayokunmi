import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2 text-white">
              Ayokunmi Sodamola
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
              © {currentYear} Ayokunmi Sodamola. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              className="p-2 rounded-full hover:bg-white/10 transition-smooth hover:scale-110 text-muted-foreground hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ayokunmis" 
              className="p-2 rounded-full hover:bg-white/10 transition-smooth hover:scale-110 text-muted-foreground hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:ayokunmi84@gmail.com" 
              className="p-2 rounded-full hover:bg-white/10 transition-smooth hover:scale-110 text-muted-foreground hover:text-white"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ayokunmi Sodamola. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;