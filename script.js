function teste() {
  let a = (document.querySelector('main').innerHTML = ` <div class="container">
  <label class="switch"><span class="switch-text"><p>Dark</p><p>Light</p></span><br><div class="switch-wrapper"><input type="checkbox" name="btnradio" id="btnradio" onChange="options()"><span class="switch-button"></span></div></label>
  </div>`)
}

function options() {
  let cbx = document.querySelector('input')
  let corpo = document.querySelector('body')

  cbx.checked
    ? corpo.classList.replace(corpo.className, 'light-blue')
    : corpo.classList.replace(corpo.className, 'dark-blue')
}
