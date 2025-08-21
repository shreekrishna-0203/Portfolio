import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              A Little About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
                  <img
                    src="/lovable-uploads/9608babd-971b-406c-b848-365fef198db6.png"
                    alt="Shree Krishna Hebbar - Creative Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full animate-gentle-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/20 rounded-full animate-gentle-float"></div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-lg leading-relaxed text-charcoal/80">
                <p>
                  Welcome to my digital playground! I'm a passionate creative developer who loves turning 
                  innovative ideas into beautiful, functional experiences that delight users.
                </p>
                <p>
                  With a keen eye for design and a love for clean code, I specialize in creating 
                  modern web applications that not only look stunning but also provide seamless user experiences. 
                  I believe in the power of technology to create meaningful connections and solve real-world problems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or enjoying the great outdoors. I'm always excited about the next creative challenge!
                </p>
              </div>

              {/* Skills/Technologies */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-charcoal mb-4">What I Love Working With</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Node.js', 'Next.js'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary/10 text-charcoal rounded-full text-sm font-medium 
                               border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;