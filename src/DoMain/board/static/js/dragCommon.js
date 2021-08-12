const drag = (isUnLocked) => {
  let balls = document.querySelectorAll(".widget");
  console.log(balls);

  balls.forEach(function(ball, idx) {
    // 공의 우선순위 설정
    let priority = ball.getAttribute("priority");
    if (!priority) {
      priority = idx + 1;
      ball.setAttribute("priority", priority);
    }
    ball.style["z-index"] = priority;

    // 공 선택 이벤트 바인딩
    console.log(ball);
    if(isUnLocked) {
      ball.addEventListener("mousedown", handleMouseDown);
    } else {
      ball.removeEventListener("mousedown", handleMouseDown);
    }
  });

  // 마우스 이벤트 바인딩
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
};
