import ProjectDetail from "@/components/ProjectDetail";

const AgencyBankingDetail = () => {
  return (
    <ProjectDetail
      title="Agency Banking Solution (Cluster)"
      role="Product Manager"
      company="Cluster"
      industry="Agency Banking, POS, Fintech, B2B"
      overview="Agent banking solution that enables agents perform banking services via mobile and back-office web applications. The platform empowers agents to offer essential banking services including deposits, withdrawals, transfers, and bill payments, bringing financial services to underserved communities."
      challenges={[
        "Limited banking infrastructure in rural and remote areas",
        "Need for reliable offline-capable mobile application",
        "Complex agent onboarding and KYC processes",
        "Transaction reconciliation across multiple agents and locations",
        "Training and support for agents with varying technical expertise"
      ]}
      solutions={[
        "Developed mobile-first agent application with offline capabilities",
        "Built comprehensive back-office web portal for agent management",
        "Implemented streamlined agent onboarding with digital KYC",
        "Created real-time transaction monitoring and reconciliation system",
        "Designed intuitive UI optimized for agents with minimal training"
      ]}
      impact={[
        "Expanded banking access to thousands of underserved communities",
        "Enabled agents to process millions in daily transactions",
        "Reduced transaction costs for end customers",
        "Created new income opportunities for agents across regions",
        "Improved financial inclusion through accessible banking services"
      ]}
      image="/lovable-uploads/2ddb2bc2-9de0-43d9-8f3f-c80caa96c5ce.png"
      link="https://web.cluster.africa/logout"
    />
  );
};

export default AgencyBankingDetail;
