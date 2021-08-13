let isUnLocked = false;

const widgetLockToggle = () => {
  isUnLocked = !isUnLocked;
  if(isUnLocked) { // isUnLocked가 True일때, 화면을 lock으로 바꿀때만 실행
    let widget = document.querySelectorAll('.widget');
    for(let i = 0; i < widget.length; i++) {
      let hiddenStr = widget[i].querySelector('input').value;
      let hiddenJSON = JSON.parse(hiddenStr);
      hiddenJSON['contents']['posX'] = widget[i].style.left;
      hiddenJSON['contents']['posY'] = widget[i].style.top;
      widget[i].querySelector('input').value = JSON.stringify(hiddenJSON);
    }
    document.querySelector('.lock-icon').style.display = "block";
    document.querySelector('.unlock-icon').style.display = "none";
    document.querySelector('.lock-text').style.display = "block";
    document.querySelector('.unlock-text').style.display = "none";
    saveHiddenData();
    renderAppliedLayout();
  }else {
    document.querySelector('.lock-icon').style.display = "none";
    document.querySelector('.unlock-icon').style.display = "block";
    document.querySelector('.lock-text').style.display = "none";
    document.querySelector('.unlock-text').style.display = "block";
  }

  $(".modify-btn").toggleClass("hide");
  $(".moving-btn").toggleClass("hide");
  $(".delete-btn").toggleClass("hide");
  btnEventSet();
  drag(isUnLocked);
};