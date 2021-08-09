from django.shortcuts import render, redirect
from account.models import User_info
from widget.models import Layout
from account.views import get_user_inst
from widget.views import view_list

def custom(request):
    return render(request, 'customPage.html')

    
def mainbar(request):
    return render(request, 'mainbar.html')


def test(request):
    return render(request, 'test.html')

def test2(request):
    layout_list = view_list(request)
    data = {'layout_list' : layout_list}
    return render(request, 'test2.html', data)


def createData(request, table):
    DUMMY_LAYOUT = '[{"type": "finance","contents": {"width": "340px", "posX": "300px","posY": "500px","items": ["삼성전자", "네이버", "카카오", "JYP Ent"]}},{"type": "stickynote","contents": {"width": "160px", "height": "160px", "posX": "700px","posY": "500px", "title": "Sticky Note", "memo": "내용을 작성하세요!"}},{"type": "searching","contents": {"width": "500px", "height": "70px", "posX": "100px","posY": "100px", "bgColor": "#ee531e", "engine": "google"}},{"type": "dday","posX": "200px","posY": "100px","contents": {"items": ["헤커톤:2021-08-15", "개강:2021-09-01", "한살 더먹음:2022-01-01"]}},{"type": "timer","contents": {"event": "점심시간", "time": "11:20:00", "bgColor": "#14ea18", "posX": "800px","posY": "100px", "fontSize": "28px"}}]'
    params = request.GET
    if table == "account":
        email = params['email']
        pw = params['pw']
        name = params['name']
        User_info.objects.create(user_email=email, user_pwd=pw, user_name=name)
        return redirect('login_view')
    if table == "layout":
        layout = "[]"
        if params['dummy']:
            layout = DUMMY_LAYOUT
        elif params['dummy']:
            layout = params['layout']
        request.session['user_email'] = "seonyeongffhjk@ggg"
        user = get_user_inst(request)
        print("****************")
        print(user)
        # Layout.objects.filter(owner=user).delete()
        Layout.objects.create(owner=user, creater=user, from_store=False, is_applied=True,data=layout)
        return redirect('login_view')
