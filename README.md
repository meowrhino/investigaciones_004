# investigación 004 - portfolio minimalista

un **índice personal** de investigaciones digitales inspirado en el diseño minimalista de [sharonzheng.com](https://sharonzheng.com/). este proyecto funciona como portfolio y archivo de experimentos de creative coding, arte web y pedagogía digital.

## 🎯 objetivo

crear un **portfolio/índice minimalista** que documente y organice todas las investigaciones digitales, priorizando la legibilidad, la accesibilidad y la simplicidad. sin distracciones visuales, sin frameworks pesados, solo contenido y código limpio.

## ✨ características

### 1. diseño minimalista

inspirado en el trabajo de sharon zheng, el diseño se centra en:
- **tipografía clara:** uso de system fonts para máxima legibilidad
- **espaciado generoso:** breathing room entre secciones
- **sin imágenes:** todo el contenido es textual
- **jerarquía visual:** mediante tamaños de fuente y pesos

el diseño respeta la filosofía de "contenido primero", eliminando cualquier elemento que no aporte valor informativo.

### 2. estructura de una sola página

toda la información está en una única página dividida en secciones:

**header**
- nombre y tagline
- descripción breve del trabajo
- links de contacto

**investigaciones**
- lista de proyectos con títulos y descripciones
- links directos a los repositorios de github

**sobre el proyecto**
- contexto y filosofía del trabajo
- enfoque en pedagogía digital y agencia tecnológica

**filosofía**
- principios que guían el trabajo
- valores del proyecto

**tecnologías**
- stack técnico utilizado

**contacto**
- información de contacto y disponibilidad

**footer**
- créditos y metainformación

### 3. responsive design

el sitio se adapta a diferentes tamaños de pantalla:
- **desktop:** ancho máximo de 680px centrado
- **mobile:** padding reducido, tipografía ajustada
- **tablet:** transición suave entre ambos

### 4. modo oscuro automático

el sitio respeta las preferencias del sistema operativo del usuario:

```css
@media (prefers-color-scheme: dark) {
    body {
        background-color: #0a0a0a;
        color: #e0e0e0;
    }
}
```

si el usuario tiene activado el modo oscuro en su sistema, el sitio se adapta automáticamente.

### 5. accesibilidad

el código respeta las preferencias de accesibilidad:

**prefers-reduced-motion**
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

**contraste**
- colores con suficiente contraste para legibilidad
- links claramente diferenciados

**semántica html**
- uso correcto de etiquetas semánticas
- estructura lógica del documento

### 6. sin javascript

el sitio funciona completamente sin javascript. es solo html y css, lo que garantiza:
- **carga instantánea:** sin tiempo de procesamiento
- **compatibilidad universal:** funciona en cualquier navegador
- **accesibilidad máxima:** sin barreras de interacción
- **peso mínimo:** menos de 10kb en total

### 7. tipografía system fonts

uso de system fonts (fuentes del sistema) en lugar de web fonts:

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Roboto', 'Helvetica', 'Arial', sans-serif;
```

**ventajas:**
- carga instantánea (sin descarga de fuentes)
- aspecto nativo en cada sistema operativo
- mejor rendimiento
- familiaridad para el usuario

## 📁 estructura del proyecto

```
investigaciones_004/
├── index.html          # página principal
├── styles.css          # estilos minimalistas
├── README.md           # este archivo
└── manus/
    └── proceso.md      # documentación del proceso
```

## 🚀 cómo usar

1. clona el repositorio:
   ```bash
   git clone https://github.com/meowrhino/investigaciones_004.git
   ```

2. abre `index.html` en tu navegador. no necesitas servidor local ni build process.

3. personaliza el contenido editando el html directamente.

## 🎨 personalización

### cambiar la información personal

edita las secciones en `index.html`:

```html
<h1 class="name">TU NOMBRE</h1>
<p class="tagline">tu descripción profesional</p>
```

### añadir nuevas investigaciones

copia el bloque de proyecto y modifica:

```html
<div class="project">
    <a href="URL" target="_blank" class="project-title">título</a>
    <span class="project-description">— descripción del proyecto</span>
</div>
```

### cambiar los colores

en `styles.css`, modifica las variables de color:

```css
body {
    color: #000;              /* color del texto */
    background-color: #fff;   /* color de fondo */
}
```

### ajustar el ancho máximo

en `styles.css`:

```css
.container {
    max-width: 680px;  /* cambia este valor */
}
```

### desactivar el modo oscuro

si no quieres modo oscuro automático, elimina o comenta el bloque:

```css
@media (prefers-color-scheme: dark) {
    /* ... */
}
```

## 🌐 compatibilidad

- **html5:** compatible con todos los navegadores modernos
- **css3:** compatible con todos los navegadores modernos
- **sin javascript:** funciona incluso con javascript desactivado
- **responsive:** funciona en desktop, tablet y mobile

## 📊 rendimiento

**peso del proyecto:**
- html: ~3kb
- css: ~4kb
- **total: ~7kb**

**tiempo de carga:**
- prácticamente instantáneo
- sin dependencias externas
- sin web fonts
- sin javascript

## 💡 inspiración

este proyecto está inspirado en:
- [sharonzheng.com](https://sharonzheng.com/) - diseño minimalista y estructura clara
- [brutalist web design](https://brutalist-web.design/) - contenido sobre forma
- filosofía unix - hacer una cosa y hacerla bien
- movimiento de la web indie - control total sobre tu presencia digital

## 🎓 filosofía del proyecto

### pedagogía digital

este proyecto es parte de una práctica de **pedagogía digital** que busca:
- democratizar el acceso a la tecnología
- enseñar mediante el ejemplo
- documentar procesos de aprendizaje
- compartir conocimiento abiertamente

### agencia tecnológica

el objetivo es dotar de **agencia** a los individuos para que:
- entiendan cómo funciona la web
- puedan crear sus propios espacios digitales
- no dependan de plataformas cerradas
- tengan control sobre su presencia online

### código abierto

todo el código es abierto y está disponible para:
- aprender de él
- modificarlo
- mejorarlo
- compartirlo

## 📝 comparación con sharonzheng.com

### similitudes:
- diseño minimalista centrado en texto
- estructura de una sola página
- tipografía clara y legible
- sin imágenes en la página principal
- secciones bien definidas
- links a proyectos individuales

### diferencias:
- enfoque en investigaciones digitales vs portfolio profesional
- sección de filosofía más explícita
- documentación técnica incluida
- carpeta manus con proceso.md
- modo oscuro automático
- énfasis en pedagogía digital

## 🔗 enlaces relacionados

- [investigaciones_003](https://github.com/meowrhino/investigaciones_003) - parallax collage interactivo
- [investigaciones_002](https://github.com/meowrhino/investigaciones_002) - [pendiente]
- [investigaciones_001](https://github.com/meowrhino/investigaciones_001) - [pendiente]

## 📝 licencia

este proyecto es de código abierto y está disponible para que lo uses, modifiques y aprendas de él.

---

**hecho con ❤️ usando html y css**  
**[ no frameworks ] [ no javascript ] [ pure code ]**  
**by meowrhino.studio · 2026**
