/**
 * main.js
 * Punto de entrada de la aplicación
 * Inicializa el controlador cuando el DOM está listo
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌐 DOM cargado, iniciando aplicación...');
    
    try {
        // Inicializar aplicación a través del controlador
        globalThis.app = new AppController();
        
        console.log('🎉 Aplicación lista para usar');
    } catch (error) {
        console.error('❌ Error al inicializar la aplicación:', error);
        
        // Mostrar mensaje de error al usuario
        const contentArea = document.getElementById('content-area');
        if (contentArea) {
            contentArea.innerHTML = `
                <div style="padding: 40px; text-align: center;">
                    <span class="material-symbols-outlined" style="font-size: 64px; color: #dc2626;">error</span>
                    <h1 style="color: #dc2626; margin-top: 20px;">Error de Inicialización</h1>
                    <p>Ocurrió un error al cargar la aplicación. Por favor, recarga la página.</p>
                    <p style="font-family: monospace; color: #666; margin-top: 20px;">${error.message}</p>
                </div>
            `;
        }
    }
});

// Exponer versión de la aplicación
globalThis.APP_VERSION = '2.0.0-MVC';
console.log(`📦 Wiki de Testing v${globalThis.APP_VERSION}`);
