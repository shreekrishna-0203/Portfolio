import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shreekrishna-0203',
      icon: Github,
      color: 'hover:text-charcoal'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shree-krishna-hebbar-k-s-311301232/',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:skhebbarkd@gmail.com',
      icon: Mail,
      color: 'hover:text-primary'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Section Heading */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Feel free to reach out! Whether it's a project collaboration, a question, 
              or just to say hello, I'd love to hear from you.
            </p>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary/10 rounded-full border border-primary/20">
              <Mail className="w-5 h-5 text-primary" />
              <a
                href="mailto:skhebbarkd@gmail.com"
                className="text-lg font-medium text-charcoal hover:text-primary transition-colors duration-200"
              >
                skhebbarkd@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex justify-center gap-8">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className={`social-link p-4 bg-card rounded-2xl border border-primary/10 shadow-lg ${link.color}`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={28} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl border border-primary/20">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Ready to Create Something Amazing?</h3>
              <p className="text-charcoal/70 mb-6">
                Let's bring your ideas to life with beautiful, functional designs and seamless user experiences.
              </p>
              <a
                href="mailto:skhebbarkd@gmail.com"
                className="hero-button inline-flex items-center gap-2"
              >
                <Heart size={20} />
                Start a Conversation
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center mt-24 pt-12 border-t border-primary/10"
      >
        {/* <p className="text-charcoal/50 text-sm">
          Built with{' '}
          <Heart size={16} className="inline mx-1 text-primary animate-gentle-pulse" />{' '}
          using React, Three.js, and Tailwind CSS
        </p> */}
        <p className="text-charcoal/40 text-xs mt-2">
          © {new Date().getFullYear()} Shree Krishna Hebbar K S. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;