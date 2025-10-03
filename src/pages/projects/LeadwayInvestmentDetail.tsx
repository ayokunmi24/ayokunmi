import ProjectDetail from "@/components/ProjectDetail";

const LeadwayInvestmentDetail = () => {
  return (
    <ProjectDetail
      title="Leadway Micro Investment Portal"
      role="Product Delivery Analyst"
      company="Leadway Asset Management"
      industry="Finance, Investment"
      overview="A webapp that makes investing simple and accessible to all, with its cutting-edge tools, expert guidance and user-friendly interface. Whether investing to edge inflation or for any other reason, the portal gives users the confidence to make smart investment decisions and grow their wealth. With the Leadway Investment Portal, investors have a one-stop shop for managing their investments and reaching their financial goals."
      challenges={[
        "Limited investment accessibility for retail investors in Nigeria",
        "Complex investment processes deterring new investors",
        "Need for multi-currency investment options (Naira and Dollar) to hedge against inflation",
        "Lack of user-friendly platform for micro-investments",
        "Limited financial literacy and investment guidance for retail users"
      ]}
      solutions={[
        "Developed user-friendly web portal with intuitive investment management interface",
        "Implemented multi-currency investment options allowing users to invest in both Naira and Dollars",
        "Created cutting-edge tools for portfolio management and tracking",
        "Integrated expert guidance features to help users make informed decisions",
        "Designed streamlined investment workflows from registration to portfolio management"
      ]}
      impact={[
        "Made investing accessible to retail investors with varying budget sizes",
        "Enabled users to hedge against inflation through multi-currency investment options",
        "Provided competitive ROIs for both Naira and Dollar investments",
        "Simplified investment decisions through expert guidance and user-friendly interface",
        "Positioned Leadway Asset Management as a leader in digital micro-investment solutions"
      ]}
      image="/lovable-uploads/leadway-investment.png"
    />
  );
};

export default LeadwayInvestmentDetail;
