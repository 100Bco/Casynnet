import casynLogoPath from "@assets/Casyn Logo.png";

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
      <img 
        src={casynLogoPath}
        alt="Casyn Logo"
        className={`${sizeMap[size]} object-contain`}
      />
      {showText && (
        <span className={`ml-3 ${textSizeMap[size]} font-montserrat font-semibold text-foreground`}>
          Casyn
        </span>
      )}
    </div>
  );
}
