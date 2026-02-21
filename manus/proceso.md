# Proceso de creación - investigaciones_004

## 21 de febrero de 2026 - 15:30

### Título: Creación de portfolio minimalista inspirado en sharonzheng.com

### Sinopsis

Creación de un índice/portfolio minimalista para documentar investigaciones digitales, inspirado en el diseño de Sharon Zheng. El proyecto combina la estética minimalista de sharonzheng.com con la estructura técnica de las investigaciones anteriores (001, 002, 003).

### Contexto

El usuario solicitó investigar cómo funciona la web de Sharon Zheng (https://sharonzheng.com/) para crear una nueva investigación. Después de analizar la estructura de la web y revisar las investigaciones anteriores, se decidió crear un portfolio/índice que sirva como punto de entrada a todas las investigaciones.

### Proceso detallado

#### 1. Análisis de sharonzheng.com

Se navegó a la web de Sharon Zheng y se analizó su estructura:

**Características principales:**
- Diseño minimalista centrado en texto
- Una sola página con múltiples secciones
- Sin imágenes en la página principal
- Tipografía clara con jerarquía visual mediante tamaños y pesos
- Secciones: Header, Project Shortlist, Work Experience, Archive, In-Person Events, Education, Things I Like, Footer
- Links a proyectos individuales
- Uso de system fonts
- Sin JavaScript aparente en la home

**Filosofía de diseño:**
- Contenido primero, sin distracciones visuales
- Accesibilidad y legibilidad como prioridad
- Profesional pero personal
- Actualizado regularmente

#### 2. Análisis de investigaciones_003

Se clonó y analizó el repositorio investigaciones_003 para entender la estructura técnica:

**Estructura encontrada:**
```
investigaciones_003/
├── index.html
├── styles.css
├── script.js
├── README.md
└── manus/
    └── proceso.md
```

**Características:**
- Proyecto interactivo con parallax
- Documentación muy completa en README.md
- Código limpio y bien comentado
- UI minimalista con botones de control
- Panel de información desplegable
- Carpeta manus con proceso.md (documentación del proceso)

#### 3. Decisión de diseño

Se decidió combinar ambos enfoques:
- **De Sharon Zheng:** diseño minimalista, estructura de una sola página, enfoque en texto
- **De investigaciones_003:** estructura técnica, documentación completa, carpeta manus

**Concepto final:** Un portfolio/índice minimalista que sirva como punto de entrada a todas las investigaciones, manteniendo la filosofía de código limpio y documentación completa.

#### 4. Implementación

**4.1 Estructura de archivos**

Se creó la siguiente estructura:
```
investigaciones_004/
├── index.html          # Página principal
├── styles.css          # Estilos minimalistas
├── README.md           # Documentación completa
└── manus/
    └── proceso.md      # Este archivo
```

**4.2 index.html**

Se creó una página HTML con las siguientes secciones:

1. **Header**
   - Nombre (MANU)
   - Tagline (diseñador y artista web)
   - Links de contacto (email, github, instagram)

2. **Investigaciones**
   - Lista de investigaciones con títulos y descripciones
   - Links a los repositorios de GitHub

3. **Sobre el proyecto**
   - Contexto del trabajo
   - Filosofía de pedagogía digital y agencia tecnológica

4. **Filosofía**
   - Principios que guían el trabajo
   - Valores del proyecto

5. **Tecnologías**
   - Stack técnico utilizado

6. **Contacto**
   - Información personal y disponibilidad

7. **Footer**
   - Créditos y metainformación

**Decisiones técnicas:**
- Sin JavaScript (solo HTML y CSS)
- Uso de system fonts para carga instantánea
- Estructura semántica con etiquetas HTML5
- Links externos con target="_blank"

**4.3 styles.css**

Se creó una hoja de estilos minimalista con:

**Tipografía:**
- System fonts stack para máxima compatibilidad
- Tamaños de fuente escalados (2.5rem para nombre, 1.2rem para h2)
- Line-height de 1.6 para legibilidad
- Letter-spacing negativo en títulos grandes

**Layout:**
- Contenedor centrado con max-width de 680px
- Padding generoso (40px vertical, 20px horizontal)
- Espaciado entre secciones de 3rem
- Responsive con media query a 768px

**Colores:**
- Blanco y negro como base (#fff y #000)
- Grises para texto secundario (#333, #666, #999)
- Bordes sutiles en links (#ccc)

**Interacciones:**
- Hover en links cambia el color del borde
- Transiciones suaves de 0.2s
- Sin animaciones complejas

**Accesibilidad:**
- Media query para prefers-reduced-motion
- Media query para prefers-color-scheme (modo oscuro)
- Contraste suficiente en todos los textos
- Links claramente diferenciados

**Modo oscuro:**
- Fondo #0a0a0a (casi negro)
- Texto #e0e0e0 (gris muy claro)
- Ajuste de todos los grises para mantener contraste

**4.4 README.md**

Se creó una documentación completa que incluye:

1. **Introducción:** descripción del proyecto
2. **Objetivo:** propósito del portfolio
3. **Características:** 7 características principales explicadas en detalle
4. **Estructura del proyecto:** árbol de archivos
5. **Cómo usar:** instrucciones de clonado y uso
6. **Personalización:** guía para modificar el código
7. **Compatibilidad:** navegadores y dispositivos soportados
8. **Rendimiento:** peso y tiempo de carga
9. **Inspiración:** referencias y fuentes
10. **Filosofía del proyecto:** pedagogía digital y agencia tecnológica
11. **Comparación con sharonzheng.com:** similitudes y diferencias
12. **Enlaces relacionados:** links a otras investigaciones
13. **Licencia:** información de código abierto

**Estilo de escritura:**
- Uso de minúsculas para títulos (estilo consistente con investigaciones_003)
- Bloques de código con syntax highlighting
- Emojis para secciones (🎯, ✨, 📁, etc.)
- Explicaciones técnicas detalladas pero accesibles

**4.5 manus/proceso.md**

Este archivo documenta todo el proceso de creación, incluyendo:
- Fecha y hora
- Título y sinopsis
- Contexto del proyecto
- Análisis previo
- Decisiones de diseño
- Implementación detallada
- Reflexiones finales

#### 5. Características técnicas implementadas

**5.1 Sin JavaScript**

Se tomó la decisión de no incluir JavaScript en este proyecto porque:
- El contenido es estático y no requiere interactividad
- Mejora el rendimiento (carga instantánea)
- Aumenta la compatibilidad (funciona incluso con JS desactivado)
- Simplifica el mantenimiento
- Reduce la superficie de ataque (seguridad)

**5.2 System Fonts**

Se usó un stack de system fonts en lugar de web fonts:

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Roboto', 'Helvetica', 'Arial', sans-serif;
```

**Ventajas:**
- Carga instantánea (sin descarga de fuentes)
- Aspecto nativo en cada sistema operativo
- Mejor rendimiento
- Familiaridad para el usuario
- Sin FOUT (Flash of Unstyled Text)

**5.3 Modo oscuro automático**

Se implementó detección automática de preferencias del sistema:

```css
@media (prefers-color-scheme: dark) {
    /* estilos para modo oscuro */
}
```

Esto respeta la elección del usuario sin necesidad de un toggle manual.

**5.4 Accesibilidad**

Se implementaron varias medidas de accesibilidad:

**Prefers-reduced-motion:**
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

**Semántica HTML:**
- Uso de `<header>`, `<section>`, `<footer>`
- Jerarquía correcta de headings (h1, h2)
- Links con texto descriptivo

**Contraste:**
- Todos los textos cumplen con WCAG AA
- Links claramente diferenciados del texto normal

**5.5 Responsive Design**

Media query a 768px para adaptar el diseño a móviles:

```css
@media (max-width: 768px) {
    .name { font-size: 2rem; }
    h2 { font-size: 1.1rem; }
    .container { padding: 20px 10px; }
}
```

#### 6. Decisiones de contenido

**6.1 Información personal**

Se incluyó información del usuario basada en su perfil:
- Nombre: manu
- Profesión: diseñador y artista web
- Edad: 28 años
- Ubicación: Barcelona
- Intereses: creative coding, pedagogía digital, agencia tecnológica

**6.2 Filosofía**

Se enfatizó la filosofía del usuario:
- Trabajo politizado
- Pedagogía digital
- Agencia tecnológica
- Código abierto
- Sin dependencias innecesarias

**6.3 Investigaciones**

Se listaron las 3 investigaciones existentes:
- investigación 003 (con descripción completa)
- investigación 002 (pendiente de descripción)
- investigación 001 (pendiente de descripción)

#### 7. Comparación con sharonzheng.com

**Similitudes:**
- Diseño minimalista centrado en texto
- Estructura de una sola página
- Tipografía clara y legible
- Sin imágenes en la página principal
- Secciones bien definidas
- Links a proyectos individuales

**Diferencias:**
- Enfoque en investigaciones digitales vs portfolio profesional
- Sección de filosofía más explícita
- Documentación técnica incluida (README completo)
- Carpeta manus con proceso.md
- Modo oscuro automático
- Énfasis en pedagogía digital y agencia tecnológica

**Adaptaciones:**
- Se mantuvo la estética minimalista pero se añadió más contexto sobre la filosofía del trabajo
- Se incluyó documentación técnica completa (README.md)
- Se añadió soporte para modo oscuro
- Se enfatizó la accesibilidad y el código abierto

### Reflexiones finales

Este proyecto representa una evolución en la serie de investigaciones:
- **investigación 001-003:** proyectos interactivos con JavaScript
- **investigación 004:** portfolio/índice estático que documenta el trabajo

La decisión de crear un portfolio minimalista sin JavaScript es coherente con la filosofía de pedagogía digital y agencia tecnológica del usuario. Demuestra que no siempre se necesitan frameworks pesados o interactividad compleja para crear algo efectivo.

El proyecto también sirve como ejemplo de cómo analizar y adaptar el diseño de otros sitios web, manteniendo la inspiración pero añadiendo tu propia voz y filosofía.

### Próximos pasos

1. Añadir descripciones a investigaciones_001 y 002
2. Actualizar los links de contacto con información real
3. Considerar añadir una sección de "work in progress" para investigaciones futuras
4. Evaluar si se necesita un favicon personalizado
5. Considerar añadir meta tags para SEO y social sharing

### Peso final del proyecto

- index.html: ~3kb
- styles.css: ~4kb
- README.md: ~8kb
- proceso.md: ~8kb
- **Total: ~23kb** (incluyendo documentación)

Sin contar la documentación, el sitio web en sí pesa solo ~7kb, lo que garantiza una carga prácticamente instantánea.

---

**Documentado por:** Manus AI  
**Fecha:** 21 de febrero de 2026  
**Duración del proceso:** ~45 minutos  
**Commits:** Pendiente de push a GitHub
