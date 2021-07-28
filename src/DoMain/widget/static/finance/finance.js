const finance = (stockItems) => {
  const URL = "/widget/getFinance/";
  let obj = {};
  for(let i = 0; i < stockItems.length; i++) {
    obj[i] = stockItems[i];
  }
  priceStr = AjaxCall(URL, data=obj);
  renderPrice(priceStr);
}

const AjaxCall = (url, data, method="GET", async=false) => {
  let returnValue = "";
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

const renderPrice = (priceStr) => {
  let target = document.querySelectorAll('.price');
  priceList = priceStr.split('/');
  for(let i = 0; i < target.length; i++) {
    try {
      price = priceList[i];
    } catch(e) {
      price = "NoN";
    }
    target[i].innerHTML = price;
  }
}

window.onload = () => {
  finance(["삼성전자", "네이버", "카카오", "JYP Ent"]);
}