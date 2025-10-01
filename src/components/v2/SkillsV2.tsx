const SkillsV2 = () => {
  const skills = [
    "Product Discovery",
    "Product Design",
    "User Experience",
    "Agile (SCRUM)",
    "Database Modeling",
    "AI/ML Product Strategy",
    "Data Analysis",
    "Machine Learning",
    "Business Analysis",
    "Change Management",
    "Process Optimization"
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center">
          Core Skill Set
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-light text-gray-900 group-hover:translate-x-2 transition-transform">
                  {skill}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-sm font-semibold text-gray-500 tracking-wider mb-6">
            TECHNOLOGIES & TOOLS
          </p>
          <div className="flex flex-wrap gap-4">
            {["Google Analytics", "Jira", "PowerBI", "Excel", "Figma", "Visio", "Tableau", "PowerPoint", "MS Project", "Confluence", "Linux"].map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsV2;
