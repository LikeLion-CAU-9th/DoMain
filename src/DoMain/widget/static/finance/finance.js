const finance = (targetIndex, stockItem) => {
  const URL = "/widget/getFinance/" + stockItem;
  document.querySelectorAll('.price')[targetIndex].innerHTML = AjaxCall(URL, data=null);
}

const AjaxCall = (url, data, method="GET", async=false) => {
  let returnValue = "NoN";
  $.ajax({
    url: url,
    type: method,
    async: async,
    data: data,
    success: function(data) {
      returnValue = data;
    }
  })
  return returnValue;
}

window.onload = () => {
  finance(0, '삼성전자');
  finance(1, '네이버');
  finance(2, '카카오');
  finance(3, 'JYP Ent');
}