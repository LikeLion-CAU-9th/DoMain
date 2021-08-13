
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
        document.querySelector('#plus').style.display = 'none'; 
        document.querySelector('#bookName').innerHTML = name;
    }, 300);
    
}

const checkUrlForm = (strUrl) => {
    var expUrl = /^http[s]?\:\/\//i;
    return expUrl.test(strUrl);
}

const book = (url, name) => {
    const imageUrl = url+"/favicon.ico"; 
    const addBook = document.querySelector('#addBook');
    addBook.innerHTML = "<a href="+url+"><div class=\"realLink\" style=\"background-image: url("+imageUrl+")\";></div>"
    addBook.innerHTML += "<p>"+name+"</p>";
}

window.onload = () => {
    // 모달 클릭
    $('#plus').click(function(e){
        e.preventDefault();
        $('#modal').modal("show");
    });

    const ITEMS = widgetJSON[4]['contents'];
    const url = ITEMS['url'];
    const name = ITEMS['name'];
    book(url, name);

}