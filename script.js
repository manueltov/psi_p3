function load(){
  e1();
}

function e1(){
  document.querySelectorAll('[role="presentation"]').forEach(function (el){
el.classList.remove("active");
}
