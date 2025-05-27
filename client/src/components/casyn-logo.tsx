import casynLogoTransparentPath from "@assets/Casyn logo - Transparent.png";

interface CasynLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function CasynLogo({ className = '', size = 'md' }: CasynLogoProps) {
  const sizeMap = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-16',
    xl: 'h-20'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={casynLogoTransparentPath}
        alt="Casyn"
        className={`${sizeMap[size]} object-contain`}
      />
    </div>
  );
}
