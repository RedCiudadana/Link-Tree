# Red Ciudadana | Link in Bio - Guía de Edición

## Edición Rápida de Contenidos

Todos los enlaces, textos e imágenes se encuentran centralizados en el archivo `src/App.tsx`, específicamente en el objeto `CONFIG` al inicio del archivo (líneas 22-239).

### 📝 ¿Cómo editar el contenido?

1. Abre el archivo: `src/App.tsx`
2. Busca el objeto `CONFIG` al inicio del archivo
3. Edita los valores que necesites actualizar
4. Guarda el archivo

---

## Elementos Editables

### 1. CTA Principal (Botón Featured)

```javascript
featuredCTA: {
  text: '📣 Inscripciones abiertas',  // Cambia el texto del botón
  url: 'https://example.com/inscripciones',  // Cambia el enlace
  enabled: true  // true = mostrar, false = ocultar
}
```

### 2. Redes Sociales

```javascript
socialLinks: {
  instagram: 'https://instagram.com/redciudadanagt',
  twitter: 'https://twitter.com/RedxGuate',
  tiktok: 'https://tiktok.com/@redciudadana',
  linkedin: 'https://linkedin.com/company/red-ciudadana',
  youtube: 'https://youtube.com/@redciudadana'
}
```

### 3. Mostrar/Ocultar Secciones

```javascript
sections: {
  showHero: true,           // Hero con imagen de fondo
  showImportant: true,      // "Lo más importante ahora"
  showFormacion: true,      // Sección de formación
  showPlataformas: true,    // Plataformas ciudadanas
  showPublicaciones: true,  // Publicaciones recientes
  showColabora: true        // Sección de colaboración
}
```

### 4. "Lo Más Importante Ahora" (Cards grandes)

Edita el array `importantItems`:

```javascript
{
  id: 1,
  title: 'Título del item',
  description: 'Descripción breve',
  image: 'URL_DE_LA_IMAGEN',
  ctaText: 'Texto del botón',
  ctaUrl: 'URL_DEL_ENLACE',
  badge: 'Nuevo'  // Opciones: 'Nuevo', 'Actualizado', 'Recomendado' o null
}
```

### 5. Formación

Edita el array `formacionItems`:

```javascript
{
  id: 1,
  title: 'Título del curso',
  description: 'Descripción del curso',
  image: 'URL_DE_LA_IMAGEN',
  url: 'URL_DEL_ENLACE',
  badge: 'Actualizado'  // Opcional
}
```

### 6. Plataformas

Edita el array `plataformas`:

```javascript
{
  id: 1,
  title: 'Nombre de la plataforma',
  description: 'Descripción breve',
  icon: BarChart3,  // Icono de lucide-react (no cambiar)
  image: 'URL_DE_LA_IMAGEN',
  url: 'URL_DEL_ENLACE',
  badge: 'Actualizado'  // Opcional
}
```

### 7. Publicaciones

Edita el array `publicaciones`:

```javascript
{
  id: 1,
  title: 'Título de la publicación',
  tag: 'Blog',  // Opciones: 'Blog', 'Podcast', 'Video', 'Newsletter'
  date: '8 Ene 2026',
  image: 'URL_DE_LA_IMAGEN',
  url: 'URL_DEL_ENLACE'
}
```

### 8. Colaboración

Edita el objeto `colaboracion`:

```javascript
colaboracion: {
  image: 'URL_DE_LA_IMAGEN',
  links: [
    {
      text: 'Texto del botón',
      url: 'URL_DEL_ENLACE'
    }
  ]
}
```

### 9. Footer

Edita el array `footerLinks`:

```javascript
footerLinks: [
  { text: 'Sitio web', url: 'https://redciudadana.org' },
  { text: 'Transparencia', url: 'URL' },
  { text: 'Aviso legal', url: 'URL' }
]
```

---

## 📸 Cambiar Imágenes

Las imágenes actualmente usan placeholders de Picsum. Para usar tus propias imágenes:

1. **Opción 1 - URLs externas:**
   - Sube tus imágenes a un servicio (Cloudinary, Imgur, tu servidor)
   - Reemplaza las URLs en el CONFIG

2. **Opción 2 - Imágenes locales:**
   - Coloca las imágenes en la carpeta `public/images/`
   - Usa rutas como: `/images/nombre-imagen.jpg`

### Tamaños recomendados:

- **Hero:** 1920x1080px
- **Cards grandes (importante):** 800x400px
- **Cards formación:** 400x300px
- **Cards plataformas:** 200x150px
- **Cards publicaciones:** 600x400px
- **Colaboración:** 800x600px

---

## 🎨 Personalización Avanzada

### Cambiar Colores

Busca en el código las clases de Tailwind:

- Azul primario: `bg-blue-600`, `text-blue-600`
- Puedes cambiar `blue` por: `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

Ejemplo:
```javascript
// Cambiar de azul a verde
'bg-blue-600' → 'bg-green-600'
'text-blue-600' → 'text-green-600'
```

---

## 📊 Google Analytics

Para activar Google Analytics o Google Tag Manager:

1. Ve al archivo `src/App.tsx`
2. Busca la línea 367-376
3. Descomenta el código y reemplaza `GA_MEASUREMENT_ID` con tu ID real

---

## 🚀 Para Desarrolladores

### Instalar dependencias
```bash
npm install
```

### Modo desarrollo
```bash
npm run dev
```

### Compilar para producción
```bash
npm run build
```

### Vista previa del build
```bash
npm run preview
```

---

## ✅ Checklist antes de publicar

- [ ] Todas las URLs apuntan a los enlaces correctos (no `example.com`)
- [ ] Las imágenes están cargadas y son visibles
- [ ] Las redes sociales tienen los enlaces correctos
- [ ] El botón principal (Featured CTA) tiene la URL correcta
- [ ] Has probado todos los enlaces
- [ ] Las fechas de publicaciones están actualizadas
- [ ] Google Analytics configurado (si aplica)
- [ ] Has ejecutado `npm run build` sin errores

---

## 🆘 Soporte

Si necesitas ayuda adicional para personalizar esta página, contacta al equipo de desarrollo.

---

**Nota:** Esta página está optimizada para mobile-first, con imágenes lazy-loading y diseño responsivo. Funciona perfectamente en Instagram, TikTok, Twitter/X y LinkedIn.
