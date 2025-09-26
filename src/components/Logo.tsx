const Logo = ({ className = "text-2xl font-bold" }: { className?: string }) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-transparent text-white rounded-full border-[3px] border-white font-bold text-lg">
      AS<span className="text-sm self-center ml-0.5">.</span>
    </div>
  );
};

export default Logo;