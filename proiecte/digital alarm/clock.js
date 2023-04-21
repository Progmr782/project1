// Selectam elememtele Html
const ceas = document.getElementById("clock-container");
const containerOra = document.getElementById("container-hour");
const containerMin = document.getElementById("container-min");
const containerSec = document.getElementById("container-sec");
const containerData = document.getElementById("container-data");
const alarmOra = document.getElementById("alarm-ora");
const alarmMin = document.getElementById("alarm-min");
const alarmSec = document.getElementById("alarm-sec");

const week=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let alarmTime = "";

const alarmSound = new Audio("Alarm.mp3");
alarmSound.loop = true;

// Functie care adauga un 0 in fata unui numar mai mic de 10

function addZero(nr) {
    if(nr<10) {
        return "0" +nr;
    }

    return nr;
}

// Functie care afiseaza ora in fiecare secunda
function updateTime() {
    const date = new Date();

    const ora = addZero(date.getHours())
    const min = addZero(date.getMinutes())
    const sec = addZero(date.getSeconds())

    containerData.textContent = date.getFullYear() + " - " + (date.getMonth() +1) + " - " + week[date.getDay()];

    containerOra.textContent = ora;
    containerMin.textContent = min;
    containerSec.textContent = sec;

    const curentTime = "" + ora + min +sec ;
    if (alarmTime == curentTime) {
        alarmSound.play();
        ceas.classList.add("alarm");
    }
}

// Functie care adauga elementele pentru ora , minute, secunde ale alarmei

function createAlarmMenu() {
    // 24 de elemente pt ora 
    for (let i = 0; i<24; i++) {
        alarmOra.options[alarmOra.options.length] =new Option(addZero(i), addZero(i))
    }

    // Orele si secundele --60 elemente

    for (let i = 0; i<60; i++) {
        alarmMin.options[alarmMin.options.length] = new Option(addZero(i),addZero(i));
        alarmSec.options[alarmSec.options.length] = new Option(addZero(i),addZero(i));
    }

}

// Functia care seteaza alarma
function setAlarm(){
    let selectedOra = alarmOra.options[alarmOra.selectedIndex].value;
    let selectedMin = alarmMin.options[alarmMin.selectedIndex].value;
    let selectedSec = alarmSec.options[alarmSec.selectedIndex].value;
    // Salvam ora alarmei in alarmTime
alarmTime=alarmTime + selectedOra + selectedMin + selectedSec;

    // Dezactivam elementele ora,min,sec
    alarmMin.disabled = true;
    alarmOra.disabled = true;
    alarmSec.disabled = true;
}

    // Functia care anuleaza alarma
function cancelAlarm() {
    alarmTime= "";
    // Reactivam elementele
    alarmMin.disabled = false;
    alarmOra.disabled = false;
    alarmSec.disabled = false;

    // Punem sunetul pe pauza 
    alarmSound.pause()

    // Scoatem animatia
    ceas.classList.remove("alarm");
}

setInterval(updateTime, 1000);
updateTime();
createAlarmMenu();