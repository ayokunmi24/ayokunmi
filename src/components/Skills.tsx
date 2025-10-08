import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Competencies",
      skills: [
        ["Product Discovery", "Product Design"],
        ["User Experience", "Agile(SCRUM)"],
        ["Database Modeling", "AI/ML Product Strategy"],
        ["Data Analysis", "Machine Learning"],
        ["Business Analysis", "Change Management"],
        ["Process Optimization"]
      ]
    },
    {
      title: "Programming Languages",
      skills: ["Python", "SQL", "R", "JavaScript", "HTML"]
    },
    {
      title: "Technologies & Tools",
      skills: ["Google Analytics", "Jira", "PowerBI", "Excel", "Figma", "Visio", "Tableau", "PowerPoint", "MS Project", "Confluence", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Skills & Technologies
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.title === "Core Competencies" ? (
                  category.skills.map((skillPair, skillIndex) => (
                    Array.isArray(skillPair) ? (
                      <div key={skillIndex} className="flex gap-3">
                        {skillPair.map((skill, idx) => (
                          <Badge 
                            key={idx}
                            variant="outline"
                            className="text-sm px-4 py-2 transition-bounce hover:scale-110 hover:shadow-card hover:bg-accent border-border text-foreground whitespace-nowrap"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className="text-sm px-4 py-2 transition-bounce hover:scale-110 hover:shadow-card hover:bg-accent border-border text-foreground"
                      >
                        {skillPair}
                      </Badge>
                    )
                  ))
                ) : (
                  category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className="text-sm px-4 py-2 transition-bounce hover:scale-110 hover:shadow-card hover:bg-accent border-border text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;