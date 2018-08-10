export const GenerateDate = () => {
  let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  let hoy = new Date();
  let dia = hoy.getDate();
  let mes = meses[hoy.getUTCMonth()];
  let ano = hoy.getFullYear();
  return `${dia} de ${mes} de ${ano}`
}

export const GetClima = (ciudad) => {
  
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=faecd119485e934496d90574a6e29116`)
        .then(function(response){
          response.json()
            .then(function(data){
                console.log(data.list[0].main.temp)
            })		
        });

}