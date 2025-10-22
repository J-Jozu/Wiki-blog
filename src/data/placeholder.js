// Contenido placeholder genérico para secciones sin contenido específico
const defaultPlaceholderContent = (sectionData) => `
<h1>
    <span class="material-symbols-outlined">${sectionData.icon}</span>
    ${sectionData.title}
</h1>

<h2>
    <span class="material-symbols-outlined">info</span>
    Introducción
</h2>

<p>Este es el contenido de la sección <strong>${sectionData.title}</strong>. Aquí puedes agregar información detallada sobre este tema de Software Testing.</p>

<h3>
    <span class="material-symbols-outlined">article</span>
    Conceptos Básicos
</h3>

<p>Esta sección está en desarrollo. Pronto se agregará contenido detallado sobre <strong>${sectionData.title}</strong>.</p>

<h4>
    <span class="material-symbols-outlined">arrow_right</span>
    Definición
</h4>

<p>Contenido pendiente de desarrollo para proporcionar información completa sobre este tema.</p>

<h2>
    <span class="material-symbols-outlined">description</span>
    Próximamente
</h2>

<p>Este contenido se encuentra en proceso de elaboración y estará disponible próximamente con información detallada, ejemplos prácticos y mejores prácticas.</p>
`;
