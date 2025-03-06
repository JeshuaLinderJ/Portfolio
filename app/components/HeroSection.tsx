'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] via-[#26d477] to-[#e17a0b]">
							Jeshua Linder Jiménez
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold text-gray-900">Full Stack & Embedded Software Engineer</h2>
						<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
							I craft end to end solutions to seemingly closed problems.
						</p>
						<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
						<span className="text-red-600">Full-Stack Developer</span>/<span className="text-blue-600">Embedded Software Engineer</span> at Loxodon-1 Bi-Propellant Liquid Engine Rocket Project (<span className="text-green-600">UPRM</span>)
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-orange-100 rounded-full text-orange-600 text-xs md:text-sm">Microcontrollers</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-300 rounded-full text-black-600 text-xs md:text-sm">Embedded Systems</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-100 rounded-full text-teal-600 text-xs md:text-sm">DevOps</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-orange-100 rounded-full text-yellow-600 text-xs md:text-sm">Python</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full text-blue-600 text-xs md:text-sm">C++</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-red-100 rounded-full text-red-600 text-xs md:text-sm">Java</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-yellow-100 rounded-full text-yellow-600 text-xs md:text-sm">JavaScript</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-orange-100 rounded-full text-red-600 text-xs md:text-sm">Git</span>
					</div>
				</motion.div>

				{/* Interactive System Architecture */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-4 md:p-8 shadow-lg"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
							{/* Frontend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'frontend' ? 'bg-[#26d477]/10 border-[#26d477]' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#26d477]">Frontend Development</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-[#26d477] rounded" />
										Rocket Live Sensor Visualization
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-[#26d477] rounded-full" />
										API Implementation
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-[#26d477] rounded-full" />
										Remote Avionics Control
									</li>
								</ul>
							</div>

							{/* Backend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'backend' ? 'bg-[#26d477]/10 border-[#26d477]' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#e17a0b]">Backend Development</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-[#e17a0b] rounded-full" />
										API Design & Development
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-[#e17a0b] rounded-full" />
										Database Architecture
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-[#e17a0b] rounded-full" />
										Real-time Systems
									</li>
								</ul>
							</div>

							{/* DevOps Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'devops' ? 'bg-teal-50 border-teal-200' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#e22eaf]">DevOps & Cloud</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-[#e22eaf] rounded-full" />
										AWS Infrastructure
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-[#e22eaf] rounded-full" />
										CI/CD Pipelines
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-[#e22eaf] rounded-full" />
										Scalable Architecture
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
