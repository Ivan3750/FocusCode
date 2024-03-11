/* SWITCH  SECTIONS ON BTN */

const sectionHome = document.querySelector('.section__home');
const sectionCalendar = document.querySelector('.section__calendar');
const sectionStatistic = document.querySelector('.section__statistic');
const sectionProfile = document.querySelector('.section__profile');

const pageElements = document.querySelectorAll('.page-element');

const sections = [sectionHome, sectionCalendar, sectionStatistic, sectionProfile]

sections.forEach((section, index) => {
    pageElements[index].addEventListener("click", () => {
        sections.forEach((section) => {
            section.classList.remove("active")
        })
        section.classList.add("active")

    })
})

/* SWITCH  SECTIONS ON BTN */



/* TIME */

const timeHours = document.querySelector('.time__hours ');
const timeMinutes = document.querySelector('.time__minutes ');
const timeSeconds = document.querySelector('.time__seconds ');

const timeStart = document.querySelector('.time__start');
const timeStop = document.querySelector('.time__stop');

let timeSecondsValue = 20;


let isPlaying = false;


timeStart.addEventListener("click", startTimer)
let timerInterval;

function startTimer() {
    if (!isPlaying) {
        
        isPlaying = true;
        timerInterval = setInterval(() => {
            console.log(timeSecondsValue);
            timeSecondsValue--;
    
            if (timeSecondsValue >= 0) {
                timeSeconds.innerHTML = timeSecondsValue;
            } else {
                clearInterval(timerInterval);
                isPlaying = false;
            }
        }, 1000);
    }
}


timeStop.addEventListener('click', stopTimer)
function stopTimer() {
    clearInterval(timerInterval);
    isPlaying = false;
    if(timeSecondsValue >= 0)
    timeSeconds.innerHTML = timeSecondsValue
    }

const timeInput = document.querySelector('.time__input');
const Time = document.querySelector('.time');

/* Time.addEventListener("click", ()=>{

    Time.style.display = "none"
    timeInput.style.display ="block";
    console.log("1")
}) */