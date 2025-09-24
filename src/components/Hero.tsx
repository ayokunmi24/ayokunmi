import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import ayokunmiPhoto from "@/assets/ayokunmi-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-background">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-foreground/20 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-foreground/10 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-foreground/30 rounded-full animate-pulse delay-500" />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-foreground/20 rounded-full animate-pulse delay-700" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-border">
            <img 
              src={ayokunmiPhoto}
              alt="Ayokunmi Sodamola"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400">✨</div>
          <div className="absolute -bottom-1 -left-2 w-3 h-3 text-blue-400">⚡</div>
        </div>

        <div className="mb-8 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hi, I'm Ayokunmi Sodamola
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Builder | Product Manager | Growth-Driven Strategist
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          From Idea to Scalable Product — Research, Strategy & AI
        </p>
        
        <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Based in Waco, Texas | I work with cross-functional teams to deliver products for startups and multi-national brands, 
          leveraging qualitative research and product strategy to drive growth and create impactful user experiences.
        </p>

        {/* Announcement Banner */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-secondary/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xl">📣</span>
              <span className="text-sm font-semibold text-foreground">Open to New Opportunities</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Let's build something impactful together! Seeking roles in Product Management, 
              Strategy, or Innovation.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            variant="default" 
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-border text-foreground hover:bg-secondary/50"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a 
            href="https://github.com" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ayokunmis" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://twitter.com" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a 
            href="mailto:ayokunmi84@gmail.com" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;