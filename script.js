/* ============================================
   investigación 004 - efecto de pliegue 3D EXAGERADO
   con scroll horizontal y vertical
   inspirado en sharonzheng.com
   ============================================ */

/**
 * Inicializa el efecto de pliegue 3D exagerado
 * 
 * Este efecto crea la ilusión de que la página está doblada en NUEVE secciones:
 * - 4 esquinas (top-left, top-right, bottom-left, bottom-right)
 * - 4 lados (top, bottom, left, right)
 * - 1 centro (visible normalmente)
 * 
 * Al hacer scroll (vertical U horizontal), el contenido se mueve en dirección
 * opuesta al scroll, creando un efecto de parallax invertido en 2D.
 * 
 * MEJORAS:
 * - Scroll horizontal y vertical
 * - 30dvh de espacio inicial arriba
 * - Ángulos más exagerados (120deg en lugar de 90deg)
 * - Deformaciones más tempranas
 */

function initFoldEffect() {
    // Obtener elementos
    const centerContent = document.getElementById('center-content');
    const centerFold = document.getElementById('center-fold');
    
    if (!centerContent || !centerFold) {
        console.error('No se encontraron los elementos necesarios para el efecto 3D');
        return;
    }
    
    // Calcular la altura total del body
    // Añadimos más altura para permitir más scroll y más deformación
    const contentHeight = centerContent.clientHeight;
    const foldHeight = centerFold.clientHeight;
    
    // Multiplicador para permitir MÁS scroll y MÁS deformación
    const scrollMultiplier = 2.5; // Aumentado para más deformación
    
    const totalHeight = (contentHeight - foldHeight + window.innerHeight) * scrollMultiplier;
    const totalWidth = window.innerWidth * scrollMultiplier; // Añadir ancho para scroll horizontal
    
    document.body.style.height = totalHeight + 'px';
    document.body.style.width = totalWidth + 'px';
    
    // Obtener todos los elementos con contenido que se debe mover
    const foldContents = Array.from(document.querySelectorAll('[data-fold-content="true"]'));
    
    /**
     * Función que se ejecuta en cada frame de animación
     * Mueve el contenido en dirección opuesta al scroll (vertical Y horizontal)
     */
    function updateFoldPositions() {
        // Obtener la posición actual del scroll (negativa para invertir dirección)
        const scrollOffsetY = -(document.documentElement.scrollTop || document.body.scrollTop);
        const scrollOffsetX = -(document.documentElement.scrollLeft || document.body.scrollLeft);
        
        // Aplicar la transformación a cada elemento de contenido
        // Ahora con movimiento en X e Y
        foldContents.forEach((element) => {
            element.style.transform = `translate(${scrollOffsetX}px, ${scrollOffsetY}px)`;
        });
        
        // Continuar la animación en el siguiente frame
        requestAnimationFrame(updateFoldPositions);
    }
    
    // Iniciar el loop de animación
    updateFoldPositions();
    
    console.log('Efecto de pliegue 3D EXAGERADO inicializado correctamente');
    console.log('- Scroll vertical: ✓');
    console.log('- Scroll horizontal: ✓');
    console.log('- Ángulos exagerados: 120deg (desktop), 160deg (mobile)');
    console.log('- Espacio inicial: 30dvh');
}

/**
 * Maneja el redimensionamiento de la ventana
 * Recalcula las alturas cuando cambia el tamaño de la ventana
 */
function handleResize() {
    initFoldEffect();
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFoldEffect);
} else {
    initFoldEffect();
}

// Reinicializar cuando se redimensiona la ventana
window.addEventListener('resize', handleResize);

/**
 * Detectar si el usuario prefiere movimiento reducido
 * Si es así, desactivar el efecto de parallax
 */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    console.log('Movimiento reducido detectado - Efecto de parallax desactivado');
    // El CSS ya maneja esto, pero podríamos añadir lógica adicional aquí si fuera necesario
}

// Escuchar cambios en las preferencias de movimiento
prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
        console.log('Movimiento reducido activado - Efecto de parallax desactivado');
        location.reload();
    } else {
        console.log('Movimiento reducido desactivado - Efecto de parallax activado');
        location.reload();
    }
});

/**
 * Añadir indicadores visuales para el scroll horizontal
 * (opcional - comentar si no se desea)
 */
function addScrollIndicators() {
    // Crear indicador de scroll horizontal
    const horizontalIndicator = document.createElement('div');
    horizontalIndicator.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 12px;
        font-family: monospace;
        z-index: 9999;
        pointer-events: none;
    `;
    horizontalIndicator.textContent = '← → scroll horizontal disponible';
    document.body.appendChild(horizontalIndicator);
    
    // Ocultar después de 3 segundos
    setTimeout(() => {
        horizontalIndicator.style.transition = 'opacity 0.5s';
        horizontalIndicator.style.opacity = '0';
        setTimeout(() => horizontalIndicator.remove(), 500);
    }, 3000);
}

// Activar indicadores (comentar esta línea si no se desea)
// addScrollIndicators();

/**
 * DEBUG: Información útil para desarrollo
 * Comentar o eliminar en producción
 */
console.log('='.repeat(50));
console.log('investigación 004 - efecto de pliegue 3D EXAGERADO');
console.log('='.repeat(50));
console.log('Viewport:', window.innerWidth, 'x', window.innerHeight);
console.log('Scroll height:', document.body.style.height);
console.log('Scroll width:', document.body.style.width);
console.log('Espacio inicial: 30dvh');
console.log('Perspective: 15vw (más dramático)');
console.log('Ángulos: 120deg (desktop), 160deg (mobile)');
console.log('Prefers reduced motion:', prefersReducedMotion.matches);
console.log('='.repeat(50));
