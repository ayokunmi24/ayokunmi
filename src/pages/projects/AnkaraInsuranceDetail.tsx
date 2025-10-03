import ProjectDetail from "@/components/ProjectDetail";

const AnkaraInsuranceDetail = () => {
  return (
    <ProjectDetail
      title="Ankara Insurance Portal"
      role="Product Delivery Analyst"
      company="Ankara Services (CIV)"
      industry="Healthcare, Insurance"
      overview="Ankara is a Third Party Health Administrator (TPHA) born digital in Cote d'Ivoire. Ankara's digital platform enables users to access a wide range of health services and products, including health insurance plans, telemedicine, and wellness programs. The company's mission is to empower individuals to take control of their health and well-being and to make high-quality healthcare more accessible and affordable."
      challenges={[
        "Limited access to quality healthcare in Cote d'Ivoire and the West African region",
        "Complex healthcare insurance processes that discouraged adoption",
        "Need to establish a digital-first health administrator brand in a traditional market",
        "Cultural considerations for serving French-speaking stakeholders and users",
        "Creating a comprehensive visual identity and brand from scratch"
      ]}
      solutions={[
        "Designed complete visual identity for the brand including logo and portal interfaces",
        "Created digital platform enabling access to health insurance plans, telemedicine, and wellness programs",
        "Implemented user-friendly interfaces tailored for Cote d'Ivoire market",
        "Developed culturally appropriate design elements after studying French culture",
        "Built comprehensive portals for users to manage their health insurance and services"
      ]}
      impact={[
        "Successfully launched a born-digital TPHA in Cote d'Ivoire",
        "Made high-quality healthcare more accessible and affordable in the region",
        "Empowered individuals to take control of their health through digital tools",
        "Established strong brand identity that resonated with local market",
        "Positioned Ankara for expansion across West Africa with scalable digital platform"
      ]}
      image="/lovable-uploads/ankara-insurance.png"
    />
  );
};

export default AnkaraInsuranceDetail;
