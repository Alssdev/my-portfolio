const navToggle = document.getElementById('navbar-toggle')
const navbar = document.getElementById('navbar-menu')

navToggle.addEventListener('click', (e) => {
  if (navbar.getAttribute('data-visible') === 'false') {
    navbar.setAttribute('data-visible', 'true')
    navToggle.setAttribute('aria-expanded', 'true')
  } else {
    navbar.setAttribute('data-visible', 'false')
    navToggle.setAttribute('aria-expanded', 'false')
  }
})
