# 📖 Guía de Uso - Wiki de Testing MVC

## 🚀 Inicio Rápido

### 1. Levantar el servidor
```bash
cd "d:\ADMIN\OneDrive\Documents\Docker-Containers\Coding"
python -m http.server 8080
```

### 2. Abrir en navegador
```
http://localhost:8080/index.html
```

## 🛠️ Desarrollo

### Agregar una nueva sección

#### Paso 1: Crear archivo de contenido
```javascript
// src/data/mi-seccion.js
const miSeccionContent = `
<h1>
    <span class="material-symbols-outlined">star</span>
    Mi Nueva Sección
</h1>

<h2>Introducción</h2>
<p>Contenido de mi sección...</p>
`;
```

#### Paso 2: Registrar en NavigationModel
```javascript
// src/models/NavigationModel.js
this.navigationData = [
    // ... secciones existentes
    {
        id: 'mi-seccion',
        title: '5. Mi Nueva Sección',
        icon: 'star',
        children: []
    }
];
```

#### Paso 3: Mapear en ContentModel
```javascript
// src/models/ContentModel.js
this.contentMap = {
    // ... contenido existente
    'mi-seccion': typeof miSeccionContent !== 'undefined' ? miSeccionContent : null
};
```

#### Paso 4: Agregar script en index.html
```html
<!-- Después de los otros archivos de data -->
<script src="src/data/mi-seccion.js"></script>
```

### Modificar estilos

#### Cambiar paleta de colores
```css
/* assets/css/style.css */
:root {
    --color-darkest: #57707A;   /* Oscuro */
    --color-medium: #7E909F;    /* Medio */
    --color-lightest: #F2EFE5;  /* Claro */
}
```

#### Ajustar componentes
```css
/* Sidebar */
.sidebar {
    background-color: var(--color-lightest);
}

/* Content */
.content-area {
    background-color: white;
}
```

## 🔍 Debugging

### Acceder a la instancia de la app
```javascript
// En la consola del navegador
window.app                          // Instancia del controlador
window.app.getCurrentSection()      // Sección actual
window.app.navigationModel          // Modelo de navegación
window.app.contentModel             // Modelo de contenido
```

### Ver logs en consola
- 🚀 Inicialización de la app
- 📄 Navegación a secciones
- ✅ Renderizado exitoso
- ⚠️ Advertencias (placeholder, etc.)
- ❌ Errores

### Verificar estructura de datos
```javascript
// Navegación completa
window.app.navigationModel.getNavigationData()

// Buscar sección
window.app.navigationModel.findSectionById('niveles')

// Verificar contenido
window.app.contentModel.hasContent('tipos')
window.app.contentModel.getContentById('cambio')
```

## 📝 Convenciones de Código

### Nomenclatura de archivos
- **Models:** `[Nombre]Model.js` (PascalCase)
- **Views:** `[Nombre]View.js` (PascalCase)
- **Controllers:** `[Nombre]Controller.js` (PascalCase)
- **Data:** `[nombre].js` (lowercase con guiones)

### Nomenclatura de clases y métodos
```javascript
// Clases: PascalCase
class NavigationView { }

// Métodos públicos: camelCase
render() { }
setActiveLink() { }

// Métodos privados: _camelCase
_createNavigationList() { }
_searchSection() { }
```

### Documentación JSDoc
```javascript
/**
 * Descripción del método
 * @param {string} paramName - Descripción del parámetro
 * @returns {Object} Descripción del retorno
 */
metodoEjemplo(paramName) {
    // ...
}
```

## 📂 Estructura de Carpetas

```
src/
├── main.js              → Entry point
├── models/              → Lógica de datos
│   ├── NavigationModel.js
│   └── ContentModel.js
├── views/               → Renderizado UI
│   ├── NavigationView.js
│   └── ContentView.js
├── controllers/         → Coordinación
│   └── AppController.js
└── data/                → Contenido
    ├── placeholder.js
    ├── niveles.js
    ├── integracion.js
    ├── tipos.js
    └── cambio.js
```

## 🎨 Material Icons

### Usar iconos en HTML
```html
<span class="material-symbols-outlined">nombre_icono</span>
```

### Iconos disponibles comunes
- `menu_book` - Libro/Wiki
- `layers` - Capas/Niveles
- `integration_instructions` - Integración
- `category` - Categorías
- `sync` - Sincronización/Cambio
- `check_circle` - Confirmación
- `history` - Historial/Regresión
- `error` - Error
- `article` - Artículo

Buscar más en: https://fonts.google.com/icons

## 🔧 Troubleshooting

### La aplicación no carga
1. Verificar que todos los scripts estén en orden en `index.html`
2. Verificar ruta de `assets/css/style.css`
3. Abrir consola del navegador para ver errores

### Sección no aparece en el menú
1. Verificar que esté registrada en `NavigationModel.navigationData`
2. Verificar que tenga `id`, `title` e `icon`

### Contenido no se muestra
1. Verificar que el archivo de contenido esté en `src/data/`
2. Verificar que esté mapeado en `ContentModel.contentMap`
3. Verificar que el script esté incluido en `index.html`

### Estilos no se aplican
1. Verificar ruta del CSS: `assets/css/style.css`
2. Verificar que las variables CSS estén definidas en `:root`
3. Hacer hard refresh: `Ctrl + Shift + R`

## 📚 Recursos Adicionales

- **README-MVC.md** - Documentación completa de arquitectura
- **ARQUITECTURA-MVC.md** - Diagramas visuales
- **index.html** - Comentarios sobre orden de carga

## 🎯 Mejores Prácticas

1. ✅ **Un archivo, una responsabilidad**
2. ✅ **Documentar con JSDoc**
3. ✅ **Console.log para debugging**
4. ✅ **Nombres descriptivos**
5. ✅ **Separar datos de lógica**
6. ✅ **Reutilizar componentes**
7. ✅ **Mantener estilos centralizados**

## 🚀 Deploy

Para producción:
1. Minificar CSS y JS
2. Optimizar imágenes (si las hay)
3. Configurar server con HTTPS
4. Cache busting para assets

---

**Versión:** 2.0.0-MVC  
**Soporte:** Consultar README-MVC.md para más detalles
