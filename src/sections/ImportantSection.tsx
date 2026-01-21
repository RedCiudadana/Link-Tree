import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { getBadgeVariant } from '../utils/badges';
import type { ImportantItem } from '../data/content';

type ImportantSectionProps = {
  items: ImportantItem[];
  onLinkClick: (url: string, category: string) => void;
};

const ImportantSection: React.FC<ImportantSectionProps> = ({ items, onLinkClick }) => {
  return (
    <Section
      title="Lo más importante ahora"
      subtitle="No te pierdas estas oportunidades"
      className="bg-white"
    >
      <div className="grid gap-6 md:gap-8">
        {items.map((item) => (
          <article
            key={item.id}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
          >
            <div className="md:flex">
              <div className="md:w-2/5 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {item.badge && (
                  <div className="absolute top-4 left-4">
                    <Badge variant={getBadgeVariant(item.badge)}>{item.badge}</Badge>
                  </div>
                )}
              </div>
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  {item.description}
                </p>
                <div>
                  <Button
                    href={item.ctaUrl}
                    variant="primary"
                    icon={<ArrowRight className="w-5 h-5" />}
                    onClick={() => onLinkClick(item.ctaUrl, 'important')}
                  >
                    {item.ctaText}
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default ImportantSection;
