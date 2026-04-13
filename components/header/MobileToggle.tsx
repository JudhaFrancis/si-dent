"use client";

interface MobileToggleProps {
  isScrolled: boolean;
  onClick: () => void;
}

export default function MobileToggle({ isScrolled, onClick }: MobileToggleProps) {
  return (
    <button
      type="button"
      className={`lg:hidden flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
        isScrolled 
          ? "bg-primary/10 text-title hover:bg-primary hover:text-white shadow-sm" 
          : "bg-white/10 text-white hover:bg-white hover:text-title backdrop-blur-md border border-white/20"
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col gap-1.5 items-end group">
        <span className="h-0.5 w-6 rounded-full bg-current transition-all duration-300"></span>
        <span className="h-0.5 w-4 rounded-full bg-current transition-all duration-300"></span>
        <span className="h-0.5 w-6 rounded-full bg-current transition-all duration-300"></span>
      </div>
    </button>
  );
}
