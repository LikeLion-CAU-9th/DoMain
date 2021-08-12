let isUnLocked = true;

const widgetLockToggle = () => {
  $(".modify-btn").toggleClass("hide");
  $(".moving-btn").toggleClass("hide");
  widgets = document.querySelectorAll("widgets");
  // widgets.forEach(widget => {
  //   height = widget.innerHeight();
  //   movingBtn = widget[1];
  //   console.log(height);
  //   movingBtn.style.top = height;
  // });
  // console.log("lock");
  drag(isUnLocked);
  console.log(isUnLocked);
  isUnLocked = !isUnLocked;
  console.log(isUnLocked);
};
