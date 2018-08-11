export const GenerateDate = () => {
  let hoy = new Date();
  let dia = hoy.getDate();
  let mes = hoy.getMonth()+1;
  let ano = hoy.getFullYear();
  return `${ano}- ${mes}-${dia}`
}

export const convertTemp = (kelvin) => {
  if (kelvin < (0)) {
		return 'below absolute zero (0 K)';
	} else {
		return (kelvin-273.15);
	}
  
  
}