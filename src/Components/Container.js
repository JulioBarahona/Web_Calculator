/*
  Julio Barahona M
  141206
  Sistemas y tecnologias web
  Seccion 10
  Lab 8
*/

//gets modules and designs
import Button from './Button';
import React from 'react';
import './Container.css'

//gives listener
class Container extends React.Component {
  handleClick = (buttonName) => {
  	this.props.clickHandler(buttonName);
  }

  render() {

    /*
        If you got a problem on how  I place the buttons, well.... too bad thats how i like them
        dont even dare changing them #IdealNumberDistributionOnMyCalc
    */
    return (
      <div className="button-panel">
        <div>
          <Button name="Delete" clickHandler={this.handleClick} ancho/>
          <Button name="->" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} operaciones />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="*" clickHandler={this.handleClick} operaciones />
        </div>
        <div>
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} operaciones />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} operaciones />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} ancho />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} operaciones />
        </div>
      </div>
    );
  }
}

export default Container;