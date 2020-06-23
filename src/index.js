import './css/main.css'

window.addEventListener('DOMContentLoaded', (event) => {
  const header = document.getElementById('header')

  header.addEventListener('mouseover', e => {
    const selectedMenuItem = document.getElementById(e.target.id)
    console.log(selectedMenuItem)
    if (selectedMenuItem.id === 'about-me-option') {
      document.getElementById(e.target.id.replace('-option', '')).style.display = 'block'
      console.log(selectedMenuItem)
    }
  })
})

console.log('Hello Webpack Project.')
