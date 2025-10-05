import ProjectDetail from "@/components/ProjectDetail";

const LunaDetail = () => {
  return (
    <ProjectDetail
      title="AI Chatbot & Virtual Reality (Luna)"
      role="Product Manager"
      company="InvestED Inc."
      industry="EdTech, AI/ML"
      overview="Luna is an AI-powered conversational chatbot designed to interact with customers on behalf of customer success associates. Built with advanced natural language processing and virtual reality capabilities, Luna provides personalized, context-aware responses that enhance customer experience while reducing support workload."
      challenges={[
        "Creating natural, human-like conversations that could handle complex customer queries across multiple domains",
        "Integrating virtual reality elements to provide immersive customer support experiences",
        "Ensuring the AI maintained brand voice consistency while personalizing responses",
        "Developing a system that could seamlessly escalate to human agents when needed",
        "Training the AI to understand context from previous interactions and customer history"
      ]}
      solutions={[
        "Implemented advanced NLP models trained on thousands of customer interactions to understand intent and context",
        "Developed a hybrid VR/chat interface that allows customers to choose their preferred interaction method",
        "Created a brand voice framework with tone guidelines that the AI references for all responses",
        "Built intelligent escalation triggers that identify when human intervention would be more appropriate",
        "Integrated customer data platform to provide Luna with full context of customer history and preferences",
        "Designed fallback mechanisms and continuous learning loops to improve response quality over time"
      ]}
      impact={[
        "Reduced average customer support response time by 73% through instant AI responses",
        "Achieved 89% customer satisfaction rating for AI-handled interactions",
        "Enabled 24/7 customer support coverage without additional staffing costs",
        "Decreased support ticket volume by 45% by resolving common queries automatically",
        "Improved first-contact resolution rate from 62% to 84%",
        "Generated valuable insights into common customer pain points through conversation analysis"
      ]}
      image="/lovable-uploads/1954f087-7966-4d49-928e-758c81f6d217.png"
    />
  );
};

export default LunaDetail;
