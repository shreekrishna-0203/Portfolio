import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "Interactive 3D Portfolio",
      description: "A dreamy portfolio website featuring interactive Three.js animations, smooth scrolling, and a whimsical design aesthetic.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      codeUrl: "https://github.com/shreekrishna-0203"
    },
    {
      id: 2,
      title: "Modern E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payments, and responsive design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Next.js", "Stripe", "MongoDB", "Node.js"],
      liveUrl: "#",
      codeUrl: "https://github.com/shreekrishna-0203"
    },
    {
      id: 3,
      title: "Creative Design System",
      description: "A comprehensive design system with reusable components, animation libraries, and design tokens for consistent branding.",
      image: "https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Figma", "Storybook", "React", "SCSS"],
      liveUrl: "#",
      codeUrl: "https://github.com/shreekrishna-0203"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Things I've Made
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              A collection of projects that showcase my passion for creating beautiful, functional experiences
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="project-card group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl mb-6 aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-charcoal group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-charcoal/70 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/30 text-charcoal/80 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-charcoal 
                               rounded-full font-medium hover:bg-primary/80 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary 
                               rounded-full font-medium hover:bg-primary hover:text-charcoal transition-all duration-200"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;