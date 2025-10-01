import { Mail, Linkedin, Github } from "lucide-react";

const ContactV2 = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-[#f5f5f7]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-12">
          Don't leave without saying <span className="italic font-normal">Hi</span>
        </h2>

        <a
          href="mailto:ayokua@gmail.com"
          className="inline-block px-12 py-4 bg-gray-900 text-white text-lg font-semibold rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-105 mb-12"
        >
          Say Hi
        </a>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:ayokua@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white hover:bg-gray-100 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-gray-900" />
          </a>
          <a
            href="https://www.linkedin.com/in/ayokunmi/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white hover:bg-gray-100 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-gray-900" />
          </a>
          <a
            href="https://github.com/ayokunmi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white hover:bg-gray-100 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-gray-900" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactV2;
