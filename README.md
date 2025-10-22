# 📚 Wiki de Testing - Software Testing

> Plataforma educativa interactiva sobre Testing de Software con arquitectura MVC

[![Version](https://img.shields.io/badge/version-2.0.0--MVC-blue.svg)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 🎯 Descripción

Wiki interactiva sobre Testing de Software que cubre niveles, tipos y mejores prácticas. Desarrollado con arquitectura MVC (Model-View-Controller) para facilitar el mantenimiento y escalabilidad.

## ✨ Características

- 📖 **4 Secciones Principales**
  - Niveles de Prueba
  - Pruebas de Integración (Black Box / White Box)
  - Tipos de Prueba (Funcionales / No Funcionales)
  - Pruebas Relacionadas con el Cambio

- 🎨 **UI/UX Profesional**
  - Diseño limpio y minimalista
  - Navegación intuitiva
  - Responsive design
  - Paleta de colores cálida

- 🏗️ **Arquitectura MVC**
  - Código modular y mantenible
  - Separación de responsabilidades
  - Documentación completa
  - Fácil de extender

## 🚀 Inicio Rápido

### Requisitos
- Python 3.x (para servidor local)
- Navegador web moderno

### Instalación y Uso

```bash
# 1. Clonar o descargar el proyecto
cd Coding

# 2. Levantar servidor local
python -m http.server 8080

# 3. Abrir en navegador
# http://localhost:8080/index.html
```

## 📁 Estructura del Proyecto

```
Coding/
├── index.html              # Punto de entrada
├── .gitignore             # Git ignore
│
├── assets/                # Recursos estáticos
│   └── css/
│       └── style.css      # Estilos globales
│
├── src/                   # Código fuente MVC
│   ├── main.js           # Entry point
│   ├── models/           # Modelos (datos)
│   ├── views/            # Vistas (UI)
│   ├── controllers/      # Controladores (lógica)
│   └── data/             # Contenido de secciones
│
├── docs/                  # Documentación
│   ├── README-MVC.md     # Arquitectura detallada
│   ├── ARQUITECTURA-MVC.md  # Diagramas
│   └── GUIA-USO.md       # Manual de desarrollo
│
└── legacy/                # Archivos deprecados
```

## 🛠️ Desarrollo

### Agregar una nueva sección

1. Crear archivo de contenido en `src/data/nueva-seccion.js`
2. Registrar en `NavigationModel` (`src/models/NavigationModel.js`)
3. Mapear en `ContentModel` (`src/models/ContentModel.js`)
4. Agregar script en `index.html`

Ver **[docs/GUIA-USO.md](docs/GUIA-USO.md)** para instrucciones detalladas.

### Modificar estilos

Editar `assets/css/style.css` y ajustar variables CSS en `:root`:

```css
:root {
    --color-darkest: #57707A;   /* Gris azulado oscuro */
    --color-medium: #7E909F;    /* Gris azulado medio */
    --color-lightest: #F2EFE5;  /* Beige/crema cálido */
}
```

## 📖 Documentación

- **[README-MVC.md](docs/README-MVC.md)** - Arquitectura MVC completa
- **[ARQUITECTURA-MVC.md](docs/ARQUITECTURA-MVC.md)** - Diagramas y flujos visuales
- **[GUIA-USO.md](docs/GUIA-USO.md)** - Manual de desarrollo y uso

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Oscuro | `#57707A` | Textos, headers, elementos destacados |
| Medio | `#7E909F` | Íconos, bordes, elementos secundarios |
| Claro | `#F2EFE5` | Fondos, backgrounds |

## 🏗️ Arquitectura

```
┌─────────────┐
│   VIEWS     │ ← Renderiza UI
└──────┬──────┘
       │
┌──────▼──────┐
│ CONTROLLERS │ ← Coordina lógica
└──────┬──────┘
       │
┌──────▼──────┐
│   MODELS    │ ← Gestiona datos
└─────────────┘
```

Ver diagramas completos en [docs/ARQUITECTURA-MVC.md](docs/ARQUITECTURA-MVC.md)

## 🔧 Debug

Acceder a la instancia de la aplicación en consola del navegador:

```javascript
window.app                          // Instancia del controlador
window.app.getCurrentSection()      // Sección actual
window.app.navigationModel          // Modelo de navegación
window.app.contentModel             // Modelo de contenido
```

## 🤝 Contribuir

1. Fork del proyecto
2. Crear feature branch (`git checkout -b feature/NuevaSeccion`)
3. Commit cambios (`git commit -m 'Add: Nueva sección de testing'`)
4. Push al branch (`git push origin feature/NuevaSeccion`)
5. Abrir Pull Request

## 📝 Licencia

Este proyecto es de código abierto para fines educativos.

## 👥 Autor

Desarrollado como proyecto educativo sobre Testing de Software.

## 🙏 Agradecimientos

- Material Icons by Google
- Inter Font by Rasmus Andersson
- Comunidad de Testing de Software

---

**Versión:** 2.0.0-MVC  
**Última actualización:** Octubre 2025

Para más información, consulta la [documentación completa](docs/).
