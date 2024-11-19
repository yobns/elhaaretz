'use client';

import { Card, CardHeader, CardFooter, CardContent } from '@/app/components/ui/card';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import AnimatedSection from '@/app/components/Animation';
import { ArrowRight } from 'lucide-react';

export default function SupportDetails() {
  const details = [
    {
      title: 'Oulpan Linguistique',
      description:
        "Des cours de langue adaptés à votre emploi du temps pour une maîtrise rapide de l’hébreu.",
      imageSrc: '/oulpan.jpg',
    },
    {
      title: 'Voyages Préparatoires',
      description:
        "Découvrez les réalités de la vie en Israël avec nos voyages de préparation sur mesure.",
      imageSrc: '/elal.jpg',
    },
    {
      title: 'Aide à l’Emploi',
      description:
        "Des conseils et outils pour intégrer le marché du travail israélien avec succès.",
      imageSrc: '/emploi.jpg',
    },
  ];

  return (
    <section id="support" className="py-24 bg-gradient-to-b from-blue-50 to-bg">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-blue-900">
            Nos Solutions Complètes
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {details.map((detail, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <Card className="rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <CardHeader className="p-0">
                  <Image
                    src={detail.imageSrc}
                    alt={detail.title}
                    width={800}
                    height={600}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    {detail.title}
                  </h3>
                  <p className="text-blue-700">{detail.description}</p>
                </CardContent>
                <CardFooter className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 flex justify-center items-center">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-blue-900 hover:text-blue-50 hover:bg-blue-900"
                  >
                    En savoir plus
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}