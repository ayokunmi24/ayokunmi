const HeroV2 = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#e8eef5] to-[#f5f5f7] pt-24"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-light italic text-gray-900 mb-8 leading-tight">
          Building tomorrow's products today.
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          I am a passionate Product Manager with extensive experience working with cross-functional teams to deliver products for startups and multi-national brands with a customer-first mindset.
        </p>
      </div>
    </section>
  );
};

export default HeroV2;
