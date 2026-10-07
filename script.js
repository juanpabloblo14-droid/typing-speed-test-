//DOM ELEMENTS 
const sampText = document.getElementById("sampleText");
const typeArea = document.getElementById("typingArea");
const btnRestart = document.getElementById("restartBtn");
const displayTime = document.getElementById("timeDisplay");
const wordPerMin = document.getElementById("wpmDisplay");
const displayAccuracy = document.getElementById("accuracyDisplay");
let startTime = null;
let testStarted = false;

//TYPING AREA 
typeArea.addEventListener("input", function(){
    if(!testStarted){
        startTime = Date.now();
        testStarted = true;
    }
    if(typeArea.value === sampText.textContent){
        let endTime = Date.now();
        let elapsedSecond = (endTime - startTime) / 1000;
        displayTime.textContent = elapsedSecond;
        let wordCounter = sampText.textContent.split(" ").length;
        let elapsedMinutes = elapsedSecond / 60 
        let wpm = wordCounter / elapsedMinutes;
        wordPerMin.textContent = Math.round(wpm);
    }
})