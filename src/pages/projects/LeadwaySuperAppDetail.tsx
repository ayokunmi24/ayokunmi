import ProjectDetail from "@/components/ProjectDetail";

const LeadwaySuperAppDetail = () => {
  return (
    <ProjectDetail
      title="Leadway SuperApp Design"
      role="Product Designer"
      company="Leadway"
      industry="Insurance, SaaS, B2C, Design"
      overview="Comprehensive SuperApp design for Nigerian financial services conglomerate spanning multiple business areas. The SuperApp consolidates insurance, investment, health services, and other financial products into a unified digital experience, making it easy for customers to manage all their financial needs in one place."
      challenges={[
        "Consolidating multiple disparate business units into cohesive experience",
        "Balancing complexity of services with simplicity of user interface",
        "Creating consistent design language across diverse product offerings",
        "Maintaining brand identity while innovating digital experience",
        "Designing for diverse user base with varying digital literacy levels"
      ]}
      solutions={[
        "Designed unified navigation and information architecture",
        "Created comprehensive design system with reusable components",
        "Implemented progressive disclosure to manage complexity",
        "Developed intuitive onboarding flows for each service area",
        "Built responsive design supporting mobile-first approach"
      ]}
      impact={[
        "Unified customer experience across all Leadway services",
        "Improved user engagement through intuitive design",
        "Reduced customer support inquiries with clear UX patterns",
        "Positioned Leadway as digital-first financial services provider",
        "Created scalable design foundation for future product expansion"
      ]}
      image="/lovable-uploads/e594e4d5-89f4-4580-aaf8-72ca5ae95dd8.png"
      link="https://www.figma.com/proto/dV1Xp63mI9T8yZFrKCkmVa/-LW----UI-Concept?page-id=2233%3A30818&node-id=2363-25126&starting-point-node-id=2363%3A25126"
    />
  );
};

export default LeadwaySuperAppDetail;
