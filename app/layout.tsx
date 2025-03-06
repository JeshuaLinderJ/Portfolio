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
	title: 'Jeshua Linder Jiménez - Full-Stack Developer',
	description:
		'Welcome to my portfolio! I am a passionate full-stack developer who finds interest in a range of fields, from my personal favorite embedded systems & microcontrollers, to containerization via docker.',
	keywords: [
		'Full-Stack Developer',
		'Software Engineer',
		'Frontend Development',
		'Backend Development',
		'Arduino',
		'Docker',
		'Embedded Systems',
		'JavaScript',
		'Data Analytics',
		'API Development',
		'Python Scripting',
		'DevOps',
		'System Architecture',
		'Web Development',
		'Jeshua Linder Jiménez',
	],
	authors: [{ name: 'Jeshua Linder Jiménez'}, {name: 'Iancu Andrei'}],
	creator: '[Your Name]',
	openGraph: {
		title: 'Jeshua Linder Jiménez - Full-Stack Developer Portfolio',
		description:
			'Always curious full-stack developer working on the next unknown, from systems architecture to UI interaction',
		url: 'https://jeshualinderj.github.io',
		siteName: 'Jeshua Linder Jiménez - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Jeshua Linder Jiménez - Full-Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Your Name] - Full-Stack Developer',
		description:
			'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
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
