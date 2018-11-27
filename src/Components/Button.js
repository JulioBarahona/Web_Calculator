import React from 'react';
import './Button.css';

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render() {
  	let className = "Button";
  	if (this.props.operaciones) {
  	  className += " operaciones";
    }
    if (this.props.ancho) {
      className += " ancho";
    }

    return (
      <div className={className}>
        <button onClick={this.handleClick}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default Button;
