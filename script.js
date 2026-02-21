/* ============================================
   investigación 004 - efecto de pliegue 3D
   inspirado en sharonzheng.com
   ============================================ */

/**
 * Inicializa el efecto de pliegue 3D
 * 
 * Este efecto crea la ilusión de que la página está doblada en tres secciones:
 * - Sección superior: plegada hacia arriba (rotateX -90deg)
 * - Sección central: visible normalmente
 * - Sección inferior: plegada hacia abajo (rotateX 90deg)
 * 
 * Al hacer scroll, el contenido dentro de cada sección se mueve en dirección
 * opuesta al scroll, creando un efecto de parallax invertido.
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
    // Esto permite que el scroll funcione correctamente
    const contentHeight = centerContent.clientHeight;
    const foldHeight = centerFold.clientHeight;
    const totalHeight = contentHeight - foldHeight + window.innerHeight;
    
    document.body.style.height = totalHeight + 'px';
    
    // Obtener todos los elementos con contenido que se debe mover
    const foldContents = Array.from(document.querySelectorAll('[data-fold-content="true"]'));
    
    /**
     * Función que se ejecuta en cada frame de animación
     * Mueve el contenido en dirección opuesta al scroll
     */
    function updateFoldPositions() {
        // Obtener la posición actual del scroll (negativa para invertir dirección)
        const scrollOffset = -(document.documentElement.scrollTop || document.body.scrollTop);
        
        // Aplicar la transformación a cada elemento de contenido
        foldContents.forEach((element) => {
            element.style.transform = `translateY(${scrollOffset}px)`;
        });
        
        // Continuar la animación en el siguiente frame
        requestAnimationFrame(updateFoldPositions);
    }
    
    // Iniciar el loop de animación
    updateFoldPositions();
    
    console.log('Efecto de pliegue 3D inicializado correctamente');
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
        // Recargar la página o desactivar el efecto dinámicamente
        location.reload();
    } else {
        console.log('Movimiento reducido desactivado - Efecto de parallax activado');
        location.reload();
    }
});

/**
 * DEBUG: Información útil para desarrollo
 * Comentar o eliminar en producción
 */
console.log('='.repeat(50));
console.log('investigación 004 - efecto de pliegue 3D');
console.log('='.repeat(50));
console.log('Viewport:', window.innerWidth, 'x', window.innerHeight);
console.log('Scroll height:', document.body.style.height);
console.log('Prefers reduced motion:', prefersReducedMotion.matches);
console.log('='.repeat(50));
