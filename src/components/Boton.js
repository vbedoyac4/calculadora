import React, { Component } from "react";
import "./Boton.css";

class Boton extends Component {
  isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };

  render() {
    return( 
      <div 
        className={`boton ${this.isOperator(this.props.children) ? "" : "operator"}`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Boton;
