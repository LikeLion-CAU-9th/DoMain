
const emailCheck = () => {
    const userEmail = document.querySelector('#user_email').value;
    const mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const mailValidation = mailFormat.test(userEmail.toLowerCase());
    console.log("메일 유효", mailValidation)
    // 디비 조회 중복 검사
    let mailOverap = false;
    $.ajax({
        url: '../joinEmailOverap/',
        type: "GET",
        data: {'email': userEmail},
        dataType : "text",
        async: false,
        success: function(response) {
            if(response == 'Overap') {
                mailOverap = true;
            }
        },
        error: function() {
            console.log("error")
        }
    })
    console.log("메일 중복 여부", mailOverap)
    
    let response = false;
    if(mailValidation && !mailOverap) {
            response = true;
        }
    return response
}

// 비밀번호 두개 일치하는지 경우
const passwordCheck = () => {
    const userPwd = document.querySelector('#user_pwd').value;
    const userPwdCheck = document.querySelector('#user_pwd_check').value;
    if(userPwd == userPwdCheck & userPwd != "") {
        console.log("비번 일치")
        return true;
    }
    return false;
}

// 이메일 형식도 맞고 비밀번호 두개도 일치 하는 경우
const bothCheck = () => {
    const joinBtn = document.querySelector('#joinBtn');
    const userName = document.querySelector('#user_name').value;
    const emCheck = emailCheck();
    const pwCheck = passwordCheck();
    console.log("이메일 검사, 비밀번호 검사",emCheck, pwCheck);
    if(emCheck && pwCheck) {
        if(userName.length != 0){
            console.log("성공")
            joinBtn.style.pointerEvents = '';
            joinBtn.style.background = 'rgba(106, 184, 157,1)';
            return true;
        }
    }
    joinBtn.style.pointerEvents = 'none';
    joinBtn.style.background = '#D22657';
    return false;

}


const joinStart = () => {

    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        };
    }, true);

    const joinBtn = document.querySelector('#joinBtn');
    setTimeout(check = ()=>{
        joinBtn.style.pointerEvents = 'none';
        joinBtn.style.background = 'darkslategray';
    },100);
    document.querySelector('#user_name').addEventListener('keyup', bothCheck, false);
    document.querySelector('#user_email').addEventListener('keyup', bothCheck, false);
    document.querySelector('#user_pwd_check').addEventListener('keyup', bothCheck, false);
    document.querySelector('#user_pwd').addEventListener('keyup', bothCheck, false);
    
  }