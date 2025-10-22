/**
 * NavigationView.js
 * Vista: Renderiza el menú de navegación lateral (sidebar)
 */

class NavigationView {
    constructor() {
        this.navMenuElement = document.getElementById('nav-menu');
    }

    /**
     * Renderiza el menú de navegación completo
     * @param {Array} navigationData - Estructura de datos de navegación
     */
    render(navigationData) {
        if (!this.navMenuElement) {
            console.error('Elemento #nav-menu no encontrado en el DOM');
            return;
        }

        this.navMenuElement.innerHTML = '';
        const ul = this._createNavigationList(navigationData);
        this.navMenuElement.appendChild(ul);
    }

    /**
     * Crea una lista de navegación de forma recursiva
     * @private
     */
    _createNavigationList(items) {
        const ul = document.createElement('ul');
        
        items.forEach(item => {
            const li = document.createElement('li');
            const a = this._createNavigationLink(item);
            
            li.appendChild(a);
            
            // Renderizar sub-items si existen
            if (item.children && item.children.length > 0) {
                const childUl = this._createNavigationList(item.children);
                li.appendChild(childUl);
            }
            
            ul.appendChild(li);
        });
        
        return ul;
    }

    /**
     * Crea un enlace de navegación individual
     * @private
     */
    _createNavigationLink(item) {
        const a = document.createElement('a');
        a.href = `#${item.id}`;
        a.dataset.sectionId = item.id;
        
        // Agregar ícono si existe
        if (item.icon) {
            const icon = document.createElement('span');
            icon.className = 'material-symbols-outlined';
            icon.textContent = item.icon;
            a.appendChild(icon);
        }
        
        // Agregar título
        const span = document.createElement('span');
        span.textContent = item.title;
        a.appendChild(span);
        
        return a;
    }

    /**
     * Actualiza el enlace activo en la navegación
     * @param {string} sectionId - ID de la sección activa
     */
    setActiveLink(sectionId) {
        const navLinks = this.navMenuElement.querySelectorAll('a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.sectionId === sectionId) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Obtiene todos los enlaces de navegación para event listeners
     * @returns {NodeList} Lista de elementos <a>
     */
    getNavigationLinks() {
        return this.navMenuElement.querySelectorAll('a');
    }
}
