console.log("a");
// fetch(`https://api.github.com/user/oereo`)
//   .then(res => res.json())
//   .then(res => {
//     if (res.success) {
//       console.log(res);
//     }
//   });
const github = (contents, index) => {
  let elem = getGithubElements();
  console.log(elem);
  document.querySelector(".main-board").innerHTML += elem;
  console.log("a");
  let widgetObj = {};

  widgetObj["type"] = "github";
  widgetObj["contents"] = contents;

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

AjaxCall("https://api.github.com/users/oereo");
