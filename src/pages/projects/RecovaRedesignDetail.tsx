import ProjectDetail from "@/components/ProjectDetail";

const RecovaRedesignDetail = () => {
  return (
    <ProjectDetail
      title="Redesign of Recova App Suite"
      role="Product Manager"
      company="Qore"
      industry="SaaS, Loan Automation, Fintech"
      overview="Recova® is an end-to-end lending automation solution built on an advanced technology infrastructure that digitizes the entire loan onboarding lifecycle from customer walk-in/request to credit decisioning, automated disbursement, loan collections and delinquency management. It consists of three applications: Credit Appraisal Solution, Credit Data Referencing, and Multi-bank Direct Debit Solution."
      challenges={[
        "Users reported confusion and inefficiency in navigating the existing platform across three different applications",
        "Manual processes in loan onboarding were creating bottlenecks and delays",
        "Lack of cohesive user experience across Credit Appraisal, Data Referencing, and Direct Debit modules",
        "Limited feedback from commercial banks, MFBs, and fintechs on improving the platform's usability"
      ]}
      solutions={[
        "Conducted comprehensive user research sessions with product team and designers to understand pain points and gather feedback",
        "Worked with design agency and business analysts to create a unified design language across all three applications",
        "Implemented streamlined workflows for credit decisioning and automated disbursement",
        "Collaborated with cross-functional teams including product designers across subsidiary companies to align design with user needs",
        "Created weekly implementation reports for senior management and stakeholders to track progress"
      ]}
      impact={[
        "Improved user satisfaction scores across commercial banks, MFBs, and fintech clients",
        "Reduced loan onboarding time through streamlined digital workflows",
        "Created a cohesive user experience that aligned with end-user expectations",
        "Established a scalable design system that could be applied across all Qore products",
        "Enhanced operational efficiency for financial institutions using the platform"
      ]}
      image="/lovable-uploads/recova-redesign.png"
      link="https://web.recova.ng"
    />
  );
};

export default RecovaRedesignDetail;
