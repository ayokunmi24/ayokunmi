import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ayokunmiPhoto from "@/assets/ayokunmi-photo.jpg";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-card border-b border-border/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header with Photo */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6">
              <img 
                src={ayokunmiPhoto}
                alt="Ayokunmi Sodamola"
                className="w-full h-full object-cover rounded-full border-2 border-border"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Read More About Me
            </h1>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                👋 Hi! Meet Ayokunmi
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                I am a human-centered project and product manager with over 4 years of experience passionate about the intersection of technology, and customer behavioral science. I believe a balanced approach to people, the planet and our products is essential to our long-term success.
              </p>
              
              <div className="bg-secondary/50 border border-border rounded-lg p-6 mb-6">
                <p className="text-lg leading-relaxed">
                  I perfectly balance user and business needs to create delightful products. I have driven growth and scaled successful products across emerging markets in Africa, and US from discovery to post-launch activities, I own the process, leveraging product discovery product strategy.
                </p>
              </div>

              <div className="mb-6">
                <p className="text-lg font-semibold mb-4">A driven product guy with:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Deep understanding of balancing stakeholders' business objectives with the user's needs.</li>
                  <li>Deep understanding of the human-centered and goal-driven approach to designing products.</li>
                  <li>Identifying and troubleshooting User Experience Problems.</li>
                  <li>Maintaining an accurate roadmap for products.</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">As a Product Professional</h3>
              <p className="text-lg leading-relaxed mb-4">
                Ayokunmi is a multifaceted product delivery personnel. He is a user/customer advocate, a systems thinker, a problem solver, and a passionate idealist.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                With his unique background in finance, and technology, Ayokunmi thrives on the spirit of adventure and discovery. His product strategy always combines the pursuit of functional and business goals, with an in-depth understanding of the context and ecosystem. By working with multidisciplinary teams, Ayokunmi has learned to embrace chaos and ambiguity, while confidently bringing clarity to complex ideas through strategy.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                He is a strategic partner with experience building for different contexts, from both early to growth stage B2C and B2B digital products, to large-scale E2E processes and services. Along with his pixel-perfect output, Ayokunmi is committed to creating streamlined, delightful experiences through empathetic and holistic thinking. He values robust research synthesis, user testing, and data validation to guide product decisions at all touch points within a product.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-6">
                <p className="text-lg leading-relaxed">
                  💡 I specialize in making an impact through Innovation, Product Strategy, and Product Ops.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Before product management, I dabbled in project management, until I eventually got here. And now, over the last five years, I've essentially leveraged these to build intuitive products, services and experiences used by millions of people; while having a lot of fun in the process.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Beyond working as a product manager, I enjoy listening and learning via podcasts and audiobooks, creating Lo-fi music, and taking photographs of buildings and some of my favorite materials wood, porcelain, and fluted glass.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">More than what my resume says</h3>
              <p className="text-lg leading-relaxed mb-4">
                Outside of work, I enjoy playing video games and reading about art and nature.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Overall, I love adventure, learning new perspectives from diverse people, and enriching my mind with different views & experiences. So when I'm not creating some on my laptop, I'm also a photographer; slightly obsessed with documenting experiences and can usually be found outdoors exploring something new.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Staying Connected:</h3>
              <div className="space-y-6">
                <div className="bg-secondary/30 border border-border rounded-lg p-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    🧘🏽‍♂️ Meditation Practitioner
                  </h4>
                  <p className="text-muted-foreground">
                    Since I started doing daily meditations in 2019, my productivity has increased dramatically, my life goals have become clearer, my attention to detail on daily chores has increased, and I have more energy to get through my workdays. Additionally, I've twice weekly conducted meditation sessions at my place of employment.
                  </p>
                </div>

                <div className="bg-secondary/30 border border-border rounded-lg p-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    🐊 Anything Crocs
                  </h4>
                  <p className="text-muted-foreground">
                    I've always been a lover of crocs, this feeling that crocs provide comfort and are incredibly practical for my daily life.
                  </p>
                </div>

                <div className="bg-secondary/30 border border-border rounded-lg p-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    🎵🪴🖼 Classifying Music, Art & Nature, Plant
                  </h4>
                  <p className="text-muted-foreground">
                    I enjoy exploring different forms of creative expression and connecting with nature.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutMe;