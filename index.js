const body = document.querySelector('.body')

body.innerHTML = `<div class="container">
<textarea class="textarea" name="textarea" id="textarea" rows="10"></textarea>
  <div class="keyboard">
    <div class="row">
      <div class="key Backquote">\`</div>
      <div class="key Digit1">1</div>
      <div class="key Digit2">2</div>
      <div class="key Digit3">3</div>
      <div class="key Digit4">4</div>
      <div class="key Digit5">5</div>
      <div class="key Digit6">6</div>
      <div class="key Digit7">7</div>
      <div class="key Digit8">8</div>
      <div class="key Digit9">9</div>
      <div class="key Digit0">0</div>
      <div class="key Minus">-</div>
      <div class="key Equal">=</div>
      <div class="key backspace_key Backspace">Backspace</div>
  </div>
  <div class="row">
      <div class="key tab_key Tab">Tab</div>
      <div class="key KeyQ">Q</div>
      <div class="key Keyw">W</div>
      <div class="key KeyE">E</div>
      <div class="key KeyR">R</div>
      <div class="key KeyT">T</div>
      <div class="key KeyY">Y</div>
      <div class="key KeyU">U</div>
      <div class="key KeyI">I</div>
      <div class="key KeyO">O</div>
      <div class="key KeyP">P</div>
      <div class="key BracketLeft">[</div>
      <div class="key BracketRight">]</div>
      <div class="key slash_key Backslash">\\</div>
      <div class="key Delete">Del</div>
  </div>
  <div class="row">
      <div class="key caps_lock_key CapsLock">CapsLock</div>
      <div class="key KeyA">A</div>
      <div class="key KeyS">S</div>
      <div class="key KeyD">D</div>
      <div class="key KeyF">F</div>
      <div class="key KeyG">G</div>
      <div class="key KeyH">H</div>
      <div class="key KeyJ">J</div>
      <div class="key KeyK">K</div>
      <div class="key KeyL">L</div>
      <div class="key Semicolon">;</div>
      <div class="key Quote">'</div>
      <div class="key enter_key Enter">Enter</div>
  </div>
  <div class="row">
      <div class="key shift_key shift_left ShiftLeft">Shift</div>
      <div class="key KeyZ">Z</div>
      <div class="key KeyX">X</div>
      <div class="key KeyC">C</div>
      <div class="key KeyV">V</div>
      <div class="key KeyB">B</div>
      <div class="key KeyN">N</div>
      <div class="key KeyM">M</div>
      <div class="key Comma">,</div>
      <div class="key Period">.</div>
      <div class="key Slash">/</div>
      <div class="key arrow ArrowUp">🠉</div>
      <div class="key shift_key shift_right ShiftRight">Shift</div>
  </div>
  <div class="row">
      <div class="key ctrl_key ctrl_left ControlLeft">Ctrl</div>
      <div class="key win_key MetaLeft">Win</div>
      <div class="key alt_key alt_left AltLeft">Alt</div>
      <div class="key space_key Space"></div>
      <div class="key alt_key alt_right AltRight">Alt</div>
      <div class="key left arrow ArrowLeft">🠈 </div>
      <div class="key down arrow ArrowDown">🠋</div>
      <div class="key right arrow ArrowRight">🠊</div>
      <div class="key ctrl_key ctrl_right ControlRight">Ctrl</div>
  </div>
  </div>


</div>`

const keys = document.querySelectorAll('.key');
const textarea = document.querySelector('.textarea')

keys.forEach((key) => {
  key.setAttribute('key', key.textContent);
  key.setAttribute('lowerCase', key.textContent.toLowerCase());

  key.addEventListener('click', () => {
    textarea.value += key.textContent
  })
});


let arr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp']

document.addEventListener('keydown', (e) => {
  keys.forEach((key) => {
    if (key.classList.contains(e.code)) {
      key.classList.add('active');
      textarea.value += key.textContent
    }
  });
  
});

document.addEventListener('keyup', (e) => {
  keys.forEach((key) => {
    if (key.classList.contains(e.code)) {
      key.classList.remove('active');
    }
  });
});
