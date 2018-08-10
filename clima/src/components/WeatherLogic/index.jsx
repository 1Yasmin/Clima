import React, {Fragment} from 'react';
import VistaClima from '../VistaClima';
import {GenerateDate} from '../../utils/funciones'

import './weather.css';


class WeatherLogic extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pais: '',
      fecha: '',
      iconCode: '',
      iconName: '',
    };
    
    this.GetClima = this.GetClima.bind(this);
  }
  
  componentWillMount() {
    console.log('component has mounted');
    let that = this;
    fetch('https://ipinfo.io/json')
        .then(function(response){
          response.json()
            .then(function(data){
                that.setState({
                    pais: data.region,
                    fecha: GenerateDate(),
                });
                console.log(data);                
        }); 
            }).then(function(){
            that.GetClima("Guatemala");
    });     
  }
  

  GetClima(ciudad){
  let that = this;
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=faecd119485e934496d90574a6e29116`)
        .then(function(response){
          response.json()
            .then(function(data){
                let icono = data.list[0].weather[0].icon;
                let recurso = `http://openweathermap.org/img/w/${icono}.png`
                that.setState({
                  iconCode: recurso,
                  iconName: data.list[0].weather[0].description,
                })
                console.log(that.state);
            
            })		
        });

}
  
  render(){
  
    const { pais, fecha, iconCode, iconName} = this.state;
    return(
      <Fragment>
        <div>
          <VistaClima
            pais = {pais}
            fecha = {fecha}
            imagen = {iconCode}
            name = {iconName}/>
        </div>
      
      </Fragment>
    )
  }
  
}

export default WeatherLogic;