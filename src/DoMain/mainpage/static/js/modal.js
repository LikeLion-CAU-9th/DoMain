const modal = document.querySelector("#modal");
const closedBtn = document.querySelector(".close-area");

function modalOff() {
    modal.style.display = none;
}

closedBtn.addEventListener('click', e =>{
    modalOff();
});
