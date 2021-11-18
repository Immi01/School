
function ButtonClicked(){

    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let amountofrndnums = parseInt(num2) - parseInt(num1);

    let randomNumber = Math.floor(Math.random() * amountofrndnums) + parseInt(num1);

    let actionThingie = document.getElementById("result");
    console.log(randomNumber);
    actionThingie.innerHTML = randomNumber;
}
