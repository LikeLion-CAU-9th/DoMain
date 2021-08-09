const getDdayElements = () => {
  elem = '<div class="widget widget-dday" onmouseover=ddayListShow() onmouseout=ddayListHide()><input type="hidden" class="ddayHidden"><div class="modify-btn hide" onclick=""><img src="/static/image/modify-icon.png"></div><div class="center" id = "ddayFirst"></div><div class="center" id = "ddayAdd"></div><div></div></div>';
  return elem
}