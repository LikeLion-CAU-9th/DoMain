const stickynote = (title, memo) => {
  let notetitle =  document.querySelector('#title');
  notetitle.innerHTML = title;
  let notecontent = document.querySelector('#content');
  notecontent.innerHTML = memo;
}

window.onload = () => {
  const TITLE = widgetJSON[1]['contents']['title'];
  const MEMO = widgetJSON[1]['contents']['memo'];
  stickynote(TITLE, MEMO);
}