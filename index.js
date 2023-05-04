
import letters from './keys.json' assert { type: "json" };



const body = document.querySelector('.body');
body.innerHTML = `<div class="container">
<textarea class="textarea" name="textarea" id="textarea" rows="10"></textarea>

<p class="text">Для переключения языка комбинация: левыe ctrl + alt. alt + ctrl не сработает.</p>
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
      <div class="key static backspace_key Backspace">Backspace</div>
  </div>
  <div class="row">
      <div class="key static tab_key Tab">Tab</div>
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
      <div class="key static Delete">Del</div>
  </div>
  <div class="row">
      <div class="key static caps_lock_key CapsLock">CapsLock</div>
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
      <div class="key static enter_key Enter">Enter</div>
  </div>
  <div class="row">
      <div class="key static shift_key shift_left ShiftLeft">Shift</div>
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
      <div class="key static arrow ArrowUp">▲</div>
      <div class="key static shift_key shift_right ShiftRight">Shift</div>
  </div>
  <div class="row">
      <div class="key static ctrl_key ctrl_left ControlLeft">Ctrl</div>
      <div class="key static win_key MetaLeft">Win</div>
      <div class="key static alt_key alt_left AltLeft">Alt</div>
      <div class="key static space_key Space"></div>
      <div class="key static alt_key alt_right AltRight">Alt</div>
      <div class="key static left arrow ArrowLeft">◄</div>
      <div class="key static down arrow ArrowDown">▼</div>
      <div class="key static right arrow ArrowRight">►</div>
      <div class="key static ctrl_key ctrl_right ControlRight">Ctrl</div>
  </div>
  </div>
</div>`;



const keys = document.querySelectorAll('.key');
const textarea = document.querySelector('.textarea');
const shift = document.querySelectorAll('.shift_key');
const caps = document.querySelector('.CapsLock');

if(localStorage.length === 0) {
  localStorage.setItem('lang', 'en')
}

let lang = localStorage.getItem('lang');



function setletters(arr) {
  keys.forEach((key, index) => {
    for (let i = 0; i < arr.length; i++) {
      if (index === i) {
        key.textContent = arr[i];
      }
    }
  });
}

if (lang === 'en') {
  setletters(letters[0].eng);
} else {
  setletters(letters[0].ru);
}

caps.addEventListener('click', () => {
  if (!isCapsClicked) {
    if (lang === 'en') {
      setletters(letters[0].engCaps);
    } else {
      setletters(letters[0].ruCaps);
    }
    isCapsClicked = true

  } else {
    if (lang === 'en') {
      setletters(letters[0].eng);
    } else {
      setletters(letters[0].ru);
    }
    isCapsClicked = false
  }
  caps.classList.toggle('active')
});


function addTextAtCursorPosition(textarea, textToAdd) {
  let cursorPosition = textarea.selectionStart;
  let textareaValue = textarea.value;
  textarea.value = textareaValue.substring(0, cursorPosition) + textToAdd + textareaValue.substring(cursorPosition);
  textarea.selectionEnd = cursorPosition + textToAdd.length;
}

function backspace(textarea) {
  let cursorPosition = textarea.selectionStart;
  textarea.value = textarea.value.substring(0, cursorPosition - 1) + '' + textarea.value.substring(cursorPosition);
  textarea.selectionEnd = cursorPosition - 1;
}

function deleteFoo(textarea) {
  let cursorPosition = textarea.selectionStart;
  textarea.value = textarea.value.substring(0, cursorPosition) + '' + textarea.value.substring(cursorPosition + 1);
  textarea.selectionEnd = cursorPosition;
}

keys.forEach((key) => {
  key.addEventListener('click', () => {
    if (key.textContent.length === 1) {
      addTextAtCursorPosition(textarea, key.textContent)
    } else if (key.classList.contains('Backspace')) {
      backspace(textarea)
    } else if (key.classList.contains('Space')) {
      addTextAtCursorPosition(textarea, ' ')
    } else if (key.classList.contains('Enter')) {
      addTextAtCursorPosition(textarea, '\n')
    } else if (key.classList.contains('Tab')) {
      addTextAtCursorPosition(textarea, '    ')
    } else if (key.classList.contains('Delete')) {
      deleteFoo(textarea)
    } else if (key.classList.contains('arrow')) {
      addTextAtCursorPosition(textarea, key.textContent)
    }
  });
});



let isCapsClicked = false;
let isShiftClicked = false;

console.log(lang)
document.addEventListener('keydown', (e) => {
  e.preventDefault()
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    if (lang === 'en') {
      setletters(letters[0].engShift);
    } else {
      setletters(letters[0].ruShift);
    }
    isShiftClicked = true
  } else if (e.code === 'Backspace') {
    backspace(textarea)
  } else if (e.code === 'Space') {
    addTextAtCursorPosition(textarea, ' ')
  } else if (e.code === 'Enter') {
    addTextAtCursorPosition(textarea, '\n')
  } else if (e.code === 'Tab') {
    addTextAtCursorPosition(textarea, '    ')
  } else if (e.code === 'Delete') {
    deleteFoo(textarea)
  } else if (e.code === 'AltLeft' & e.ctrlKey & lang === 'en' || e.code & e.ctrlKey === 'AltRight' & lang === 'en') {
    lang = 'ru'
    localStorage.setItem('lang', 'ru');
    if (isCapsClicked) {
      setletters(letters[0].ruCaps)
    } else {
      setletters(letters[0].ru)
    }
  } else if (e.code === 'AltLeft' & e.ctrlKey & lang === 'ru' || e.code === 'AltRight' & e.ctrlKey & lang === 'ru') {
    lang = 'en'
    localStorage.setItem('lang', 'en');
    if (isCapsClicked) {
      setletters(letters[0].engCaps)
    } else {
      setletters(letters[0].eng)
    }
  }


  keys.forEach((key) => {
    if (key.classList.contains(e.code)) {
      key.classList.add('active');
      if (key.textContent.length === 1) {
        addTextAtCursorPosition(textarea, key.textContent)
      } else if (key.classList.contains('arrow')) {
        addTextAtCursorPosition(textarea, key.textContent)
      }
    }
  });
});

document.addEventListener('keyup', (e) => {
  e.preventDefault()
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    if (lang === 'en') {
      setletters(letters[0].eng);
    } else {
      setletters(letters[0].ru);
    }
    isShiftClicked = false
  }

  keys.forEach((key) => {
    if (key.classList.contains(e.code)) {
      key.classList.remove('active');
    }
  });
  if (e.code === 'CapsLock' & isCapsClicked === false) {
    isCapsClicked = true
    if (lang === 'en') {
      setletters(letters[0].engCaps);
    } else {
      setletters(letters[0].ruCaps);
    }
    caps.classList.add('active');
  } else if (e.code === 'CapsLock' & isCapsClicked) {
    isCapsClicked = false
    if (lang === 'en') {
      setletters(letters[0].eng);
    } else {
      setletters(letters[0].ru);
    }
    caps.classList.remove('active');
  }
});

shift.forEach((element) => {
  element.addEventListener('mousedown', () => {
    if (lang === 'en') {
      setletters(letters[0].engShift);
    } else {
      setletters(letters[0].ruShift);
    }
  });

  element.addEventListener('mouseup', () => {
    if (lang === 'en') {
      setletters(letters[0].eng);
    } else {
      setletters(letters[0].ru);
    }
  });
});

