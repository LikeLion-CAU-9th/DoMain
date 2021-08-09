const updateBGcolor = () => {
  let hexColor = document.querySelector('.mainBGcolor').value;
  const URL = "/widget/update-mainBGcolor/";
  let data = {'hexColor': hexColor};
  AjaxCall(URL, data);
}