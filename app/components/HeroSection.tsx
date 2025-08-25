'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 500], [0, 150]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);

	return (
		<section id="hero" className="min-h-screen relative overflow-hidden pt-20">
			{/* Animated Background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-white to-primary-50" />
				<motion.div
					style={{ y }}
					className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
				/>
				{/* Floating Elements */}
				<div className="absolute top-20 left-10 w-20 h-20 bg-accent-blue/10 rounded-full animate-float" />
				<div className="absolute top-40 right-20 w-16 h-16 bg-accent-purple/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
				<div className="absolute bottom-40 left-20 w-12 h-12 bg-accent-green/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
			</div>

			<motion.div
				style={{ opacity }}
				className="relative z-10 min-h-screen flex flex-col items-center justify-center section-padding"
			>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className="text-center mb-12"
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="space-y-6 mb-8"
					>
						<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-teal leading-tight">
							Jeshua Linder Jiménez
						</h1>
						<h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-800">
							Full Stack & Embedded Software Engineer
						</h2>
						<p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
							I craft end-to-end solutions to seemingly closed problems, bridging the gap between
							hardware and software with innovative engineering.
						</p>
						<p className="text-sm md:text-base text-primary-500">
							<span className="text-primary-800 font-semibold">Technical Lead</span> <span className="text-primary-500">at</span> <span className="text-accent-purple font-semibold">Roadeo Inc.</span>
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-base md:text-lg text-primary-500">
							<span className="flex items-center gap-2">
								<span className="w-2 h-2 bg-accent-red rounded-full animate-pulse" />
								<span className="text-accent-red font-medium">Full-Stack Developer</span>
							</span>
							<span className="hidden sm:block text-primary-300">/</span>
							<span className="flex items-center gap-2">
								<span className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
								<span className="text-accent-blue font-medium">Embedded Software Engineer</span>
							</span>
						</div>
						<p className="text-sm md:text-base text-primary-500">
							at <span className="text-accent-green font-semibold">Loxodon-1 Bi-Propellant Liquid Engine Rocket Project (UPRM)</span>
						</p>
					</motion.div>

					{/* Enhanced Skills Tags */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						className="flex flex-wrap justify-center gap-3 mb-12"
					>
						{[
							{ name: 'Microcontrollers', color: 'orange' },
							{ name: 'Embedded Systems', color: 'gray' },
							{ name: 'DevOps', color: 'teal' },
							{ name: 'Python', color: 'green' },
							{ name: 'C++', color: 'blue' },
							{ name: 'Java', color: 'red' },
							{ name: 'JavaScript', color: 'orange' },
							{ name: 'Git', color: 'purple' },
						].map((skill, index) => (
							<motion.span
								key={skill.name}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
								whileHover={{ scale: 1.05, y: -2 }}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-default ${
									skill.color === 'orange' ? 'bg-accent-orange/10 text-accent-orange border border-accent-orange/20' :
									skill.color === 'gray' ? 'bg-surface-200 text-primary-700 border border-surface-300' :
									skill.color === 'teal' ? 'bg-accent-teal/10 text-accent-teal border border-accent-teal/20' :
									skill.color === 'green' ? 'bg-accent-green/10 text-accent-green border border-accent-green/20' :
									skill.color === 'blue' ? 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20' :
									skill.color === 'red' ? 'bg-accent-red/10 text-accent-red border border-accent-red/20' :
									skill.color === 'purple' ? 'bg-accent-purple/10 text-accent-purple border border-accent-purple/20' :
									'bg-surface-100 text-primary-600 border border-surface-200'
								}`}
							>
								{skill.name}
							</motion.span>
						))}
					</motion.div>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.6 }}
						className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
					>
						<button
							onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
							className="btn-primary"
						>
							View My Work
						</button>
						<button
							onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
							className="btn-secondary"
						>
							Get in Touch
						</button>
					</motion.div>
				</motion.div>

				{/* Interactive System Architecture */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8, duration: 0.8 }}
					className="w-full max-w-6xl mx-auto"
				>
					<div className="glass-effect rounded-2xl p-8 shadow-soft-lg">
						<h3 className="text-2xl font-bold text-primary-800 text-center mb-8">
							Full-Stack Architecture Expertise
						</h3>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{/* Frontend Layer */}
							<motion.div
								whileHover={{ scale: 1.02, y: -5 }}
								className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
									selectedStack === 'frontend'
										? 'bg-accent-green/10 border-2 border-accent-green shadow-soft'
										: 'bg-surface-50 hover:bg-surface-100 border-2 border-transparent hover:border-surface-200'
								}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<div className="flex items-center gap-3 mb-4">
									<div className="w-10 h-10 bg-accent-green/20 rounded-lg flex items-center justify-center">
										<span className="text-accent-green text-xl">🎨</span>
									</div>
									<h4 className="text-lg font-semibold text-accent-green">Frontend Development</h4>
								</div>
								<ul className="space-y-3 text-sm text-primary-600">
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 bg-accent-green rounded-full" />
										Rocket Live Sensor Visualization
									</li>
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 bg-accent-green rounded-full" />
										Interactive Dashboard Design
									</li>
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 bg-accent-green rounded-full" />
										Remote Avionics Control Interface
									</li>
								</ul>
							</motion.div>

							{/* Backend Layer */}
							<motion.div
								whileHover={{ scale: 1.02, y: -5 }}
								className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
									selectedStack === 'backend'
										? 'bg-accent-orange/10 border-2 border-accent-orange shadow-soft'
										: 'bg-surface-50 hover:bg-surface-100 border-2 border-transparent hover:border-surface-200'
								}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<div className="flex items-center gap-3 mb-4">
									<div className="w-10 h-10 bg-accent-orange/20 rounded-lg flex items-center justify-center">
										<span className="text-accent-orange text-xl">⚙️</span>
									</div>
									<h4 className="text-lg font-semibold text-accent-orange">Backend Development</h4>
								</div>
								<ul className="space-y-3 text-sm text-primary-600">
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 bg-accent-orange rounded-full" />
										API Design & Development
									</li>
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 bg-accent-orange rounded-full" />
										Database Architecture
									</li>
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 bg-accent-orange rounded-full" />
										Real-time Data Processing
									</li>
								</ul>
							</motion.div>

							{/* DevOps Layer */}
							<motion.div
								whileHover={{ scale: 1.02, y: -5 }}
								className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
									selectedStack === 'devops'
										? 'bg-accent-purple/10 border-2 border-accent-purple shadow-soft'
										: 'bg-surface-50 hover:bg-surface-100 border-2 border-transparent hover:border-surface-200'
								}`}
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<div className="flex items-center gap-3 mb-4">
									<div className="w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center">
										<span className="text-accent-purple text-xl">☁️</span>
									</div>
									<h4 className="text-lg font-semibold text-accent-purple">DevOps & Cloud</h4>
								</div>
								<ul className="space-y-3 text-sm text-primary-600">
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 bg-accent-purple rounded-full" />
										Containerized Deployments
									</li>
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 bg-accent-purple rounded-full" />
										CI/CD Pipeline Automation
									</li>
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 bg-accent-purple rounded-full" />
										Scalable Infrastructure
									</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.2, duration: 0.6 }}
					className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
						className="flex flex-col items-center gap-2 text-primary-400"
					>
						<span className="text-sm font-medium">Scroll to explore</span>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
						</svg>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}
