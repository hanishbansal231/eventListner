const onClickBtn = document.querySelector('.onClickBtn');
const doubleClickBtn = document.querySelector('.doubleClickBtn');

// On Click
onClickBtn.addEventListener('click', () => {
  let onClickPra = document.querySelector('.onClickPra');
  onClickPra.innerHTML = ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, odit!';
});

// Double Click
doubleClickBtn.addEventListener('dblclick', () => {
  let doubleClickPra = document.querySelector('.doubleClickPra');
  doubleClickPra.innerHTML = ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, odit!';
});

// Mouse Over
const mouseOverBox = document.querySelector('.mouseOverBox');
mouseOverBox.addEventListener('mouseover', () => {
  mouseOverBox.style.backgroundColor = 'blue';
});

// Mouse Out
mouseOverBox.addEventListener('mouseout', () => {
  mouseOverBox.style.backgroundColor = 'white';
});

// On Key Press
const textValue = document.getElementById('text');
textValue.addEventListener('keypress', () => {
  alert('Your Press the Key Inside the Input Filed');
});

//  Key Down

const keyDownInput = document.getElementById('keyDownInput');
keyDownInput.addEventListener('keydown', () => {
  let keyDownpra = document.querySelector('.keyDownpra');
  keyDownpra.innerHTML = 'You pressed a key inside the input field';
});

// Key Up

const keyUpInput = document.getElementById('keyUpInput');

keyUpInput.addEventListener('keyup', () =>{
  let keyUpPra = document.querySelector('.keyUpPra');
  keyUpPra.innerHTML = keyUpInput.value;
});