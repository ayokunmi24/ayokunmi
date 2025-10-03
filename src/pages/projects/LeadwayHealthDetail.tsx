import ProjectDetail from "@/components/ProjectDetail";

const LeadwayHealthDetail = () => {
  return (
    <ProjectDetail
      title="Leadway Health Management System"
      role="Product Delivery Analyst"
      company="Leadway"
      industry="Health, Insurance"
      overview="Leadway Health Management System is an HMO business and a comprehensive West African Third-Party Administrator, entirely dedicated to servicing proactively the health care needs of insurers, brokers and employer groups across the African continent. The objective of this product is to increase health insurance penetration and access to quality healthcare by providing efficient health care management services and solutions."
      challenges={[
        "Traditional HMO workflows were manual, slow, and lacked transparency across brokers, insurers, and care providers",
        "Health insurance adoption was low due to complex access points and limited digital engagement",
        "Claims processing was time-consuming, taking an average of 15 days to resolve",
        "Limited 24/7 access to health services for enrollees and corporate groups"
      ]}
      solutions={[
        "Digitized HMO workflows through integrated web and mobile applications",
        "Implemented API-driven experiences for seamless integration with health providers",
        "Developed mobile-first applications for iOS and Android platforms",
        "Created dedicated portals for corporate organizations and health providers",
        "Built the Prognosis Health Management System for streamlined operations"
      ]}
      impact={[
        "Supported onboarding of 100+ corporate employer groups within the first year",
        "Processed over 300,000 health claims with a claims resolution accuracy of 98.6%",
        "Reduced average claim turnaround time from 15 days to under 5 days via digital processing workflows",
        "Enabled 24/7 access to health services through integrated mobile and web applications",
        "Positioned Leadway as a regional leader in digital health administration, with a scalable model for West African markets"
      ]}
      image="/lovable-uploads/leadway-health-app.png"
      link="https://leadwayhealth.com"
    />
  );
};

export default LeadwayHealthDetail;
