import { ArrowLeft, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import ayokunmiAbout from "@/assets/ayokunmi-about.jpg";

const AboutMe = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="py-6 px-4 border-b border-border/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>
          <h1 className="text-xl font-bold text-foreground">About Me</h1>
          <div></div>
        </div>
      </header>

      <main className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={ayokunmiAbout} 
                  alt="Ayokunmi Omole" 
                  className="w-full h-[600px] object-cover rounded-2xl shadow-elegant"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Yeah, I love 
                  <span className="text-primary"> Building</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I think I still do 😊. In my current life, I build a lot of digital products. 
                  Enterprise platforms, fintech solutions, you name them all. By "current life", 
                  I mean the life where I enjoy solving complex business problems through technology.
                </p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-xl border border-border/20">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-lg font-medium text-foreground italic">
                  I believe businesses can win in the marketplace through great technology and user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                My Journey
              </h3>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-foreground">The Professional Foundation</h4>
                  <p>
                    I am a human-centered product and project manager with over 4 years of experience 
                    passionate about the intersection of technology, and customer behavioral science. 
                    I believe a balanced approach to people, the planet and our products is essential 
                    to our long-term success.
                  </p>
                  <p>
                    I perfectly balance user and business needs to create delightful products. I have 
                    driven growth and scaled successful products across emerging markets in Africa, 
                    and US from discovery to post-launch activities.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-foreground">The Product Vision</h4>
                  <p>
                    As a multifaceted product delivery professional, I am a user/customer advocate, 
                    a systems thinker, a problem solver, and a passionate idealist. With my unique 
                    background in finance and technology, I thrive on the spirit of adventure and discovery.
                  </p>
                  <p>
                    My product strategy always combines the pursuit of functional and business goals, 
                    with an in-depth understanding of the context and ecosystem.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl border border-border/20">
              <blockquote className="text-center">
                <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
                <p className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                  "I specialize in making an impact through Innovation, Product Strategy, and Product Ops."
                </p>
                <footer className="text-muted-foreground">
                  — My core philosophy
                </footer>
              </blockquote>
            </div>

            {/* Professional Experience */}
            <div className="space-y-8">
              <h4 className="text-3xl font-bold text-foreground text-center">Professional Experience</h4>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-xl border border-border/20 shadow-card">
                  <h5 className="text-xl font-bold text-foreground mb-3">Current Role</h5>
                  <p className="text-muted-foreground mb-4">
                    I work with multidisciplinary teams, embracing chaos and ambiguity, while confidently 
                    bringing clarity to complex ideas through strategy. I'm a strategic partner with 
                    experience building for different contexts, from early to growth stage B2C and B2B 
                    digital products.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Product Strategy</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Innovation</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Product Ops</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">User Research</span>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border/20 shadow-card">
                  <h5 className="text-xl font-bold text-foreground mb-3">Key Strengths</h5>
                  <ul className="text-muted-foreground space-y-2 mb-4">
                    <li>• Deep understanding of balancing stakeholders' business objectives with user needs</li>
                    <li>• Human-centered and goal-driven approach to designing products</li>
                    <li>• Identifying and troubleshooting User Experience Problems</li>
                    <li>• Maintaining accurate roadmaps for products</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Personal Interests Section */}
            <div className="space-y-8">
              <h4 className="text-3xl font-bold text-foreground text-center">Beyond Work</h4>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-b from-primary/5 to-transparent rounded-xl border border-border/20">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🧘🏽‍♂️</span>
                  </div>
                  <h5 className="text-xl font-bold text-foreground mb-3">Meditation Practitioner</h5>
                  <p className="text-muted-foreground">
                    Since starting daily meditations in 2019, my productivity has increased dramatically, 
                    my life goals have become clearer, and I have more energy for my workdays.
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-b from-secondary/5 to-transparent rounded-xl border border-border/20">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎵</span>
                  </div>
                  <h5 className="text-xl font-bold text-foreground mb-3">Creative Explorer</h5>
                  <p className="text-muted-foreground">
                    I enjoy listening to podcasts, creating Lo-fi music, and taking photographs 
                    of buildings and materials like wood, porcelain, and fluted glass.
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-b from-accent/5 to-transparent rounded-xl border border-border/20">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🐊</span>
                  </div>
                  <h5 className="text-xl font-bold text-foreground mb-3">Comfort Enthusiast</h5>
                  <p className="text-muted-foreground">
                    I've always been a lover of crocs - they provide comfort and are incredibly 
                    practical for daily life. Sometimes it's the simple things that matter most.
                  </p>
                </div>
              </div>
            </div>

            {/* Adventure & Learning */}
            <div className="bg-gradient-to-r from-muted/20 to-secondary/10 p-8 rounded-2xl border border-border/20">
              <h4 className="text-2xl font-bold text-foreground mb-6 text-center">Adventure & Learning</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground mb-4">
                    Overall, I love adventure, learning new perspectives from diverse people, and 
                    enriching my mind with different views & experiences. When I'm not creating 
                    on my laptop, I'm also a photographer; slightly obsessed with documenting 
                    experiences.
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">
                    Outside of work, I enjoy playing video games and reading about art and nature. 
                    I can usually be found outdoors exploring something new, always seeking to 
                    expand my horizons and understanding of the world around me.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center py-12">
              <h4 className="text-2xl font-bold text-foreground mb-6">
                Let's Build Something Amazing Together
              </h4>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're looking for a product strategist, a collaborative team member, 
                or someone to bring your next big idea to life, I'd love to hear from you.
              </p>
              <Button variant="white" size="lg" onClick={handleGetInTouch}>
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutMe;