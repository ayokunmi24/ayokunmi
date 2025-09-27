import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CreditChek Platform",
      description: "Reliable finance & credit data platform providing credit insights, income verification, and identity services for African financial institutions.",
      image: "/lovable-uploads/7255ba74-4352-4f42-84b0-493ebb9ce6f0.png",
      technologies: ["Credit Data", "Fintech", "B2B", "API Platform"],
      liveUrl: "https://www.creditchek.africa",
      githubUrl: "#"
    },
    {
      title: "Multi-Bank Direct Debit Solution",
      description: "Enterprise direct debit system enabling automated recurring payments across multiple banking institutions with mandate management.",
      image: "/lovable-uploads/1954f087-7966-4d49-928e-758c81f6d217.png",
      technologies: ["Direct Debit", "Banking API", "Enterprise", "Payment Systems"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Recova App Suite Redesign",
      description: "Complete redesign of digital lending platform with enhanced UX/UI, streamlined workflows, and improved credit assessment capabilities.",
      image: "/lovable-uploads/a72a5ab2-58c8-4d69-8977-7f9615165bfd.png",
      technologies: ["UX/UI Design", "Fintech", "Mobile App", "Web Platform"],
      liveUrl: "https://web.recova.ng",
      githubUrl: "#"
    },
    {
      title: "VendorCredit Management Portal",
      description: "Supply chain finance platform connecting vendors with corporate buyers, enabling invoice financing and vendor onboarding management.",
      image: "/lovable-uploads/b46319c5-6b7e-45b9-88a2-8effe43a4f1d.png",
      technologies: ["Supply Chain", "Vendor Management", "B2B", "Finance"],
      liveUrl: "https://vendorcredit.ng",
      githubUrl: "#"
    },
    {
      title: "Transit E-commerce Platform",
      description: "Comprehensive e-commerce solution for transit and logistics companies, featuring booking management, route optimization, and customer portal.",
      image: "/lovable-uploads/2ddb2bc2-9de0-43d9-8f3f-c80caa96c5ce.png",
      technologies: ["E-commerce", "Logistics", "Transit", "B2C"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Hydra API Gateway",
      description: "A consolidated API gateway that leverages integration to commercial banks to carry out financial transactions.",
      image: "/lovable-uploads/7255ba74-4352-4f42-84b0-493ebb9ce6f0.png",
      technologies: ["SaaS", "Enterprise Software", "B2B", "Fintech"],
      liveUrl: "https://www.hydra.ng",
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
      title: "Leadway Health Management System",
      description: "Comprehensive West African Third-Party Administrator for health care needs of insurers and employer groups.",
      image: "/lovable-uploads/b46319c5-6b7e-45b9-88a2-8effe43a4f1d.png",
      technologies: ["Health", "Insurance", "Enterprise Software", "B2C"],
      liveUrl: "https://leadwayhealth.com",
      githubUrl: "#"
    },
    {
      title: "Agency Banking Solution (Cluster)",
      description: "Agent banking solution that enables agents perform banking services via mobile and back-office web applications.",
      image: "/lovable-uploads/2ddb2bc2-9de0-43d9-8f3f-c80caa96c5ce.png",
      technologies: ["Agency Banking", "POS", "Fintech", "B2B"],
      liveUrl: "https://web.cluster.africa/logout",
      githubUrl: "#"
    },
    {
      title: "Leadway SuperApp Design",
      description: "Comprehensive SuperApp design for Nigerian financial services conglomerate spanning multiple business areas.",
      image: "/lovable-uploads/e594e4d5-89f4-4580-aaf8-72ca5ae95dd8.png",
      technologies: ["Insurance", "SaaS", "B2C", "Design"],
      liveUrl: "https://www.figma.com/proto/dV1Xp63mI9T8yZFrKCkmVa/-LW----UI-Concept?page-id=2233%3A30818&node-id=2363-25126&starting-point-node-id=2363%3A25126",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
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