import ProjectDetail from "@/components/ProjectDetail";

const CreditCheckDetail = () => {
  return (
    <ProjectDetail
      title="Credit Data Referencing Service"
      role="Product Manager"
      company="Qore"
      industry="Fintech, Credit Data, B2B"
      overview="A reliable finance and credit data platform providing comprehensive credit insights, income verification, and identity services for African financial institutions. The platform enables lenders to make informed credit decisions by aggregating and analyzing financial data from multiple sources."
      challenges={[
        "Fragmented credit information across multiple financial institutions in Africa",
        "Lack of standardized credit scoring and assessment tools",
        "Limited access to reliable income verification data",
        "Need for real-time credit decisioning capabilities",
        "Integration challenges with multiple banking systems and data sources"
      ]}
      solutions={[
        "Built comprehensive API platform for credit data aggregation and analysis",
        "Implemented real-time credit scoring and assessment algorithms",
        "Developed income verification services integrated with banking systems",
        "Created identity verification services for enhanced KYC processes",
        "Established secure data exchange protocols with financial institutions"
      ]}
      impact={[
        "Improved credit decisioning accuracy for lending institutions",
        "Reduced loan processing time through automated credit checks",
        "Enhanced financial inclusion by providing comprehensive credit profiles",
        "Enabled better risk assessment for lenders across African markets",
        "Established trusted credit referencing infrastructure for the fintech ecosystem"
      ]}
      image="/lovable-uploads/creditchek-platform.png"
      link="https://web.recova.ng"
    />
  );
};

export default CreditCheckDetail;
