let body = document.querySelector("body")

const changeColor = () => {
  let currentClass = classBody()
  let newClass = currentClass == "light" ? "dark" : "light"
  body.classList.replace(currentClass, newClass)
}

const classBody = () => {
  return body.classList.value
}
