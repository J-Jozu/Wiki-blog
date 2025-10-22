const cambioContent = `
<h1>
    <span class="material-symbols-outlined">sync</span>
    4. Pruebas Relacionadas con el Cambio
</h1>

<h2>IV. Pruebas Relacionadas con el Cambio</h2>

<p>Las <strong>Pruebas Relacionadas con el Cambio</strong> son un conjunto esencial de actividades que se ejecutan inmediatamente después de que se han realizado modificaciones, correcciones de defectos o la introducción de nuevas funcionalidades en el código fuente. Su objetivo primordial es <strong>garantizar la estabilidad del sistema</strong> y asegurar que los cambios implementados no han generado consecuencias negativas o efectos colaterales (side effects) imprevistos en áreas del sistema que previamente funcionaban correctamente. Son la defensa principal contra la introducción inadvertida de nuevos defectos en un sistema que ya estaba en funcionamiento.</p>

<h2><span class="material-symbols-outlined" style="vertical-align: middle;">history</span> Prueba de Regresión</h2>

<p>La <strong>Prueba de Regresión</strong> consiste en la <strong>ejecución selectiva de pruebas que ya se habían ejecutado antes y que pasaron exitosamente</strong>. Este proceso es crucial después de cualquier modificación al código.</p>

<h3>Propósito Fundamental</h3>

<p>Su propósito fundamental es verificar que los cambios recientes —como nuevas características o correcciones de bugs— <strong>no hayan introducido involuntariamente nuevos defectos o bugs en funcionalidades existentes y previamente estables</strong>. El objetivo es <strong>proteger la integridad y estabilidad del código base</strong>. Debido a la frecuencia con la que se realizan cambios en los proyectos ágiles, las pruebas de regresión son altamente automatizadas, permitiendo ejecutarlas de forma rápida y frecuente (a menudo en cada compilación) para minimizar el riesgo de efectos secundarios adversos antes de que el código llegue a etapas posteriores de testing.</p>

<h3>Ejemplo de E-commerce</h3>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Contexto:</strong> Módulo de Cálculo de Impuestos</p>
    
    <pre style="margin: 10px 0; font-family: 'Inter', sans-serif; line-height: 1.7;"><strong>Situación:</strong>
El equipo corrige un bug menor en el Módulo de Cálculo de 
Impuestos (un cambio interno).

<strong>Acción del Tester:</strong>
Tras esta corrección, el tester debe ejecutar el set de pruebas 
de regresión para asegurar que las funcionalidades relacionadas 
sigan funcionando correctamente:

✓ <strong>Envío Gratis</strong> (ligado al total del pedido)
✓ <strong>Generación de la Orden</strong> (flujo completo)

<strong>Ejemplo Específico:</strong>
Confirmar que un pedido de <strong>$50.01</strong> sigue mostrando 
<strong>$0.00 en gastos de envío</strong>

<strong>Objetivo:</strong>
Verificar que estas funcionalidades no se hayan roto debido 
al cambio en la lógica de impuestos.</pre>
</div>

<h2><span class="material-symbols-outlined" style="vertical-align: middle;">check_circle</span> Prueba de Confirmación</h2>

<p>La <strong>Prueba de Confirmación</strong> es un proceso <strong>más focalizado que la regresión</strong>, y se ejecuta después de que un defecto reportado ha sido corregido por los desarrolladores.</p>

<h3>Objetivo Específico</h3>

<p>Su objetivo es <strong>confirmar específica y directamente</strong> que el defecto original ha sido resuelto exitosamente y que la funcionalidad afectada ahora trabaja <strong>exactamente según lo especificado en el requisito</strong>. Es una verificación de "re-test" del bug original. Solo después de que se ha pasado la prueba de confirmación, se puede cerrar el bug como resuelto, permitiendo que el módulo pase a la regresión para verificar que la corrección no haya roto nada más.</p>

<h3>Ejemplo de E-commerce</h3>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <p><strong>Contexto:</strong> Campo de Cantidad en Carrito de Compras</p>
    
    <pre style="margin: 10px 0; font-family: 'Inter', sans-serif; line-height: 1.7;"><strong>Bug Reportado:</strong>
"Al introducir una cantidad mayor a 99 unidades en el campo 
de cantidad del producto, el sistema falla con un Error 500"

<strong>Corrección del Desarrollador:</strong>
El código es corregido para manejar cantidades superiores a 99.

<strong>Prueba de Confirmación del Tester:</strong>
El tester repite la acción fallida anterior:
1. Introducir <strong>100 unidades</strong>
2. Hacer clic en <strong>"Añadir al Carrito"</strong>

<strong>Verificación:</strong>
✓ El <strong>Error 500 ha desaparecido</strong>
✓ La funcionalidad ahora gestiona la cantidad correctamente

<strong>Resultados Esperados:</strong>
• Opción 1: Sistema limita a 99 unidades automáticamente
• Opción 2: Sistema muestra mensaje de error legible al usuario
  (ej: "Máximo 99 unidades por producto")

<strong>Conclusión:</strong>
Si la prueba pasa, el bug puede cerrarse como resuelto.</pre>
</div>

<h2>Resumen Comparativo</h2>

<div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; background: white;">
        <thead>
            <tr style="background-color: var(--color-light); color: white;">
                <th style="padding: 12px; text-align: left; border: 1px solid var(--color-medium);">Aspecto</th>
                <th style="padding: 12px; text-align: left; border: 1px solid var(--color-medium);">Prueba de Regresión</th>
                <th style="padding: 12px; text-align: left; border: 1px solid var(--color-medium);">Prueba de Confirmación</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border: 1px solid var(--color-medium); font-weight: 600;">Definición</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Ejecución selectiva de pruebas ya ejecutadas exitosamente antes</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Proceso focalizado tras corregir un defecto reportado</td>
            </tr>
            <tr style="background-color: var(--color-lightest);">
                <td style="padding: 12px; border: 1px solid var(--color-medium); font-weight: 600;">Objetivo</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Verificar que cambios no introdujeron nuevos defectos en funcionalidades existentes</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Confirmar que el defecto original fue resuelto exitosamente</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid var(--color-medium); font-weight: 600;">Alcance</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Amplio - Protege funcionalidades relacionadas y existentes</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Específico - Re-test del bug original</td>
            </tr>
            <tr style="background-color: var(--color-lightest);">
                <td style="padding: 12px; border: 1px solid var(--color-medium); font-weight: 600;">Momento</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Después de cualquier cambio significativo al código</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Después de corregir un defecto reportado</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid var(--color-medium); font-weight: 600;">Automatización</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Altamente automatizada (ejecutada en cada compilación)</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Puede ser manual o automatizada</td>
            </tr>
            <tr style="background-color: var(--color-lightest);">
                <td style="padding: 12px; border: 1px solid var(--color-medium); font-weight: 600;">Cierre de bug</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Verifica que la corrección no rompió otras funcionalidades</td>
                <td style="padding: 12px; border: 1px solid var(--color-medium);">Requisito obligatorio para cerrar el bug</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Flujo de Trabajo</h2>

<div style="background-color: var(--color-lightest); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <pre style="margin: 0; font-family: 'Inter', sans-serif; line-height: 1.8;"><strong>Proceso Típico:</strong>

1. 🐛 <strong>Bug Reportado</strong>
   └─ Se documenta el defecto con pasos para reproducir

2. 🔧 <strong>Desarrollador Corrige el Código</strong>
   └─ Implementa la corrección

3. ✓ <strong>PRUEBA DE CONFIRMACIÓN</strong>
   ├─ ¿El bug específico está corregido?
   ├─ Se repite la acción que causaba el error
   └─ ✓ Pasa → Continuar | ✗ Falla → Volver a paso 2

4. 🔍 <strong>PRUEBA DE REGRESIÓN</strong>
   ├─ ¿La corrección rompió otras funcionalidades?
   ├─ Se ejecutan pruebas en módulos relacionados
   └─ ✓ Pasa → Bug cerrado | ✗ Falla → Volver a paso 2

5. ✅ <strong>Bug Cerrado como Resuelto</strong>
   └─ Código listo para despliegue</pre>
</div>

<blockquote style="border-left: 4px solid var(--color-light); padding-left: 20px; margin: 20px 0; font-style: italic; color: var(--color-dark);">
    "<strong>Principio clave:</strong> La Prueba de Confirmación verifica que <em>curaste la enfermedad</em>. La Prueba de Regresión verifica que <em>el tratamiento no causó efectos secundarios</em>."
</blockquote>
`;

