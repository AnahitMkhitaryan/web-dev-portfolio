import { HeroSection } from './HeroSection';
import { ProjectCard } from './ProjectCard';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectDashboard from '@/assets/project-dashboard.jpg';
import projectSocial from '@/assets/project-social.jpg';
import projectLanding from '@/assets/project-landing.jpg';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern, responsive e-commerce solution built with React and Node.js. Features include real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    image: projectEcommerce,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    link: "https://example.com"
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive data visualization platform that transforms complex datasets into actionable insights. Built with cutting-edge charting libraries and real-time data processing.",
    image: projectDashboard,
    technologies: ["React", "D3.js", "PostgreSQL", "Express", "WebSocket"],
    link: "https://example.com"
  },
  {
    title: "Social Media App",
    description: "Mobile-first social networking application with real-time messaging, content sharing, and advanced privacy controls. Features seamless user experience across all devices.",
    image: projectSocial,
    technologies: ["React Native", "Firebase", "Redux", "Socket.IO", "AWS"],
    link: "https://example.com"
  },
  {
    title: "Corporate Landing",
    description: "High-converting landing page design for enterprise clients. Optimized for performance, accessibility, and search engines with smooth animations and engaging interactions.",
    image: projectLanding,
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Vercel"],
    link: "https://example.com"
  }
];

export const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        name="John"
        surname="Doe"
        description="Full-stack developer passionate about creating digital experiences that make a difference. I craft modern, user-centered solutions using cutting-edge technologies."
      />
      
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A showcase of my recent work, ranging from web applications to mobile solutions
          </p>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};