import React, { Component } from "react";
import "./App.css";
import Boton from "./components/Boton";
import Input from "./components/Input";
import BotonLimpiar from "./components/BotonLimpiar";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      numeroA: "",
      numeroB: "",
      operacion: ""
    };
  }

  agregar = val => {
    this.setState({ input: this.state.input + val });
  };

  agregarDecimal = val => {
    // only sumar decimal if there is no current decimal point present in the input area
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  agregarZero = val => {
    // if this.state.input is not empty then sumar zero
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  limpiar = () => {
    this.setState({ input: "" });
  };

  sumar = () => {
    this.state.numeroA = this.state.input;
    this.setState({ input: "" });
    this.state.operacion = "sumar";
  };

  restar = () => {
    this.state.numeroA = this.state.input;
    this.setState({ input: "" });
    this.state.operacion = "restar";
  };
  
  multiplicar = () => {
    this.state.numeroA = this.state.input;
    this.setState({ input: "" });
    this.state.operacion = "multiplicar";
  };

  dividir = () => {
    this.state.numeroA = this.state.input;
    this.setState({ input: "" });
    this.state.operacion = "dividir";
  };

  raiz = () => {
    this.state.numeroA = this.state.input;
    this.setState({ input: "" });
    this.state.operacion = "raiz";      
  };

  expo = () => {
    this.state.numeroA = this.state.input;
    this.setState({ input: "" });
    this.state.operacion = "expo";
  };

  evaluar = () => {
    this.state.numeroB = this.state.input;

    if (this.state.operacion == "sumar") {
      this.setState({
        input:
          parseInt(this.state.numeroA) +
          parseInt(this.state.numeroB)
      });
    } else if (this.state.operacion == "restar") {
      this.setState({
        input:
          parseInt(this.state.numeroA) -
          parseInt(this.state.numeroB)
      });
    } else if (this.state.operacion == "multiplicar") {
      this.setState({
        input:
          parseInt(this.state.numeroA) *
          parseInt(this.state.numeroB)
      });
    } else if (this.state.operacion == "dividir") {
      this.setState({
        input:
          parseInt(this.state.numeroA) /
          parseInt(this.state.numeroB)
      });
    }  else if (this.state.operacion == "raiz") {
      this.setState({
        input:
        //parseInt(this.state.numeroB)
        Math.sqrt(parseInt(this.state.numeroA))
      });
    } else if (this.state.operacion == "expo") {
      this.setState({
        input:
        Math.pow( parseInt(this.state.numeroA),parseInt(this.state.numeroB) ) 
      });
    } 
    
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Boton handleClick={this.agregar}>7</Boton>
            <Boton handleClick={this.agregar}>8</Boton>
            <Boton handleClick={this.agregar}>9</Boton>
            <Boton handleClick={this.dividir}>/</Boton>
          </div>
          <div className="row">
            <Boton handleClick={this.agregar}>4</Boton>
            <Boton handleClick={this.agregar}>5</Boton>
            <Boton handleClick={this.agregar}>6</Boton>
            <Boton handleClick={this.multiplicar}>*</Boton>
          </div>
          <div className="row">
            <Boton handleClick={this.agregar}>1</Boton>
            <Boton handleClick={this.agregar}>2</Boton>
            <Boton handleClick={this.agregar}>3</Boton>
            <Boton handleClick={this.sumar}>+</Boton>
          </div>
          <div className="row">
            <Boton handleClick={this.agregarDecimal}>.</Boton>
            <Boton handleClick={this.agregarZero}>0</Boton>
            <Boton handleClick={this.evaluar}>=</Boton>
            <Boton handleClick={this.restar}>-</Boton>
          </div>
          <div className="row">
            <BotonLimpiar handleClear={this.limpiar}>Limpiar</BotonLimpiar>
            <Boton handleClick={this.expo}>e</Boton>
            <Boton handleClick={this.raiz}>√</Boton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
