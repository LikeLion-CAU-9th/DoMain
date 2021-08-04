const modal = document.querySelector("#modal");
const startBtn = document.querySelector("#beginning-btn");
const saveBtn = document.querySelector("#saving-btn");

const tab = document.querySelector(".content li")

function modalOff() {
    modal.style.display = "none";
}

function modalOn() {
    modal.style.display = "flex";
    
}


startBtn.addEventListener('click', e => {
    modalOn();
});

saveBtn.addEventListener('click', e => {
   
    modalOff();
})


const tabList = document.querySelectorAll('.modal-tab .list li');
for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('is_on');
    }
    this.parentNode.classList.add('is_on');
  });
}