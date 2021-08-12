console.log("a");

const github = (contents, index) => {
  let elem = getGithubElements();
  console.log(elem);
  document.querySelector(".main-board").innerHTML += elem;
  console.log("b");
  let widgetObj = {};

  widgetObj["type"] = "github";
  widgetObj["contents"] = contents;
  console.log(data);
  let ITEMS = contents.items;
};

data = AjaxCall("https://api.github.com/users/oereo");
