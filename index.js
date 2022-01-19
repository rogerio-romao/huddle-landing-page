const form = document.querySelector('form')
const input = document.querySelector('input')
const p = document.querySelector('#error')

form.addEventListener('submit', e => {
  e.preventDefault()
  if (!input.value.match(/^\w+@\w+\.\w+$/)) {
    p.style.display = 'block'
    input.style.outline = '1px solid red'
  }
})
