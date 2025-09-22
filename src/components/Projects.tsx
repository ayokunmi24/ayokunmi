import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Hydra API Gateway",
      description: "A consolidated API gateway that leverages integration to commercial banks to carry out financial transactions.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
      technologies: ["SaaS", "Enterprise Software", "B2B", "Fintech"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Chatbot & Virtual Reality (Luna)",
      description: "Luna is a conversational chatbot that interacts with customers on behalf of a customer success associate.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["AI/ML", "Virtual Reality", "SaaS", "Enterprise Software"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Credit Appraisal System (Recova)",
      description: "A digital lending solution that automates the entire credit process from application capture to disbursement.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      technologies: ["Fintech", "Loan Automation", "B2B", "Enterprise Software"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Leadway Health Management System",
      description: "Comprehensive West African Third-Party Administrator for health care needs of insurers and employer groups.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      technologies: ["Health", "Insurance", "Enterprise Software", "B2C"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Agency Banking Solution (Cluster)",
      description: "Agent banking solution that enables agents perform banking services via mobile and back-office web applications.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Agency Banking", "POS", "Fintech", "B2B"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Leadway SuperApp Design",
      description: "Comprehensive SuperApp design for Nigerian financial services conglomerate spanning multiple business areas.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      technologies: ["Insurance", "SaaS", "B2C", "Design"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden shadow-card hover:shadow-elegant transition-smooth hover:scale-105 border-border/20"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;