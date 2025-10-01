const AboutV2 = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/lovable-uploads/a72a5ab2-58c8-4d69-8977-7f9615165bfd.png"
              alt="Ayokunmi Sodamola"
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div>
            <p className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
              MY JOURNEY
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Gaining new knowledge through every project
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Graduate student at the University of Pittsburgh studying Management of Information Systems, 
                with a solid background in business analysis, product management, and AI-driven solutions.
              </p>
              <p>
                Previously worked at Recova (YC21) where I led product development for fintech solutions 
                serving African financial institutions. Also contributed to digital transformation projects 
                at Leadway Assurance Company.
              </p>
              <p>
                Passionate about leveraging technology to solve real-world problems and create meaningful 
                user experiences.
              </p>
              <a 
                href="/about-me" 
                className="inline-block mt-6 text-gray-900 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutV2;
