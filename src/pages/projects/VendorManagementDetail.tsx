import ProjectDetail from "@/components/ProjectDetail";

const VendorManagementDetail = () => {
  return (
    <ProjectDetail
      title="Leadway Vendor Management Portal"
      role="Product Delivery Analyst"
      company="Leadway"
      industry="Insurance, Enterprise Software"
      overview="This project was birthed in a bid to digitalise certain processes in the organisation. Prior to the implementation of this project, vendor registration has always been performed with the use of an excel sheet. However, in a bid to play in the digital space it was necessary the organisation implemented a portal to keep hold of vendors/service provider registration for procurement purpose. The objective of this project was to digitalise the procurement process of service providers in the organisation."
      challenges={[
        "Manual vendor registration using Excel sheets was inefficient and error-prone",
        "Lack of centralized system for tracking vendor information and documentation",
        "Difficult to manage procurement processes across multiple departments",
        "Limited visibility into vendor status and approval workflows",
        "No standardized process for vendor onboarding and compliance verification"
      ]}
      solutions={[
        "Managed the team that delivered the development of the vendor management portal",
        "Worked with the technical team to interpret the provided APIs and drew up a comprehensive user flow",
        "Collaborated with the design team to create intuitive UI for the product features",
        "Implemented digital vendor registration and document management system",
        "Created automated approval workflows for vendor onboarding"
      ]}
      impact={[
        "Successfully digitalized the vendor procurement process, eliminating Excel-based workflows",
        "Improved vendor registration efficiency and reduced processing time",
        "Enhanced visibility and tracking of vendor information across the organization",
        "Streamlined approval workflows for faster vendor onboarding",
        "Positioned Leadway for better procurement management and vendor relationship tracking"
      ]}
      image="/lovable-uploads/vendor-management.png"
      link="https://webapp.leadway.com/vendorformapp"
    />
  );
};

export default VendorManagementDetail;
