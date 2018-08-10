import React, {Fragment} from 'react';



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
                    pais: data.country
                });
                console.log(data)
            })		
        });
  } 
  
  render(){
    return(
      <Fragment>
        <div>
        Hola a todos!
        </div>
      
      </Fragment>
    )
  }
  
}

export default WeatherLogic;