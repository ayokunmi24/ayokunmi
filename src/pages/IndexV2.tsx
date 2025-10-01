import NavigationV2 from "@/components/v2/NavigationV2";
import HeroV2 from "@/components/v2/HeroV2";
import AboutV2 from "@/components/v2/AboutV2";
import ProjectsV2 from "@/components/v2/ProjectsV2";
import SkillsV2 from "@/components/v2/SkillsV2";
import ContactV2 from "@/components/v2/ContactV2";
import FooterV2 from "@/components/v2/FooterV2";

const IndexV2 = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f7] relative">
      <a 
        href="/"
        className="fixed bottom-6 right-6 z-50 px-6 py-3 bg-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
      >
        ← View V1 Design
      </a>
      <NavigationV2 />
      <main>
        <HeroV2 />
        <AboutV2 />
        <ProjectsV2 />
        <SkillsV2 />
        <ContactV2 />
      </main>
      <FooterV2 />
    </div>
  );
};

export default IndexV2;
