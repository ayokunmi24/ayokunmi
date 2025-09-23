const Logo = ({ className = "text-2xl font-bold" }: { className?: string }) => {
  return (
    <div className={`${className} gradient-primary bg-clip-text text-transparent`}>
      A.S.
    </div>
  );
};

export default Logo;