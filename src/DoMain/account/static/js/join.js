
const emailCheck = () => {
    const userEmail = document.querySelector('#user_email').value;
    const mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const mailValidation = mailFormat.test(userEmail.toLowerCase());
    
    // 디비 조회 중복 검사
    let mailOverap = false;
    $.ajax({
        url: '../joinEmailOverap/',
        type: "GET",
        data: {'email': userEmail},
        dataType : "text",
        success: function(response) {
            if(response == 'Overap') {
                mailOverap = true;
                // 여기서는 mailOverap이 true인데
                console.log(mailOverap)  
            }
        },
        error: function() {
            console.log("error")
        }
    })

    // 여기서는 mailOverap이 false로 나와,,
    console.log(mailOverap)  
    if(mailValidation && !mailOverap) {
        return true;
    }
    return false;
}


// 비밀번호 두개 일치하는지 경우
const passwordCheck = () => {
    const userPwd = document.querySelector('#user_pwd').value;
    const userPwdCheck = document.querySelector('#user_pwd_check').value;
    if(userPwd === userPwdCheck) {
        return true;
    }
    return false;
}

// 이메일 형식도 맞고 비밀번호 두개도 일치 하는 경우
const bothCheck = () => {
    const joinBtn = document.querySelector('#joinBtn');
    const userName = document.querySelector('#user_name').value;
    if(emailCheck() && passwordCheck()) {
        if(userName.length != 0){
            joinBtn.style.pointerEvents = '';
            joinBtn.style.background = 'royalblue';
            return true;
        }
    }
    joinBtn.style.pointerEvents = 'none';
    joinBtn.style.background = 'gray';
    return false;

}


window.onload = () => {

    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        };
    }, true);

    const joinBtn = document.querySelector('#joinBtn');
    joinBtn.style.pointerEvents = "none";
    joinBtn.style.background = 'gray';
    document.querySelector('#user_name').addEventListener('keyup', bothCheck, false);
    document.querySelector('#user_email').addEventListener('keyup', bothCheck, false);
    document.querySelector('#user_pwd_check').addEventListener('keyup', bothCheck, false);
    document.querySelector('#user_pwd').addEventListener('keyup', bothCheck, false);
    
  }