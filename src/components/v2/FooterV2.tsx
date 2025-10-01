const FooterV2 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-600">
          © {currentYear} Ayokunmi Sodamola
        </p>
      </div>
    </footer>
  );
};

export default FooterV2;
