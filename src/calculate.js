/*
  Julio Barahona M
  141206
  Sistemas y tecnologias web
  Seccion 10
  Lab8 
*/


//imports module
import result from './evaluate';
import check4Number from './check4Number';

// operationSignDisplayed: string with result
// newOne: new number to be proeccesed
// operationSign: next operation
export default function calculate (obj, buttonName) {
  // sets defaluit to 0 and null
  if (buttonName === 'Delete') {
    console.log('Delete all')
    return {
      operationSignDisplayed: 0,
      newOne: null,
      operationSign: null,
    };
  }

 // deletes last number
  if (buttonName === '->') {
    console.log('Delete last operationSign')
    const result = obj.newOne;
    const res = result.substring(0, result.length - 1);
    return {
      newOne: res,
    };
  }

  //0 with 0  is 0, not 00
  if (check4Number(buttonName)) {
    console.log(buttonName)
    if (obj.newOne === '0' && buttonName === '0') {
      return {};
    }
    // new operation to result
    if (obj.operationSign ) {
      if (obj.newOne) {
        return { newOne: obj.newOne + buttonName };
      }
      return { newOne: buttonName };
    }
    //write if less than 99999999
    if (obj.newOne <= 99999999 && obj.newOne  !== null) {
      return {
        newOne: obj.newOne + buttonName,
        operationSignDisplayed: null,
      };
    }
    //dont change if it is 99999999
    if (obj.newOne >= 99999999 && obj.newOne  !== null) {
      return {
        operationSignDisplayed: obj.newOne
      };
    }

    return {
      newOne: buttonName,
    };
  }

  //adds decimals
  if (buttonName === '.') {
    console.log(buttonName)
    if (obj.newOne) {
      if (obj.newOne.includes('.')) {
        return {};
      }
      return { newOne: obj.newOne + '.' };
    }
    if (obj.operationSign) {
      return { newOne: '0.' };
    }
    if (obj.operationSignDisplayed) {
      if (obj.operationSignDisplayed.includes('.')) {
        return {};
      }
      return { operationSignDisplayed: obj.operationSignDisplayed + '.' };
    }
    return { operationSignDisplayed: '0.' };
  }
  if (buttonName === '=') {
    console.log(buttonName)
    if (obj.newOne && obj.operationSign) {
      var tot = result(obj.operationSignDisplayed, obj.newOne, obj.operationSign);
      if (tot > 999999999) {
        return {
          operationSignDisplayed: 'error: Max number size exceeded',
          newOne: null,
          operationSign: null,
        };
      }
      else {
        return {
          operationSignDisplayed: result(obj.operationSignDisplayed, obj.newOne, obj.operationSign),
          newOne: null,
          operationSign: null,
        };
      }
    } else {
      return {};
    }
  }
  // deals when there is a queue on the calc
  if (obj.operationSign) {
    console.log(obj.operationSign)
    return {
      operationSignDisplayed: result(obj.operationSignDisplayed, obj.newOne, obj.operationSign),
      newOne: null,
      operationSign: buttonName,
    };
  }
  // if no other operationSign is gotten then just keeps it
  if (!obj.newOne) {
    console.log(buttonName)
    return { operationSign: buttonName };
  }
  return {
    operationSignDisplayed: obj.newOne,
    newOne: null,
    operationSign: buttonName,
  };
}

