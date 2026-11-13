# Checklist de revisión de requisitos y código

Resultado aplicado al módulo `src/descuentos.js` y a los requisitos R-01 a R-04.

| # | Pregunta | Resultado | Evidencia |
|---|----------|-----------|-----------|
| 1 | ¿Cada requisito tiene un criterio medible? | No | R-01, R-04 |
| 2 | ¿Hay términos vagos («rápido», «importante», «correcto»)? | Sí | R-01, R-02, R-04 |
| 3 | ¿Los requisitos se contradicen o tienen excepciones sin definir? | Sí | R-03 («promociones») |
| 4 | ¿Están definidas las unidades (porcentaje o monto)? | No | Código suma 10 al descuento (monto) |
| 5 | ¿Se define qué ocurre con entradas inválidas (negativos, NaN, texto)? | No | Línea 4 solo hace `console.log` |
| 6 | ¿Existe un límite máximo para el descuento? | No | No hay tope en el código |
| 7 | ¿El descuento VIP se acumula o reemplaza al normal? | No definido | R-02 |
| 8 | ¿Cada requisito es trazable a un caso de prueba? | No | Sin pruebas aún |
| 9 | ¿Los supuestos de negocio están confirmados? | No | S-01 a S-05 |
| 10 | ¿Se define redondeo y moneda? | No | R-04 |
| 11 | ¿El código cumple reglas de estilo seguro (no-var, eqeqeq, curly)? | No | evidencias/lint-inicial.txt |
| 12 | ¿Los errores se gestionan con excepciones y no con mensajes en consola? | No | Línea 4 |
