export const validarDatos = (datos) => {
  return datos.some((value) => [null, undefined, '', 0].includes(value))
}
