import React, {Component} from 'react';
import './App.css';


class App extends Component{

constructor(){
  super();

this.state = {
  //declaramos las variables de estado q van a cambiar su valor continuamente
  text:"Hola Mundo",
  text2: "Estoy aprendiendo react.js"
};

//onClick, porq es6 debemos hacer un bind
this.onClick = this.onClick.bind(this);


}

onClick(e){
  this.setState({text2: "ups el estado ha cambiado"});
}

  render(){
    return (
      <div>
        <h2 onClick={this.onClick}>{this.state.text}</h2>
        <h4>{this.state.text2}</h4>
      </div>
    );
  }
}

//si hago un log aca para acceder a los state
//estamos fuera del scope de donde vive la variable de estado


 //Exportamos este Component para q sea usado en otro lado
export default App;
