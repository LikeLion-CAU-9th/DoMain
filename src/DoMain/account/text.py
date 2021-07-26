def message(domain, uidb64, token):
    return f"아래 링크를 클릭하면 DoMain 이메일 인증이 완료됩니다.\n\nhttp://{domain}/account/activate/{uidb64}/{token}\n\n감사합니다."
