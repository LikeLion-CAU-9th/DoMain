var f_selbox = ['네이버웹툰', '다음웹툰', '카카오페이지웹툰' ];
var s_selbox = [[], [ '트레이스', '레드스톰', '무장' ], [ '카카오페이지1', '카카오페이지2', '카카오페이지3' ],];
//새로나온 신작을 올리기 위한 임시 객체
var temp = {
    "title": "",
    "artist": "",
    "imgUrl": "",
    "url": ""
}
//즐겨찾기한 작품을 올리기 위한 임시 객체
var tempT = {
    "title": "",
    "imgUrl": "",
    "url": ""
}
$(function () {
    var selectBrand = $('#brand');
    var trCount = -1;
    var tdCount = 0;
    var currentTr;
    var currentTd;
    var webtoonBookmark = [];
    var webtoonBookmarkCount = -1;
    var makeBookmarkTable = 1;

    //네이버 제목 리스트 받아오기
    $.get('webtoonList.json', function (data) {
        var webtoonTotalList = data.webtoonListJson;  //전체웹툰 JSON파일을 webtoonTotalList에 저장
        for (var i = 0; i < webtoonTotalList.length; i++) {
            var webtoonTotal = webtoonTotalList[i]; // 순서별로 하나씩 꺼내와서webtoonTotal에 저장 
            s_selbox[0][i] = webtoonTotal.title; //각 객체의 제목을 네이버웹툰 목록으로 저장	
        }


        //두번재 셀렉트 초기화
        for (var i = 0; i < s_selbox[0].length; i++) {
            $('#sub_brand').append('<option value="' + s_selbox[0][i] + '">' + s_selbox[0][i] + '</option>')
        }

        //select 2중 설정
        selectBrand.change(function () {
            var selectValue = $('#brand').val();
            var subSelectValue = $('#sub_brand');

            subSelectValue.children().remove();
            subSelectValue.append('<option value="1">선택</option>');

            for (var j = 0; j < f_selbox.length; j++) {
                if (selectValue == f_selbox[j]) {
                    for (var i = 0; i < s_selbox[j].length; i++)
                        subSelectValue.append('<option value="1">' + s_selbox[j][i] + '</option>');
                }
            }
        });


        //추가버튼
        $('#inputBtn').click(function () {
            tdCount = 0;
            trCount = 0;
            webtoonBookmarkCount++;
            webtoonBookmark[webtoonBookmarkCount] = $('#sub_brand').val();

            if (webtoonBookmarkCount % 3 == 0) {
                $('#bookmarkWebtoontbody').append(
                    $('#copyTag').children().children().clone());

            }

            var webtoonTotalList = data.webtoonListJson;
            for (var k = 0; k < webtoonBookmark.length; k++) {		//즐겨찾기한 웹툰의 수만큼 반복

                for (var i = 0; i < webtoonTotalList.length; i++) {		//웹툰 전체 리스트 반복
                    var webtoonTotal = webtoonTotalList[i];				//각 객체를 webtoonTotal 에  저장
                    if (webtoonBookmark[k] == webtoonTotal.title) {

                        for (var j in webtoonTotal) {
                            tempT[j] = webtoonTotal[j];

                        }
                        if (tdCount % 3 == 0) {
                            if (tdCount != 0)
                                trCount++;
                            tdCount = 0;

                        }

                        currentTr = $('#bookmarkWebtoontbody > tr').eq(trCount).css('visibility',
                            'visible');
                        currentTd = currentTr.children().eq(tdCount);
                        //적용
                        currentTd.find('.mainImgHref').attr('href', tempT.url);
                        currentTd.find('.mainImg').attr('src', tempT.imgUrl)
                        currentTd.find('.mainTitle').text(tempT.title);
                        currentTd.find('.mainTitle').attr('href', tempT.url);
                        console.log(tempT);
                        tdCount++;


                    }


                }
            }
        });



    });



    //Json 받아오기
    $.get('results.json', function (data) {
        var webtoonList = data.webtoonJson;
        for (var i = 0; i < webtoonList.length; i++) {
            var webtoon = webtoonList[i];
            for (var j in webtoon) {
                temp[j] = webtoon[j];

            }

            if (tdCount % 3 == 0) {
                tdCount = 0;
                trCount++;
                $('#newWebtoonTbody').append(
                    $('#copyTag').children().children().clone());

            }

            currentTr = $('#newWebtoonTbody > tr').eq(trCount).css('visibility',
                'visible');
            currentTd = currentTr.children().eq(tdCount);
            //적용
            currentTd.find('.mainImgHref').attr('href', temp.url);
            currentTd.find('.mainImg').attr('src', temp.imgUrl)
            currentTd.find('.mainTitle').text(temp.title);
            currentTd.find('.mainTitle').attr('href', temp.url);
            currentTd.find('.mainArtist').text(temp.artist);






            tdCount++;

        }

    })

});
