'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from './ui/badge';

const menuVariants = {
	hidden: { x: '100%' },
	visible: { x: 0 },
	exit: { x: '100%' },
};

const NavLink = ({ href, children, isAtTop, onClick }) => (
	<Link
		href={href}
		className={`text-sm font-bold transition-colors ${isAtTop ? 'text-white hover:text-blue-400' : 'text-customBlue hover:text-blue-600'
			}`}
		onClick={onClick}
	>
		{children}
	</Link>
);

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isAtTop, setIsAtTop] = useState(true);

	useEffect(() => {
		const handleScroll = () => setIsAtTop(window.scrollY === 0);
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navClasses = `fixed top-0 inset-x-0 z-10 transition-colors duration-300 ${isAtTop ? 'bg-transparent text-white' : 'bg-gray-50 text-black shadow-md'
		}`;

	const links = [
		{ href: '#integration', label: 'Intégration' },
		{ href: '#about', label: 'Accompagnement' },
		{ href: '#support', label: 'Programmes' },
		{ href: '#contact', label: 'Contact' },
	];

	return (
		<nav className={navClasses}>
			<div className="container mx-auto p-4 py-6 flex justify-between items-center xl:w-[65%] w-[90%]">
				<Link
					href="/"
					className={`font-bold text-2xl transition-colors ${isAtTop ? 'text-white hover:text-blue-600' : 'text-blue-900 hover:text-blue-600'
						}`}
				>
					ELHAARETZ
				</Link>
				<div className="hidden lg:flex items-center space-x-8 flex-auto justify-center">
					{links.map(({ href, label }) => (
						<NavLink key={href} href={href} isAtTop={isAtTop}>
							{label}
						</NavLink>
					))}
				</div>
				<div className="hidden lg:flex">
					<Link href="tel:+1234567890" onClick={() => setIsOpen(false)}>
						<Badge
							variant="outline"
							className="px-4 py-2 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-100"
						>
							<Phone className="w-4 h-4 text-blue-600" />
							+1 (234) 567-890
						</Badge>
					</Link>
				</div>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="lg:hidden"
					aria-label="Menu button"
				>
					{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="fixed top-0 right-0 bottom-0 w-[80%] bg-gradient-to-br from-customBlue via-blue-900 to-blue-700 shadow-2xl z-20 flex flex-col"
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={menuVariants}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}
					>
						<div className="p-6 flex justify-end">
							<button
								onClick={() => setIsOpen(false)}
								className="text-white hover:text-gray-500 transition-colors duration-300"
								aria-label="Close menu"
							>
								<X className="w-8 h-8" />
							</button>
						</div>
						<div className="flex flex-col items-start space-y-6 mt-10 px-8">
							{links.map(({ href, label }, index) => (
								<motion.div
									key={href}
									initial={{ opacity: 0, x: -50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 }}
								>
									<Link
										href={href}
										onClick={() => setIsOpen(false)}
										className="text-2xl sm:text-3xl font-bold text-white hover:text-gray-300 transition-colors duration-300"
									>
										{label}
									</Link>
								</motion.div>
							))}
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}
							>
								<Link href="tel:+1234567890" onClick={() => setIsOpen(false)}>
									<Badge
										variant="outline"
										className="mt-6 px-6 py-3 flex items-center gap-3 cursor-pointer bg-white/10 hover:bg-white/20 text-white border-white/30 transition-all duration-300 rounded-full"
									>
										<Phone className="w-6 h-6" />
										<span className="text-l font-medium">+1 (234) 567-890</span>
									</Badge>
								</Link>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Nav;
