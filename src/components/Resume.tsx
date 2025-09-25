import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Linkedin } from "lucide-react";

const Resume = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Résumé & Profile
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Resume Download */}
          <Card className="shadow-card border-border/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="mb-4">
                  <img 
                    src="/resume-snapshot.png" 
                    alt="Resume Preview" 
                    className="w-full max-w-sm mx-auto rounded-lg shadow-lg border border-white/20"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Download Résumé</h3>
                <p className="text-muted-foreground mb-6">
                  Download my comprehensive résumé to see my full background, skills, and experience in product development and AI integration.
                </p>
              </div>
              <Button 
                variant="default" 
                size="lg" 
                className="w-full bg-white text-black hover:bg-white/90"
                asChild
              >
                <a href="/resume-snapshot.png" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Résumé
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* LinkedIn Profile */}
          <Card className="shadow-card border-border/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="mb-4">
                  <img 
                    src="/linkedin-snapshot.png" 
                    alt="LinkedIn Profile Preview" 
                    className="w-full max-w-sm mx-auto rounded-lg shadow-lg border border-white/20"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Connect on LinkedIn</h3>
                <p className="text-muted-foreground mb-6">
                  See more about my background, experiences, certifications, and professional network on LinkedIn.
                </p>
              </div>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-white text-white hover:bg-white hover:text-black"
                asChild
              >
                <a href="https://www.linkedin.com/in/ayokunmis" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  View Full Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-secondary/20 backdrop-blur-sm border border-border/20 p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Actively seeking Summer 2026 MBA internship opportunities to build innovative products at the intersection of tech and business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                className="bg-white text-black hover:bg-white/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule a Call
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Build Something
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;