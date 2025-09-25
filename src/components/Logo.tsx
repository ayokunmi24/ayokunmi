const Logo = ({ className = "text-2xl font-bold" }: { className?: string }) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-white text-black rounded-full border-[3px] border-white font-bold text-lg">
      A.S.
    </div>
  );
};

export default Logo;