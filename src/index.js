import './css/main.css'

const showMenuItem = id => {
  document.getElementById(id).style.color = 'grey'
  const parsedId = id.replace('-option', '')
  document.getElementById(parsedId).style.display = 'block'
  document.querySelectorAll(`.section:not(#${parsedId})`).forEach(element => {
    element.style.display = 'none'
  })
  document.querySelectorAll(`.menu-item:not(#${id})`).forEach(element => { element.style.color = 'black' })
}

window.addEventListener('DOMContentLoaded', (event) => {
  const header = document.getElementById('header')
  header.addEventListener('mouseover', e => {
    if (e.target.className === 'menu-item') {
      showMenuItem(e.target.id)
    }
  })
})

console.log('Hello Webpack Project.')
