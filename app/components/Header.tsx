'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection?: string;
}

export default function Header({ activeSection = 'hero' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 12]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      style={{ 
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 shadow-soft border-b border-surface-200/50' 
          : 'bg-white/80'
      }`}
    >
      <nav className="container-max">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-base">JL</span>
            </div>
            <span className="font-bold text-primary-800 text-lg md:text-xl">
              Jeshua Linder
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-primary-100 text-accent-blue'
                    : 'text-primary-600 hover:text-accent-blue hover:bg-primary-50'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block"
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary text-sm"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-primary-600 hover:bg-primary-50 transition-colors"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${
                isMobileMenuOpen ? 'rotate-90' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-sm border-t border-surface-200/50"
        >
          <div className="py-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-primary-100 text-accent-blue'
                    : 'text-primary-600 hover:text-accent-blue hover:bg-primary-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-surface-200">
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full btn-primary text-sm"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
