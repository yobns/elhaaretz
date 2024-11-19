'use client';

import { motion } from 'framer-motion';
import { Clipboard, GraduationCap, Home } from 'lucide-react';

export default function ProgramHighlights() {
  const features = [
    {
      icon: Clipboard,
      title: 'Aide Administrative',
      description:
        "Un accompagnement pour simplifier les démarches officielles et faciliter votre installation en Israël.",
      color: 'text-blue-500',
    },
    {
      icon: GraduationCap,
      title: 'Soutien Scolaire',
      description:
        "Un suivi éducatif personnalisé pour une intégration scolaire réussie des enfants.",
      color: 'text-blue-600',
    },
    {
      icon: Home,
      title: 'Projets Immobiliers',
      description:
        "Un accompagnement dans la recherche de logement pour répondre aux besoins des familles en Aliyah.",
      color: 'text-blue-700',
    },
  ];

  return (
    <section id='integration' className="py-24 bg-gradient-to-b from-blue-50 to-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Points Forts de Notre Programme
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Découvrez comment nous facilitons votre intégration en Israël avec
            des solutions adaptées.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center transition-all duration-300"
            >
              <feature.icon
                className={`mx-auto mb-6 ${feature.color}`}
                size={64}
              />
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">
                {feature.title}
              </h3>
              <p className="text-blue-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
