# Acta de revisión del Pull Request #1: `fix/reglas-eslint` -> `main`

Equivalente documental de la revisión en GitHub. Pegar los mismos comentarios en el PR real y completar los nombres.

| Campo | Valor |
|-------|-------|
| Autor | [Tu nombre] |
| Revisor | [Compañero/a] |
| Alcance | Corrección de H-01, H-02 y H-03 |
| Resultado ESLint | 6 problemas -> 1 advertencia |

## Comentarios técnicos

1. **Sobre `esVip === true` (src/descuentos.js, línea 3):** la comparación estricta elimina la coerción, pero un valor como `"true"` o `1` ahora se ignora en silencio y el cliente VIP no recibe descuento. Conviene validar el tipo y lanzar `TypeError` cuando se confirme RF-02/RF-04 (S-04).
2. **Sobre `console.log("Descuento inválido")` (línea 7):** el cálculo continúa y devuelve un total negativo cuando `porcentaje > 100`. Se mantiene la advertencia `no-console` a propósito, porque cambiar el comportamiento requiere confirmar la política de errores (S-04). Debe abrirse un issue de seguimiento.

## Decisión

Aprobado con cambios futuros: el PR solo contiene correcciones de reglas confirmadas y no altera la lógica de negocio. H-04 a H-09 siguen pendientes.
