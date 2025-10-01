const ProjectsV2 = () => {
  const projects = [
    {
      title: "CreditCheck Platform",
      image: "/lovable-uploads/creditchek-platform.png",
      url: "https://web.recova.ng"
    },
    {
      title: "Multi-Bank Direct Debit Solution",
      image: "/lovable-uploads/multi-bank-debit.png",
      url: "https://web.recova.ng"
    },
    {
      title: "Recova App Suite Redesign",
      image: "/lovable-uploads/recova-redesign.png",
      url: "https://web.recova.ng"
    },
    {
      title: "Leadway Vendor Management Portal",
      image: "/lovable-uploads/vendor-management.png",
      url: "https://webapp.leadway.com/vendorformapp"
    },
    {
      title: "Transita E-commerce Platform",
      image: "/lovable-uploads/transita-platform.png",
      url: "https://webapp.leadway.com/TransitaApp"
    },
    {
      title: "Hydra API Gateway",
      image: "/lovable-uploads/7255ba74-4352-4f42-84b0-493ebb9ce6f0.png",
      url: "https://www.hydra.ng"
    },
    {
      title: "AI Chatbot & Virtual Reality (Luna)",
      image: "/lovable-uploads/1954f087-7966-4d49-928e-758c81f6d217.png",
      url: "#"
    },
    {
      title: "Leadway Health Management System",
      image: "/lovable-uploads/b46319c5-6b7e-45b9-88a2-8effe43a4f1d.png",
      url: "https://leadwayhealth.com"
    },
    {
      title: "Agency Banking Solution (Cluster)",
      image: "/lovable-uploads/2ddb2bc2-9de0-43d9-8f3f-c80caa96c5ce.png",
      url: "https://web.cluster.africa/logout"
    },
    {
      title: "Leadway SuperApp Design",
      image: "/lovable-uploads/e594e4d5-89f4-4580-aaf8-72ca5ae95dd8.png",
      url: "https://www.figma.com/proto/dV1Xp63mI9T8yZFrKCkmVa/-LW----UI-Concept?page-id=2233%3A30818&node-id=2363-25126&starting-point-node-id=2363%3A25126"
    },
    {
      title: "Ankara Insurance Portal",
      image: "/lovable-uploads/ankara-insurance.png",
      url: "#"
    },
    {
      title: "Leadway Micro Investment Portal",
      image: "/lovable-uploads/leadway-investment.png",
      url: "#"
    }
  ];

  return (
    <section id="work" className="py-32 px-6 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
            WORK
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-4">
            Making the world better one product at a time.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsV2;
