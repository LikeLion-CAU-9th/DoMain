const stickynote = (title, memo) => {
  let notetitle =  document.querySelector('#title');
  notetitle.innerHTML = title;
  let notecontent = document.querySelector('#content');
  notecontent.innerHTML = memo;
}
