import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Hydra API Gateway",
      description: "A consolidated API gateway that leverages integration to commercial banks to carry out financial transactions.",
      image: "/lovable-uploads/7255ba74-4352-4f42-84b0-493ebb9ce6f0.png",
      technologies: ["SaaS", "Enterprise Software", "B2B", "Fintech"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Chatbot & Virtual Reality (Luna)",
      description: "Luna is a conversational chatbot that interacts with customers on behalf of a customer success associate.",
      image: "/lovable-uploads/1954f087-7966-4d49-928e-758c81f6d217.png",
      technologies: ["AI/ML", "Virtual Reality", "SaaS", "Enterprise Software"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Credit Appraisal System (Recova)",
      description: "A digital lending solution that automates the entire credit process from application capture to disbursement.",
      image: "/lovable-uploads/a72a5ab2-58c8-4d69-8977-7f9615165bfd.png",
      technologies: ["Fintech", "Loan Automation", "B2B", "Enterprise Software"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Leadway Health Management System",
      description: "Comprehensive West African Third-Party Administrator for health care needs of insurers and employer groups.",
      image: "/lovable-uploads/b46319c5-6b7e-45b9-88a2-8effe43a4f1d.png",
      technologies: ["Health", "Insurance", "Enterprise Software", "B2C"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Agency Banking Solution (Cluster)",
      description: "Agent banking solution that enables agents perform banking services via mobile and back-office web applications.",
      image: "/lovable-uploads/2ddb2bc2-9de0-43d9-8f3f-c80caa96c5ce.png",
      technologies: ["Agency Banking", "POS", "Fintech", "B2B"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Leadway SuperApp Design",
      description: "Comprehensive SuperApp design for Nigerian financial services conglomerate spanning multiple business areas.",
      image: "/lovable-uploads/e594e4d5-89f4-4580-aaf8-72ca5ae95dd8.png",
      technologies: ["Insurance", "SaaS", "B2C", "Design"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and inventory management system.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team coordination features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Real-time", "PWA"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for business intelligence with advanced charting and reporting capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["D3.js", "Python", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
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