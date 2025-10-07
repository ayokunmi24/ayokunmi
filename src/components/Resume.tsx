import { Card, CardContent } from "@/components/ui/card";

const Resume = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-card border-border/20 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm an MMIS candidate at Baylor University with a strong background in finance and no-code development. 
              I specialize in building scalable, AI-powered tools and have led multiple product launches from idea to execution.
            </p>
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Seeking Summer 2026 internship opportunities in Product Management, Program Management, Data Analysis, AI Strategy, or Innovation.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;