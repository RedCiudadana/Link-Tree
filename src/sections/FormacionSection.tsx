import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import Badge from '../components/Badge';
import { getBadgeVariant } from '../utils/badges';
import type { FormacionItem } from '../data/content';

type FormacionSectionProps = {
  items: FormacionItem[];
  onLinkClick: (url: string, category: string) => void;
};

const FormacionSection: React.FC<FormacionSectionProps> = ({ items, onLinkClick }) => {
  return (
    <Section
      title="🎓 Aprende con Red Ciudadana"
      subtitle="Programas de formación en ciudadanía activa y tecnología cívica"
      className="bg-gradient-to-b from-slate-50 to-blue-50/30"
    >
      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onLinkClick(item.url, 'formacion')}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {item.badge && (
                <div className="absolute top-3 right-3">
                  <Badge variant={getBadgeVariant(item.badge)}>{item.badge}</Badge>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                {item.title}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default FormacionSection;
