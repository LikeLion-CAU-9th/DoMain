const drag = () => {
  let widgets = document.querySelectorAll(".widget");
  console.log(balls);

  widgets.forEach(function(widget, idx) {
    // 공의 우선순위 설정
    let priority = widget.getAttribute("priority");
    if (!priority) {
      priority = idx + 1;
      widget.setAttribute("priority", priority);
    }
    widget.style["z-index"] = priority;

    // 공 선택 이벤트 바인딩
    // console.log(ball);
    widget.addEventListener("mousedown", handleMouseDown);
  });

  // 마우스 이벤트 바인딩
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
};
