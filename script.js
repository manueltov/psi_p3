function load(){
  function selectedOption(option){
      document.getElementById("selectedOption").innerHTML = option.innerHTML;
  }

  for(var i=1 ; i<4 ; i++){
      for(var j=1 ; j<4 ; j++){
        var idName = "option"+i+j;
        document.getElementById(idName).addEventListener("click", function() {
          selectedOption(this);});
      }
  }
}
