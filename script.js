function checkHaiku(row) {

  let result = 0

  for (let i = 0; i < row.length; i++) {

    switch (row[i].toLowerCase()) {
      case 'a':
        result += 1
        break;
      case 'o':
        result += 1
        break;
      case 'u':
        result += 1
        break;
      case 'å':
        result += 1
        break;
      case 'e':
        result += 1
        break;
      case 'i':
        result += 1
        break;
      case 'y':
        result += 1
        break;
      case 'ä':
        result += 1
        break;
      case 'ö':
        result += 1
        break;
      default: 
        break;
    }
  }
  return result;
}

document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault()
  let row1 = document.querySelector('#row1').value
  let row2 = document.querySelector('#row2').value
  let row3 = document.querySelector('#row3').value

  let sentence = `Your Haiku is ${checkHaiku(row1)} - ${checkHaiku(row2)} - ${checkHaiku(row3)}`

  let message = ''

  if(checkHaiku(row1) == 5 && checkHaiku(row2) == 7 && checkHaiku(row3) == 5) {
    message = '*Haiku is correct'
    document.querySelector('#message').style.color = 'green'
  } else {
    message = '*Haiku is incorrect'
    document.querySelector('#message').style.color = 'red'
  }

  if(checkHaiku(row1) == 5) {
    document.querySelector('#num1').style.color = 'green'
  } else {
    document.querySelector('#num1').style.color = 'red'
  }

  if(checkHaiku(row2) == 7) {
    document.querySelector('#num2').style.color = 'green'
  } else {
    document.querySelector('#num2').style.color = 'red'
  }

  if(checkHaiku(row3) == 5) {
    document.querySelector('#num3').style.color = 'green'
  } else {
    document.querySelector('#num3').style.color = 'red'
  }

  document.querySelector('#num1').textContent = checkHaiku(row1)
  document.querySelector('#num2').textContent = checkHaiku(row2)
  document.querySelector('#num3').textContent = checkHaiku(row3)

  document.querySelector('#num1').textContent = checkHaiku(row1)
  document.querySelector('#message').textContent = message
})

document.querySelector('#clear').addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('#row1').value = ''
  document.querySelector('#row2').value = ''
  document.querySelector('#row3').value = ''

  document.querySelector('#message').textContent = ''

  document.querySelector('#num1').textContent = '0'
  document.querySelector('#num2').textContent = '0'
  document.querySelector('#num3').textContent = '0'

  document.querySelector('#num1').style.color = '#fff'
  document.querySelector('#num2').style.color = '#fff'
  document.querySelector('#num3').style.color = '#fff'
})

