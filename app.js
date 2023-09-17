let btn = document.getElementById('btn');
let input = document.getElementById('input');
let output = document.getElementById('output');

const serverURL = "https://api.funtranslations.com/translate/minion.json";
function getTranslationURL(input){
    return serverURL + "?" + "text=" + input;
}
function errorHandler(error){
    console.log("error occured", error);
    alert("something went wrong")
}

function clickHandler(){
const inputText =  input.value;
fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => {
    const translatedText = json.contents.translated;
    output.innerText = translatedText;
})
.catch(console.errorHandler)
};
btn.addEventListener('click',clickHandler);
