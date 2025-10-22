/**
 * AppController.js
 * Controlador Principal: Coordina Models y Views
 */

class AppController {
    constructor() {
        // Inicializar Models
        this.navigationModel = new NavigationModel();
        this.contentModel = new ContentModel();
        
        // Inicializar Views
        this.navigationView = new NavigationView();
        this.contentView = new ContentView();
        
        // Estado de la aplicación
        this.currentSection = null;
        
        // Inicializar aplicación
        this.init();
    }

    /**
     * Inicialización de la aplicación
     */
    init() {
        console.log('🚀 Inicializando Wiki de Testing...');
        
        // Renderizar sidebar
        this.renderNavigation();
        
        // Configurar event listeners
        this.setupEventListeners();
        
        // Cargar contenido inicial
        this.loadInitialContent();
        
        console.log('✅ Aplicación inicializada correctamente');
    }

    /**
     * Renderiza el menú de navegación
     */
    renderNavigation() {
        const navigationData = this.navigationModel.getNavigationData();
        this.navigationView.render(navigationData);
    }

    /**
     * Configura todos los event listeners de la aplicación
     */
    setupEventListeners() {
        // Click en enlaces de navegación
        const navLinks = this.navigationView.getNavigationLinks();
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.dataset.sectionId;
                this.navigateToSection(sectionId);
            });
        });

        // Cambios en el hash de la URL (botones atrás/adelante del navegador)
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                this.navigateToSection(hash, false);
            }
        });

        console.log('📡 Event listeners configurados');
    }

    /**
     * Carga el contenido inicial basado en el hash de la URL
     */
    loadInitialContent() {
        const hash = window.location.hash.substring(1);
        const initialSection = hash || this.navigationModel.getDefaultSectionId();
        this.navigateToSection(initialSection);
    }

    /**
     * Navega a una sección específica
     * @param {string} sectionId - ID de la sección
     * @param {boolean} updateHash - Si debe actualizar el hash de la URL
     */
    navigateToSection(sectionId, updateHash = true) {
        console.log(`📄 Navegando a sección: ${sectionId}`);
        
        // Actualizar estado
        this.currentSection = sectionId;
        
        // Actualizar vista de navegación (link activo)
        this.navigationView.setActiveLink(sectionId);
        
        // Cargar y renderizar contenido
        this.loadAndRenderContent(sectionId);
        
        // Actualizar URL hash si es necesario
        if (updateHash) {
            window.location.hash = sectionId;
        }
    }

    /**
     * Carga y renderiza el contenido de una sección
     * @param {string} sectionId - ID de la sección
     */
    loadAndRenderContent(sectionId) {
        // Buscar datos de la sección
        const sectionData = this.navigationModel.findSectionById(sectionId);
        
        if (!sectionData) {
            console.warn(`⚠️ Sección no encontrada: ${sectionId}`);
            this.contentView.renderNotFound(sectionId);
            return;
        }

        // Obtener contenido
        let content = this.contentModel.getContentById(sectionId);
        
        // Si no hay contenido, usar placeholder
        if (!content) {
            console.info(`ℹ️ Usando placeholder para: ${sectionId}`);
            content = this.contentModel.getPlaceholderContent(sectionData);
        }

        // Renderizar contenido
        this.contentView.render(content);
        
        console.log(`✅ Contenido renderizado: ${sectionData.title}`);
    }

    /**
     * Obtiene el ID de la sección actual
     * @returns {string|null} ID de la sección actual
     */
    getCurrentSection() {
        return this.currentSection;
    }
}
