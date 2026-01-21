import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube, ArrowRight, Megaphone } from 'lucide-react';
import Button from '../components/Button';
import type { FeaturedCTA, SocialLinks } from '../data/config';

type HeroSectionProps = {
  featuredCTA: FeaturedCTA;
  socialLinks: SocialLinks;
  onLinkClick: (url: string, category: string) => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ featuredCTA, socialLinks, onLinkClick }) => {
  return (
    <header className="relative min-h-[85vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/redciudadana/1920/1080"
          alt="Red Ciudadana Guatemala"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-800/80 to-slate-900/90"></div>
      </div>

      <div className="relative z-10 text-center px-4 py-12 max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border-2 border-white/20">
            <Megaphone className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Red Ciudadana
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-8 md:mb-10 leading-relaxed">
          Tecnología, datos y ciudadanía para fortalecer la democracia
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 text-white" />
          </a>
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="TikTok"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 text-white" />
          </a>
        </div>

        {featuredCTA.enabled && (
          <Button
            href={featuredCTA.url}
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            onClick={() => onLinkClick(featuredCTA.url, 'hero-cta')}
            className="shadow-2xl"
          >
            {featuredCTA.text}
          </Button>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
