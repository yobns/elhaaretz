'use client';

import { motion } from 'framer-motion';
import { Clipboard, GraduationCap, Home } from 'lucide-react';
import Carousel from '../../lib/carousel';

export default function ProgramHighlights() {
	const features = [
		{
			icon: Clipboard,
			title: 'Aide Administrative',
			description:
				"Un accompagnement pour simplifier les démarches officielles et faciliter votre installation en Israël.",
			color: 'text-customBlue',
		},
		{
			icon: Home,
			title: 'Logement et Prêts Immobiliers',
			description:
				'Trouvez un logement adapté à vos besoins grâce à des conseils sur les prêts immobiliers et une orientation personnalisée.',
			color: 'text-customBlue',
		},
		{
			icon: GraduationCap,
			title: 'Insertion Professionnelle',
			description:
				'Optimisez vos chances de réussir en Israël grâce à une aide pour rédiger un CV adapté et trouver des opportunités professionnelles.',
			color: 'text-customBlue',
		},
	];

	const renderFeatureCard = ({ icon: Icon, title, description, color }) => (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: false }}
			transition={{ duration: 0.8 }}
			className="bg-white rounded-2xl shadow-xl p-8 text-center"
		>
			<Icon className={`mx-auto mb-6 ${color}`} size={64} />
			<h3 className="text-2xl font-semibold mb-4 text-blue-900">{title}</h3>
			<p className="text-blue-600">{description}</p>
		</motion.div>
	);

	return (
		<section id="integration" className="md:py-24 pt-24 bg-gradient-to-b from-blue-50 to-bg">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-customBlue">
						Des Services Pensés Pour Votre Réussite
					</h2>
					<p className="text-lg text-blue-700 max-w-3xl mx-auto">
						Chaque étape de votre Aliyah est accompagnée par notre expertise, pour une intégration en Israël fluide et réussie.
					</p>
				</motion.div>
				{/* Carrousel sur mobile */}
				<div className="block md:hidden">
					<Carousel
						items={features}
						renderCard={renderFeatureCard}
						className="pb-12"
					/>
				</div>
				{/* Grille pour les écrans plus larges */}
				<div className="hidden md:grid md:grid-cols-3 gap-12">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: false }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="bg-white rounded-2xl shadow-xl p-8 text-center"
						>
							<feature.icon className={`mx-auto mb-6 ${feature.color}`} size={64} />
							<h3 className="text-2xl font-semibold mb-4 text-blue-900">{feature.title}</h3>
							<p className="text-blue-600">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
