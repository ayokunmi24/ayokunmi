import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Competencies",
      skills: ["Product Discovery", "Product Design", "User Experience", "Agile(SCRUM)", "Business Systems Analysis", "Database Modeling", "AI/ML Product Strategy", "Data Analysis", "Product Requirement Documentation", "Machine Learning"]
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
    <section id="skills" className="py-20 px-4 gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-accent text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="outline"
                    className="text-sm px-4 py-2 transition-bounce hover:scale-110 hover:shadow-card hover:bg-accent/10 border-accent/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;