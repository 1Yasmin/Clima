export const GenerateDate = () => {
  let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  let hoy = new Date();
  let dia = hoy.getDate();
  let mes = meses[hoy.getUTCMonth()];
  let ano = hoy.getFullYear();
  return `${dia} de ${mes} de ${ano}`
}

