import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that users love."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing for speed and efficiency across all platforms."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with 5+ years of experience building web applications. 
            I love turning complex problems into simple, elegant solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              My Journey
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Started as a curious student learning HTML, now building scalable applications 
              that serve thousands of users. Every project teaches me something new, and I'm 
              constantly exploring emerging technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me reading tech blogs, contributing to open source, 
              or exploring the latest frameworks and tools that push the web forward.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-card hover:shadow-elegant transition-smooth hover:scale-105 border-border/20 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg gradient-primary text-primary-foreground">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
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