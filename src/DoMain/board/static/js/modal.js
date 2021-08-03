const modal = document.querySelector("#modal");
const closedBtn = document.querySelector(".close-area");
const startBtn = document.querySelector("#beginning-btn");
const saveBtn = document.querySelector("#saving-btn");

function modalOff() {
    modal.style.display = "none";
}

function modalOn() {
    modal.style.display = "flex";
    
}

closedBtn.addEventListener('click', e => {
    modalOff();
    
    
});

startBtn.addEventListener('click', e => {
    modalOn();
});

saveBtn.addEventListener('click', e => {
   
    modalOff();
})

$(".widget-frame").click(function(){
    $(".widget-frame Clicked").clone().appendTo("body");
  });