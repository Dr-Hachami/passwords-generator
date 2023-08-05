const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const withoutSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let outputOne = document.getElementById('output-one');
let outputTow = document.getElementById('output-tow');
let passGenerator = document.getElementById('pass-generator');
let twentyLong = document.getElementById('twenty-long');
let symbols = document.getElementById('symbols');

let randPassOne = '';
let randPassTow = '';

function randPass(){
    if (symbols.checked || twentyLong.checked){
        if(symbols.checked && !twentyLong.checked){
            for (let i=0; i<15;i++){
                let randNumOne = Math.floor(Math.random()*withoutSymbols.length);
                let randCharOne = withoutSymbols[randNumOne];
                randPassOne += randCharOne;
                let randNumTow = Math.floor(Math.random()*withoutSymbols.length);
                let randCharTow = withoutSymbols[randNumTow];
                randPassTow += randCharTow;
            }
        }else if(!symbols.checked && twentyLong.checked){
            for (let i=0; i<20;i++){
                let randNumOne = Math.floor(Math.random()*characters.length);
                let randCharOne = characters[randNumOne];
                randPassOne += randCharOne;
                let randNumTow = Math.floor(Math.random()*characters.length);
                let randCharTow = characters[randNumTow];
                randPassTow += randCharTow;
            }
        }else{
            for (let i=0; i<20;i++){
                let randNumOne = Math.floor(Math.random()*withoutSymbols.length);
                let randCharOne = withoutSymbols[randNumOne];
                randPassOne += randCharOne;
                let randNumTow = Math.floor(Math.random()*withoutSymbols.length);
                let randCharTow = withoutSymbols[randNumTow];
                randPassTow += randCharTow; 
        }
    }
}else{

        for (let i=0; i<15;i++){
            let randNumOne = Math.floor(Math.random()*characters.length);
            let randCharOne = characters[randNumOne];
            randPassOne += randCharOne;
            let randNumTow = Math.floor(Math.random()*characters.length);
            let randCharTow = characters[randNumTow];
            randPassTow += randCharTow;    
    }
        
    }
    outputOne.textContent = randPassOne;
    outputTow.textContent = randPassTow;
}

passGenerator.addEventListener('click', function(){
    randPassOne = '';
    randPassTow = '';
    randPass();
})

outputOne.addEventListener('click', function(){
    async function copyTextToClipboard() {
      try {
        var textToCopy = document.getElementById("output-one").textContent;
        await navigator.clipboard.writeText(textToCopy);
        alert("Text copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy text: ", err);
        alert("Failed to copy text to clipboard!");
      }
    }
    copyTextToClipboard();
})
outputTow.addEventListener('click', function(){
    async function copyTextToClipboard() {
      try {
        var textToCopy = document.getElementById("output-tow").textContent;
        await navigator.clipboard.writeText(textToCopy);
        alert("Text copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy text: ", err);
        alert("Failed to copy text to clipboard!");
      }
    }
    copyTextToClipboard();
})


