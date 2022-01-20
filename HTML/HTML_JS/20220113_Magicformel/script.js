
// globaler Variablen sind schleeeeecht

function calculateValuesFromFormula(){
    let groesse = document.getElementById("groesse").value;
    let gewicht = document.getElementById("gewicht").value;
    if(gewicht == 0){
        printResultToConsole(null);
        return;
    }
    let ergebnis = ((groesse * 1.43) / gewicht) - 3.4;
    console.log(ergebnis);
    ergebnis = Math.round(ergebnis);

    console.log(ergebnis);
    printResultToConsole(ergebnis);
}

function printResultToConsole(eingabe){

    let output = "string";
    output = "";

    if(eingabe == 0){
        output = "Null"
    } else if(eingabe > 0){
        output = "Positiv <br>"

        for(let i = 0; i < eingabe + 1; i++){

            if(i < eingabe){
                output = output + i + ", ";
            }else if(i = eingabe){
                output = output + i;
            }
        }
    } else if(eingabe < 0){
        output = "Negativ <br>"
        
        for(let i = 0; i > eingabe - 1; i--){

            if(i > eingabe){
                output = output + i + ", ";
            }else if(i = eingabe){
                output = output + i;
            }
        }
    } else {
        document.getElementById("Ausgabefeld").innerHTML = "Ausgabefeld";
        document.getElementById("Ausgabefeld").style.color = "lightslategrey";
        return;
    }

    console.log(output);
    document.getElementById("Ausgabefeld").innerHTML = output;
    document.getElementById("Ausgabefeld").style.color = "black";
}