const stickynote = (contents, index) => {
  let elem = getStickynoteElements();
  document.querySelector('.main-board').innerHTML += elem;
  let widgetObj = {};
  widgetObj['type'] = 'stickynote';
  widgetObj['contents'] = contents;
  document.querySelectorAll('.stickynoteHidden')[index].value = JSON.stringify(widgetObj);
  document.querySelectorAll('.note')[index].style.width = contents.width;
  document.querySelectorAll('.note')[index].style.left = contents.posX;
  document.querySelectorAll('.note')[index].style.top = contents.posY;
  let notetitle =  document.querySelectorAll('.note-title')[index];
  notetitle.innerHTML = contents.title;
  let notecontent = document.querySelectorAll('.note-content')[index];
  notecontent.innerHTML = contents.memo;
}
