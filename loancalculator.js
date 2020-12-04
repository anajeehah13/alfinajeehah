
const buttonElement = document.getElementById ("kira");

buttonElement.addEventListener ("click", displayPayment );

function displayPayment() {
  document.getElementById("payment").innerHTML = totalToPay/years/12;
}


function calculate(){
  let totalPrinciple = document.getElementById("principal").innerHTML = principal - deposit;
  let totalInterest = document.getElementById("deposit").innerHTML = (interest/100)*totalPrinciple*years;
  let totalToPay = document.getElementById("interest").innerHTML = totalInterest+totalPrinciple;
}
