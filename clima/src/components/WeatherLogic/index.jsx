import React, {Fragment} from 'react';
import VistaClima from '../VistaClima';
import {GenerateDate, GetClima} from '../../utils/funciones'

import './weather.css';


class WeatherLogic extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pais: '',
      fecha: '',
    };
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
                console.log(data)
            })		
        });
    
    console.log(GetClima('Guatemala'));
    
    
  
  } 
  
  render(){
    const { pais, fecha} = this.state;
    return(
      <Fragment>
        <div>
          <VistaClima
            pais = {pais}
            fecha = {fecha}
            imagen = 'https://image.flaticon.com/icons/png/512/56/56062.png'/>
        </div>
      
      </Fragment>
    )
  }
  
}

export default WeatherLogic;