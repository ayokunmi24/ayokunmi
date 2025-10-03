import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectDetailProps {
  title: string;
  role: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  impact: string[];
  image: string;
  link?: string;
}

const ProjectDetail = ({
  title,
  role,
  overview,
  challenges,
  solutions,
  impact,
  image,
  link
}: ProjectDetailProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <button
          onClick={() => navigate('/v2')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </button>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="aspect-video overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-12">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              {title}
            </h1>

            <div className="mb-12">
              <p className="text-sm font-semibold text-gray-500 tracking-wider mb-2">
                ROLE
              </p>
              <p className="text-xl text-gray-700">{role}</p>
            </div>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-12 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                View Live Project →
              </a>
            )}

            <div className="space-y-12">
              <div>
                <h2 className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
                  OVERVIEW
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {overview}
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
                  CHALLENGES
                </h2>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <span className="text-gray-400 mt-1">•</span>
                      <span className="text-lg leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
                  SOLUTIONS
                </h2>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <span className="text-gray-400 mt-1">•</span>
                      <span className="text-lg leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
                  IMPACT
                </h2>
                <ul className="space-y-3">
                  {impact.map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <span className="text-gray-400 mt-1">•</span>
                      <span className="text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
