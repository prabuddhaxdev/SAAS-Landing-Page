export interface Logo {
  name: string;
  url: string;
}

interface LogoMarqueeProps {
  logos: Logo[];
}

export default function LogoMarquee({ logos }: LogoMarqueeProps) {
  return (
    <div className="py-8 pt-16 border-gray-100">
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee space-x-16 whitespace-nowrap">
          <div className="flex items-center space-x-16 min-w-full">
            {logos.map((logo, index) => (
              <img
                key={`first-${index}`}
                src={logo.url}
                alt={logo.name}
                className="h-8 w-auto grayscale brightness-0 opacity-100 transition-all duration-300"
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={`second-${index}`}
                src={logo.url}
                alt={logo.name}
                className="h-8 w-auto grayscale brightness-0 opacity-100 transition-all duration-300"
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={`third-${index}`}
                src={logo.url}
                alt={logo.name}
                className="h-8 w-auto grayscale brightness-0 opacity-100 transition-all duration-300"
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={`fourth-${index}`}
                src={logo.url}
                alt={logo.name}
                className="h-8 w-auto grayscale brightness-0 opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
