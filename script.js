function mudaCor() {
  let body = document.querySelector('body')
  let options = document.querySelector('select')
  if (options.selectedIndex == 0) {
    body.classList.replace(body.className, 'light-blue')
  } else if (options.selectedIndex == 1) {
    body.classList.replace(body.className, 'dark-blue')
  } else if (options.selectedIndex == 2) {
    body.classList.replace(body.className, 'light-pink')
  } else if (options.selectedIndex == 3) {
    body.classList.replace(body.className, 'dark-pink')
  }
}
