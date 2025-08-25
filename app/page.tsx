'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';

export default function FullStackPortfolio() {
	const [activeSection, setActiveSection] = useState('hero');

	useEffect(() => {
		const handleScroll = () => {
			const sections = ['hero', 'skills', 'experience', 'projects', 'education', 'contact'];
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Call once to set initial state

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<Header activeSection={activeSection} />
			<main className="min-h-screen bg-surface-50">
				<HeroSection />
				<SkillsSection />
				<ExperienceSection />
				<ProjectsSection />
				<EducationSection />
				<ContactSection />
			</main>
		</>
	);
}
