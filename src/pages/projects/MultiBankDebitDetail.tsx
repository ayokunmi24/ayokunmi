import ProjectDetail from "@/components/ProjectDetail";

const MultiBankDebitDetail = () => {
  return (
    <ProjectDetail
      title="Multi-Bank Direct Debit Solution"
      role="Product Manager"
      company="Qore"
      industry="Banking, Payment Systems, Enterprise"
      overview="Enterprise direct debit system enabling automated recurring payments across multiple banking institutions with comprehensive mandate management. The solution streamlines direct debit operations for financial institutions, allowing them to manage customer payment mandates across different banks efficiently."
      challenges={[
        "Complex integration requirements across multiple banking institutions",
        "Manual mandate management processes leading to inefficiencies",
        "Lack of standardization in direct debit operations across banks",
        "Difficulty in tracking and managing recurring payment mandates",
        "Need for reliable automated payment collection system"
      ]}
      solutions={[
        "Developed enterprise-grade direct debit platform with multi-bank integration",
        "Implemented automated mandate management and validation system",
        "Created standardized APIs for seamless bank integrations",
        "Built comprehensive dashboard for tracking and managing payment mandates",
        "Established secure payment collection and reconciliation workflows"
      ]}
      impact={[
        "Enabled automated recurring payments across multiple banking institutions",
        "Reduced manual intervention in mandate management and payment collection",
        "Improved payment success rates through reliable automated processes",
        "Enhanced operational efficiency for financial institutions",
        "Positioned as a key component of the Recova lending automation suite"
      ]}
      image="/lovable-uploads/multi-bank-debit.png"
      link="https://web.recova.ng"
    />
  );
};

export default MultiBankDebitDetail;
