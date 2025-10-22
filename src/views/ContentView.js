/**
 * ContentView.js
 * Vista: Renderiza el contenido principal de las secciones
 */

class ContentView {
    constructor() {
        this.contentAreaElement = document.getElementById('content-area');
    }

    /**
     * Renderiza el contenido de una sección
     * @param {string} content - HTML del contenido a renderizar
     */
    render(content) {
        if (!this.contentAreaElement) {
            console.error('Elemento #content-area no encontrado en el DOM');
            return;
        }

        this.contentAreaElement.innerHTML = content;
        
        // Post-procesamiento: agregar IDs a headings para anclas
        this._addHeadingIds();
        
        // Scroll suave al inicio del contenido
        this._scrollToTop();
    }

    /**
     * Renderiza un mensaje de error 404
     * @param {string} sectionId - ID de la sección no encontrada
     */
    renderNotFound(sectionId) {
        const content = `
            <h1>
                <span class="material-symbols-outlined">error</span>
                Sección no encontrada
            </h1>
            <p>La sección con ID "<strong>${sectionId}</strong>" no existe en el Wiki.</p>
            <p>Por favor, selecciona una sección válida del menú de navegación.</p>
        `;
        this.render(content);
    }

    /**
     * Agrega IDs únicos a los headings para navegación por anclas
     * @private
     */
    _addHeadingIds() {
        const headings = this.contentAreaElement.querySelectorAll('h2, h3, h4');
        headings.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = `heading-${index}`;
            }
        });
    }

    /**
     * Hace scroll suave al inicio del contenido
     * @private
     */
    _scrollToTop() {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    }

    /**
     * Muestra un indicador de carga
     */
    showLoading() {
        const loadingContent = `
            <div style="text-align: center; padding: 60px 20px;">
                <span class="material-symbols-outlined" style="font-size: 48px; color: var(--color-medium); animation: spin 1s linear infinite;">
                    progress_activity
                </span>
                <p style="margin-top: 20px; color: var(--color-dark);">Cargando contenido...</p>
            </div>
        `;
        this.render(loadingContent);
    }
}
