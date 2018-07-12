let button = document.querySelector('.text-blue');
let classes = document.querySelector('.bg-purple-light').classList;
button.onclick = function(event){classes.toggle('invisible')};