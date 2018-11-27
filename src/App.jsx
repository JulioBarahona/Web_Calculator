/*
  Julio Barahona M
  141206
  Sistemas y tecnologias web
  Seccion 10
  Lab8 
*/

//imports modules, logic and styles in that order
import React from 'react';
import Container from './Components/Container';
import Screen from './Components/Screen';
import calculate from './calculate';
import './App.css'

//starts the component of react
class App extends React.Component {
  constructor(props) {
    super(props);
    //3 main states
    /*operationSignDisplayed: result of an operation 
      newOne: new number to be processed
      operationSign:what is the next operationSign to process
    */
    this.state = {
      operationSignDisplayed: null,
      newOne: null,
      operationSign: null,
    };
  }
  
  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  } 

  render() {
    return (
      <div className="App">
        <Screen
          value={this.state.newOne || this.state.operationSignDisplayed || '0'}
        />
        
        <Container
          clickHandler={this.handleClick}
        />
      </div>
    );
  }
}
export default App;