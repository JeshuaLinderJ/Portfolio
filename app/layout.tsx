import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Jeshua Linder Jiménez - Technical Lead & Full-Stack Developer',
	description:
		'Technical Lead at Roadeo Inc. and Embedded/Full Stack Software Engineer at Loxodon-1 Rocket Project. Specializing in full-stack development, embedded systems, and DevOps with expertise in Python, TypeScript, C++, and modern web technologies.',
	keywords: [
		'Technical Lead',
		'Full-Stack Developer',
		'Embedded Software Engineer',
		'Software Engineering',
		'Python',
		'TypeScript',
		'JavaScript',
		'C++',
		'React',
		'Node.js',
		'Docker',
		'DevOps',
		'CI/CD',
		'Embedded Systems',
		'Microcontrollers',
		'Arduino',
		'MQTT',
		'InfluxDB',
		'API Development',
		'Mobile Development',
		'Dart',
		'Flutter',
		'GitHub Actions',
		'Rocket Control Systems',
		'Jeshua Linder Jiménez',
		'Puerto Rico',
		'UPRM',
		'Roadeo',
		'Loxodon-1',
	],
	authors: [{ name: 'Jeshua Linder Jiménez' }],
	creator: 'Jeshua Linder Jiménez',
	openGraph: {
		title: 'Jeshua Linder Jiménez - Technical Lead & Full-Stack Developer',
		description:
			'Technical Lead at Roadeo Inc. and Embedded Software Engineer at Loxodon-1 Rocket Project. Crafting end-to-end solutions from embedded systems to modern web applications.',
		url: 'https://portfolio-git-main-jeshuas-projects-51037369.vercel.app/',
		siteName: 'Jeshua Linder Jiménez - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Jeshua Linder Jiménez - Technical Lead & Full-Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Jeshua Linder Jiménez - Technical Lead & Full-Stack Developer',
		description:
			'Technical Lead specializing in full-stack development and embedded systems. From rocket control systems to mobile applications, crafting innovative solutions.',
		creator: '@jeshualinderj',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
