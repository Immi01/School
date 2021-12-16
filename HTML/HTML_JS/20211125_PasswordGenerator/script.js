
document.getElementById("Generate").addEventListener("click",function(){
    generate();
})

function generate(){

    if(document.getElementById("noNumbers").checked && document.getElementById("onlyNumber").checked){
        document.getElementById("output").innerHTML = "You can't do that";
        return;
    }
    
    let length = document.getElementById("length").value;
    if(length=="")
        length = 10;

    let output = "string";
    output = "";

    let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let capital = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let symbols = ["°", "^", "!", "'", "§", "$", "%", "&", "/", "{", "(", "[", "]", ")", "}", "?", "\\", "@", "+", "*", "~", '\u0022', "#", ",", ";", ".", ":", "-", "_", "&lt;", "&gt;"]
    
    while(output.length < length){
        let chosen = 0;
        if(document.getElementById("onlyNumber").checked){
            chosen = 4
        } else if(document.getElementById("noNumbers").checked){
            chosen = Math.floor(Math.random()*4);
        } else {
            chosen = Math.floor(Math.random()*5);
        }

        if(chosen == 1){
            let rnd = letters[Math.floor(Math.random()*letters.length)];
            output = output + rnd;
        }
        
        
        if(document.getElementById("capitalLetters").checked && chosen == 2){
            
            let rnd = capital[Math.floor(Math.random()*capital.length)];
            output = output + rnd;
            
        }
        
        
        if(document.getElementById("symbols").checked && chosen == 3){
            
            let rnd = symbols[Math.floor(Math.random()*symbols.length)];
            output = output + rnd;
            
        }

        if(chosen == 4){

            let rnd = Math.floor(Math.random() * 10);
            output = output + rnd;
            
        }

        if(chosen > 4)
        console.log("chosen:" + chosen);
    }
    document.getElementById("output").innerHTML = output;

}