from django.shortcuts import render, redirect
from board.models import WallPaper
from account.models import User_info
from widget.models import Layout
from account.views import get_user_inst
from widget.views import view_list
from widget.views import get_download_widget


def home(request):
    email= request.session['user_email']
    user = User_info.objects.get(user_email=email)

    wallpaper_check = WallPaper.objects.filter(user=user).exists()

    if wallpaper_check == False:
        wallpaper = WallPaper()
        wallpaper.user = user
        wallpaper.save()

    if wallpaper_check == True:
        wallpaper = WallPaper.objects.get(user=user)
        if(request.method == 'POST'):
            if 'image' in request.FILES:
                wallpaper.image = request.FILES['image']
                wallpaper.save()

    download_qs = get_download_widget(request)
    download_layout = view_list(request)
    user = get_user_inst(request)
    return render(request, 'home.html', {'wallpaper': wallpaper, 'download_widget': download_qs, 'user': user.user_name, 'download_layout':download_layout})


def createData(request, table):

    DUMMY_LAYOUT = '[{"type": "background","contents": {"colorCode": "#efefef"}},{"type": "stickynote","contents": {"width": "160px", "height": "160px", "posX": "700px","posY": "500px", "title": "Sticky Note", "memo": "내용을 작성하세요!"}},{"type": "searching","contents": {"width": "500px", "height": "70px", "posX": "100px","posY": "0px", "bgColor": "#ee531e", "engine": "google"}},{"type": "searching","contents": {"width": "500px", "height": "70px", "posX": "100px","posY": "100px", "bgColor": "#14ea18", "engine": "naver"}},{"type": "dday","contents": {"width": "150px","height": "150px","posX": "200px","posY": "100px","items": "헤커톤:2021-08-15"}},{"type": "timer","contents": {"event": "점심시간", "time": "11:20:00", "bgColor": "#14ea18", "posX": "800px","posY": "100px", "fontSize": "28px"}},{"type": "timer2","contents": {"event": "회의까지", "time": "23:00:00", "bgColor": "#14ea18", "posX": "100px","posY": "300px", "fontSize": "28px"}},{"type": "timer","contents": {"event": "스터디룸 체크아웃", "time": "10:00:00", "bgColor": "#FF99FF", "posX": "800px","posY": "400px", "fontSize": "28px"}}]'

    params = request.GET
    if table == "account":
        email = params['email']
        pw = params['pw']
        name = params['name']
        User_info.objects.create(user_email=email, user_pwd=pw, user_name=name)
        return redirect('home')
    if table == "layout":
        layout = "[]"
        if params['dummy']:
            layout = DUMMY_LAYOUT
        elif params['dummy']:
            layout = params['layout']
        user = get_user_inst(request)
        Layout.objects.filter(owner=user).delete()
        Layout.objects.create(owner=user, creater=user, from_store=False, is_applied=True,data=layout)
        return redirect('home')


def mob_warning(request):
  return render(request, 'mob-warning.html') 