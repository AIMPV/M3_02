let img = document.querySelector('.border-img');
let border = false;

img.addEventListener('click', function(){
  if(!border){
      img.style.border='2px solid red';
      border = true;
  }else{
      img.style.border='medium none'
      border = false;
  }
})
