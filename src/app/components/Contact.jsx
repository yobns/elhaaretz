'use client';

import { useState } from 'react';
import { MailOpen, Phone } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import AnimatedSection from '@/app/components/Animation';
import ContactModal from '@/app/components/ContactModal';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            Vous avez des questions ?<br />Notre équipe est là pour vous aider.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-100"
              onClick={() => setIsModalOpen(true)}
            >
              <a className="flex items-center justify-center">
                <MailOpen className="mr-2" size={24} />
                Envoyez un message
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-100"
            >
              <a href="tel:+1234567890" className="flex items-center justify-center">
                <Phone className="mr-2" size={24} />
                Appelez-nous
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}