import React, { Component } from "react";
import "./BotonLimpiar.css";

class BotonLimpiar extends Component {
  render() {
    return( 
      <div 
        className="limpiar-btn"
        onClick={() => this.props.handleClear()}
      >
        {this.props.children}
      </div>
    )
  }
}

export default BotonLimpiar;
