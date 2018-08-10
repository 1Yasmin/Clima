import React from 'react';

const VistaClima = ({
  pais = '',
  imagen = '',
  fecha = '',
  clima = '',
}) => (
  <div>
    <h2>
     {pais}
    </h2>
    <p>Fecha: {fecha}</p>
    <img src= {imagen} alt = "clima"/>
    <p>{clima}</p>
  </div>

);



export default VistaClima;