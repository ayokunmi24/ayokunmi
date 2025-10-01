import { useState, useEffect } from "react";

const NavigationV2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-gray-900">
          AS<span className="text-sm">.</span>
        </a>

        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationV2;
