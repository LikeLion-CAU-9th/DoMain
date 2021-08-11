function handleMouseDown(event) {
  event.preventDefault();

  const widgets = document.querySelectorAll(".widget");
  const el = event.target;
  const classList = el.classList;

  if (!classList.contains("hold")) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const widgetPos = el.getBoundingClientRect();
    const widgetX = widgetPos.x;
    const widgetY = widgetPos.y;

    // 선택한 공 안에 있는 마우스 커서의 XY좌표
    const gapX = mouseX - widgetX;
    const gapY = mouseY - widgetY;

    el.setAttribute("gap-x", gapX);
    el.setAttribute("gap-y", gapY);

    // 선택한 공을 맨 앞으로 가지고 오기
    const maxPriority =
      (widgets.length > 0
        ? Math.max.apply(
            null,
            Array.from(widgets).map(widget => widget.getAttribute("priority"))
          )
        : 9999) + 1;
    el.setAttribute("priority", maxPriority);
    el.style["z-index"] = maxPriority;

    // 선택한 공에 'hold' class를 추가
    classList.add("hold");
  }
}

// 공 움직임 이벤트 핸들러
function handleMouseMove(event) {
  event.preventDefault();

  const el = document.querySelector(".widget.hold");
  if (el) {
    // 움직이는 마우스 커서의 XY좌표
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    // 선택한 공 안에 있는 마우스 커서의 XY좌표
    const gapX = el.getAttribute("gap-x");
    const gapY = el.getAttribute("gap-y");
    const widgetHeight = el.offsetHeight;
    console.log(widgetHeight);
    // 마우스 커서의 위치에 따른 공의 XY좌표
    const widgetX = mouseX - gapX;
    const widgetY = mouseY - gapY - widgetHeight;
    // console.log(gapY);
    // console.log(mouseY);
    // const ballX = mouseX;
    // const ballY = mouseY;
    // 공의 위치를 변경
    el.style.left = widgetX + "px";
    el.style.top = widgetY + "px";
  }
}

// 공 놓기 이벤트 핸들러
function handleMouseUp(event) {
  event.preventDefault();

  const el = document.querySelector(".widget.hold");
  if (el) {
    // 움직이면 적용된 속성 및 class를 삭제
    el.removeAttribute("gap-x");
    el.removeAttribute("gap-y");

    el.classList.remove("hold");
  }
}
