import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Co-creating Solutions",
      description: "I involve stakeholders early and often to understand business & user needs, ideate solutions, and gather feedback."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Always Asking Why",
      description: "I approach every project with curiosity to uncover hidden insights and make new discoveries."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Creator. Partner. Collaborator",
      description: "I can spearhead, support or polish your project or product at any stage it needs it."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Product Manager with extensive experience working with cross-functional teams to deliver products for startups and multi-national brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              My Journey
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I have spent the last years working with cross-functional teams to deliver products for startups and multi-national brands like Leadway, Qore, Metro Africa Xpress (MAX), leveraging qualitative research and product strategy to drive growth.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Outside my product domain, I am also studying the underpinnings of Business Management, Cloud and Emerging technologies like AI and Blockchain out of a sheer curiosity.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
                <Card 
                key={index} 
                className="p-6 shadow-card hover:shadow-elegant transition-smooth hover:scale-105 border-border/20 backdrop-blur-sm bg-gray-900/50"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white text-black">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;