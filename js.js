const startBtn = document.querySelector(".start");
const pasueBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const historyBtn = document.querySelector(".history");
const stopWatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".time-list");

const infoBtn = document.querySelector(".info");
const modalShadow = document.querySelector(".modal-shadow");
const closeModalBtn = document.querySelector(".close");

const openPallete = document.querySelector('.collor')
const pallete = document.querySelector(".color-window");
const closeColor = document.querySelector(".close2");
const color1 = document.querySelector(".gold");
const color2 = document.querySelector(".green");
const color3 = document.querySelector(".blue");

let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];

const handleStart = () => {
  clearInterval(countTime);
  countTime--;

  countTime = setInterval(() => {
    if (seconds < 10) {
      stopWatch.textContent = `${minutes}:0${seconds}`;
    } else {
      stopWatch.textContent = `${minutes}:${seconds}`;
    }
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }, 200);
};

const handleStop = () => {
  if (stopWatch.textContent !== "0:00") {
    time.textContent = `Ostatni czas: ${stopWatch.textContent}`;
    time.style.visibility = "visible";
    timesArr.push(stopWatch.textContent);
  }

  clearStuff();
};

const handlePasue = () => {
  clearInterval(countTime);
  countTime--;
};

const handleReset = () => {
  time.style.visibility = "hidden";
  timesArr = [];
  clearStuff();
};

const clearStuff = () => {
  clearInterval(countTime);
  stopWatch.textContent = "0:00";
  timeList.textContent = "";
  seconds = 0;
  minutes = 0;
};

const showHistory = () => {
  timeList.textContent = "";
  let num = 1;
  timesArr.forEach((time) => {
    const newTime = document.createElement("li");
    newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`;
    timeList.appendChild(newTime);
    num++;
  });
};

const showModal = () => {
  modalShadow.style.display = "block";
  modalShadow.classList.toggle("modal-animation");
};
const closeModal = () => {
  modalShadow.style.display = "none";

  modalShadow.classList.toggle("modal-animation");
};

startBtn.addEventListener("click", handleStart);
pasueBtn.addEventListener("click", handlePasue);
stopBtn.addEventListener("click", handleStop);
resetBtn.addEventListener("click", handleReset);
historyBtn.addEventListener("click", showHistory);
infoBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) =>
  e.target === modalShadow ? closeModal() : false
);

openPallete.addEventListener('click', ()=> {
    pallete.classList.toggle('show')
})
closeColor.addEventListener('click', ()=> {
    pallete.classList.add('show')
})

let root = document.documentElement;

color1.addEventListener("click", () => {
  root.style.setProperty("--first-color", "rgb(218, 165, 32)");
});

color2.addEventListener("click", () => {
  root.style.setProperty("--first-color", "rgb(48, 204, 48)")
})

color3.addEventListener("click", () => {
  root.style.setProperty("--first-color", 'rgb(123, 199, 230)')
})
