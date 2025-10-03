import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

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
      {/* Header */}
      <header className="border-b border-border/20 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full bg-card">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <img 
            src={image} 
            alt={title}
            className="w-full h-[400px] object-cover rounded-lg shadow-elegant"
          />
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Title and Meta */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {title}
          </h1>
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div>
              <span className="font-semibold text-foreground">Role:</span> {role}
            </div>
            <div>
              <span className="font-semibold text-foreground">Company:</span> {company}
            </div>
            <div>
              <span className="font-semibold text-foreground">Industry:</span> {industry}
            </div>
          </div>
          {link && (
            <div className="mt-6">
              <Button asChild variant="default">
                <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
              </Button>
            </div>
          )}
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {overview}
          </p>
        </section>

        {/* Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Challenges</h2>
          <ul className="space-y-3">
            {challenges.map((challenge, index) => (
              <li key={index} className="flex gap-3 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span className="flex-1 leading-relaxed">{challenge}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Solutions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Solutions</h2>
          <ul className="space-y-3">
            {solutions.map((solution, index) => (
              <li key={index} className="flex gap-3 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span className="flex-1 leading-relaxed">{solution}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Impact</h2>
          <ul className="space-y-3">
            {impact.map((item, index) => (
              <li key={index} className="flex gap-3 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span className="flex-1 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Back Button */}
        <div className="pt-8 border-t border-border/20">
          <Link to="/">
            <Button variant="outline" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
