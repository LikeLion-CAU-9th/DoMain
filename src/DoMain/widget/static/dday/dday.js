
const ddayListup = (ITEMS) => { 
    
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let day = now.getDate();
    let stDate = new Date(year, month, day);

    let ddayList=[];
    for(let i = 0; i < ITEMS.length; i++) {
        ddayName = ITEMS[i].split(':')[0];
        ddayDateArr = ITEMS[i].split(':')[1].split('-');
        endDate = new Date(ddayDateArr[0], ddayDateArr[1], ddayDateArr[2]);
        let dday = (endDate.getTime() - stDate.getTime())/(1000*60*60*24);
        ddayList.push([ddayName, dday]);
    }
    ddayName = document.querySelector('#ddayName');
    ddayName.innerHTML = ddayList[0][0];
    dday = document.querySelector('#dday');
    dday.innerHTML = "D -" + ddayList[0][1];

    

}



window.onload = () => {
    const ITEMS = widgetJSON[1]['content']['items'];
    // ITEMS = ["헤커톤:2021-08-15", "개강:2021-09-01", "한살 더먹음:2022-01-01"]
    document.querySelector('#ddaybox').addEventListener('mouseover', ddayListup(ITEMS), false);    
  }