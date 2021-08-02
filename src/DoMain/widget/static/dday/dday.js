




window.onload = () => {
    const ITEMS = widgetJSON[1]['content']['items'];
    // ITEMS = ["헤커톤:2021-08-15", "개강:2021-09-01", "한살 더먹음:2022-01-01"]
    let ddayList=[];
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let day = now.getDate();
    let stDate = new Date(year, month, day);
    for(let i = 0; i < ITEMS.length; i++) {
        ddayName = ITEMS[i].split(':')[0];
        ddayDateArr = ITEMS[i].split(':')[1].split('-');
        endDate = new Date(ddayDateArr[0], ddayDateArr[1], ddayDateArr[2])
        let dday = [endDate.getTime() - stDate.getTime()]/(100*60*60*24);
        ddayList.append([ddayName, dday]);
    }
    
  }