import ProjectDetail from "@/components/v2/ProjectDetail";

const LeadwayHealthDetail = () => {
  return (
    <ProjectDetail
      title="Leadway Health Management System"
      role="Product Delivery Analyst"
      overview="Leadway Health Management System is an HMO business and a comprehensive West African Third-Party Administrator, entirely dedicated to servicing proactively the health care needs of insurers, brokers, and employer groups across the African continent. The objective of this product is to increase health insurance penetration and access to quality healthcare by providing efficient health care management services and solutions."
      challenges={[
        "Traditional HMO workflows were manual and time-consuming, leading to delayed claim processing",
        "Limited transparency and trust between brokers, insurers, and care providers",
        "Low health insurance adoption due to complex access and engagement processes",
        "Need to scale health management services across multiple West African markets"
      ]}
      solutions={[
        "Digitized traditional HMO workflows through integrated web and mobile applications",
        "Implemented API-driven experiences for seamless integration with health providers and corporate portals",
        "Developed mobile-first applications to simplify access and increase engagement",
        "Created automated claim processing workflows to improve speed and accuracy",
        "Established comprehensive health management system (Prognosis) for centralized operations"
      ]}
      impact={[
        "Supported onboarding of 100+ corporate employer groups within the first year",
        "Processed over 300,000 health claims with a claims resolution accuracy of 98.6%",
        "Reduced average claim turnaround time from 15 days to under 5 days via digital processing workflows",
        "Enabled 24/7 access to health services through integrated mobile and web applications",
        "Positioned Leadway as a regional leader in digital health administration with a scalable model for West African markets",
        "Increased health insurance adoption by improving transparency and stakeholder trust"
      ]}
      image="/lovable-uploads/b46319c5-6b7e-45b9-88a2-8effe43a4f1d.png"
      link="https://leadwayhealth.com"
    />
  );
};

export default LeadwayHealthDetail;
