'use client';

import AnimatedSection from './Animation';

export default function TextSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection delay={0}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Votre Partenaire pour une Aliyah Réussie
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Avec EL HAARETZ, chaque famille bénéficie d’un accompagnement personnalisé. Nous vous aidons à surmonter les défis administratifs, linguistiques, et culturels pour construire une nouvelle vie en Israël, dans le respect de vos valeurs et aspirations.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
