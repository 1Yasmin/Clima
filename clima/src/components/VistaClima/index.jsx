import React from 'react';

import './vitaclima.css';

const VistaClima = ({
  pais = '',
  imagen = '',
  fecha = '',
  clima = '',
  name = '',
}) => (
  <div>
    <h2>
     {pais}
    </h2>
    <p>Fecha: {fecha}</p>
    <img src= {imagen}  alt = {name}/>
    <p>Temperatura en celsius: {clima}</p>
  </div> 

);



export default VistaClima;