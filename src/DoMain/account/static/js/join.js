
// 일단 메일 형식 맞는지 경우만 해봄
const emailCheck = () => {
    const userEmail = document.querySelector('#user_email').value;
    const mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const mailValidation = mailFormat.test(userEmail.toLowerCase())
    const mailAlreadyExist = AjaxCall('../email-check/', {'email': userEmail});
    if(mailValidation && mailAlreadyExist)  {
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
    if(emailCheck() && passwordCheck()) {
        joinBtn.style.pointerEvents = '';
        joinBtn.style.background = 'royalblue';
        return true;
    }
    return false;

}


window.onload = () => {
    const joinBtn = document.querySelector('#joinBtn');
    joinBtn.style.pointerEvents = "none";
    joinBtn.style.background = 'gray';
    document.querySelector('#user_pwd_check').addEventListener('keyup', bothCheck, false);
  }