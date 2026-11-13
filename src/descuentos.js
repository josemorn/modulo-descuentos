function calcularDescuento(precio, porcentaje, esVip) {
  let descuento = precio * porcentaje / 100;
  if (esVip === true) {
    descuento = descuento + 10; // PENDIENTE: confirmar regla de negocio (S-02)
  }
  if (porcentaje > 100) {
    console.log("Descuento inválido"); // PENDIENTE: definir manejo de errores (S-04)
  }
  const total = precio - descuento;
  return total;
}
module.exports = { calcularDescuento };
