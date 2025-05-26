interface CasynLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function CasynLogo({ className = '', showText = true, size = 'md' }: CasynLogoProps) {
  const sizeMap = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const textSizeMap = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        className={sizeMap[size]} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="8" fill="#1736F5"/>
        <path d="M10 10H25V15H15V25H10V10Z" fill="white"/>
        <path d="M15 15H30V30H25V20H15V15Z" fill="white"/>
      </svg>
      {showText && (
        <span className={`ml-3 ${textSizeMap[size]} font-montserrat font-semibold text-foreground`}>
          CASYN
        </span>
      )}
    </div>
  );
}
