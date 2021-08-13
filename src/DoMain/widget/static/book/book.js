
// 모달에서 확인 눌렀을때
const clickBook = () => {
    let url = document.querySelector('#url').value;
    const name = document.querySelector('#name').value;
    


    if(!checkUrlForm(url)){
        url = "https://"+url;
    }
    const imageUrl = url+"/favicon.ico"; 
    console.log(name);
    setTimeout(function() {
        document.querySelector('#realLink').style.display = 'block';
        document.querySelector('#realLink').style.backgroundImage = "url("+imageUrl+")";
        document.querySelector('#linkTage').href = url;
        document.querySelector('#bookName').innerHTML = name;

        document.querySelector('#plus').style.display = 'none'; 
        
    }, 300);
    
}




// 이거 모달에서 확인 누를때 프론트 상에서도 바뀌기 위해 함수 호출 필요!!
    // let url = document.querySelector('#url').value;
    // const name = document.querySelector('#name').value;

const checkUrlForm = (strUrl) => {
    var expUrl = /^http[s]?\:\/\//i;
    return expUrl.test(strUrl);
}

const book = (contents, index) => {
    let elem = getBookElements();
    document.querySelector('.main-board').innerHTML += elem;
    let widgetObj = {};
    widgetObj['type'] = 'book';
    widgetObj['contents'] = contents;
    document.querySelectorAll('.bookHidden')[index].value = JSON.stringify(widgetObj);
    document.querySelectorAll('.widget-book')[index].style.left = contents.posX;
    document.querySelectorAll('.widget-book')[index].style.top = contents.posY;

    const url = contents.url;
    const name = contents.name;

    if(url!=""){
        const imageUrl = url+"/favicon.ico"; 
        
        document.querySelector('#linkTage').href = url;
        const realLink = document.querySelector('#realLink');
        realLink.style.display = 'block';
        realLink.style.backgroundImage = "url("+imageUrl+")";
        document.querySelector('#plus').style.display = 'none';

        if(name != ""){
            document.querySelector('#bookName').innerHTML = name;
        }
    }

}