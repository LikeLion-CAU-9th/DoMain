const widgetClicked = document.querySelector(".widget-frame")
const modal = document.querySelector("#modal");
const closedBtn = document.querySelector(".close-area");
const startBtn = document.querySelector("#beginning-btn")
const addWidget = document.querySelector("widget-frame")

function borderMaiking() {
    widgetClicked.style.border = "2px dashed #000000"
}

widgetClicked.addEventListener('click', e => {
    borderMaiking();
})

function modalOff() {
    modal.style.display = "none";
}

function modalOn() {
    modal.style.display = "flex";
}

function addWidgetMain() {
    addWidget.style.top

}

closedBtn.addEventListener('click', e => {
    modalOff();
});

startBtn.addEventListener('click', e => {
    modalOn();
})

const modal = document.querySelector("#modal");
const closedBtn = document.querySelector(".close-area");
const startBtn = document.querySelector("#beginning-btn")
const addWidget = document.querySelector("widget-frame")

function modalOff() {
    modal.style.display = "none";
}

function modalOn() {
    modal.style.display = "flex";
}

function addWidgetMain() {
    addWidget.style.top
    
}

closedBtn.addEventListener('click', e => {
    modalOff();
});

startBtn.addEventListener('click', e => {
    modalOn();
})

addWidget.addEventListener('click', e => {
    addWidgetMain();
})
