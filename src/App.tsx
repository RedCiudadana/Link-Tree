import React, { useState, useEffect } from 'react';
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
  Calendar,
  BookOpen,
  Megaphone,
  ExternalLink,
  ChevronUp,
  Sparkles,
  TrendingUp,
  Globe
} from 'lucide-react';

type Frontmatter = Record<string, string>;

const parseFrontmatter = (raw: string): Frontmatter => {
  const match = raw.match(/^---\s*[\r\n]+([\s\S]*?)\s*---/);
  if (!match) return {};

  const lines = match[1].split(/\r?\n/);
  const data: Frontmatter = {};
  let currentKey: string | null = null;

  for (const line of lines) {
    if (!line.trim()) continue;
    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      const value = keyMatch[2] ?? '';
      data[currentKey] = value.replace(/^"(.*)"$/, '$1').trim();
    } else if (currentKey) {
      data[currentKey] = `${data[currentKey]} ${line.trim()}`.trim();
    }
  }

  return data;
};

const loadContent = (glob: Record<string, string>) =>
  Object.entries(glob)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, raw], index) => ({
      id: index + 1,
      path,
      data: parseFrontmatter(raw)
    }));

const bloquePrincipalFiles = import.meta.glob('/src/content/bloque_principal/*.md', { as: 'raw', eager: true });
const aprendeRedFiles = import.meta.glob('/src/content/aprende_red_ciudadana/*.md', { as: 'raw', eager: true });
const exploraPlataformasFiles = import.meta.glob('/src/content/explora_plataformas/*.md', { as: 'raw', eager: true });

const importantItems = loadContent(bloquePrincipalFiles).map((item) => ({
  id: item.id,
  title: item.data.titulo || item.data.title || 'Sin titulo',
  description: item.data.subtitulo || '',
  image: item.data.foto || '',
  ctaText: item.data.texto_boton || 'Ver mas',
  ctaUrl: item.data.enlace_boton || '#',
  badge: item.data.badge
}));

const formacionItems = loadContent(aprendeRedFiles).map((item) => ({
  id: item.id,
  title: item.data.title || 'Sin titulo',
  description: item.data.subtitulo || '',
  image: item.data.foto || '',
  url: item.data.enlace_boton || '#',
  badge: item.data.badge
}));

const plataformaIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  justiciapedia: BookOpen
};

const plataformas = loadContent(exploraPlataformasFiles).map((item) => {
  const slug = item.path.split('/').pop()?.replace(/\.md$/, '').toLowerCase() || '';
  const Icon = plataformaIconMap[slug] || Globe;
  return {
    id: item.id,
    title: item.data.title || 'Sin titulo',
    description: item.data.subtitulo || '',
    icon: Icon,
    image: item.data.foto || '',
    url: item.data.enlace_boton || '#',
    badge: item.data.badge
  };
});

// ============================================
// CONFIGURACIÓN CENTRAL - EDITAR AQUÍ
// ============================================

const CONFIG = {
  // Featured CTA (principal)
  featuredCTA: {
    text: '📣 Inscripciones abiertas',
    url: 'https://example.com/inscripciones',
    enabled: true
  },

  // Redes sociales
  socialLinks: {
    instagram: 'https://instagram.com/redciudadanagt',
    twitter: 'https://twitter.com/RedxGuate',
    tiktok: 'https://tiktok.com/@redciudadana',
    linkedin: 'https://linkedin.com/company/red-ciudadana',
    youtube: 'https://youtube.com/@redciudadana'
  },

  // Secciones visibles
  sections: {
    showHero: true,
    showImportant: true,
    showFormacion: true,
    showPlataformas: true,
    showPublicaciones: false,
    showColabora: true
  },

  // Lo mas importante ahora
  importantItems,

  // Formacion
  formacionItems,

  // Plataformas
  plataformas,

  // Publicaciones
  publicaciones: [
    {
      id: 1,
      title: 'Análisis del presupuesto 2026: prioridades y desafíos',
      tag: 'Blog',
      date: '8 Ene 2026',
      image: 'https://picsum.photos/seed/pub1/600/400',
      url: 'https://example.com/blog/presupuesto-2026'
    },
    {
      id: 2,
      title: 'Podcast: Transparencia y anticorrupción en Centroamérica',
      tag: 'Podcast',
      date: '5 Ene 2026',
      image: 'https://picsum.photos/seed/pub2/600/400',
      url: 'https://example.com/podcast/transparencia-ca'
    },
    {
      id: 3,
      title: 'Video: ¿Cómo funcionan los datos abiertos?',
      tag: 'Video',
      date: '3 Ene 2026',
      image: 'https://picsum.photos/seed/pub3/600/400',
      url: 'https://example.com/video/datos-abiertos'
    },
    {
      id: 4,
      title: 'Newsletter: Resumen semanal de actividades',
      tag: 'Newsletter',
      date: '1 Ene 2026',
      image: 'https://picsum.photos/seed/pub4/600/400',
      url: 'https://example.com/newsletter/resumen-semanal'
    },
    {
      id: 5,
      title: 'Guía: Acceso a la información pública en Guatemala',
      tag: 'Blog',
      date: '28 Dic 2025',
      image: 'https://picsum.photos/seed/pub5/600/400',
      url: 'https://example.com/blog/acceso-info-publica'
    },
    {
      id: 6,
      title: 'Informe: Estado de la transparencia municipal 2025',
      tag: 'Blog',
      date: '20 Dic 2025',
      image: 'https://picsum.photos/seed/pub6/600/400',
      url: 'https://example.com/blog/transparencia-municipal-2025'
    }
  ],

  // Colaboración
  colaboracion: {
    image: 'https://picsum.photos/seed/colabora/800/600',
    links: [
      {
        text: 'Alianzas y cooperación',
        url: 'https://example.com/alianzas'
      },
      {
        text: 'Donantes',
        url: 'https://example.com/donantes'
      },
      {
        text: 'Contáctanos',
        url: 'https://example.com/contacto'
      }
    ]
  },

  // Footer
  footerLinks: [
    { text: 'Sitio web', url: 'https://redciudadana.org' },
    { text: 'Transparencia', url: 'https://example.com/transparencia' },
    { text: 'Aviso legal', url: 'https://example.com/aviso-legal' }
  ]
};

// ============================================
// COMPONENTES
// ============================================

const Button: React.FC<{
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ children, href, variant = 'primary', size = 'md', icon, onClick, className = '' }) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
};

const Badge: React.FC<{ children: React.ReactNode; variant?: 'new' | 'updated' | 'recommended' }> = ({
  children,
  variant = 'new'
}) => {
  const variants = {
    new: 'bg-green-100 text-green-800',
    updated: 'bg-blue-100 text-blue-800',
    recommended: 'bg-purple-100 text-purple-800'
  };

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}>
      <Sparkles className="w-3 h-3" />
      {children}
    </span>
  );
};

const Section: React.FC<{
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`px-4 py-12 md:py-16 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-8 md:mb-12 text-center">
            {title && <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{title}</h2>}
            {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Todos');

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

  const filters = ['Todos', 'Blog', 'Podcast', 'Video', 'Newsletter'];

  const filteredPublicaciones = activeFilter === 'Todos'
    ? CONFIG.publicaciones
    : CONFIG.publicaciones.filter(pub => pub.tag === activeFilter);

  const getBadgeVariant = (badge: string): 'new' | 'updated' | 'recommended' => {
    if (badge === 'Nuevo') return 'new';
    if (badge === 'Actualizado') return 'updated';
    return 'recommended';
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

      {/* HERO SECTION */}
      {CONFIG.sections.showHero && (
        <header className="relative min-h-[85vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://picsum.photos/seed/redciudadana/1920/1080"
              alt="Red Ciudadana Guatemala"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-800/80 to-slate-900/90"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 py-12 max-w-4xl mx-auto">
            {/* Logo Placeholder */}
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

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-10">
              <a
                href={CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href={CONFIG.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href={CONFIG.socialLinks.tiktok}
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
                href={CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href={CONFIG.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>

            {/* Primary CTA */}
            {CONFIG.featuredCTA.enabled && (
              <Button
                href={CONFIG.featuredCTA.url}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => handleLinkClick(CONFIG.featuredCTA.url, 'hero-cta')}
                className="shadow-2xl"
              >
                {CONFIG.featuredCTA.text}
              </Button>
            )}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
          </div>
        </header>
      )}

      {/* LO MÁS IMPORTANTE AHORA */}
      {CONFIG.sections.showImportant && (
        <Section
          title="Lo más importante ahora"
          subtitle="No te pierdas estas oportunidades"
          className="bg-white"
        >
          <div className="grid gap-6 md:gap-8">
            {importantItems.map((item) => (
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
                        onClick={() => handleLinkClick(item.ctaUrl, 'important')}
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
      )}

      {/* FORMACIÓN */}
      {CONFIG.sections.showFormacion && (
        <Section
          title="🎓 Aprende con Red Ciudadana"
          subtitle="Programas de formación en ciudadanía activa y tecnología cívica"
          className="bg-gradient-to-b from-slate-50 to-blue-50/30"
        >
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {formacionItems.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(item.url, 'formacion')}
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
      )}

      {/* PLATAFORMAS */}
      {CONFIG.sections.showPlataformas && (
        <Section
          title="📊 Explora nuestras plataformas"
          subtitle="Herramientas digitales para la transparencia y la participación ciudadana"
          className="bg-white"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plataformas.map((plataforma) => {
              const Icon = plataforma.icon;
              return (
                <a
                  key={plataforma.id}
                  href={plataforma.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick(plataforma.url, 'plataformas')}
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
      )}

      {/* PUBLICACIONES */}
      {CONFIG.sections.showPublicaciones && (
        <Section
          title="📰 Lo último"
          subtitle="Mantente informado con nuestras publicaciones y contenidos"
          className="bg-slate-50"
        >
          {/* Filters */}
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

          {/* Publications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredPublicaciones.map((pub) => (
              <a
                key={pub.id}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(pub.url, 'publicaciones')}
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

          {/* Ver más button */}
          <div className="text-center">
            <Button
              href="https://example.com/publicaciones"
              variant="outline"
              size="lg"
              icon={<TrendingUp className="w-5 h-5" />}
              onClick={() => handleLinkClick('https://example.com/publicaciones', 'ver-mas-publicaciones')}
            >
              Ver más publicaciones
            </Button>
          </div>
        </Section>
      )}

      {/* COLABORA */}
      {CONFIG.sections.showColabora && (
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
                {CONFIG.colaboracion.links.map((link, index) => (
                  <Button
                    key={index}
                    href={link.url}
                    variant="secondary"
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                    onClick={() => handleLinkClick(link.url, 'colaboracion')}
                  >
                    {link.text}
                  </Button>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={CONFIG.colaboracion.image}
                alt="Colabora con Red Ciudadana"
                className="rounded-3xl shadow-2xl w-full"
                loading="lazy"
              />
            </div>
          </div>
        </Section>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm">
                © {new Date().getFullYear()} Red Ciudadana. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {CONFIG.footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                  onClick={() => handleLinkClick(link.url, 'footer')}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* STICKY CTA (Mobile) */}
      {CONFIG.featuredCTA.enabled && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/95 to-slate-900/80 backdrop-blur-lg z-40 md:hidden">
          <Button
            href={CONFIG.featuredCTA.url}
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            onClick={() => handleLinkClick(CONFIG.featuredCTA.url, 'sticky-cta')}
            className="w-full shadow-2xl"
          >
            {CONFIG.featuredCTA.text}
          </Button>
        </div>
      )}

      {/* BACK TO TOP */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 md:bottom-8 right-4 md:right-8 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
          aria-label="Volver arriba"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;
