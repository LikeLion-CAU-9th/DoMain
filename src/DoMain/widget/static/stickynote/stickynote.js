const stickynote = (contents, index) => {
  let elem = getStickynoteElements();
  document.querySelector('.main-board').innerHTML += elem;
  document.querySelectorAll('.note')[index].style.width = contents.width;
  document.querySelectorAll('.note')[index].style.height = contents.height;
  document.querySelectorAll('.note')[index].style.left = contents.posX;
  document.querySelectorAll('.note')[index].style.top = contents.posY;
  let notetitle =  document.querySelectorAll('.note-title')[index];
  notetitle.innerHTML = contents.title;
  let notecontent = document.querySelectorAll('.note-content')[index];
  notecontent.innerHTML = contents.memo;
}
