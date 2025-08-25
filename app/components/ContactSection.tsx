'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Validate form data
		if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
			alert('Please fill in all fields before sending.');
			return;
		}

		// Create mailto link with form data
		const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
		const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);

		// Open email client with pre-filled data
		window.location.href = `mailto:jeshualinderj@gmail.com?subject=${subject}&body=${body}`;

		// Optional: Reset form after submission
		setFormData({ name: '', email: '', message: '' });
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	return (
		<section id="contact" className="section-padding bg-primary-800 text-white relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute top-20 left-10 w-32 h-32 bg-accent-blue/10 rounded-full animate-float" />
				<div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-purple/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
				<div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-teal/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
			</div>

			<div className="container-max relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Let&apos;s Build Something Amazing
					</h2>
					<p className="text-xl text-primary-200 max-w-3xl mx-auto">
						Looking for a full-stack/embedded software developer who can craft end-to-end solutions?
						Let&apos;s discuss your next project.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						<div className="glass-effect bg-white/10 backdrop-blur-sm rounded-2xl p-8">
							<h3 className="text-2xl font-bold mb-6">Send a Message</h3>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label htmlFor="name" className="block text-sm font-medium mb-2">
										Your Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent placeholder-primary-300"
										placeholder="Enter your name"
									/>
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium mb-2">
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent placeholder-primary-300"
										placeholder="your.email@example.com"
									/>
								</div>
								<div>
									<label htmlFor="message" className="block text-sm font-medium mb-2">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent placeholder-primary-300 resize-none"
										placeholder="Tell me about your project or just say hello!"
									/>
								</div>
								<button
									type="submit"
									className="w-full px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-lg font-medium hover:shadow-soft-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
								>
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
									</svg>
									Send Message
								</button>
							</form>
						</div>
					</motion.div>

					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4 }}
						className="space-y-8"
					>
						{/* Location */}
						<div className="flex items-center gap-4">
							<div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center">
								<svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							</div>
							<div>
								<h4 className="font-semibold">Location</h4>
								<p className="text-primary-200">Mayagüez, Puerto Rico</p>
							</div>
						</div>

						{/* Email */}
						<div className="flex items-center gap-4">
							<div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center">
								<svg className="w-6 h-6 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
								</svg>
							</div>
							<div>
								<h4 className="font-semibold">Email</h4>
								<div className="space-y-1">
									<a href="mailto:jeshualinderj@gmail.com" className="block text-primary-200 hover:text-accent-blue transition-colors">
										jeshualinderj@gmail.com
									</a>
									<a href="mailto:Jeshua.linder@upr.edu" className="block text-primary-200 hover:text-accent-blue transition-colors text-sm">
										Jeshua.linder@upr.edu
									</a>
								</div>
							</div>
						</div>

						{/* Quick Actions */}
						<div className="space-y-4">
							<a
								href="/resume.pdf"
								target="_blank"
								className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
							>
								<svg className="w-6 h-6 text-accent-orange group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
									<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
								</svg>
								<span className="font-medium">Download Resume</span>
							</a>
						</div>

						{/* Social Links */}
						<div>
							<h4 className="font-semibold mb-4">Connect With Me</h4>
							<div className="flex gap-4">
								<motion.a
									whileHover={{ scale: 1.1, rotate: 5 }}
									href="https://github.com/jeshualinderj"
									target="_blank"
									rel="noopener noreferrer"
									className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
								>
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								</motion.a>
								<motion.a
									whileHover={{ scale: 1.1, rotate: -5 }}
									href="https://www.linkedin.com/in/jeshualinderjimenez/"
									target="_blank"
									rel="noopener noreferrer"
									className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
								>
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
								</motion.a>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
