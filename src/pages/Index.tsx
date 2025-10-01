import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <a 
        href="/v2"
        className="fixed bottom-6 right-6 z-50 px-6 py-3 bg-white text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold border-2 border-gray-900"
      >
        View V2 Design →
      </a>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
