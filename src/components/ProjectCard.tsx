import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export const ProjectCard = ({ title, description, image, technologies, link }: ProjectCardProps) => {
  const { elementRef, isRevealed } = useScrollReveal();

  return (
    <div
      ref={elementRef}
      className={`relative w-full h-[600px] rounded-xl overflow-hidden project-card group cursor-pointer ${
        isRevealed ? 'scroll-reveal revealed' : 'scroll-reveal'
      }`}
      onClick={() => link && window.open(link, '_blank')}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-1/2 p-8 text-overlay rounded-r-xl ml-8">
          <h3 className="text-3xl font-bold text-text-primary mb-4 leading-tight">
            {title}
          </h3>
          <p className="text-text-secondary text-lg mb-6 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
      </div>
    </div>
  );
};