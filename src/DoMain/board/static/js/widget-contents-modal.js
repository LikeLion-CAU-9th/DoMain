const widgetModalOn = (index) => {
  document.querySelector('.widget-modify-modal').style.display = "inline-block";
  document.querySelector('.modal-full-bg').style.display = "inline-block";
  document.querySelector('.widget-modal-modify-btn').setAttribute("onClick", "widgetModifyRequest(" + index + ")");

  let modalBody = document.querySelector('.widget-modal-body');
  objStr = document.querySelectorAll('.hiddenObj')[index].value;
  widgetObj = JSON.parse(objStr);
  let type = widgetObj['type'];
  let contents = WIDGET_CONTENTS[type];

  for(let i=0; i<contents.length; i++) {
    let dataKey = Object.keys(contents[i]);
    let dataValue = contents[i][dataKey];
    let htmlData = "";
    if (dataValue === "memo") {
      htmlData = '<div class="widget-modal-row"><div class="text-left">' + dataKey + '</div><div><textarea class="' + dataValue + 'Class" >"' + widgetObj['contents'][dataValue] + '</textarea>';
    } else {
      htmlData = '<div class="widget-modal-row"><div class="text-left">' + dataKey + '</div><div><input type="text" class="' + dataValue + 'Class" value="' + widgetObj['contents'][dataValue] + '"></div></div>';
    }
    modalBody.innerHTML += htmlData;
  } 
}

const widgetModalOff = () => {
  document.querySelector('.widget-modify-modal').style.display = "none";
  document.querySelector('.modal-full-bg').style.display = "none";
  modalContentInit();
}

const modalContentInit = () => {
  let modalBody = document.querySelector('.widget-modal-body');
  modalBody.innerHTML = "";
}

const widgetModifyRequest = (index) => {
  let objStr = document.querySelectorAll('.hiddenObj')[index].value;
  let widgetObj = JSON.parse(objStr);
  let type = widgetObj['type'];
  let widgetContents = widgetObj['contents']
  let contentData = WIDGET_CONTENTS[type];
  let keys = []
  for(let i = 0; i < contentData.length; i++) {
    keys.push(contentData[i][Object.keys(contentData[i])]);
  }
  for(let i = 0; i< keys.length; i++) {
    let key = keys[i];
    let classSelector = "." + key + "Class";
    widgetContents[key] = document.querySelector(classSelector).value;
  }
  widgetObj = {'type': type, 'contents': widgetContents};
  document.querySelectorAll('.hiddenObj')[index].value = JSON.stringify(widgetObj);
  widgetModalOff();
  movedPostionSave();
  saveHiddenData();
  renderAppliedLayout();
}

const btnEventSet = () => {
  let modifyBtn = document.querySelectorAll('.modify-btn');
  let deleteBtn = document.querySelectorAll('.delete-btn');
  for(let i = 0; i < modifyBtn.length; i++) {
    modifyBtn[i].setAttribute("onClick", "widgetModalOn(" + i + ")");
  }
  for(let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].setAttribute("onClick", "widgetDeleteAlert(" + i + ")");
  }
  console.log("btnEventSet")
}

const movedPostionSave = () => {
  let widget = document.querySelectorAll('.widget');
    for(let i = 0; i < widget.length; i++) {
      let hiddenStr = widget[i].querySelector('input').value;
      let hiddenJSON = JSON.parse(hiddenStr);
      hiddenJSON['contents']['posX'] = widget[i].style.left;
      hiddenJSON['contents']['posY'] = widget[i].style.top;
      widget[i].querySelector('input').value = JSON.stringify(hiddenJSON);
    }
    document.querySelector('.lock-icon').style.display = "block";
    document.querySelector('.unlock-icon').style.display = "none";
    document.querySelector('.lock-text').style.display = "block";
    document.querySelector('.unlock-text').style.display = "none";
    saveHiddenData();
    renderAppliedLayout();
    btnEventSet();
}

$(document).ready(function(){
  setTimeout(()=>{
    btnEventSet();
    console.log("TIME OUT!");
  }, 700);
});