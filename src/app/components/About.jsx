import AnimatedSection from '@/app/components/Animation';
import Image from 'next/image';

export default function AboutSection() {
  const aboutContent = [
    {
      title: 'Une Transition Maitrisée',
      description:
        "Nous aidons les familles à s’intégrer en douceur en fournissant les outils nécessaires à une nouvelle vie en Israël.",
      imageSrc: '/israel.jpg',
    },
    {
      title: 'Soutien Personnalisé',
      description:
        "Des solutions adaptées à chaque famille pour répondre aux défis uniques de l’Aliyah.",
      imageSrc: '/family.jpg',
    },
    {
      title: 'Un Nouveau Départ',
      description:
        "Préserver l’identité française tout en s’intégrant harmonieusement dans la société israélienne.",
      imageSrc: '/france-israel.jpg',
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
              <div className="md:w-1/2 mt-8 md:mt-0">
                <h2 className="text-3xl font-bold mb-6 text-blue-900">
                  {content.title}
                </h2>
                <p className="text-lg text-blue-700 leading-relaxed">
                  {content.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}