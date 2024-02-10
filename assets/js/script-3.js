let btn = document.querySelector('button');
let mensaje = document.querySelector('#mensaje');

btn.addEventListener('click', function() {
  let sl1 = document.querySelector('#sl-1');
  let sl2 = document.querySelector('#sl-2');
  let sl3 = document.querySelector('#sl-3');
  
  if(sl1.value == 9 && sl2.value == 1 && sl3.value == 1) {
    mensaje.innerHTML = 'Password 1 correcta'
  } else if (sl1.value == 7 && sl2.value == 1 && sl3.value == 4) {
    mensaje.innerHTML = 'Password 2 correcta'
  } else {
    mensaje.innerHTML = 'Password incorrecta'
  }
});