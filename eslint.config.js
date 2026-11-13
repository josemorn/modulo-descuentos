const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: { module: "writable", console: "readonly" },
    },
    rules: {
      "no-var": "error",            // let/const: alcance de bloque, sin hoisting
      "eqeqeq": ["error", "always"], // evita coerción implícita de ==
      "no-unused-vars": "error",    // detecta código muerto
      "curly": ["error", "all"],    // llaves obligatorias en if/else
      "no-console": "warn",         // console.log no es manejo de errores
    },
  },
];
