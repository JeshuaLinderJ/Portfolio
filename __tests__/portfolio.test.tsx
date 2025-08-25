import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FullStackPortfolio from '../app/page';
import Header from '../app/components/Header';
import HeroSection from '../app/components/HeroSection';
import SkillsSection from '../app/components/SkillsSection';
import ExperienceSection from '../app/components/ExperienceSection';
import EducationSection from '../app/components/EducationSection';
import ContactSection from '../app/components/ContactSection';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    form: ({ children, ...props }: any) => <form {...props}>{children}</form>,
    input: ({ children, ...props }: any) => <input {...props}>{children}</input>,
    textarea: ({ children, ...props }: any) => <textarea {...props}>{children}</textarea>,
  },
  useScroll: () => ({ scrollY: { get: () => 0 } }),
  useTransform: () => 0,
  AnimatePresence: ({ children }: any) => children,
}));

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true
});

describe('Portfolio Website Tests', () => {
  describe('Header Component', () => {
    test('renders header with navigation items', () => {
      render(<Header activeSection="hero" />);
      
      expect(screen.getByText('Jeshua Linder')).toBeInTheDocument();
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Skills')).toBeInTheDocument();
      expect(screen.getByText('Experience')).toBeInTheDocument();
      expect(screen.getByText('Projects')).toBeInTheDocument();
      expect(screen.getByText('Education')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    test('highlights active section', () => {
      render(<Header activeSection="skills" />);
      
      const skillsButton = screen.getByText('Skills');
      expect(skillsButton).toHaveClass('bg-primary-100', 'text-accent-blue');
    });
  });

  describe('Hero Section', () => {
    test('renders hero content with correct information', () => {
      render(<HeroSection />);
      
      expect(screen.getByText('Jeshua Linder Jiménez')).toBeInTheDocument();
      expect(screen.getByText('Full Stack & Embedded Software Engineer')).toBeInTheDocument();
      expect(screen.getByText(/craft end-to-end solutions/i)).toBeInTheDocument();
      expect(screen.getByText(/Loxodon-1 Bi-Propellant Liquid Engine Rocket Project/i)).toBeInTheDocument();
    });

    test('renders skill tags', () => {
      render(<HeroSection />);
      
      expect(screen.getByText('Python')).toBeInTheDocument();
      expect(screen.getByText('C++')).toBeInTheDocument();
      expect(screen.getByText('JavaScript')).toBeInTheDocument();
      expect(screen.getByText('Microcontrollers')).toBeInTheDocument();
      expect(screen.getByText('DevOps')).toBeInTheDocument();
    });

    test('renders CTA buttons', () => {
      render(<HeroSection />);
      
      expect(screen.getByText('View My Work')).toBeInTheDocument();
      expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    });
  });

  describe('Skills Section', () => {
    test('renders skills section with categories', () => {
      render(<SkillsSection />);
      
      expect(screen.getByText('Skills & Technologies')).toBeInTheDocument();
      expect(screen.getByText('All Skills')).toBeInTheDocument();
      expect(screen.getByText('Frontend')).toBeInTheDocument();
      expect(screen.getByText('Backend')).toBeInTheDocument();
      expect(screen.getByText('DevOps')).toBeInTheDocument();
      expect(screen.getByText('Embedded')).toBeInTheDocument();
    });

    test('filters skills by category', async () => {
      render(<SkillsSection />);
      
      const frontendButton = screen.getByText('Frontend');
      fireEvent.click(frontendButton);
      
      await waitFor(() => {
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
      });
    });
  });

  describe('Experience Section', () => {
    test('renders experience timeline', () => {
      render(<ExperienceSection />);
      
      expect(screen.getByText('Experience & Projects')).toBeInTheDocument();
      expect(screen.getByText('Technical Lead')).toBeInTheDocument();
      expect(screen.getByText('Roadeo Inc.')).toBeInTheDocument();
      expect(screen.getByText('Embedded/Full Stack Software Engineer')).toBeInTheDocument();
      expect(screen.getByText('Loxodon-1 Bi-Propellant Liquid Engine Rocket Project')).toBeInTheDocument();
    });

    test('displays achievements and technologies', () => {
      render(<ExperienceSection />);
      
      expect(screen.getByText(/Optimized backend API requests by 90%/i)).toBeInTheDocument();
      expect(screen.getByText(/96% reduction in app startup time/i)).toBeInTheDocument();
      expect(screen.getByText(/Docker-mounted Rocket Engine Control/i)).toBeInTheDocument();
    });
  });

  describe('Education Section', () => {
    test('renders education information', () => {
      render(<EducationSection />);
      
      expect(screen.getByText('Education & Certifications')).toBeInTheDocument();
      expect(screen.getByText('Bachelor of Science in Software Engineering')).toBeInTheDocument();
      expect(screen.getByText('University of Puerto Rico, Mayagüez')).toBeInTheDocument();
      expect(screen.getByText('Expected Fall 2028')).toBeInTheDocument();
    });
  });

  describe('Contact Section', () => {
    test('renders contact form and information', () => {
      render(<ContactSection />);
      
      expect(screen.getByText('Let\'s Build Something Amazing')).toBeInTheDocument();
      expect(screen.getByText('Send a Message')).toBeInTheDocument();
      expect(screen.getByText('jeshualinderj@gmail.com')).toBeInTheDocument();
      expect(screen.getByText('Jeshua.linder@upr.edu')).toBeInTheDocument();
      expect(screen.getByText('Mayagüez, Puerto Rico')).toBeInTheDocument();
    });

    test('handles form submission', () => {
      render(<ContactSection />);
      
      const nameInput = screen.getByPlaceholderText('Enter your name');
      const emailInput = screen.getByPlaceholderText('your.email@example.com');
      const messageInput = screen.getByPlaceholderText(/Tell me about your project/i);
      
      fireEvent.change(nameInput, { target: { value: 'Test User' } });
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(messageInput, { target: { value: 'Test message' } });
      
      expect(nameInput).toHaveValue('Test User');
      expect(emailInput).toHaveValue('test@example.com');
      expect(messageInput).toHaveValue('Test message');
    });
  });

  describe('Full Portfolio Integration', () => {
    test('renders complete portfolio without errors', () => {
      render(<FullStackPortfolio />);
      
      // Check that all main sections are present
      expect(screen.getByText('Jeshua Linder Jiménez')).toBeInTheDocument();
      expect(screen.getByText('Skills & Technologies')).toBeInTheDocument();
      expect(screen.getByText('Experience & Projects')).toBeInTheDocument();
      expect(screen.getByText('Education & Certifications')).toBeInTheDocument();
      expect(screen.getByText('Let\'s Build Something Amazing')).toBeInTheDocument();
    });

    test('has proper accessibility attributes', () => {
      render(<FullStackPortfolio />);
      
      // Check for proper heading hierarchy
      const h1Elements = screen.getAllByRole('heading', { level: 1 });
      expect(h1Elements.length).toBeGreaterThan(0);
      
      // Check for proper form labels
      const nameInput = screen.getByLabelText('Your Name');
      const emailInput = screen.getByLabelText('Email Address');
      const messageInput = screen.getByLabelText('Message');
      
      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(messageInput).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    test('renders mobile-friendly navigation', () => {
      render(<Header activeSection="hero" />);
      
      // Mobile menu button should be present
      const mobileMenuButton = screen.getByRole('button');
      expect(mobileMenuButton).toBeInTheDocument();
    });
  });
});
