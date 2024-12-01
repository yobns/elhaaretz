import AnimatedSection from '@/app/components/Animation';
import Image from 'next/image';

export default function AboutSection() {
  const aboutContent = [
    {
      title: 'Une Vision à Long Terme',
      description: [
        'Nous créons des plans d’intégration qui s’adaptent à vos projets de vie : éducation, logement, et carrière.',
        'Des ateliers et consultations régulières pour anticiper vos besoins.',
        'L’objectif : trouver rapidement votre place dans la société israélienne.',
      ],
      imageSrc: '/israel.jpg',
    },
    {
      title: 'Des Ressources pour Chaque Étape',
      description: [
        'Assistance proactive pour toutes vos démarches administratives.',
        'Cours d’hébreu flexibles pour tous les membres de la famille.',
        'Voyages sur mesure pour explorer les écoles, quartiers, et services avant votre départ.',
      ],
      imageSrc: '/aide.jpg',
    },
    {
      title: 'Préserver Vos Valeurs, Enrichir Votre Identité',
      description: [
        'Créer des ponts entre votre héritage culturel et la vie en Israël.',
        'Assurer une continuité éducative pour vos enfants.',
        'Favoriser les liens avec des groupes locaux partageant vos valeurs.',
      ],
      imageSrc: '/jeru.png',
    },
  ];

  return (
    <section id="about" className="py-2">
      <div className="container mx-auto px-4">
        {aboutContent.map((content, index) => (
          <AnimatedSection key={index} delay={index * 0.2}>
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center mb-24`}
            >
              <div
                className={`${
                  index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
                } md:w-1/2`}
              >
                <Image
                  src={content.imageSrc}
                  alt={content.title}
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="md:w-1/2 mt-16 md:mt-0">
                <h2 className="text-3xl font-bold mb-6 text-blue-900">
                  {content.title}
                </h2>
                <ul className="list-disc pl-5 text-lg text-blue-700 leading-relaxed">
                  {content.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}