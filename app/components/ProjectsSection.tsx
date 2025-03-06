'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-16 text-center text-gray-900">
					Projects
				</motion.h2>

				<div className="space-y-16">
					{/* Python Scripts */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-[#e7e7e7] rounded-xl overflow-hidden border border-gray-200 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900">Automated Online Playlist from iPod Classic</h3>
										<p className="text-gray-600">
											Set of Python Scripts to parse & extract embedded meta data from iPod Classic, and create both Spotify & Youtube playlists from respective API's. Any data unavailable in Spotify service becomes saved in both JSON & TXT file with all available information for personal use.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-[#e06a2f] mb-3">Problem</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Lack of Online Solutions/Support</li>
												<li>• Outdated 20 Year Hardware</li>
												<li>• Corrupted Transfer Capability</li>
												<li>• Apple Embedded System</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-[#239627] mb-3">Solution</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Compartmented Python Scripts Per Stage</li>
												<li>• JSON & TXT Caching</li>
												<li>• Use of 2 Online Services to Ensure Success (Youtube & Spotify)</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-600">
											<li>• 100% of iPod Songs Documented</li>
											<li>• >90% Songs Uploaded onto Online Playlist</li>
											<li>• 15,000% Faster than Physically Uploading (>24hr to 10min)</li>
											<li>• 100% Reduction in Cost (Free Solution as Opposed to Repair)</li>
											<li>• Open Source Solution Documented and Shared Online via GitHub</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-600 mb-4">Scripting Process</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner">
										{/* Add detailed system architecture diagram here */}
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Initial Parse */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Initial System Parse and TXT/JSON Documentation
												</text>
											</g>
											
											{/* Automate the Creation of Playlists Online */}
											<g>
												<rect x="20" y="80" width="360" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<text x="200" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Automate Create Online Playlists
												</text>
											</g>


											{/* Spotify Playlist */}
											<g>
												<rect x="220" y="160" width="160" height="40" rx="4" className="fill-green-100 stroke-green-400" strokeWidth="1" />
												<text x="295" y="185" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Spotify Playlist
												</text>
											</g>

											{/* Youtube Playlist */}
											<g>
												<rect x="20" y="160" width="160" height="40" rx="4" className="fill-red-100 stroke-red-400" strokeWidth="1" />
												<text x="105" y="185" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Youtube Playlist
												</text>
											</g>

											{/* Save Songs */}
											<g>
												<rect x="20" y="225" width="360" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<text x="200" y="245" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Document in TXT/JSON all Songs not in Spotify Database
												</text>
											</g>

											{/* Save Songs not Found */}
											<g className="stroke-gray-400" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="105" y1="120" x2="105" y2="160" />
												<line x1="295" y1="120" x2="295" y2="160" />
												<line x1="105" y1="200" x2="105" y2="225" />
												<line x1="295" y1="200" x2="295" y2="225" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Loxodon-1 */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900">Real-time Dockerized Rocket Control Hub</h3>
										<p className="text-gray-600">
											A docker mounted 3-stage mobile control system for the Loxodon-1 bipropellant liquid engine rocket
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Real-time Data Visualization</li>
												<li>• Interactive Dashboards</li>
												<li>• Custom Chart Components</li>
												<li>• Remote Fuel Valve Control</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 mb-3">Backend Pipeline</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• MQTT Broker Handler</li>
												<li>• InfluxDB Managed Data</li>
												<li>• Python Data Processing</li>
												<li>• ASM Accelerated Microcontroller Output</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600">Performance Metrics</h4>
										<ul className="space-y-2 text-sm text-gray-600">
											<li>• 14+ Simultaneous Sensors (Unknown Ceiling)</li>
											<li>• Sub-second Query Response</li>
											<li>• 99.8577% Program Size Reduction (525MB to 765KB) </li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-600 mb-4">Full Stack Architecture</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Connected to Local WiFi */}
											<g>
												<rect x="20" y="20" width="110" height="30" rx="4" className="fill-red-100 stroke-red-400" strokeWidth="1" />
												<rect x="145" y="20" width="110" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<rect x="270" y="20" width="110" height="30" rx="4" className="fill-green-100 stroke-green-400" strokeWidth="1" />
												<text x="75" y="40" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Flow Valve
												</text>
												<text x="200" y="40" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Sensor Type A
												</text>
												<text x="325" y="40" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Host Machine
												</text>
											</g>

											{/* Local WiFi */}
											<g>
												<rect x="20" y="80" width="360" height="40" rx="4" className="fill-yellow-100 stroke-yellow-400" strokeWidth="1" />
												<text x="200" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Local 2.4Ghz Network
												</text>
											</g>

											{/* Backend */}
											<g>
												<rect x="20" y="150" width="360" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="200" y="175" textAnchor="middle" className="fill-gray-600 text-[12px]">
													InfluxDB Backend
												</text>
											</g>

											{/* Middle Man Broker */}
											<g>
												<rect x="20" y="220" width="360" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<text x="200" y="240" textAnchor="middle" className="fill-gray-600 text-[12px]">
													MQTT Broker
												</text>
											</g>

											{/* Front End Website */}
											<g>
												<rect x="20" y="270" width="360" height="30" rx="4" className="fill-blue-200 stroke-blue-600" strokeWidth="1" />
												<text x="200" y="290" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Loxodon-1 Rocket Engine Control Hub Website
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-400" strokeWidth="1">
												<line x1="75" y1="50" x2="75" y2="80" />
												<line x1="200" y1="50" x2="200" y2="80" />
												<line x1="325" y1="50" x2="325" y2="80" />
												<line x1="200" y1="120" x2="200" y2="150" />
												<line x1="105" y1="190" x2="105" y2="220" />
												<line x1="295" y1="190" x2="295" y2="220" />
												<line x1="200" y1="250" x2="200" y2="270" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
