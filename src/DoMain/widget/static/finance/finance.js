const finance = (stockItem) => {
  const URL = "/widget/getFinance/" + stockItem;
  setInterval(()=>{
    let price = AjaxCall(URL, data=null);
    console.log(price)
  },5000);  
}

const AjaxCall = (url, data, method="GET", async=false) => {
  let returnValue = false;
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