let sure = 10;
const timer = document.getElementById("timer");
const startButton = document.getElementById("start-button");
let tomatoColors;
document.getElementById('svgTomato').addEventListener('load', function () {
    tomatoColors = document.getElementById('svgTomato').contentDocument.getElementsByClassName("svgColor");
})


setTime(sure);


let greenR = 0;
let greenG = 128;
let greenB = 0;
let redR = 224;
let redG = 64;
let redB = 6;

function setTime(newSure){
    sure = newSure;
    let minute = parseInt(sure/60)<10 ? ('0'+parseInt(sure/60)):parseInt(sure/60);
    let second = ((sure%60)<10) ? ("0" + (sure%60)):(sure%60);
    timer.innerHTML = minute + ':' + second;
}


function setColor(t) {
    let newR = redR + ((greenR - redR) / sure) * t;
    let newG = redG + ((greenG - redG) / sure) * t;
    let newB = redB + ((greenB - redB) / sure) * t;
    tomatoColors[0].style.fill = 'rgb(' + newR + ', ' + newG + ', ' + newB + ')';

    // tomatoColors[1].style.fill = 'rgb(' + newR + ', ' + newG + ', ' + newB + ')';
}


function startTimer() {
    let leftTime = sure;
    let sayac = setInterval(() => {
        leftTime--;
        setColor(leftTime);
        let minute = parseInt(leftTime/60)<10 ? ('0'+parseInt(leftTime/60)):parseInt(leftTime/60);
        let second = ((leftTime%60)<10) ? ("0" + (leftTime%60)):(leftTime%60);
        timer.innerHTML = minute + ':' + second;

        if (leftTime <= 0) {
            clearInterval(sayac);
        }
    }, 1000)
}



startButton.addEventListener("click", startTimer);

ScrollReveal().reveal('.container', {
    delay: 200});



