/*
  Julio Barahona M
  141206
  Sistemas n2 tecnologias web
  Seccion 10
  Lab 8
*/

//import module helps woth decimals
import Big from 'big.js';

export default function result (n1, n2, operation) {
  const firstNumber = Big(n1) 
  const secondNumber = Big(n2);

  //add
  if (operation === '+') {
    return (firstNumber.plus(secondNumber).toString())
  }

  //multiply
  if (operation === '*') {
    return (firstNumber.times(secondNumber).toString());
  }

  //subtract
  if (operation === '-') {
    return (firstNumber.minus(secondNumber).toString());
  }

  //divide
  if (operation === '÷') {
    try {
      return (firstNumber.div(secondNumber).round(8).toString());
    }
    catch(error) {
      return ('infinity')
    }
  }

}
