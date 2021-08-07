const stickynote = (contents) => {
  let elem = getStickynoteElements();
  document.querySelector('.main-board').innerHTML += elem;
  document.querySelector('.note').style.width = contents.width;
  document.querySelector('.note').style.height = contents.height;
  document.querySelector('.note').style.left = contents.posX;
  document.querySelector('.note').style.top = contents.posY;
  let notetitle =  document.querySelector('#title');
  notetitle.innerHTML = contents.title;
  let notecontent = document.querySelector('#content');
  notecontent.innerHTML = contents.memo;
}
