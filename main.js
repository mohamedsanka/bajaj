const btn = document.querySelectorAll('.back');

btn.forEach(function(button){
button.addEventListener('click', ()=>{
 window.location.href='./index.html';
})
})

