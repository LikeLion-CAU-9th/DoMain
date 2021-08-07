const finance = (contents) => {
  let stockItems = contents.items;
  let elem = getFinanceElements();
  document.querySelector('.main-board').innerHTML += elem;
  document.querySelector('.financeBoard').style.width = contents.width;
  document.querySelector('.financeBoard').style.left = contents.posX;
  document.querySelector('.financeBoard').style.top = contents.posY;
  const URL = "/widget/getFinance/";
  let obj = {};
  for(let i = 0; i < stockItems.length; i++) {
    obj[i] = stockItems[i];
  }
  priceStr = AjaxCall(URL, data=obj);
  renderName(stockItems);
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
      hideLoader();
      appearContent();
    }
  })
  return returnValue;
}

const renderName = (items) => {
  let target = document.querySelectorAll('.stock-name');
  for(let i = 0; i < target.length; i++) {
    target[i].innerHTML = items[i];
  }
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

const hideLoader = () => {
  document.querySelector('.loader').style.display = 'none';
}

const appearContent = () => {
  document.querySelector('.financeBoard .content').style.display = 'block';
}
