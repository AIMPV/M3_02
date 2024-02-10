let n1 = document.querySelector('#ip-1');
let n2 = document.querySelector('#ip-2');
let n3 = document.querySelector('#ip-3');

button = document.querySelector("button");

button.addEventListener('click', function() {
  let suma = Number(n1.value) + Number(n2.value) + Number(n3.value);
  let parrafo = document.querySelector('#resultado');
  if (suma < 10) {
    
    parrafo.innerHTML = "llevas" + " " + suma + " " + "stickers";
  }else {
    parrafo.innerHTML = "Levas demasiados stickers";
  }
});