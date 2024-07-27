import { startTimer } from "./timer.js";
import { popup } from "./popup.js";



const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startTimer);

popup();



ScrollReveal().reveal('.container', {
    delay: 200});


