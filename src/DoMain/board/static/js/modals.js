
/* EXPANDER MENU */
const showMenu = (toggleId, navbarId, divId) => {
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(divId)

    if( toggle && navbar ) {
        toggle.addEventListener('click', ()=>{
            navbar.classList.toggle('expander');

            bodypadding.classList.toggle('body-pd')
        })
    }
}

showMenu('nav-toggle', 'navbar', 'body-pd')

/* LINK ACTIVE */
const linkColor = document.querySelectorAll('.nav__link')
function colorLink() {
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

/* COLLAPSE MENU */
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for(i=0;i<linkCollapse.length;i++) {
    linkCollapse[i].addEventListener('click', function(){
        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('showCollapse')

        const rotate = collapseMenu.previousElementSibling
        rotate.classList.toggle('rotate')
    });
}


const tab = document.querySelector(".content li")
const tabList = document.querySelectorAll('.modal-tab .list li');
for (var i = 0; i < tabList.length; i++) {
  tabList[i].querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('is_on');
    }
    this.parentNode.classList.add('is_on');
  });
}


const modal = document.querySelector('.modal-window');
function modalOn() {
    layoutModalOff();
    modal.style.display = "block";    
}

function modalOff() {
    modal.style.display = "none";
}

function preparePageNoti() {
    alert("현재 페이지 준비중 입니다!")
}


const layout_modal = document.querySelector('.layout-modal-window');
function layoutModalOn(){
    layout_modal.style.display = "block";
    modalOff();
}

function layoutModalOff(){
    layout_modal.style.display = "none";
}

// 배경화면 자동제출
document.getElementById("file").onchange = function() {
document.getElementById("form").submit();
};
