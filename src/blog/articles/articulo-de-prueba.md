---
title: "Artículo de Prueba del Sistema de Blog"
description: "Este es un artículo de prueba para verificar que el sistema de publicación de blog funciona correctamente. No es un artículo legal publicado."
date: "2026-08-19"
author: "Marinela Masri"
slug: "articulo-de-prueba"
category: "Prueba"
featuredImage: ""
published: true
---

> **Nota:** Este es un artículo de prueba técnica del sistema de publicación. No representa contenido legal publicado. Puede eliminarse o reemplazarse con artículos reales.

## ¿Qué es este artículo?

Este artículo existe únicamente para verificar que el sistema de blog funciona correctamente. Comprueba que:

- El sistema de Markdown detecta y procesa archivos `.md` en `src/blog/articles/`
- El frontmatter (título, descripción, fecha, autor, slug) se procesa correctamente
- La URL `/blog/articulo-de-prueba/` genera una página independiente
- Los metadatos SEO (título, descripción, canonical, Open Graph) se generan automáticamente
- La navegación, el pie de página y el CTA de contacto se muestran correctamente

## Cómo usar este sistema

Para publicar un nuevo artículo real, crea un archivo `.md` en `src/blog/articles/` con el siguiente formato de frontmatter:

```
---
title: "Título del artículo"
description: "Descripción para SEO (160 caracteres máximo)"
date: "2026-08-19"
author: "Marinela Masri"
slug: "url-del-articulo"
category: "Derecho Civil"
featuredImage: ""
published: true
---
```

Luego escribe el contenido en Markdown debajo del frontmatter.

## Resultado esperado

Si este artículo se muestra correctamente en `/blog/articulo-de-prueba/`, el sistema está funcionando. Puedes eliminar este archivo cuando estés listo para publicar artículos reales.
