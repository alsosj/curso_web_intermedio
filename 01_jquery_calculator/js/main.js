function getOperator(operation) {
  if (operation.includes('+')) {
    return '+'
  } else if(operation.includes('-')) {
    return '-'
  } else if(operation.includes('/')) {
    return '/'
  } else if(operation.includes('*')) {
    return '*'
  } else {
    return ''
  }
}

$(document).ready(function() {
  const pantalla = $('#pantalla');
  $('button').click(function () {
    if ($(this).text() === '=') {
      const operation = pantalla.val();
      const operator = getOperator(operation);
      const operands = operation.split(operator);
      if (operator === '+') {
        pantalla.val(parseInt(operands[0]) + parseInt(operands[1]));
      } else if (operator === '-') {
        pantalla.val(parseInt(operands[0]) - parseInt(operands[1]));
      } else if (operator === '*') {
        pantalla.val(parseInt(operands[0]) * parseInt(operands[1]));
      } else if (operator === '/') {
        pantalla.val(parseInt(operands[0]) / parseInt(operands[1]));
      }
    } else if ($(this).text() === 'C') {
      pantalla.val('');
    } else if ($(this).text() === '!') {
      // Accedo al valor actual de la pantalla
      const currentValue = pantalla.val();
      const url = 'http://api.mathjs.org/v4/?expr=' + encodeURIComponent(currentValue);
      $.get(url, function (r) {
        pantalla.val(r);
      })
    } else {
      // Accedo al valor actual de la pantalla
      const currentValue = pantalla.val();
      const newValue = currentValue + $(this).text();
      pantalla.val(newValue);
    }
  });
});
