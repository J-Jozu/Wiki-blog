const integracionContent = `
<h1>
    <span class="material-symbols-outlined">integration_instructions</span>
    2. Enfoques de Diseño de Pruebas (Caja)
</h1>

<h2>II. Enfoques de Diseño de Pruebas (Caja)</h2>

<p>Los <strong>enfoques de diseño de pruebas</strong>, conceptualizados a menudo como pruebas de "caja", determinan la estrategia de verificación basándose en el nivel de acceso y conocimiento que el equipo de testing posee sobre la estructura interna del código fuente del sistema bajo prueba. Esta distinción es fundamental para la selección de técnicas y la cobertura de testing.</p>

<h3>1. Prueba de Caja Negra</h3>

<p>La <strong>Prueba de Caja Negra</strong>, o <em>Behavioral Testing</em>, trata el sistema bajo evaluación como una entidad opaca, donde el probador no tiene acceso ni conocimiento de la estructura interna, el diseño del código fuente, la implementación algorítmica ni las bases de datos. El enfoque se centra exclusivamente en las entradas, las salidas y las interacciones externas de la aplicación, basándose rigurosamente en las especificaciones y requisitos funcionales.</p>

<h4>Objetivo Estratégico</h4>

<p>Su principal objetivo estratégico es <strong>evaluar si el software cumple cabalmente con los requisitos del usuario y del negocio</strong>, simulando la experiencia de un usuario final que solo ve la interfaz y el comportamiento. El diseño de los casos de prueba se basa íntegramente en los documentos de requisitos, especificaciones funcionales y casos de uso, buscando errores en áreas críticas como:</p>

<ul>
    <li>Las <strong>funcionalidades</strong> del sistema</li>
    <li>La <strong>correctitud de las interfaces</strong></li>
    <li>La <strong>validez de los flujos de negocio</strong></li>
    <li>La <strong>gestión de la inicialización y terminación</strong> del sistema</li>
</ul>

<blockquote style="border-left: 4px solid var(--color-light); padding-left: 20px; margin: 20px 0; font-style: italic; color: var(--color-dark);">
    "Es la principal forma de responder a la pregunta: <strong>¿Funciona el sistema según lo que se prometió al cliente?</strong>"
</blockquote>

<h4>Técnicas Comunes de Diseño de Pruebas</h4>

<p>Para optimizar el esfuerzo de testing y maximizar la detección de defectos sin depender del código, el tester de Caja Negra utiliza técnicas estructuradas para seleccionar el subconjunto de entradas más propenso a fallar:</p>

<h5><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.2em;">tune</span> Particionamiento por Equivalencia</h5>

<p>Esta técnica divide los datos de entrada válidos e inválidos en <strong>clases de equivalencia</strong>. El principio es que, si un caso de prueba detecta un defecto en una clase de datos, es probable que los demás valores dentro de esa misma clase se comporten de manera similar, y viceversa.</p>

<p><strong>Objetivo:</strong> Reducir drásticamente el número de casos de prueba necesarios, seleccionando solo uno o dos valores representativos de cada partición (una válida y una o más inválidas).</p>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Ejemplo práctico:</strong></p>
    <pre style="margin: 0; font-family: 'Inter', sans-serif;">Campo: Edad del usuario (requisito: 18-65 años)

<strong>Particiones identificadas:</strong>
• Clase Inválida 1: edad < 18 (ej: 10, 15, 17)
• Clase Válida: 18 ≤ edad ≤ 65 (ej: 18, 30, 65)
• Clase Inválida 2: edad > 65 (ej: 66, 70, 100)

<strong>Casos de prueba seleccionados:</strong>
Test 1: edad = 15 → Esperado: "Error: Debe ser mayor de edad"
Test 2: edad = 30 → Esperado: Usuario aceptado
Test 3: edad = 70 → Esperado: "Error: Edad máxima excedida"</pre>
</div>

<h5><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.2em;">straighten</span> Análisis de Valor Límite</h5>

<p>Basándose en la evidencia empírica de que <strong>la mayoría de los defectos se encuentran en las fronteras</strong> de las condiciones de entrada, esta técnica se centra en probar los límites o bordes de las particiones por equivalencia.</p>

<p>Para una condición N, se prueban típicamente N, N-1 y N+1. Esto incluye probar los valores mínimos y máximos válidos, así como los valores inmediatamente adyacentes a ellos que son inválidos, ya que estos puntos son donde los desarrolladores a menudo cometen errores de lógica.</p>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Ejemplo práctico:</strong></p>
    <pre style="margin: 0; font-family: 'Inter', sans-serif;">Campo: Cantidad de producto (requisito: 1-100 unidades)

<strong>Valores a probar en los límites:</strong>
• Límite inferior: 0 (inválido), 1 (válido mínimo), 2 (válido)
• Límite superior: 99 (válido), 100 (válido máximo), 101 (inválido)

<strong>Casos de prueba:</strong>
Test 1: cantidad = 0 → Esperado: "Error: Cantidad debe ser al menos 1"
Test 2: cantidad = 1 → Esperado: Aceptado ✓
Test 3: cantidad = 2 → Esperado: Aceptado ✓
Test 4: cantidad = 99 → Esperado: Aceptado ✓
Test 5: cantidad = 100 → Esperado: Aceptado ✓
Test 6: cantidad = 101 → Esperado: "Error: Cantidad no puede exceder 100"</pre>
</div>

<h5><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.2em;">table_chart</span> Tablas de Decisión</h5>

<p>Esta es una técnica ideal para probar <strong>lógicas complejas o reglas de negocio</strong> que dependen de múltiples combinaciones de condiciones. Una tabla de decisión mapea sistemáticamente todas las combinaciones posibles de condiciones de entrada y sus correspondientes acciones de salida esperadas.</p>

<p><strong>Objetivo:</strong> Asegurar que no se omita ninguna regla de negocio y que, para un conjunto específico de condiciones, la acción del sistema sea siempre la correcta.</p>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Ejemplo práctico:</strong> Sistema de descuentos en ecommerce</p>
    
    <div style="overflow-x: auto; margin: 15px 0;">
        <table style="width: 100%; border-collapse: collapse; background: white;">
            <thead>
                <tr style="background-color: var(--color-medium); color: white;">
                    <th style="padding: 10px; text-align: left; border: 1px solid var(--color-dark);">Condición</th>
                    <th style="padding: 10px; text-align: center; border: 1px solid var(--color-dark);">Regla 1</th>
                    <th style="padding: 10px; text-align: center; border: 1px solid var(--color-dark);">Regla 2</th>
                    <th style="padding: 10px; text-align: center; border: 1px solid var(--color-dark);">Regla 3</th>
                    <th style="padding: 10px; text-align: center; border: 1px solid var(--color-dark);">Regla 4</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--color-medium);">Cliente es Premium</td>
                    <td style="padding: 10px; text-align: center; border: 1px solid var(--color-medium);">✓ Sí</td>
                    <td style="padding: 10px; text-align: center; border: 1px solid var(--color-medium);">✓ Sí</td>
                    <td style="padding: 10px; text-align: center; border: 1px solid var(--color-medium);">✗ No</td>
                    <td style="padding: 10px; text-align: center; border: 1px solid var(--color-medium);">✗ No</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td style="padding: 10px; border: 1px solid var(--color-medium);">Compra > $100</td>
                    <td style="padding: 10px; text-align: center; border: 1px solid var(--color-medium);">✓ Sí</td>
                    <td style="padding: 10px; text-align: center; border: 1px solid var(--color-medium);">✗ No</td>
                    <td style="padding: 10px; text-align: center; border: 1px solid var(--color-medium);">✓ Sí</td>
                    <td style="padding: 10px; text-align: center; border: 1px solid var(--color-medium);">✗ No</td>
                </tr>
                <tr style="background-color: var(--color-lightest); font-weight: 600;">
                    <td style="padding: 10px; border: 1px solid var(--color-medium);">→ Acción: Descuento</td>
                    <td style="padding: 10px; text-align: center; border: 1px solid var(--color-medium); color: #059669;">20%</td>
                    <td style="padding: 10px; text-align: center; border: 1px solid var(--color-medium); color: #059669;">10%</td>
                    <td style="padding: 10px; text-align: center; border: 1px solid var(--color-medium); color: #059669;">5%</td>
                    <td style="padding: 10px; text-align: center; border: 1px solid var(--color-medium); color: #6b7280;">0%</td>
                </tr>
            </tbody>
        </table>
    </div>

    <pre style="margin-top: 15px; margin-bottom: 0; font-family: 'Inter', sans-serif;"><strong>Casos de prueba derivados:</strong>
Test 1: Premium=Sí, Compra=$150 → Descuento 20% aplicado
Test 2: Premium=Sí, Compra=$80 → Descuento 10% aplicado
Test 3: Premium=No, Compra=$150 → Descuento 5% aplicado
Test 4: Premium=No, Compra=$80 → Sin descuento (0%)</pre>
</div>

<h3>2. Prueba de Caja Blanca (White Box Testing)</h3>

<p>La <strong>Prueba de Caja Blanca</strong>, también conocida como prueba estructural o <em>Glass Box Testing</em>, se fundamenta en el conocimiento total de la estructura interna del sistema bajo prueba, incluyendo el código fuente, la lógica de control, los caminos de ejecución, las estructuras de datos y la arquitectura del diseño. El tester o, más a menudo, el desarrollador que realiza pruebas unitarias actúa con transparencia total sobre la implementación.</p>

<h4>Objetivo Estratégico</h4>

<p>Su principal objetivo estratégico es <strong>garantizar la cobertura del código y la robustez interna</strong>. Esto se logra diseñando casos de prueba que ejerciten y validen cada ruta lógica y sentencia del programa. Al tener visibilidad del código, el equipo busca errores de implementación, como:</p>

<ul>
    <li><strong>Loops infinitos</strong></li>
    <li><strong>Sentencias lógicas defectuosas</strong></li>
    <li><strong>Flujos de datos incorrectos</strong></li>
    <li><strong>Vulnerabilidades de seguridad</strong> que surgen de una mala codificación</li>
</ul>

<blockquote style="border-left: 4px solid var(--color-light); padding-left: 20px; margin: 20px 0; font-style: italic; color: var(--color-dark);">
    "La Caja Blanca es crucial para asegurar la optimización y el funcionamiento correcto del software a nivel molecular."
</blockquote>

<h4>Técnicas Comunes de Diseño de Pruebas</h4>

<h5><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.2em;">code</span> Cobertura de Sentencias</h5>

<p>Esta es la métrica más elemental y fácil de alcanzar. Su objetivo es asegurar que <strong>cada línea de código ejecutable</strong> dentro del componente ha sido probada o ejecutada al menos una vez durante la suite de pruebas.</p>

<p><em>Nota:</em> Si bien es un punto de partida, una alta cobertura de sentencias no garantiza la cobertura de toda la lógica de control.</p>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Ejemplo práctico:</strong></p>
    <pre style="margin: 0; font-family: 'Courier New', monospace; font-size: 0.9em;">function validar_login(usuario, password):
    if usuario == "":                  <span style="color: #059669;">// Línea 1</span>
        return "Error: Usuario vacío"  <span style="color: #059669;">// Línea 2</span>
    if password == "":                 <span style="color: #059669;">// Línea 3</span>
        return "Error: Password vacío" <span style="color: #059669;">// Línea 4</span>
    return "Login exitoso"             <span style="color: #059669;">// Línea 5</span>

<strong>Casos de prueba para 100% cobertura:</strong>
Test 1: validar_login("", "123") → Ejecuta líneas 1, 2
Test 2: validar_login("admin", "") → Ejecuta líneas 1, 3, 4
Test 3: validar_login("admin", "123") → Ejecuta líneas 1, 3, 5

<strong>Resultado:</strong> 5/5 líneas ejecutadas = <span style="color: #059669; font-weight: bold;">100% cobertura</span></pre>
</div>

<h5><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.2em;">alt_route</span> Cobertura de Decisión o Rama</h5>

<p>Esta técnica es más rigurosa que la cobertura de sentencias. Su objetivo es asegurar que <strong>todas las ramas de las sentencias de control</strong> (como if/else, while, for o case) han sido ejecutadas. Esto significa que se debe probar la ruta de código resultante de una condición tanto para el resultado <code>True</code> como para el resultado <code>False</code> (ambos lados de la bifurcación).</p>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Ejemplo práctico:</strong></p>
    <pre style="margin: 0; font-family: 'Courier New', monospace; font-size: 0.9em;">function aplicar_descuento(precio, es_premium):
    if es_premium:                     <span style="color: #059669;">// Decisión A</span>
        descuento = precio * 0.20      <span style="color: #059669;">// Rama True</span>
    else:
        descuento = precio * 0.05      <span style="color: #059669;">// Rama False</span>
    return precio - descuento

<strong>Casos de prueba para 100% cobertura de rama:</strong>
Test 1: aplicar_descuento(100, True) → Ejecuta Rama True de A
Test 2: aplicar_descuento(100, False) → Ejecuta Rama False de A

<strong>Resultado:</strong> 2/2 ramas ejecutadas = <span style="color: #059669; font-weight: bold;">100% cobertura</span></pre>
</div>

<h5><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.2em;">account_tree</span> Cobertura de Condición</h5>

<p>Una técnica que profundiza aún más al enfocarse en <strong>condiciones compuestas</strong>. Su objetivo es probar cada resultado booleano (True y False) de las subcondiciones dentro de una sentencia de control que contiene operadores lógicos (AND, OR).</p>

<p>Por ejemplo, si una decisión depende de <code>A OR B</code>, esta técnica prueba las cuatro posibles combinaciones: (A=T, B=T), (A=T, B=F), (A=F, B=T) y (A=F, B=F).</p>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Ejemplo práctico:</strong></p>
    <pre style="margin: 0; font-family: 'Courier New', monospace; font-size: 0.9em;">function puede_comprar(edad, tiene_fondos):
    if (edad >= 18) AND (tiene_fondos):  <span style="color: #059669;">// Condición compuesta</span>
        return True
    return False

<strong>Casos de prueba para 100% cobertura de condición:</strong>
Test 1: puede_comprar(20, True)  → edad≥18: <span style="color: #059669;">T</span>, tiene_fondos: <span style="color: #059669;">T</span>
Test 2: puede_comprar(15, True)  → edad≥18: <span style="color: #dc2626;">F</span>, tiene_fondos: <span style="color: #059669;">T</span>
Test 3: puede_comprar(20, False) → edad≥18: <span style="color: #059669;">T</span>, tiene_fondos: <span style="color: #dc2626;">F</span>
Test 4: puede_comprar(15, False) → edad≥18: <span style="color: #dc2626;">F</span>, tiene_fondos: <span style="color: #dc2626;">F</span>

<strong>Resultado:</strong> Cada subcondición evaluada en T y F = <span style="color: #059669; font-weight: bold;">100% cobertura</span></pre>
</div>

<h5><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.2em;">device_hub</span> Cobertura de Caminos</h5>

<p>Esta es la técnica más exhaustiva. Su objetivo es probar <strong>cada ruta lineal e independiente posible</strong> desde la entrada hasta la salida de un módulo. Si bien proporciona la mayor confianza en la ausencia de errores, el número de caminos posibles crece exponencialmente con cada nueva sentencia de decisión, lo que la hace poco práctica de lograr al 100% en sistemas complejos, pero es ideal para componentes críticos de alta seguridad o lógica compleja.</p>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Ejemplo práctico:</strong></p>
    <pre style="margin: 0; font-family: 'Courier New', monospace; font-size: 0.9em;">function procesar_orden(cantidad, stock, es_premium):
    if cantidad <= 0:                  <span style="color: #059669;">// Decisión 1</span>
        return "Error: Cantidad inválida"
    if cantidad > stock:               <span style="color: #059669;">// Decisión 2</span>
        return "Error: Stock insuficiente"
    if es_premium:                     <span style="color: #059669;">// Decisión 3</span>
        return "Procesado con envío express"
    return "Procesado con envío normal"

<strong>Caminos independientes identificados:</strong>
Camino 1: cantidad ≤ 0 → return línea 2
Camino 2: cantidad > 0 AND cantidad > stock → return línea 4
Camino 3: cantidad > 0 AND cantidad ≤ stock AND es_premium → return línea 6
Camino 4: cantidad > 0 AND cantidad ≤ stock AND NOT es_premium → return línea 7

<strong>Casos de prueba para 100% cobertura de caminos:</strong>
Test 1: procesar_orden(0, 10, True)   → Camino 1 ✓
Test 2: procesar_orden(15, 10, True)  → Camino 2 ✓
Test 3: procesar_orden(5, 10, True)   → Camino 3 ✓
Test 4: procesar_orden(5, 10, False)  → Camino 4 ✓

<strong>Resultado:</strong> 4/4 caminos = <span style="color: #059669; font-weight: bold;">100% cobertura</span></pre>
</div>

<h2>Comparación Estratégica</h2>

<div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; background: white;">
        <thead>
            <tr style="background-color: var(--color-light); color: white;">
                <th style="padding: 12px; text-align: left; border: 1px solid var(--color-medium);">Aspecto</th>
                <th style="padding: 12px; text-align: left; border: 1px solid var(--color-medium);">Caja Negra</th>
                <th style="padding: 12px; text-align: left; border: 1px solid var(--color-medium);">Caja Blanca</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid var(--color-medium); font-weight: 600;">Conocimiento requerido</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Sin acceso al código interno</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Conocimiento total del código fuente</td>
            </tr>
            <tr style="background-color: var(--color-lightest);">
                <td style="padding: 12px; border: 1px solid var(--color-medium); font-weight: 600;">Enfoque principal</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Entradas, salidas y comportamiento externo</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Estructura interna, lógica y rutas de código</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid var(--color-medium); font-weight: 600;">Realizado por</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">QA Testers, analistas, usuarios finales</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Desarrolladores, QA técnicos avanzados</td>
            </tr>
            <tr style="background-color: var(--color-lightest);">
                <td style="padding: 12px; border: 1px solid var(--color-medium); font-weight: 600;">Base del diseño</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Requisitos funcionales y especificaciones</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Código fuente, diseño técnico, arquitectura</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid var(--color-medium); font-weight: 600;">Nivel de prueba típico</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Sistema, Integración, Aceptación</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Unitarias, Integración (técnica)</td>
            </tr>
            <tr style="background-color: var(--color-lightest);">
                <td style="padding: 12px; border: 1px solid var(--color-medium); font-weight: 600;">Pregunta clave</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);"><em>¿Funciona según lo prometido?</em></td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);"><em>¿Está bien implementado internamente?</em></td>
            </tr>
        </tbody>
    </table>
</div>

<blockquote style="border-left: 4px solid var(--color-light); padding-left: 20px; margin: 20px 0; font-style: italic; color: var(--color-dark);">
    "La combinación estratégica de ambos enfoques proporciona la cobertura más completa y robusta: <strong>Caja Negra</strong> valida que el sistema cumple con las expectativas del usuario y los requisitos del negocio, mientras que <strong>Caja Blanca</strong> asegura la calidad técnica, la eficiencia y la solidez de la implementación interna."
</blockquote>
`;

