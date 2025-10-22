const tiposContent = `
<h1>
    <span class="material-symbols-outlined">category</span>
    3. Tipos de Prueba
</h1>

<h2>III. Tipos de Prueba</h2>

<p>La clasificación de las pruebas se basa en el <strong>objetivo fundamental de la evaluación</strong>, separando la verificación de <em>qué hace el sistema</em> de <em>cómo lo hace</em>.</p>

<div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; background: white;">
        <thead>
            <tr style="background-color: var(--color-light); color: white;">
                <th style="padding: 12px; text-align: left; border: 1px solid var(--color-medium);">Tipo de Prueba</th>
                <th style="padding: 12px; text-align: left; border: 1px solid var(--color-medium);">¿Qué Evalúa?</th>
                <th style="padding: 12px; text-align: left; border: 1px solid var(--color-medium);">Pregunta Clave</th>
                <th style="padding: 12px; text-align: left; border: 1px solid var(--color-medium);">Enfoque</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid var(--color-medium); font-weight: 600;">Funcionales</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Funciones y características según requisitos</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);"><strong>¿QUÉ</strong> hace el sistema?</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Comportamiento funcional correcto</td>
            </tr>
            <tr style="background-color: var(--color-lightest);">
                <td style="padding: 12px; border: 1px solid var(--color-medium); font-weight: 600;">No Funcionales</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Características de calidad del software</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);"><strong>¿CÓMO</strong> lo hace el sistema?</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Calidad, eficiencia, robustez, usabilidad</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>A. Pruebas Funcionales</h2>

<p>Las <strong>Pruebas Funcionales</strong> se enfocan en verificar que cada característica o función del software se comporte precisamente de acuerdo con los requisitos y especificaciones del negocio. Su objetivo es asegurar que las acciones del usuario, las reglas de negocio, los cálculos y las integraciones externas operen de manera correcta y completa.</p>

<blockquote style="border-left: 4px solid var(--color-light); padding-left: 20px; margin: 20px 0; font-style: italic; color: var(--color-dark);">
    "Este tipo de prueba responde a la pregunta clave: <strong>¿Hace el sistema lo que se supone que debe hacer?</strong>"
</blockquote>

<p>Se utilizan técnicas de <strong>Caja Negra</strong> para diseñar estos casos, garantizando que el sistema es funcionalmente correcto.</p>

<h3>Características Principales</h3>
<ul>
    <li>Verifican el <strong>comportamiento funcional</strong> contra requisitos del negocio</li>
    <li>Validan <strong>acciones del usuario</strong> y respuestas del sistema</li>
    <li>Prueban <strong>reglas de negocio</strong> y cálculos</li>
    <li>Verifican <strong>integraciones externas</strong> y APIs</li>
    <li>Aseguran que las salidas sean <strong>correctas y completas</strong></li>
</ul>

<h2>B. Pruebas No Funcionales</h2>

<p>Las <strong>Pruebas No Funcionales</strong> son fundamentales en el aseguramiento de la calidad, ya que evalúan las características de calidad del software, en lugar de sus funciones específicas. Estas pruebas no se centran en lo que el sistema hace, sino en <strong>cómo lo hace</strong>. Constituyen un conjunto de actividades de verificación diseñadas para determinar la calidad, eficiencia, robustez, usabilidad, seguridad y mantenibilidad del software.</p>

<p>Su objetivo es asegurar que la aplicación cumpla con las expectativas del usuario y del negocio respecto a factores operacionales. Estas pruebas son esenciales para garantizar la satisfacción del usuario a largo plazo, ya que un sistema puede ser funcionalmente perfecto, pero si es lento, inseguro o difícil de usar, será considerado de baja calidad.</p>

<blockquote style="border-left: 4px solid var(--color-light); padding-left: 20px; margin: 20px 0; font-style: italic; color: var(--color-dark);">
    "Las Pruebas No Funcionales buscan establecer las métricas de calidad que impactan directamente la experiencia del usuario final y la operación técnica de la infraestructura."
</blockquote>

<h3>1. Pruebas de Rendimiento</h3>

<p>Las <strong>Pruebas de Rendimiento</strong> constituyen una disciplina crítica dentro de las Pruebas No Funcionales, ya que evalúan la velocidad, la eficiencia, la capacidad de respuesta y la estabilidad de un sistema bajo diversas cargas de trabajo.</p>

<p>El objetivo principal es asegurar que la aplicación puede manejar la carga de usuarios y transacciones esperada, manteniendo los <strong>Tiempos de Respuesta</strong> y el <strong>Rendimiento</strong> dentro de los límites definidos por los <strong>Acuerdos de Nivel de Servicio (SLA)</strong>. Este testing es fundamental para prevenir fallos operativos y garantizar una experiencia de usuario fluida, especialmente en picos de demanda.</p>

<h4><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.2em;">speed</span> Prueba de Carga</h4>

<p>Esta prueba se enfoca en medir el rendimiento del sistema bajo una <strong>carga de usuarios o transacciones normal o esperada</strong> durante un período de tiempo prolongado. El objetivo es determinar la capacidad operativa base y el comportamiento del sistema bajo condiciones cotidianas. La Prueba de Carga busca identificar proactivamente cuellos de botella y límites de recursos antes de que el sistema se sature con el tráfico esperado.</p>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Ejemplo de Ecommerce:</strong></p>
    <pre style="margin: 0; font-family: 'Inter', sans-serif;">Escenario: Día normal de operaciones

<strong>Configuración:</strong>
• Simular 1,000 usuarios concurrentes
• Duración: 1 hora continua
• Acción: Finalización de pedidos (checkout completo)
• Tráfico esperado: Máximo diario normal

<strong>Verificación:</strong>
✓ Tiempo de respuesta del servidor < 2.5 segundos (promedio)
✓ Procesamiento de transacciones sin errores
✓ Uso de CPU y memoria dentro de límites normales
✓ Base de datos responde sin cuellos de botella

<strong>Resultado esperado:</strong>
Sistema mantiene rendimiento óptimo bajo carga esperada,
sin degradación de servicio durante operación normal.</pre>
</div>

<h4><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.2em;">warning</span> Prueba de Estrés</h4>

<p>Esta prueba es mucho más agresiva, llevando al sistema <strong>más allá de sus límites operativos normales</strong> o de su capacidad máxima con una sobrecarga artificial. El objetivo no es medir el rendimiento en condiciones normales, sino identificar el <strong>punto de ruptura</strong> del sistema y determinar su robustez. Evalúa cómo se comporta la aplicación al fallar buscando una "degradación elegante" en lugar de un crash y, crucialmente, cómo se recupera el sistema al cesar el estrés.</p>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Ejemplo de Ecommerce:</strong></p>
    <pre style="margin: 0; font-family: 'Inter', sans-serif;">Escenario: Lanzamiento de producto muy esperado (Black Friday)

<strong>Configuración:</strong>
• Simular 15,000 usuarios concurrentes
• 50% por encima de capacidad máxima documentada
• Duración: 5 minutos de carga extrema
• Acción: Checkout simultáneo masivo

<strong>Objetivo:</strong>
Identificar el momento exacto en que la base de datos de pedidos
deja de aceptar nuevas transacciones

<strong>Verificación:</strong>
• ¿En qué punto el sistema empieza a fallar?
• ¿Se produce un crash o degradación controlada?
• ¿Se recupera el sistema sin pérdida de datos?
• ¿Cuánto tiempo tarda la recuperación completa?

<strong>Resultado esperado:</strong>
Sistema falla de manera controlada (sin pérdida de datos),
se recupera automáticamente al cesar la sobrecarga extrema.</pre>
</div>

<h4><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.2em;">trending_up</span> Pruebas de Escalabilidad</h4>

<p>Estas pruebas se diseñan para evaluar la capacidad de la aplicación para <strong>mantener un rendimiento aceptable a medida que se aumentan los recursos</strong> de infraestructura o la carga de usuarios. El objetivo es prever el crecimiento futuro y determinar la eficiencia de la inversión en recursos. Ayudan a determinar si la infraestructura actual podrá manejar un aumento planificado de la demanda sin degradación del servicio.</p>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Ejemplo de Ecommerce:</strong></p>
    <pre style="margin: 0; font-family: 'Inter', sans-serif;">Escenario: Evaluación de escalabilidad horizontal

<strong>Prueba Fase 1:</strong>
• Configuración: 4 servidores
• Carga: 10,000 usuarios concurrentes
• Resultado: Rendimiento medido como baseline

<strong>Prueba Fase 2:</strong>
• Configuración: 8 servidores (duplicar recursos)
• Carga: 10,000 usuarios concurrentes
• Objetivo: ¿Se duplica el rendimiento?

<strong>Verificación:</strong>
Confirmar si duplicar los recursos resulta en:
✓ Mejora proporcional en velocidad de procesamiento
✓ Reducción proporcional en tiempo de respuesta
✓ Capacidad lineal para manejar más usuarios

<strong>Resultado esperado:</strong>
Si la mejora es proporcional (lineal), el sistema está
diseñado para escalar eficientemente con inversión en hardware.</pre>
</div>

<h4><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.2em;">sync_lock</span> Prueba de Concurrencia</h4>

<p>Esta prueba es especializada y evalúa el comportamiento del sistema cuando <strong>múltiples usuarios acceden simultáneamente al mismo recurso</strong>, función o dato. El objetivo crítico es asegurar la <strong>integridad de los datos</strong> y prevenir errores de concurrencia, como las "condiciones de carrera" (race conditions), bloqueos (deadlocks), o inconsistencias que podrían llevar a datos corruptos o transacciones fallidas para uno de los usuarios.</p>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Ejemplo de Ecommerce:</strong></p>
    <pre style="margin: 0; font-family: 'Inter', sans-serif;">Escenario: Último artículo en stock (Race Condition)

<strong>Situación:</strong>
Dos clientes (Cliente A y Cliente B) intentan comprar
el último artículo en stock EXACTAMENTE al mismo tiempo

<strong>Estado Inicial:</strong>
Producto X: Stock disponible = 1 unidad

<strong>Acción Simultánea:</strong>
• Cliente A hace clic en "Comprar" a las 10:00:00.000
• Cliente B hace clic en "Comprar" a las 10:00:00.000
• Ambos ven "Disponible: 1"

<strong>Verificación de Control de Concurrencia:</strong>
✓ Solo 1 cliente completa el pedido exitosamente
✓ El otro cliente recibe mensaje: "Producto agotado"
✓ Stock final = 0 (no negativo, no -1)
✓ Solo 1 orden generada en base de datos
✓ Integridad de inventario preservada

<strong>Mecanismo requerido:</strong>
• Módulo de Inventario aplica lock de base de datos
• Carrito invoca transacción atómica
• Reserva de stock es thread-safe

<strong>Resultado esperado:</strong>
Sistema garantiza integridad de datos mediante bloqueos,
previniendo overselling o inconsistencias en inventario.</pre>
</div>

<h3>2. Prueba de Recuperación</h3>

<p>La <strong>Prueba de Recuperación</strong> es una actividad no funcional esencial que evalúa la capacidad del sistema para <strong>recuperarse exitosamente de fallos graves y simulados</strong>. Su objetivo principal es asegurar la continuidad del negocio y minimizar el tiempo de inactividad y la pérdida de datos después de un evento catastrófico.</p>

<p>Este tipo de prueba verifica cómo el sistema reacciona y se comporta después de una <strong>interrupción abrupta e inesperada</strong>, como:</p>

<ul>
    <li>Corte de energía del servidor</li>
    <li>Fallo de hardware crítico</li>
    <li>Crash del sistema operativo</li>
    <li>Interrupción de la red</li>
    <li>Corrupción de base de datos</li>
</ul>

<p>Se enfoca en la efectividad de los mecanismos de <strong>backup, restauración, failover y procesos de roll-back</strong> para que el sistema pueda restablecerse a un estado operativo consistente y verificado.</p>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Aspectos críticos evaluados:</strong></p>
    <pre style="margin: 0; font-family: 'Inter', sans-serif;"><strong>RTO (Recovery Time Objective):</strong>
Tiempo máximo aceptable para restaurar el servicio

<strong>RPO (Recovery Point Objective):</strong>
Cantidad máxima de datos que se puede perder (medida en tiempo)

<strong>Integridad de Datos:</strong>
Verificación de que no hay corrupción o pérdida tras la recuperación

<strong>Failover Automático:</strong>
Capacidad de cambio automático a sistema de respaldo

<strong>Rollback de Transacciones:</strong>
Reversión de operaciones incompletas para mantener consistencia</pre>
</div>

<h3>3. Pruebas de Usabilidad</h3>

<p>Las <strong>Pruebas de Usabilidad</strong> evalúan la facilidad, eficiencia y satisfacción con la que los usuarios pueden interactuar con la aplicación. El objetivo es garantizar que la interfaz sea intuitiva y que los flujos de trabajo sean lógicos para el usuario final.</p>

<h4><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.2em;">psychology</span> Prueba de Experiencia de Usuario (UX)</h4>

<p>Se enfoca en la <strong>percepción general, las emociones y las reacciones del usuario</strong> —es decir, el <strong>factor humano</strong>— al interactuar con el producto. El objetivo es ir más allá de la simple usabilidad y evaluar si el diseño es intuitivo, atractivo y genera satisfacción.</p>

<p>Se utiliza para medir la <strong>calidad subjetiva del producto</strong>, a menudo mediante observación directa y encuestas.</p>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Aspectos evaluados en UX:</strong></p>
    <ul style="margin: 10px 0;">
        <li><strong>Intuitividad:</strong> ¿El usuario entiende cómo usar el sistema sin instrucciones?</li>
        <li><strong>Atractivo visual:</strong> ¿El diseño es agradable y profesional?</li>
        <li><strong>Satisfacción emocional:</strong> ¿El usuario se siente cómodo y confiado?</li>
        <li><strong>Eficiencia percibida:</strong> ¿El usuario siente que completa tareas rápidamente?</li>
        <li><strong>Consistencia:</strong> ¿La interfaz mantiene patrones predecibles?</li>
    </ul>
    
    <p><strong>Métodos comunes:</strong></p>
    <ul style="margin: 10px 0;">
        <li>Observación directa de usuarios reales</li>
        <li>Think-aloud protocol (pensar en voz alta)</li>
        <li>Encuestas de satisfacción post-interacción</li>
        <li>Métricas como SUS (System Usability Scale)</li>
        <li>Análisis de heat maps y eye tracking</li>
    </ul>
</div>

<h4><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.2em;">accessibility</span> Prueba de Accesibilidad</h4>

<p>Verifica que el software pueda ser utilizado por <strong>personas con discapacidades</strong>, por ejemplo, visuales, auditivas, motoras o cognitivas. El objetivo es asegurar el cumplimiento de estándares internacionales clave como <strong>WCAG (Web Content Accessibility Guidelines)</strong>, garantizando que el producto sea usable por el mayor número de personas posible, promoviendo la <strong>inclusión digital</strong>.</p>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Verificaciones clave de accesibilidad:</strong></p>
    <ul style="margin: 10px 0;">
        <li><strong>Lectores de pantalla:</strong> Compatibilidad con JAWS, NVDA, VoiceOver</li>
        <li><strong>Contraste de colores:</strong> Ratio mínimo 4.5:1 para texto normal</li>
        <li><strong>Navegación por teclado:</strong> Funcionalidad completa sin mouse</li>
        <li><strong>Textos alternativos:</strong> Descripción de imágenes para usuarios ciegos</li>
        <li><strong>Subtítulos y transcripciones:</strong> Para contenido multimedia</li>
        <li><strong>Formularios accesibles:</strong> Labels y ARIA roles apropiados</li>
    </ul>
    
    <p><strong>Niveles de conformidad WCAG:</strong></p>
    <pre style="margin: 10px 0; font-family: 'Inter', sans-serif;">Nivel A: Conformidad básica (requisito mínimo)
Nivel AA: Conformidad aceptable (estándar recomendado)
Nivel AAA: Conformidad avanzada (máxima accesibilidad)</pre>
</div>

<h3>4. Prueba de Seguridad</h3>

<p>Las <strong>Pruebas de Seguridad</strong> son un conjunto esencial de actividades no funcionales diseñadas para identificar <strong>vulnerabilidades y debilidades</strong> en la aplicación y su infraestructura que podrían ser explotadas por atacantes. Su objetivo principal es asegurar que el sistema, sus datos y sus funcionalidades están protegidos contra accesos no autorizados, ataques maliciosos o fallas de integridad.</p>

<p>Estas pruebas son fundamentales para mantener la <strong>confidencialidad, integridad y disponibilidad (CIA)</strong> de la información del negocio y de los usuarios.</p>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Principios CIA de Seguridad:</strong></p>
    <pre style="margin: 0; font-family: 'Inter', sans-serif;"><strong>Confidencialidad (Confidentiality):</strong>
Solo usuarios autorizados pueden acceder a información sensible

<strong>Integridad (Integrity):</strong>
Los datos no pueden ser modificados de manera no autorizada

<strong>Disponibilidad (Availability):</strong>
El sistema debe estar accesible cuando se necesite</pre>
</div>

<p>Este tipo de prueba abarca la verificación de diversos mecanismos, incluyendo:</p>

<ul>
    <li><strong>Autenticación:</strong> Verificación de identidad de usuarios</li>
    <li><strong>Autorización:</strong> Control de acceso a recursos según roles y permisos</li>
    <li><strong>Gestión de sesiones:</strong> Manejo seguro de tokens y cookies</li>
    <li><strong>Encriptación de datos:</strong> Protección de información sensible en tránsito y reposo</li>
    <li><strong>Validación de entradas:</strong> Prevención de inyecciones maliciosas</li>
</ul>

<p>Las Pruebas de Seguridad buscan <strong>anticipar escenarios de ataque</strong> para fortalecer las defensas del sistema antes de su lanzamiento.</p>

<h4>Técnicas de Prueba de Seguridad</h4>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <h5 style="margin-top: 0;"><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.2em;">shield</span> Prueba de Penetración (Pentesting)</h5>
    
    <p><strong>Simulación de un ataque real</strong> por parte de un hacker ético para explotar vulnerabilidades y evaluar el nivel de riesgo en un entorno real.</p>
    
    <p><strong>Objetivo:</strong> Identificar brechas de seguridad explotables antes que un atacante real lo haga.</p>
    
    <p><strong>Metodología:</strong></p>
    <ul style="margin: 10px 0;">
        <li>Reconocimiento del sistema objetivo</li>
        <li>Escaneo de puertos y servicios</li>
        <li>Identificación de vectores de ataque</li>
        <li>Explotación de vulnerabilidades encontradas</li>
        <li>Escalación de privilegios</li>
        <li>Documentación de hallazgos y recomendaciones</li>
    </ul>
    
    <p><strong>Tipos:</strong> Black-box (sin información previa), White-box (acceso completo al código), Gray-box (información limitada)</p>
</div>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <h5 style="margin-top: 0;"><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.2em;">bug_report</span> Análisis de Vulnerabilidades</h5>
    
    <p><strong>Uso de herramientas automatizadas</strong> para escanear el código y la infraestructura en busca de debilidades conocidas.</p>
    
    <p><strong>Objetivo:</strong> Detectar vulnerabilidades documentadas (CVEs) y configuraciones inseguras de manera sistemática.</p>
    
    <p><strong>Herramientas comunes:</strong></p>
    <ul style="margin: 10px 0;">
        <li><strong>OWASP ZAP:</strong> Scanner de vulnerabilidades web</li>
        <li><strong>Burp Suite:</strong> Plataforma de testing de seguridad</li>
        <li><strong>Nessus:</strong> Scanner de vulnerabilidades de red</li>
        <li><strong>Snyk:</strong> Análisis de dependencias con vulnerabilidades</li>
        <li><strong>SonarQube:</strong> Análisis estático de código (SAST)</li>
    </ul>
    
    <p><strong>Tipos de análisis:</strong></p>
    <ul style="margin: 10px 0;">
        <li><strong>SAST (Static Analysis):</strong> Análisis del código sin ejecutarlo</li>
        <li><strong>DAST (Dynamic Analysis):</strong> Pruebas en aplicación en ejecución</li>
        <li><strong>Dependency Scanning:</strong> Verificación de librerías de terceros</li>
    </ul>
</div>

<blockquote style="border-left: 4px solid var(--color-light); padding-left: 20px; margin: 20px 0; font-style: italic; color: var(--color-dark);">
    "La seguridad no es un estado final, sino un proceso continuo de evaluación, corrección y mejora. Las pruebas de seguridad deben integrarse en todas las fases del ciclo de vida del desarrollo (DevSecOps)."
</blockquote>
`;
