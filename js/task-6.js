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

buttomCreate.addEventListener('click', () => {
  const arry = []
  let seziDiv = 30
  for (let i = 0; i < number; i++){
    let color = getRandomHexColor()
    arry.push(`<div style="width:${seziDiv}px; height:${seziDiv}px; background-color:${color}"></div>`)
    seziDiv += 10
  }
  box.insertAdjacentHTML("beforeend", arry.join(''))
  })
numberInput.addEventListener('input', (event) =>
  { 
  number=event.target.value
})
buttomDestroy.addEventListener('click', () => {
  const contBox = document.querySelectorAll('#boxes div')
  console.log(contBox)
})
