import { formacionItems, importantItems, plataformas } from './content';

export type FeaturedCTA = {
  text: string;
  url: string;
  enabled: boolean;
};

export type SocialLinks = {
  instagram: string;
  twitter: string;
  tiktok: string;
  linkedin: string;
  youtube: string;
};

export type Publicacion = {
  id: number;
  title: string;
  tag: string;
  date: string;
  image: string;
  url: string;
};

export type ColaboracionLink = {
  text: string;
  url: string;
};

export type Colaboracion = {
  image: string;
  links: ColaboracionLink[];
};

export type FooterLink = {
  text: string;
  url: string;
};

export const CONFIG = {
  // Featured CTA (principal)
  featuredCTA: {
    text: '📣 Inscripciones abiertas',
    url: 'https://example.com/inscripciones',
    enabled: true
  },

  // Redes sociales
  socialLinks: {
    instagram: 'https://www.instagram.com/redxguate/',
    twitter: 'https://twitter.com/redxguate',
    tiktok: 'https://www.tiktok.com/@redxguate',
    linkedin: 'https://www.linkedin.com/company/2532725',
    youtube: ' https://www.youtube.com/channel/UCQwc62j7beStZYFzwPxBEQg'
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
