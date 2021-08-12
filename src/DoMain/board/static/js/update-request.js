const updateBGcolor = () => {
  let hexColor = document.querySelector('.mainBGcolor').value;
  const URL = "/widget/update-mainBGcolor/";
  let data = {'hexColor': hexColor};
  AjaxCall(URL, data);
}

const saveHiddenData = () => {
  let widgetList = document.querySelectorAll('.widget');
  jsonStr = "[";
  for(let i = 0; i < widgetList.length; i++) {
    let widgetStr = widgetList[i].querySelector('input').value;
    jsonStr += widgetStr + ",";
  }
  jsonStr = jsonStr.replaceAt(jsonStr.length-1, "]");
  const URL = '/widget/save-layout/';
  let data = {'layoutJSON': jsonStr};
  AjaxCall(URL, data);
}

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}