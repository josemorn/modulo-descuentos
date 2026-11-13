# Módulo de descuentos – Auditoría estática (VVS, Unidad 1)

Actividad de Verificación y Validación de Software: auditoría de requisitos, inspección por pares y análisis estático con ESLint de `src/descuentos.js`, **sin ejecutar pruebas funcionales**.

## Estructura

```
src/            Código inspeccionado (descuentos.js)
docs/           requisitos.md, checklist.md, inspeccion.md, acta-pull-request.md
evidencias/     lint-inicial.txt y lint-final.txt
eslint.config.js
package.json
```

## Cómo reproducir

```bash
npm install
npm run lint
```

Requiere Node.js 18.18 o superior. Para volver al estado inicial: `git checkout main`; el estado corregido está en la rama `fix/reglas-eslint`.

## Reglas ESLint

| Regla | Motivo |
|-------|--------|
| `no-var` | `var` tiene alcance de función y hoisting |
| `eqeqeq` | `==` aplica coerción implícita de tipos |
| `no-unused-vars` | Detecta código muerto (no se dispara en este módulo) |
| `curly` | Evita errores al añadir líneas a un `if` sin llaves |
| `no-console` | `console.log` no sustituye el manejo de errores |

## Resultado

- Lint inicial: 6 problemas (5 errores, 1 advertencia).
- Lint final: 1 advertencia (`no-console`), que se mantiene a propósito hasta confirmar S-04.
- Hallazgos pendientes de negocio: ver `docs/inspeccion.md`.
