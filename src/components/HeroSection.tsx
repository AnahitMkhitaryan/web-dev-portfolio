import { useScrollText } from '@/hooks/useScrollText';

interface HeroSectionProps {
  name: string;
  surname: string;
  description: string;
}

export const HeroSection = ({ name, surname, description }: HeroSectionProps) => {
  const { scrollY, isTransformed } = useScrollText();

  const transformedDescription = "Creating digital magic with code, one pixel at a time. Turning ideas into interactive experiences that inspire and engage.";

  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Abstract Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-16 w-32 h-32 bg-shape-color-1 rounded-full blur-sm opacity-40"
          style={{ 
            transform: `rotate(${scrollY * 0.5}deg) translateX(${scrollY * 0.1}px)`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-shape-color-2 rotate-45 blur-sm opacity-40"
          style={{ 
            transform: `rotate(${45 + scrollY * 0.3}deg) translateY(${scrollY * 0.05}px)`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-40 h-8 bg-shape-color-3 rounded-full blur-sm opacity-40"
          style={{ 
            transform: `rotate(${scrollY * -0.2}deg) scale(${1 + scrollY * 0.001})`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-16 h-48 bg-shape-color-4 rounded-full blur-sm opacity-40"
          style={{ 
            transform: `rotate(${scrollY * 0.4}deg) translateX(${scrollY * -0.08}px)`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-20 right-16 w-20 h-20 bg-shape-color-1 opacity-40"
          style={{ 
            transform: `rotate(${scrollY * -0.6}deg) scale(${1 + scrollY * 0.0005})`,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>
      
      <div className="flex items-center min-h-screen px-8 md:px-16 relative z-10">
        <div className="max-w-4xl">
          <h1 className="font-typewriter text-4xl md:text-6xl font-bold text-text-primary mb-8 leading-tight">
            <span className="text-primary">{name}</span>{' '}
            <span className="text-text-primary">{surname}</span>
          </h1>
          
          <div 
            className={`text-lg md:text-xl leading-relaxed max-w-2xl transition-all duration-700 ease-in-out ${
              isTransformed 
                ? 'bg-gradient-to-r from-shape-color-1 via-shape-color-2 to-shape-color-3 bg-clip-text text-transparent' 
                : 'text-text-secondary'
            }`}
          >
            {isTransformed ? transformedDescription : description}
          </div>
        </div>
      </div>
    </section>
  );
};