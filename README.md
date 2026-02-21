# investigación 004 - portfolio minimalista con efecto de pliegue 3D

un **índice personal** de investigaciones digitales inspirado en el diseño minimalista de [sharonzheng.com](https://sharonzheng.com/). este proyecto funciona como portfolio y archivo de experimentos de creative coding, arte web y pedagogía digital, con un **efecto de pliegue 3D** que crea la ilusión de que la página está doblada como un papel.

## 🎯 objetivo

crear un **portfolio/índice minimalista** que documente y organice todas las investigaciones digitales, con un efecto visual sutil que añade profundidad sin distraer del contenido. el efecto de pliegue 3D hace que la página parezca estar doblada en tres secciones visibles simultáneamente.

## ✨ características

### 1. efecto de pliegue 3D

el efecto principal inspirado en sharonzheng.com crea la ilusión de que la página está doblada en tres secciones:

**estructura:**
- **sección superior:** plegada hacia arriba (rotateX -90deg)
- **sección central:** visible normalmente
- **sección inferior:** plegada hacia abajo (rotateX 90deg)

**cómo funciona:**

```css
.wrapper-3d {
    perspective: 20vw;
    transform-style: preserve-3d;
}

.fold-top {
    transform: rotateX(-90deg);
    transform-origin: bottom center;
}

.fold-bottom {
    transform: rotateX(90deg);
    transform-origin: top center;
}
```

**parallax invertido:**

cuando haces scroll, el contenido dentro de las tres secciones se mueve en dirección opuesta al scroll, creando un efecto de parallax invertido:

```javascript
const scrollOffset = -(document.documentElement.scrollTop || document.body.scrollTop);
foldContents.forEach((element) => {
    element.style.transform = `translateY(${scrollOffset}px)`;
});
```

**características técnicas:**
- perspective CSS: 20vw para crear profundidad 3D
- transform-style: preserve-3d mantiene las transformaciones en los hijos
- rotateX para crear el efecto de pliegue
- transform-origin define el punto de rotación
- requestAnimationFrame para animación suave (60fps)

### 2. diseño minimalista

inspirado en el trabajo de sharon zheng, el diseño se centra en:
- **tipografía clara:** uso de system fonts para máxima legibilidad
- **espaciado generoso:** breathing room entre secciones
- **sin imágenes:** todo el contenido es textual
- **jerarquía visual:** mediante tamaños de fuente y pesos

el diseño respeta la filosofía de "contenido primero", eliminando cualquier elemento que no aporte valor informativo.

### 3. estructura de contenido

toda la información está organizada en secciones:

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

### 4. responsive design

el sitio se adapta a diferentes tamaños de pantalla:
- **desktop:** ancho máximo de 680px centrado, ángulos de 90deg
- **mobile:** ángulos más pronunciados (140deg) para mejor visualización
- **tablet:** transición suave entre ambos

```css
@media only screen and (max-width: 768px) {
    .fold-top { transform: rotateX(-140deg); }
    .fold-bottom { transform: rotateX(140deg); }
}
```

### 5. modo oscuro automático

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

### 6. accesibilidad

el código respeta las preferencias de accesibilidad:

**prefers-reduced-motion**

si el usuario tiene activada la opción "reducir movimiento", el efecto 3D se desactiva completamente:

```css
@media (prefers-reduced-motion: reduce) {
    .wrapper-3d { perspective: none; }
    .fold-top, .fold-bottom { transform: none; }
}
```

**contraste**
- colores con suficiente contraste para legibilidad
- links claramente diferenciados

**semántica html**
- uso correcto de etiquetas semánticas
- estructura lógica del documento

### 7. rendimiento optimizado

**requestAnimationFrame**

el efecto de parallax usa `requestAnimationFrame` en lugar de eventos de scroll porque:
- más suave (60fps)
- mejor rendimiento
- sincronizado con el refresh rate del navegador
- optimizado automáticamente por el navegador

```javascript
function updateFoldPositions() {
    const scrollOffset = -(document.documentElement.scrollTop || document.body.scrollTop);
    foldContents.forEach((element) => {
        element.style.transform = `translateY(${scrollOffset}px)`;
    });
    requestAnimationFrame(updateFoldPositions);
}
```

### 8. tipografía system fonts

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
├── index.html          # página principal con estructura triplicada
├── styles.css          # estilos minimalistas + efecto 3D
├── script.js           # lógica del efecto de pliegue
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

3. **haz scroll** para ver el efecto de parallax invertido en acción.

## 🎨 personalización

### cambiar la información personal

edita las secciones en `index.html` (recuerda cambiar en las tres copias):

```html
<h1 class="name">TU NOMBRE</h1>
<p class="tagline">tu descripción profesional</p>
```

### añadir nuevas investigaciones

copia el bloque de proyecto y modifica (en las tres copias):

```html
<div class="project">
    <a href="URL" target="_blank" class="project-title">título</a>
    <span class="project-description">— descripción del proyecto</span>
</div>
```

### ajustar la intensidad del efecto 3D

en `styles.css`, cambia el valor de `perspective`:

```css
.wrapper-3d {
    perspective: 20vw;  /* valores más altos = efecto más sutil */
}
```

### ajustar los ángulos de rotación

en `styles.css`:

```css
.fold-top {
    transform: rotateX(-90deg);  /* cambia el ángulo */
}

.fold-bottom {
    transform: rotateX(90deg);  /* cambia el ángulo */
}
```

### cambiar el tamaño de los folds

en `styles.css`:

```css
.fold {
    width: 80vw;   /* ancho del contenido visible */
    height: 80vh;  /* alto del contenido visible */
}
```

### desactivar el efecto 3D

si solo quieres el diseño minimalista sin el efecto 3D:

1. elimina o comenta las clases `.fold-top` y `.fold-bottom` en el CSS
2. elimina las secciones superior e inferior del HTML
3. elimina o comenta el `<script src="script.js"></script>`

### cambiar los colores

en `styles.css`, modifica las variables de color:

```css
body {
    color: #000;              /* color del texto */
    background-color: #fff;   /* color de fondo */
}
```

## 🌐 compatibilidad

- **CSS 3D transforms:** compatible con todos los navegadores modernos
- **requestAnimationFrame:** compatible con todos los navegadores modernos
- **prefers-reduced-motion:** compatible con navegadores modernos
- **prefers-color-scheme:** compatible con navegadores modernos

**navegadores probados:**
- Chrome/Edge: ✓
- Firefox: ✓
- Safari: ✓

## 📊 rendimiento

**peso del proyecto:**
- html: ~12kb (contenido triplicado)
- css: ~5kb
- js: ~3kb
- **total: ~20kb**

**tiempo de carga:**
- prácticamente instantáneo
- sin dependencias externas
- sin web fonts
- sin imágenes

**rendimiento del efecto:**
- 60fps constantes con requestAnimationFrame
- uso de GPU para transforms
- optimizado automáticamente por el navegador

## 💡 inspiración

este proyecto está inspirado en:
- [sharonzheng.com](https://sharonzheng.com/) - efecto de pliegue 3D y diseño minimalista
- [brutalist web design](https://brutalist-web.design/) - contenido sobre forma
- filosofía unix - hacer una cosa y hacerla bien
- movimiento de la web indie - control total sobre tu presencia digital

## 🎓 cómo funciona el efecto 3D

### conceptos clave

**1. perspective**

la propiedad `perspective` crea la ilusión de profundidad 3D. define la distancia entre el plano z=0 y el usuario:

```css
.wrapper-3d {
    perspective: 20vw;  /* 20% del ancho del viewport */
}
```

valores más bajos = efecto más dramático  
valores más altos = efecto más sutil

**2. transform-style: preserve-3d**

mantiene las transformaciones 3D en los elementos hijos:

```css
.wrapper-3d {
    transform-style: preserve-3d;
}
```

sin esto, los elementos hijos se "aplanarían" al plano 2D del padre.

**3. rotateX**

rota los elementos en el eje X (horizontal):

```css
.fold-top {
    transform: rotateX(-90deg);  /* rota hacia arriba */
}

.fold-bottom {
    transform: rotateX(90deg);   /* rota hacia abajo */
}
```

**4. transform-origin**

define el punto desde el cual se aplica la transformación:

```css
.fold-top {
    transform-origin: bottom center;  /* rota desde la parte inferior */
}

.fold-bottom {
    transform-origin: top center;     /* rota desde la parte superior */
}
```

**5. parallax invertido**

el contenido se mueve en dirección opuesta al scroll:

```javascript
const scrollOffset = -(document.documentElement.scrollTop || document.body.scrollTop);
element.style.transform = `translateY(${scrollOffset}px)`;
```

el signo negativo invierte la dirección del movimiento.

### por qué funciona

la combinación de estos elementos crea la ilusión de que:
1. la página está doblada en tres secciones
2. las secciones superior e inferior están "plegadas" hacia atrás
3. al hacer scroll, el contenido se "desliza" a través de las secciones

es un efecto puramente visual - no hay deformación real del contenido, solo transformaciones 3D aplicadas a contenedores.

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
- efecto de pliegue 3D idéntico
- misma perspectiva (20vw)
- mismos ángulos de rotación (90deg desktop, 140deg mobile)
- mismo parallax invertido
- diseño minimalista centrado en texto
- estructura de una sola página
- tipografía clara y legible

### diferencias:
- sharon usa react, nosotros html vanilla
- sharon tiene código minificado, nosotros prioriza legibilidad
- añadimos más comentarios y documentación
- añadimos detección de prefers-reduced-motion
- código más modular y fácil de entender
- enfoque en pedagogía digital y agencia tecnológica

## 🔗 enlaces relacionados

- [investigaciones_003](https://github.com/meowrhino/investigaciones_003) - parallax collage interactivo
- [investigaciones_002](https://github.com/meowrhino/investigaciones_002) - [pendiente]
- [investigaciones_001](https://github.com/meowrhino/investigaciones_001) - [pendiente]

## 📝 licencia

este proyecto es de código abierto y está disponible para que lo uses, modifiques y aprendas de él.

---

**hecho con ❤️ usando html, css y javascript vanilla**  
**[ no frameworks ] [ no dependencies ] [ pure code ]**  
**by meowrhino.studio · 2026**
