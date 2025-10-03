import ProjectDetail from "@/components/ProjectDetail";

const TransitaDetail = () => {
  return (
    <ProjectDetail
      title="Transita E-Commerce Platform"
      role="Product Manager"
      company="Leadway"
      industry="E-commerce, Logistics, Transit"
      overview="Comprehensive e-commerce solution for transit and logistics companies, featuring booking management, route optimization, and customer portal. The platform digitalizes the entire transit booking and management process, making it easier for customers to book trips and for operators to manage their fleet and routes."
      challenges={[
        "Manual booking processes leading to inefficiencies and errors",
        "Limited visibility into route availability and scheduling",
        "Difficulty in managing fleet operations and customer bookings",
        "Lack of integrated payment and ticketing system",
        "Need for real-time tracking and customer communication"
      ]}
      solutions={[
        "Developed comprehensive e-commerce platform for transit bookings",
        "Implemented route optimization algorithms for efficient scheduling",
        "Created customer portal for easy booking and trip management",
        "Integrated payment gateway for seamless transactions",
        "Built fleet management system for operators"
      ]}
      impact={[
        "Streamlined booking process for customers and operators",
        "Improved operational efficiency through route optimization",
        "Enhanced customer experience with real-time updates and easy booking",
        "Increased revenue through better capacity utilization",
        "Positioned transit companies for digital transformation"
      ]}
      image="/lovable-uploads/transita-platform.png"
      link="https://webapp.leadway.com/TransitaApp"
    />
  );
};

export default TransitaDetail;
