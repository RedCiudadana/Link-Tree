import React from 'react';
import type { FooterLink } from '../data/config';

type FooterSectionProps = {
  links: FooterLink[];
  onLinkClick: (url: string, category: string) => void;
};

const FooterSection: React.FC<FooterSectionProps> = ({ links, onLinkClick }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm">
              Ac {new Date().getFullYear()} Red Ciudadana. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition-colors"
                onClick={() => onLinkClick(link.url, 'footer')}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
