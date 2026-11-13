# Revisión de requisitos – Módulo de descuentos

## 1. Análisis de los requisitos originales

| ID | Requisito original | Problema detectado | Tipo de defecto |
|----|--------------------|--------------------|-----------------|
| R-01 | «El descuento debe calcularse rápidamente» | «Rápidamente» no tiene métrica ni condiciones de medición | Ambigüedad / no verificable |
| R-02 | «Los clientes importantes obtendrán un descuento especial» | «Importantes» y «especial» no están definidos; no se sabe si el extra es porcentaje o monto | Ambigüedad / incompletitud |
| R-03 | «El descuento no puede superar el precio, excepto en promociones» | Excepción sin definir («promoción»); el tope aparece sin límite superior en la excepción | Ambigüedad / posible contradicción |
| R-04 | «Se debe mostrar el resultado correcto» | «Correcto» no tiene oráculo; no define redondeo, formato ni entradas inválidas; «mostrar» es de interfaz, no del módulo | No verificable / incompleto |

## 2. Requisitos funcionales propuestos (verificables)

| ID | Requisito propuesto | Método de verificación |
|----|---------------------|------------------------|
| RF-01 | Con entradas válidas, `calcularDescuento` debe responder en **<= 50 ms** (percentil 95 sobre 1000 invocaciones en el entorno de referencia). | Prueba de rendimiento (dinámica, fase posterior) |
| RF-02 | Si `esVip === true`, se aplica un descuento adicional de **X puntos porcentuales** sobre el precio. Si `esVip` no es booleano, se rechaza con `TypeError`. | Inspección + pruebas con valores límite |
| RF-03 | El descuento aplicado **no debe superar el precio** (total >= 0), salvo que se indique `esPromocion === true`. | Inspección + pruebas de frontera |
| RF-04 | El resultado es un **número finito con 2 decimales**; `precio` debe ser >= 0 y `porcentaje` estar en [0, 100]; en otro caso se lanza `RangeError` o `TypeError` con mensaje descriptivo. | Inspección + pruebas de entradas inválidas |

## 3. Supuestos de negocio pendientes de confirmación

| ID | Supuesto | Requisito afectado | Responsable | Estado |
|----|----------|--------------------|-------------|--------|
| S-01 | El umbral de 50 ms es adecuado para la tienda | RF-01 | Product Owner | Pendiente |
| S-02 | Valor de X y si el extra VIP es porcentaje o monto fijo (el código actual suma 10 fijos) | RF-02 | Negocio | Pendiente |
| S-03 | Definición de «promoción» y límite máximo permitido | RF-03 | Negocio | Pendiente |
| S-04 | Política ante entradas inválidas: lanzar error en lugar de `console.log` | RF-04 | Equipo técnico | Pendiente |
| S-05 | Regla de redondeo (mitad hacia arriba) y moneda | RF-04 | Negocio | Pendiente |

## 4. Matriz de requisitos

| ID | Problema | Impacto | Propuesta | Artefacto | Estado |
|----|----------|---------|-----------|-----------|--------|
| R-01 | Sin métrica | No se puede aceptar ni rechazar el módulo | RF-01 con umbral en ms | docs/requisitos.md | Propuesto (S-01 pendiente) |
| R-02 | Términos vagos y unidad no definida | Descuentos incorrectos para clientes VIP; pérdida económica | RF-02 con X definido | docs/requisitos.md | Propuesto (S-02 pendiente) |
| R-03 | Excepción sin definir | Totales negativos o promociones sin control | RF-03 con bandera `esPromocion` | docs/requisitos.md | Propuesto (S-03 pendiente) |
| R-04 | «Correcto» no medible | Defectos que no se pueden probar | RF-04 con formato, rango y errores | docs/requisitos.md, docs/checklist.md | Propuesto (S-04, S-05 pendientes) |
