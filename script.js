function load(){

  /*
  ---------------------------------------
  VARIABLES
  */
  var orderButtonVisible;

  /*
  ---------------------------------------
  FUNCTIONS
  */

  function selectedOption(option){
      document.getElementById("selectedOption").innerHTML = option.innerHTML;
  }

  function calculate(){
    if(!required()){
      alert("Há campos obrigatórios por preencher!");
    } else {
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
      if(!orderButtonVisible)
        makeOrderButtonVisible();
    }
  }

  function required() {
    return (document.getElementById("w1").checked
            || document.getElementById("w2").checked)
            && (document.getElementById("shippingName").value != "")
            && (document.getElementById("shippingAddress").value != "");
  }

  function createOrderButton() {
    var buttonSpan = document.createElement("span");
    var br = document.createElement("br");

    var orderButton = document.createElement("BUTTON");
    orderButton.innerHTML = "Encomendar";
    orderButton.setAttribute("id", "orderButton");

    buttonSpan.appendChild(br);
    buttonSpan.appendChild(orderButton);
    document.getElementsByTagName("p")[1].appendChild(buttonSpan);

    document.getElementById("orderButton").style.visibility = "hidden";
    orderButtonVisible = false;
  }

  function orderButton() {
    if(document.getElementById("billingName").value === "")
      document.getElementById("billingName").value
       = document.getElementById("shippingName").value;
    if(document.getElementById("billingAddress").value === "")
      document.getElementById("billingAddress").value
       = document.getElementById("shippingAddress").value;
  }

  function makeOrderButtonVisible(){
    if (!orderButtonVisible){
      document.getElementById("orderButton").style.visibility = "visible";
      orderButtonVisible = true;
    }
  }

  /*
  ---------------------------------------
  EXERCICES
  */

  //exercice 1
  for(var i=1 ; i<4 ; i++){
      for(var j=1 ; j<4 ; j++){
        var idName = "option"+i+j;
        document.getElementById(idName).addEventListener("click", function(){
          selectedOption(this);});
      }
  }

  //exercice 2
  document.getElementById("calculate").addEventListener("click", function(){
    calculate();});

  //exercice for avaliation
  createOrderButton();
  document.getElementById("orderButton").addEventListener("click", function(){
    orderButton();});
}
