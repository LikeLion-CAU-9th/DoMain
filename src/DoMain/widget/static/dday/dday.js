
const dday = (contents, index) => {
    let elem = getDdayElements();
    document.querySelector('.main-board').innerHTML += elem;
    
    let widgetObj = {};
    widgetObj['type'] = 'dday';
    widgetObj['contents'] = contents;
    document.querySelectorAll('.ddayHidden')[index].value = JSON.stringify(widgetObj);
    let ITEMS = contents.items;

    document.querySelectorAll('.widget-dday')[index].style.left = contents.posX;
    document.querySelectorAll('.widget-dday')[index].style.top = contents.posY;

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let day = now.getDate();
    let stDate = new Date(year, month, day);
    
    const ddayName = ITEMS.split(':')[0];
    const ddayDateArr = ITEMS.split(':')[1].split('-');
    const endDate = new Date(ddayDateArr[0], ddayDateArr[1], ddayDateArr[2]);
    const dday = (endDate.getTime() - stDate.getTime())/(1000*60*60*24);
    
    // html 추가
    const addContents = "<h2>"+"D-"+dday.toString()+"</h2>"+"<p>"+ddayName+"</p>"
    document.querySelector('#ddayFirst').innerHTML = addContents;

}



