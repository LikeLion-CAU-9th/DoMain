const widgetModalOn = () => {
  alert("Modal On");
}

const widgetModalOff = () => {

}

const attachModalEvent = () => {
  console.log("Attach Modal Event")
  setTimeout(()=>{
    let modifyBtn = document.querySelectorAll('.modify-btn');
    console.log("mod",modifyBtn);
    for (let i = 0; i < modifyBtn.length; i++) {
      modifyBtn[i].addEventListener('click', widgetModalOn);
    }
  }, 4000);
  
}

window.addEventListener("load",function(){
  console.log("Page Load!!");
  attachModalEvent();
},false);