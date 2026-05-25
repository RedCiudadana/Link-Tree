import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Megaphone } from 'lucide-react';
import favicon from '../assets/FAVICON.png';
import type { SocialLinks } from '../data/config';

type HeroSectionProps = {
  socialLinks: SocialLinks;
};

const HeroSection: React.FC<HeroSectionProps> = ({ socialLinks }) => {
  return (
    <header className="relative min-h-[85vh] overflow-hidden md:min-h-[75vh]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/redciudadana/1920/1080"
          alt="Red Ciudadana Guatemala"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-800/80 to-slate-900/90"></div>
      </div>

      <div className="relative z-10 flex min-h-[85vh] flex-col md:min-h-[75vh]">
        <div className="bg-black/80 py-2 text-white backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src={favicon}
                alt="Red Ciudadana"
                width="25"
                className="shrink-0"
                style={{ filter: 'invert(1) hue-rotate(180deg) contrast(1.2) brightness(1.1)' }}
              />
              <p className="text-xs sm:text-sm">
                Sitio oficial de la Asociacion Civil Red Ciudadana
              </p>
            </div>

            <div className="hidden items-center space-x-4 sm:flex">
              <a
                href="https://www.facebook.com/Redciudadanagt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-sky-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-sky-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-sky-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/c/RedciudadanaOrgGt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-sky-200"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center px-4 py-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur-sm md:h-24 md:w-24">
              <Megaphone className="h-10 w-10 text-white md:h-12 md:w-12" />
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-6xl">
            Red Ciudadana
          </h1>

          <p className="text-xl leading-relaxed text-blue-100 md:text-2xl">
            TecnologÃ­a, datos y ciudadanÃ­a para fortalecer la democracia
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/40">
          <div className="mt-2 h-3 w-1.5 rounded-full bg-white/60"></div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
