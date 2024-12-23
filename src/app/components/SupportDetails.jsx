'use client';

import { Card, CardHeader, CardFooter, CardContent } from '@/app/components/ui/card';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/app/components/Animation';
import Carousel from '../../lib/carousel';

const details = [
	{
		title: 'Oulpan Linguistique',
		description: 'Des cours d’hébreu adaptés aux besoins des parents, qu’ils soient disponibles en matinée ou en soirée.',
		imageSrc: '/oulpan.jpg',
	},
	{
		title: 'Voyages Préparatoires',
		description: 'Explorez Israël avec des visites immersives des quartiers, écoles, et services locaux pour bien planifier votre installation.',
		imageSrc: '/elal.jpg',
	},
	{
		title: 'Aide à l’Emploi',
		description: 'Recevez des conseils pratiques pour vous intégrer au marché du travail israélien avec succès.',
		imageSrc: '/emploi.jpg',
	},
];

const CardContentComponent = ({ title, description, imageSrc }) => (
	<Card className="rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
		<CardHeader className="p-0">
			<Image src={imageSrc} alt={title} width={800} height={600} className="w-full h-48 object-cover" />
		</CardHeader>
		<CardContent className="p-6">
			<h3 className="text-2xl font-bold mb-4 text-blue-900">{title}</h3>
			<p className="text-blue-700">{description}</p>
		</CardContent>
		<CardFooter className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 flex justify-center items-center">
			<Link href="#contact" passHref>
				<Button
					variant="outline"
					className="flex items-center gap-2 text-blue-900 hover:text-blue-50 hover:bg-blue-900"
				>
					En savoir plus
					<ArrowRight className="w-5 h-5" />
				</Button>
			</Link>
		</CardFooter>
	</Card>
);

export default function SupportDetails() {
	return (
		<section id="support" className="py-24 bg-gradient-to-b from-blue-50 to-bg">
			<div className="container mx-auto px-4">
				<AnimatedSection delay={0}>
					<h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-blue-900">
						Nos Solutions Complètes
					</h2>
				</AnimatedSection>
				<div className="block md:hidden">
					<Carousel
						items={details}
						renderCard={(item) => <CardContentComponent {...item} />}
					/>
				</div>
				<div className="hidden md:grid md:grid-cols-3 md:gap-8">
					{details.map((detail, index) => (
						<AnimatedSection key={index} delay={index * 0.2}>
							<div className="p-4">
								<CardContentComponent {...detail} />
							</div>
						</AnimatedSection>
					))}
				</div>
			</div>
		</section>
	);
}
