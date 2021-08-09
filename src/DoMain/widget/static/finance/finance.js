const finance = (contents, index) => {
  let stockItems = contents.items;
  let elem = getFinanceElements();
  document.querySelector('.main-board').innerHTML += elem;
  let widgetObj = {};
  widgetObj['type'] = 'finance';
  widgetObj['contents'] = contents;
  document.querySelectorAll('.financeHidden')[index].value = JSON.stringify(widgetObj);
  document.querySelectorAll('.financeBoard')[index].style.width = contents.width;
  document.querySelectorAll('.financeBoard')[index].style.left = contents.posX;
  document.querySelectorAll('.financeBoard')[index].style.top = contents.posY;
  const URL = "/widget/getFinance/";
  let obj = {};
  for(let i = 0; i < stockItems.length; i++) {
    obj[i] = stockItems[i];
  }
  priceStr = AjaxCall(URL, data=obj);
  renderName(stockItems, index);
  renderPrice(priceStr, index);
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
      hideLoader();
      appearContent();
    }
  })
  return returnValue;
}

const renderName = (items, index) => {
  let target = document.querySelectorAll('.financeBoard')[index].querySelectorAll('.stock-name');
  for(let i = 0; i < target.length; i++) {
    target[i].innerHTML = items[i];
  }
}

const renderPrice = (priceStr, index) => {
  let target = document.querySelectorAll('.financeBoard')[index].querySelectorAll('.price');
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

const hideLoader = () => {
  document.querySelector('.loader').style.display = 'none';
}

const appearContent = () => {
  document.querySelector('.financeBoard .content').style.display = 'block';
}
