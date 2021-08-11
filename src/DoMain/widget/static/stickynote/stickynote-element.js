const getStickynoteElements = () => {
  elem = '<div class="widget note widget-note"><input type="hidden" class="stickynoteHidden"><div class="modify-btn hide" onclick="widgetModalOn()"><img src="/static/image/modify-icon.png"></div><a><h2 class="note-title" id = "title"></h2><p class="note-content" id = "content"></p></a></div>';
  return elem
}