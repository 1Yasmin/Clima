import React from 'react';

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
    <p>{clima}</p>
  </div> 

);



export default VistaClima;