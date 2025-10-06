import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "CreditCheck Platform",
      description: "Reliable finance & credit data platform providing credit insights, income verification, and identity services for African financial institutions.",
      image: "/lovable-uploads/creditchek-platform.png",
      technologies: ["Credit Data", "Fintech", "B2B", "API Platform"],
      detailUrl: "/projects/creditcheck",
      liveUrl: "https://web.recova.ng",
      githubUrl: "#"
    },
    {
      title: "Multi-Bank Direct Debit Solution",
      description: "Enterprise direct debit system enabling automated recurring payments across multiple banking institutions with mandate management.",
      image: "/lovable-uploads/multi-bank-debit.png",
      technologies: ["Direct Debit", "Banking API", "Enterprise", "Payment Systems"],
      detailUrl: "/projects/multi-bank-debit",
      liveUrl: "https://web.recova.ng",
      githubUrl: "#"
    },
    {
      title: "Recova App Suite Redesign",
      description: "Complete redesign of digital lending platform with enhanced UX/UI, streamlined workflows, and improved credit assessment capabilities.",
      image: "/lovable-uploads/recova-redesign.png",
      technologies: ["UX/UI Design", "Fintech", "Mobile App", "Web Platform"],
      detailUrl: "/projects/recova-redesign",
      liveUrl: "https://web.recova.ng",
      githubUrl: "#"
    },
    {
      title: "Leadway Vendor Management Portal",
      description: "Vendor onboarding and management portal for Leadway Assurance Company, streamlining vendor registration, document management, and approval workflows.",
      image: "/lovable-uploads/vendor-management.png",
      technologies: ["Vendor Management", "Insurance", "B2B", "Portal"],
      detailUrl: "/projects/vendor-management",
      liveUrl: "https://webapp.leadway.com/vendorformapp",
      githubUrl: "#"
    },
    {
      title: "Transita E-commerce Platform",
      description: "Comprehensive e-commerce solution for transit and logistics companies, featuring booking management, route optimization, and customer portal.",
      image: "/lovable-uploads/transita-platform.png",
      technologies: ["E-commerce", "Logistics", "Transit", "B2C"],
      detailUrl: "/projects/transita",
      liveUrl: "https://webapp.leadway.com/TransitaApp",
      githubUrl: "#"
    },
    {
      title: "Hydra API Gateway",
      description: "A consolidated API gateway that leverages integration to commercial banks to carry out financial transactions.",
      image: "/lovable-uploads/7255ba74-4352-4f42-84b0-493ebb9ce6f0.png",
      technologies: ["SaaS", "Enterprise Software", "B2B", "Fintech"],
      detailUrl: "/projects/hydra-api",
      liveUrl: "https://www.hydra.ng",
      githubUrl: "#"
    },
    {
      title: "AI Chatbot & Virtual Reality (Luna)",
      description: "Luna is a conversational chatbot that interacts with customers on behalf of a customer success associate.",
      image: "/lovable-uploads/1954f087-7966-4d49-928e-758c81f6d217.png",
      technologies: ["AI/ML", "Virtual Reality", "SaaS", "Enterprise Software"],
      detailUrl: "/projects/luna",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Leadway Health Management System",
      description: "Comprehensive West African Third-Party Administrator for health care needs of insurers and employer groups.",
      image: "/lovable-uploads/leadway-health-app.png",
      technologies: ["Health", "Insurance", "Enterprise Software", "B2C"],
      detailUrl: "/projects/leadway-health",
      liveUrl: "https://leadwayhealth.com",
      githubUrl: "#"
    },
    {
      title: "Agency Banking Solution (Cluster)",
      description: "Agent banking solution that enables agents perform banking services via mobile and back-office web applications.",
      image: "/lovable-uploads/2ddb2bc2-9de0-43d9-8f3f-c80caa96c5ce.png",
      technologies: ["Agency Banking", "POS", "Fintech", "B2B"],
      detailUrl: "/projects/agency-banking",
      liveUrl: "https://web.cluster.africa/logout",
      githubUrl: "#"
    },
    {
      title: "Leadway SuperApp Design",
      description: "Comprehensive SuperApp design for Nigerian financial services conglomerate spanning multiple business areas.",
      image: "/lovable-uploads/e594e4d5-89f4-4580-aaf8-72ca5ae95dd8.png",
      technologies: ["Insurance", "SaaS", "B2C", "Design"],
      detailUrl: "/projects/leadway-superapp",
      liveUrl: "https://www.figma.com/proto/dV1Xp63mI9T8yZFrKCkmVa/-LW----UI-Concept?page-id=2233%3A30818&node-id=2363-25126&starting-point-node-id=2363%3A25126",
      githubUrl: "#"
    },
    {
      title: "Ankara Insurance Portal",
      description: "Third Party Health Administrator (TPHA) digital platform in Cote d'Ivoire enabling users to access health services including health insurance plans, telemedicine, and wellness programs.",
      image: "/lovable-uploads/ankara-insurance.png",
      technologies: ["Healthcare", "Insurance", "B2C", "Design"],
      detailUrl: "/projects/ankara-insurance",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Leadway Micro Investment Portal",
      description: "Investment platform that makes investing simple and accessible with cutting-edge tools, expert guidance and user-friendly interface. Features multi-currency investment options in naira or dollars.",
      image: "/lovable-uploads/leadway-investment.png",
      technologies: ["Finance", "Investment", "B2C", "Web Platform"],
      detailUrl: "/projects/leadway-investment",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Work
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
              <Link to={project.detailUrl || "#"} className="block">
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

                  <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                    {project.detailUrl && (
                      <Button 
                        variant="white" 
                        size="sm" 
                        className="flex-1"
                        asChild
                      >
                        <Link to={project.detailUrl}>
                          View Details
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl !== "#" && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;