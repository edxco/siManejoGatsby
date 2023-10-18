const stringToTelephone = (tel: string) => {
  // Convertir el número de teléfono a una cadena
  const telStr = tel.toString();

  // Verificar si la cadena tiene la longitud adecuada (10 caracteres)
  if (telStr.length !== 10) {
    return "Número de teléfono no válido";
  }

  // Separar la cadena en tres partes y unirlas con guiones
  const parte1 = telStr.slice(0, 3);
  const parte2 = telStr.slice(3, 6);
  const parte3 = telStr.slice(6);

  const telefonoFormateado = `(${parte1}) ${parte2} ${parte3}`;

  return telefonoFormateado;
};

export default stringToTelephone;