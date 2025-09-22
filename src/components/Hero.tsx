import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 gradient-hero backdrop-blur-[1px]" />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-glow/40 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent/20 rounded-full animate-pulse delay-500" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 space-y-2">
          <p className="text-lg font-medium text-muted-foreground tracking-wide">
            Hello, I'm
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Ayokunmi
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-accent mb-6">
            Product Manager
          </p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          I work with cross-functional teams to deliver products for startups and multi-national brands, 
          leveraging qualitative research and product strategy to drive growth and create impactful user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="glass" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="https://github.com" 
            className="group transition-bounce hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-3 rounded-full bg-card/20 backdrop-blur-sm border border-border/20 group-hover:shadow-glow group-hover:bg-card/30">
              <Github className="w-6 h-6" />
            </div>
          </a>
          <a 
            href="https://linkedin.com" 
            className="group transition-bounce hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-3 rounded-full bg-card/20 backdrop-blur-sm border border-border/20 group-hover:shadow-glow group-hover:bg-card/30">
              <Linkedin className="w-6 h-6" />
            </div>
          </a>
          <a 
            href="mailto:alex@example.com" 
            className="group transition-bounce hover:scale-110"
          >
            <div className="p-3 rounded-full bg-card/20 backdrop-blur-sm border border-border/20 group-hover:shadow-glow group-hover:bg-card/30">
              <Mail className="w-6 h-6" />
            </div>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;