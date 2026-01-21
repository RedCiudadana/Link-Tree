import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import type { Colaboracion } from '../data/config';

type ColaboraSectionProps = {
  colaboracion: Colaboracion;
  onLinkClick: (url: string, category: string) => void;
};

const ColaboraSection: React.FC<ColaboraSectionProps> = ({ colaboracion, onLinkClick }) => {
  return (
    <Section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🤝 Colabora con nosotros
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            ¿Quieres colaborar, apoyar o llevar estos proyectos a tu institución?
            Trabajamos juntos por una Guatemala más transparente y participativa.
          </p>
          <div className="flex flex-col gap-4">
            {colaboracion.links.map((link, index) => (
              <Button
                key={index}
                href={link.url}
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => onLinkClick(link.url, 'colaboracion')}
              >
                {link.text}
              </Button>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={colaboracion.image}
            alt="Colabora con Red Ciudadana"
            className="rounded-3xl shadow-2xl w-full"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
};

export default ColaboraSection;
