import type { ComponentType } from 'react';
import { BookOpen, Globe } from 'lucide-react';

type Frontmatter = Record<string, string>;

export type ImportantItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaUrl: string;
  badge?: string;
};

export type FormacionItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  badge?: string;
};

export type PlataformaItem = {
  id: number;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  image: string;
  url: string;
  badge?: string;
};

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

export const importantItems: ImportantItem[] = loadContent(bloquePrincipalFiles).map((item) => ({
  id: item.id,
  title: item.data.titulo || item.data.title || 'Sin titulo',
  description: item.data.subtitulo || '',
  image: item.data.foto || '',
  ctaText: item.data.texto_boton || 'Ver mas',
  ctaUrl: item.data.enlace_boton || '#',
  badge: item.data.badge
}));

export const formacionItems: FormacionItem[] = loadContent(aprendeRedFiles).map((item) => ({
  id: item.id,
  title: item.data.title || 'Sin titulo',
  description: item.data.subtitulo || '',
  image: item.data.foto || '',
  url: item.data.enlace_boton || '#',
  badge: item.data.badge
}));

const plataformaIconMap: Record<string, ComponentType<{ className?: string }>> = {
  justiciapedia: BookOpen
};

export const plataformas: PlataformaItem[] = loadContent(exploraPlataformasFiles).map((item) => {
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
