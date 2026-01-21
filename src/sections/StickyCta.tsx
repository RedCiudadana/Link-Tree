import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import type { FeaturedCTA } from '../data/config';

type StickyCtaProps = {
  featuredCTA: FeaturedCTA;
  onLinkClick: (url: string, category: string) => void;
};

const StickyCta: React.FC<StickyCtaProps> = ({ featuredCTA, onLinkClick }) => {
  if (!featuredCTA.enabled) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/95 to-slate-900/80 backdrop-blur-lg z-40 md:hidden">
      <Button
        href={featuredCTA.url}
        variant="primary"
        size="lg"
        icon={<ArrowRight className="w-5 h-5" />}
        onClick={() => onLinkClick(featuredCTA.url, 'sticky-cta')}
        className="w-full shadow-2xl"
      >
        {featuredCTA.text}
      </Button>
    </div>
  );
};

export default StickyCta;
