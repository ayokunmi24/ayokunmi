import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import logoWhite from "@/assets/logo-white.svg";
import logoBlack from "@/assets/logo-black.svg";

const Logo = ({ className = "text-2xl font-bold" }: { className?: string }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[50px] h-[50px]" />;
  }

  return (
    <img 
      src={theme === "dark" ? logoWhite : logoBlack} 
      alt="AS Logo" 
      className="w-[50px] h-[50px]"
    />
  );
};

export default Logo;