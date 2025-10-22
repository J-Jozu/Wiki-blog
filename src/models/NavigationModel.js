/**
 * NavigationModel.js
 * Modelo: Gestiona los datos de navegación y secciones del Wiki
 */

class NavigationModel {
    constructor() {
        this.navigationData = [
            {
                id: 'niveles',
                title: '1. Niveles de Prueba',
                icon: 'layers',
                children: []
            },
            {
                id: 'integracion',
                title: '2. Pruebas de Integración',
                icon: 'integration_instructions',
                children: []
            },
            {
                id: 'tipos',
                title: '3. Tipos de Prueba',
                icon: 'category',
                children: []
            },
            {
                id: 'cambio',
                title: '4. Pruebas Relacionadas con el Cambio',
                icon: 'sync',
                children: []
            }
        ];
    }

    /**
     * Obtiene todos los datos de navegación
     * @returns {Array} Array con estructura de navegación
     */
    getNavigationData() {
        return this.navigationData;
    }

    /**
     * Busca una sección por su ID
     * @param {string} sectionId - ID de la sección a buscar
     * @returns {Object|null} Objeto de la sección o null si no existe
     */
    findSectionById(sectionId) {
        return this._searchSection(sectionId, this.navigationData);
    }

    /**
     * Búsqueda recursiva de sección en el árbol de navegación
     * @private
     */
    _searchSection(sectionId, items) {
        for (let item of items) {
            if (item.id === sectionId) {
                return item;
            }
            if (item.children && item.children.length > 0) {
                const found = this._searchSection(sectionId, item.children);
                if (found) return found;
            }
        }
        return null;
    }

    /**
     * Obtiene el ID de la primera sección (para carga inicial)
     * @returns {string} ID de la primera sección
     */
    getDefaultSectionId() {
        return this.navigationData[0]?.id || 'niveles';
    }
}
