import { useEffect, useState } from 'react';
import { CONFIG } from './data/config';
import BackToTopButton from './components/BackToTopButton';
import HeroSection from './sections/HeroSection';
import ImportantSection from './sections/ImportantSection';
import FormacionSection from './sections/FormacionSection';
import PlataformasSection from './sections/PlataformasSection';
import PublicacionesSection from './sections/PublicacionesSection';
import ColaboraSection from './sections/ColaboraSection';
import FooterSection from './sections/FooterSection';
import StickyCta from './sections/StickyCta';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (url: string, category: string) => {
    // Para futuras integraciones de analytics
    console.log('Link clicked:', { url, category, timestamp: new Date().toISOString() });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Google Analytics / GTM - Descomentar y configurar */}
      {/*
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      </script>
      */}

      {CONFIG.sections.showHero && (
        <HeroSection
          featuredCTA={CONFIG.featuredCTA}
          socialLinks={CONFIG.socialLinks}
          onLinkClick={handleLinkClick}
        />
      )}

      {CONFIG.sections.showImportant && (
        <ImportantSection items={CONFIG.importantItems} onLinkClick={handleLinkClick} />
      )}

      {CONFIG.sections.showFormacion && (
        <FormacionSection items={CONFIG.formacionItems} onLinkClick={handleLinkClick} />
      )}

      {CONFIG.sections.showPlataformas && (
        <PlataformasSection items={CONFIG.plataformas} onLinkClick={handleLinkClick} />
      )}

      {CONFIG.sections.showPublicaciones && (
        <PublicacionesSection publicaciones={CONFIG.publicaciones} onLinkClick={handleLinkClick} />
      )}

      {CONFIG.sections.showColabora && (
        <ColaboraSection colaboracion={CONFIG.colaboracion} onLinkClick={handleLinkClick} />
      )}

      <FooterSection links={CONFIG.footerLinks} onLinkClick={handleLinkClick} />

      <StickyCta featuredCTA={CONFIG.featuredCTA} onLinkClick={handleLinkClick} />

      <BackToTopButton show={showBackToTop} onClick={scrollToTop} />
    </div>
  );
}

export default App;
