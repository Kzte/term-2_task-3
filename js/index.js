function calculate() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let operation = document.getElementById('operation').value;
    
    let result; if (operation === 'plus') {
        result = num1 + num2;
      } else if (operation === 'minus') {
        result = num1 - num2;
      } else if (operation === 'times') {
        result = num1 * num2;
      } else if (operation === 'devide') {
        result = num1 / num2;
      } else {
        console.log('Invalid operation');
        return;
      }
    
      console.log('Result:', result);
    }