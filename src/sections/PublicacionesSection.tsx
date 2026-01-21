import React, { useState } from 'react';
import { Calendar, TrendingUp } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import type { Publicacion } from '../data/config';

type PublicacionesSectionProps = {
  publicaciones: Publicacion[];
  onLinkClick: (url: string, category: string) => void;
};

const filters = ['Todos', 'Blog', 'Podcast', 'Video', 'Newsletter'];

const PublicacionesSection: React.FC<PublicacionesSectionProps> = ({ publicaciones, onLinkClick }) => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredPublicaciones = activeFilter === 'Todos'
    ? publicaciones
    : publicaciones.filter((pub) => pub.tag === activeFilter);

  return (
    <Section
      title="📰 Lo último"
      subtitle="Mantente informado con nuestras publicaciones y contenidos"
      className="bg-slate-50"
    >
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredPublicaciones.map((pub) => (
          <a
            key={pub.id}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onLinkClick(pub.url, 'publicaciones')}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <img
                src={pub.image}
                alt={pub.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-700">
                  {pub.tag}
                </span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs text-slate-500 mb-2 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {pub.date}
              </p>
              <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                {pub.title}
              </h3>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center">
        <Button
          href="https://example.com/publicaciones"
          variant="outline"
          size="lg"
          icon={<TrendingUp className="w-5 h-5" />}
          onClick={() => onLinkClick('https://example.com/publicaciones', 'ver-mas-publicaciones')}
        >
          Ver más publicaciones
        </Button>
      </div>
    </Section>
  );
};

export default PublicacionesSection;
