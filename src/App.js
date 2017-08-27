import React, {Component} from 'react';
import './App.css';


class App extends Component{

  getBoxOne(number){
    return(
      <div>
        <h2>{"Hola Mundo yo soy la cajita # " + number}</h2>
      </div>
    );
  }

  render(){
    return (
      <div>
        {this.getBoxOne(1)}
        {this.getBoxOne(2)}
      </div>
    );
  }
}

 //Exportamos este Component para q sea usado en otro lado
export default App;
