
const dday = (contents, index) => {
    let elem = getDdayElements();
    document.querySelector('.main-board').innerHTML += elem;
    
    let widgetObj = {};
    widgetObj['type'] = 'dday';
    widgetObj['contents'] = contents;
    document.querySelectorAll('.ddayHidden')[index].value = JSON.stringify(widgetObj);
    let ITEMS = contents.items;

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let day = now.getDate();
    let stDate = new Date(year, month, day);

    let ddayList=[];
    for(let i = 0; i < ITEMS.length; i++){
        ddayName = ITEMS[i].split(':')[0];
        ddayDateArr = ITEMS[i].split(':')[1].split('-');
        endDate = new Date(ddayDateArr[0], ddayDateArr[1], ddayDateArr[2]);
        let dday = (endDate.getTime() - stDate.getTime())/(1000*60*60*24);
        ddayList.push([ddayName, dday]);
    };

    // let contents = "";
    let contentsList = [];
    for(let i = 0; i < ddayList.length; i++){
        // contents = contents + "<hr><p>"+ddayList[i][0]+"</p><p>"+"D - "+ddayList[i][1].toString()+"</p>"
        contentsList[i] = "<h2>"+"D-"+ddayList[i][1].toString()+"</h2>"+"<p>"+ddayList[i][0]+"</p>"
    };
    console.log(contentsList[1])
     // ddayAdd.innerHTML = contents+"<hr>";
    const ddayFirst = document.querySelector('#ddayFirst');
    ddayFirst.innerHTML = contentsList[0]

    const ddayAdd = document.querySelector('#ddayAdd');
    ddayAdd.innerHTML = contentsList[1] + contentsList[2];




}

const ddayListHide = () => {
    document.querySelector('#ddayAdd').style.display = 'none';
}

const ddayListShow = () => {
    document.querySelector('#ddayAdd').style.display = 'block';
}
