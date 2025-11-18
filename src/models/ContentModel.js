/**
 * ContentModel.js
 * Modelo: Gestiona el contenido de las secciones del Wiki
 */

class ContentModel {
constructor() {
    // Mapeo de IDs a contenido (importado desde data/)
    this.contentMap = {
        'niveles': typeof nivelesContent === 'undefined' ? null : nivelesContent,
        'integracion': typeof integracionContent === 'undefined' ? null : integracionContent,
        'tipos': typeof tiposContent === 'undefined' ? null : tiposContent,
        'cambio': typeof cambioContent === 'undefined' ? null : cambioContent
    };
}

    /**
     * Obtiene el contenido HTML de una sección
     * @param {string} sectionId - ID de la sección
     * @returns {string|null} HTML del contenido o null si no existe
     */
    getContentById(sectionId) {
        return this.contentMap[sectionId] || null;
    }

    /**
     * Verifica si existe contenido para una sección
     * @param {string} sectionId - ID de la sección
     * @returns {boolean} true si existe contenido
     */
    hasContent(sectionId) {
        return this.contentMap[sectionId] !== null && 
               this.contentMap[sectionId] !== undefined;
    }

    /**
     * Genera contenido placeholder para secciones sin contenido
     * @param {Object} sectionData - Datos de la sección
     * @returns {string} HTML del placeholder
     */
    getPlaceholderContent(sectionData) {
        if (typeof defaultPlaceholderContent === 'function') {
            return defaultPlaceholderContent(sectionData);
        }
        
        return `
            <h1>
                <span class="material-symbols-outlined">${sectionData.icon || 'article'}</span>
                ${sectionData.title}
            </h1>
            <p>Esta sección está en desarrollo.</p>
            <p>Pronto encontrarás información detallada sobre <strong>${sectionData.title}</strong>.</p>
        `;
    }
}
