console.log("a");

const github = (contents, index) => {
  let elem = getGithubElements();
  console.log(elem);
  document.querySelector(".main-board").innerHTML += elem;
  console.log("b");
  let widgetObj = {};

  widgetObj["type"] = "github";
  widgetObj["contents"] = contents;
  data = AjaxCall("https://api.github.com/users/oereo");
  console.log(data);
  let ITEMS = contents.items;
};

const AjaxCall = (url, data, method = "GET", async = false) => {
  let returnValue = "";
  $.ajax({
    url: url,
    type: method,
    async: async,
    data: {},
    success: function(data) {
      returnValue = data;
      console.log(data);
    }
  });
  return returnValue;
};
