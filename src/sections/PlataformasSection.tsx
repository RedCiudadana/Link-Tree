import React from 'react';
import { ExternalLink } from 'lucide-react';
import Section from '../components/Section';
import Badge from '../components/Badge';
import { getBadgeVariant } from '../utils/badges';
import type { PlataformaItem } from '../data/content';

type PlataformasSectionProps = {
  items: PlataformaItem[];
  onLinkClick: (url: string, category: string) => void;
};

const PlataformasSection: React.FC<PlataformasSectionProps> = ({ items, onLinkClick }) => {
  return (
    <Section
      title="📊 Explora nuestras plataformas"
      subtitle="Herramientas digitales para la transparencia y la participación ciudadana"
      className="bg-white"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((plataforma) => {
          const Icon = plataforma.icon;
          return (
            <a
              key={plataforma.id}
              href={plataforma.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onLinkClick(plataforma.url, 'plataformas')}
              className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                {plataforma.badge && (
                  <Badge variant={getBadgeVariant(plataforma.badge)}>{plataforma.badge}</Badge>
                )}
              </div>

              <div className="mb-3 relative overflow-hidden rounded-lg">
                <img
                  src={plataforma.image}
                  alt={plataforma.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                {plataforma.title}
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {plataforma.description}
              </p>
            </a>
          );
        })}
      </div>
    </Section>
  );
};

export default PlataformasSection;
