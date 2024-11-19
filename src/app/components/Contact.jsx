'use client';

import { MailOpen } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import AnimatedSection from '@/app/components/Animation';

export default function Contact() {
	return (
		<section id="contact" className="py-24 bg-blue-900 text-white">
			<div className="container mx-auto px-4 text-center">
				<AnimatedSection delay={0}>
					<h2 className="text-4xl md:text-5xl font-bold mb-8">
						Contactez-nous
					</h2>
				</AnimatedSection>
				<AnimatedSection delay={0.2}>
					<p className="text-xl mb-12 max-w-2xl mx-auto">
					Vous avez des questions ?<br/>Notre équipe est là pour vous aider.
					</p>
				</AnimatedSection>
				<AnimatedSection delay={0.4}>
					<Button
						asChild
						size="lg"
						className="bg-white text-blue-900 hover:bg-blue-100"
					>
						<a
							href="mailto:contact@monprojet.com"
							className="flex items-center justify-center"
						>
							<MailOpen className="mr-2" size={24} />
							Envoyez-nous un email
						</a>
					</Button>
				</AnimatedSection>
			</div>
		</section>
	);
}