# Inspección por pares – `src/descuentos.js`

**Roles** (completar con los nombres reales antes de entregar):

| Rol | Persona | Responsabilidad |
|-----|---------|-----------------|
| Autor | [Tu nombre] | Presenta el código y explica la intención |
| Revisor | [Compañero/a 1] | Busca defectos leyendo el código sin ejecutarlo |
| Registrador | [Compañero/a 2] | Anota cada hallazgo, severidad y acción |

Alcance: inspección estática. **No se ejecutaron pruebas funcionales.**

## Hallazgos

| # | Hallazgo | Origen | Severidad | Evidencia | Acción | Estado |
|---|----------|--------|-----------|-----------|--------|--------|
| H-01 | Uso de `var` | ESLint | Baja | `no-var`, líneas 2 y 5 | Reemplazar por `const`/`let` | Corregir (confirmado) |
| H-02 | Comparación `esVip == true` con coerción | ESLint | Media | `eqeqeq`, línea 3 | Usar `=== true` | Corregir (confirmado) |
| H-03 | `if` sin llaves | ESLint | Baja | `curly`, líneas 3 y 4 | Agregar llaves | Corregir (confirmado) |
| H-04 | Entrada `porcentaje > 100` solo escribe en consola y el cálculo continúa | Revisión humana (ESLint solo avisa `no-console`) | Alta | Línea 4 | Lanzar `RangeError` (RF-04) | Pendiente (S-04) |
| H-05 | Se suman 10 al descuento, mezclando monto fijo con porcentaje; contradice R-02 sin definir | Revisión humana | Alta | Línea 3 | Definir regla VIP (RF-02) | Pendiente (S-02) |
| H-06 | No hay tope `descuento <= precio`; el total puede ser negativo | Revisión humana | Alta | Líneas 2-5 | Aplicar tope y bandera `esPromocion` (RF-03) | Pendiente (S-03) |
| H-07 | No se validan tipos, NaN ni valores negativos | Revisión humana | Media | Parámetros de la función | Validar entradas (RF-04) | Pendiente (S-04) |
| H-08 | Sin redondeo; riesgo de errores de coma flotante | Revisión humana | Media | Línea 5 | Redondear a 2 decimales (RF-04) | Pendiente (S-05) |
| H-09 | Valor mágico `10` y ausencia de JSDoc | Revisión humana | Baja | Línea 3 | Constante con nombre y documentación | Pendiente |

## Distinción entre fuentes

- **ESLint (H-01 a H-03):** defectos de estilo y de patrones inseguros, detectados de forma automática y repetible.
- **Revisión humana (H-04 a H-09):** defectos de lógica y de cumplimiento de requisitos. ESLint no los detecta porque no conoce la intención del negocio.

## Decisión

Solo se corrigen H-01, H-02 y H-03 (reglas confirmadas por la configuración de ESLint). H-04 a H-09 dependen de supuestos de negocio (S-01 a S-05) y quedan pendientes de confirmación.
