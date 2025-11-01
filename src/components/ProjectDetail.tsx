import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

interface ProjectDetailProps {
  title: string;
  role: string;
  company: string;
  industry: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  impact: string[];
  image: string;
  link?: string;
}

const ProjectDetail = ({
  title,
  role,
  company,
  industry,
  overview,
  challenges,
  solutions,
  impact,
  image,
  link
}: ProjectDetailProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
              {title}
            </h1>
          </div>
        </div>

        {/* Back Button - Top Left */}
        <div className="absolute top-6 left-6">
          <Link to="/">
            <Button variant="outline" className="bg-card/50 backdrop-blur-sm border-border text-foreground hover:bg-card/70">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* Theme Toggle - Top Right */}
        <div className="absolute top-6 right-6">
          <ThemeToggle />
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Project Info */}
        <div className="mb-16">
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            {overview}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">My Role</h3>
              <p className="text-lg text-foreground">{role}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Company</h3>
              <p className="text-lg text-foreground">{company}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Industry</h3>
              <p className="text-lg text-foreground">{industry}</p>
            </div>
          </div>

          {link && (
            <Button asChild variant="default" className="mt-4">
              <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                View Live Project
              </a>
            </Button>
          )}
        </div>

        {/* Challenges */}
        {challenges.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Challenges</h2>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex gap-4 text-muted-foreground">
                  <span className="text-primary text-xl mt-1 flex-shrink-0">•</span>
                  <span className="flex-1 text-lg leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Solutions */}
        {solutions.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Solutions</h2>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex gap-4 text-muted-foreground">
                  <span className="text-primary text-xl mt-1 flex-shrink-0">•</span>
                  <span className="flex-1 text-lg leading-relaxed">{solution}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Impact */}
        {impact.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Impact</h2>
            <ul className="space-y-4">
              {impact.map((item, index) => (
                <li key={index} className="flex gap-4 text-muted-foreground">
                  <span className="text-primary text-xl mt-1 flex-shrink-0">•</span>
                  <span className="flex-1 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProjectDetail;
