'use client';

import AnimatedSection from './Animation';

export default function TextSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 text-center">
		  <AnimatedSection delay={0}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Un Accompagnement pour Votre Aliyah
          </h2>
		  </AnimatedSection>
		  <AnimatedSection delay={0.2}>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Notre équipe s’appuie sur une profonde compréhension des défis rencontrés et propose des solutions pratiques, humaines, et adaptées pour un nouveau départ serein.
          </p>
		  </AnimatedSection>
      </div>
    </section>
  );
}
