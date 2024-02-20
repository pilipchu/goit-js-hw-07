function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const box = document.querySelector('#boxes')
const numberInput = document.querySelector('#controls input')
const buttomCreate = document.querySelector('[data-create]')
const buttomDestroy = document.querySelector('[data-destroy]')


let number = 0
numberInput.addEventListener('input', (event) =>
  { 
  number=event.target.value
})
// подія на втрату фокуса, для очістки інпута. Мені показалося так буде краще
numberInput.addEventListener(('blur'), () => {
  numberInput.value = ""
})

buttomCreate.addEventListener('click', () => {
  numberInput.blur()
  const arry = []
  let seziDiv = 30
  // проверка чи масив заповнений, якщо так то проходить по всьому масиву і видаляє дочірні елементи
  if (box.childNodes.length!==0) {
    console.log(box.childNodes)
    const contBox = document.querySelectorAll('#boxes div')
  for (let i = contBox.length; i > 0; i--){
    const boxes = document.querySelector('#boxes div')
boxes.remove()
  }
  }
  // перевірка чи приняте число не більше за 100 і не менше за 0
  if (number > 0 && number <= 100) {
    for (let i = 0; i < number; i++){
    let color = getRandomHexColor()
    arry.push(`<div style="width:${seziDiv}px; height:${seziDiv}px; background-color:${color}"></div>`)
    seziDiv += 10
    }
    box.insertAdjacentHTML("beforeend", arry.join(''))
  }
  })
  
//  подія на кнопку детрой, зробив через перебір бо не знав як зробити щоб очищяло весь масив
buttomDestroy.addEventListener('click', () => {
  const contBox = document.querySelectorAll('#boxes div')
  for (let i = contBox.length; i > 0; i--){
    const boxes = document.querySelector('#boxes div')
boxes.remove()
  }
})
