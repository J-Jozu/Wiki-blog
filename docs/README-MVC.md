# 📚 Wiki de Testing - Arquitectura MVC

## 🏗️ Estructura del Proyecto

```
Coding/
├── index.html                    # Punto de entrada HTML
├── assets/                       # Recursos estáticos
│   └── css/
│       └── style.css            # Estilos globales
├── src/                         # Código fuente (MVC)
│   ├── models/                  # 📊 MODELS - Lógica de datos
│   │   ├── NavigationModel.js  # Gestión de navegación
│   │   └── ContentModel.js     # Gestión de contenido
│   ├── views/                   # 🎨 VIEWS - Renderizado UI
│   │   ├── NavigationView.js   # Vista del sidebar
│   │   └── ContentView.js      # Vista del contenido
│   ├── controllers/             # 🎮 CONTROLLERS - Lógica de control
│   │   └── AppController.js    # Controlador principal
│   ├── data/                    # 📁 Data - Contenido de secciones
│   │   ├── placeholder.js      # Contenido placeholder
│   │   ├── niveles.js          # Sección 1: Niveles de Prueba
│   │   ├── integracion.js      # Sección 2: Pruebas de Integración
│   │   ├── tipos.js            # Sección 3: Tipos de Prueba
│   │   └── cambio.js           # Sección 4: Pruebas de Cambio
│   └── main.js                  # 🚀 Entry Point - Inicialización
└── [legacy files]               # Archivos antiguos (deprecados)
```

## 🎯 Arquitectura MVC

### 📊 Models (Modelos)
**Responsabilidad:** Gestión de datos y lógica de negocio

- **NavigationModel.js**
  - Estructura de navegación del Wiki
  - Búsqueda de secciones por ID
  - Navegación jerárquica

- **ContentModel.js**
  - Mapeo de IDs a contenido HTML
  - Verificación de existencia de contenido
  - Generación de placeholders

### 🎨 Views (Vistas)
**Responsabilidad:** Renderizado de la interfaz de usuario

- **NavigationView.js**
  - Renderiza el menú lateral (sidebar)
  - Gestión de links activos
  - Navegación recursiva (sub-items)

- **ContentView.js**
  - Renderiza el contenido principal
  - Manejo de errores 404
  - Post-procesamiento (IDs, scroll)

### 🎮 Controllers (Controladores)
**Responsabilidad:** Coordinación entre Models y Views

- **AppController.js**
  - Inicialización de la aplicación
  - Gestión de navegación
  - Event listeners (clicks, hash changes)
  - Flujo de datos Model → View

## 🔄 Flujo de Datos

```
Usuario → Event → Controller → Model → Controller → View → DOM
```

### Ejemplo: Navegación a una sección

1. **Usuario** hace click en "Niveles de Prueba"
2. **NavigationView** captura el evento
3. **AppController** recibe `navigateToSection('niveles')`
4. **NavigationModel** busca datos de la sección
5. **ContentModel** obtiene el contenido HTML
6. **ContentView** renderiza el contenido en el DOM
7. **NavigationView** actualiza el link activo

## 🚀 Inicialización

```javascript
// main.js
document.addEventListener('DOMContentLoaded', () => {
    window.app = new AppController();
});
```

El controlador se encarga de:
1. Instanciar Models y Views
2. Renderizar navegación
3. Configurar event listeners
4. Cargar contenido inicial

## 📦 Orden de Carga de Scripts

```html
<!-- 1. Data Layer -->
<script src="src/data/placeholder.js"></script>
<script src="src/data/niveles.js"></script>
<script src="src/data/integracion.js"></script>
<script src="src/data/tipos.js"></script>
<script src="src/data/cambio.js"></script>

<!-- 2. Models -->
<script src="src/models/NavigationModel.js"></script>
<script src="src/models/ContentModel.js"></script>

<!-- 3. Views -->
<script src="src/views/NavigationView.js"></script>
<script src="src/views/ContentView.js"></script>

<!-- 4. Controllers -->
<script src="src/controllers/AppController.js"></script>

<!-- 5. Main Entry -->
<script src="src/main.js"></script>
```

## 🎨 Estilos

- **Paleta de colores:** 3 colores principales
  - `#57707A` - Gris azulado oscuro
  - `#7E909F` - Gris azulado medio
  - `#F2EFE5` - Beige/crema cálido

- **Responsive Design:** Breakpoints en 1024px y 768px
- **Material Icons:** Iconografía de Google

## 🛠️ Desarrollo

### Ejecutar servidor local
```bash
python -m http.server 8080
```

### Agregar nueva sección
1. Crear `src/data/nueva-seccion.js`
2. Agregar a `NavigationModel.navigationData`
3. Mapear en `ContentModel.contentMap`
4. Agregar script tag en `index.html`

### Modificar estilos
- Editar `assets/css/style.css`
- Variables CSS en `:root`

## 📝 Ventajas de esta Arquitectura

✅ **Separación de responsabilidades:** Cada módulo tiene un propósito claro  
✅ **Mantenibilidad:** Fácil localizar y modificar código  
✅ **Escalabilidad:** Agregar funcionalidades sin romper existentes  
✅ **Testeable:** Cada clase puede probarse independientemente  
✅ **Reutilizable:** Views y Models pueden usarse en otros contextos  
✅ **Legible:** Código autodocumentado con JSDoc  

## 🔍 Debug

Acceso a la instancia del controlador:
```javascript
window.app.getCurrentSection()        // Sección actual
window.app.navigationModel           // Modelo de navegación
window.app.contentModel              // Modelo de contenido
```

Console logs:
- 🚀 Inicialización
- 📄 Navegación a secciones
- ✅ Renderizado exitoso
- ⚠️ Advertencias
- ❌ Errores

## 📄 Licencia

Proyecto educativo - Wiki de Testing de Software

---

**Versión:** 2.0.0-MVC  
**Última actualización:** Octubre 2025
