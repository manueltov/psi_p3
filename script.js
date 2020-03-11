function load(){

  /*
  FUNCTIONS
  */

  function selectedOption(option){
      document.getElementById("selectedOption").innerHTML = option.innerHTML;
  }

  function calculate(){
    if(!required())
      alert("Há campos obrigatórios por preencher!");
    let cost = 0;
    if(document.getElementById("w1").checked){
        cost += 1;
    }else{
        cost += 10;
    }
    if(document.getElementById("s1").checked)
        cost += 5;
    if(document.getElementById("s2").checked)
        cost *= 2.5;
    document.getElementById("shippingCost").innerHTML = cost;
  }

  function required() {
    return (document.getElementById("w1").checked || document.getElementById("w2").checked)
            && (document.getElementById("shippingName").value != "") && (document.getElementById("shippingAddress").value != "");
  }

  /*
  EXERCICES
  */

  //exercice 1
  for(var i=1 ; i<4 ; i++){
      for(var j=1 ; j<4 ; j++){
        var idName = "option"+i+j;
        document.getElementById(idName).addEventListener("click", function() {
          selectedOption(this);});
      }
  }

  //exercice 2
  document.getElementById("calculate").addEventListener("click",function(){calculate();});
}
