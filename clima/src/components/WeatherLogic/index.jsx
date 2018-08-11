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
      clima: ''
    };
    
    this.GetWeather = this.GetWeather.bind(this);
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
        }).then(function(){
            that.GetWeather(that.state.pais);
    });      
            })
  }
  
  onClick(){
    const {pais, fecha} = this.state;
    if(pais !== "" && fecha !== ""){
      this.GetCompleteWeather(pais, fecha);
    }
    if(pais === "" || fecha === "" ){
      alert("Falta un campo");
    }
  }
  
  GetWeather(ciudad){
  let that = this;
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=faecd119485e934496d90574a6e29116`)
        .then(function(response){
          response.json()
            .then(function(data){
              console.log(data);
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
  
GetCompleteWeather(ciudad, fecha){
  let that = this;
    fetch(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=7a7d553ae35e4a23a94203609181008&q=${ciudad}&format=json&date=${fecha}`)
        .then(function(response){
          response.json()
            .then(function(data){
              that.setState({
                iconCode: data.data.current_condition[0].weatherIconUrl[0].value,
                //iconName: data.data.current_condition[0]
                clima: data.data.weather[0].maxtempC,

              })
            })		
        });
  
}
  
  render(){
  
    const { pais, fecha, iconCode, iconName,clima} = this.state;
    return(
      <Fragment>
        <div>
          <VistaClima
            pais = {pais}
            fecha = {fecha}
            imagen = {iconCode}
            name = {iconName}
            clima = {clima}/>
          <input
          type="text"
          value={pais} 
          placeholder= "ciudad"
          onChange={
            e => this.setState({
              pais: e.target.value,
            })}/>
          <input type="date" value={fecha} 
            onChange={
            e => this.setState({
              fecha: e.target.value,
            })}/>
          <button  onClick={this.onClick.bind(this)} >GO!</button>
        </div>
      
      </Fragment>
    )
  }
  
}

export default WeatherLogic;