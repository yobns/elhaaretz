'use client';

import Image from 'next/image';
import AnimatedSection from './Animation';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[80vh] overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src="/photo.jpg"
          alt="Hero image"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="hidden md:block"
        />
        <Image
          src="/photo2.jpg"
          alt="Hero image mobile"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="block md:hidden"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white px-3">
        <AnimatedSection delay={0}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center font-heading">
            Votre Aliyah, Notre Mission
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-l md:text-xl mb-8 text-center max-w-2xl font-body">
            Un accompagnement complet pour une intégration réussie en Israël.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}