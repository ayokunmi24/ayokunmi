import ProjectDetail from "@/components/ProjectDetail";

const HydraApiDetail = () => {
  return (
    <ProjectDetail
      title="Hydra API Gateway"
      role="Product Manager"
      company="Qore"
      industry="SaaS, Enterprise Software, B2B, Fintech"
      overview="A consolidated API gateway that leverages integration to commercial banks to carry out financial transactions. Hydra provides a unified interface for businesses to access multiple banking services, streamlining payment processing, account management, and financial data aggregation."
      challenges={[
        "Fragmented banking APIs across different financial institutions",
        "Complex integration requirements for each bank's unique API",
        "Need for real-time transaction processing and reconciliation",
        "Security and compliance requirements across multiple banking partners",
        "Maintaining uptime and reliability across diverse banking systems"
      ]}
      solutions={[
        "Built unified API gateway abstracting complexity of individual bank APIs",
        "Implemented standardized endpoints for common banking operations",
        "Created real-time transaction processing and monitoring system",
        "Developed comprehensive security layer with encryption and compliance controls",
        "Built fault-tolerant architecture with failover mechanisms"
      ]}
      impact={[
        "Reduced integration time for businesses from months to weeks",
        "Enabled seamless multi-bank operations through single API",
        "Improved transaction success rates through intelligent routing",
        "Established trusted gateway for enterprise financial operations",
        "Scaled to support thousands of daily transactions across multiple banks"
      ]}
      image="/lovable-uploads/7255ba74-4352-4f42-84b0-493ebb9ce6f0.png"
      link="https://www.hydra.ng"
    />
  );
};

export default HydraApiDetail;
