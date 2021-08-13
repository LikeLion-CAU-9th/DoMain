// var request = require('request');
// var cheerio = require('cheerio');
// var fs = require('fs');
var days = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];


// 그날 나온 웹툰을 JSON 파일로 만들어주는 js
function choiceDay(){

   var today = new Date();
   var naverTime = today.getHours()+1;


   today.setHours(naverTime);

   var day = days[today.getDay()];
   return day;

}

var dayUrl = choiceDay();
var totalWebtoon = '{ "webtoonJson":[';
var naverUrl = "http://comic.naver.com/webtoon/weekdayList.nhn?week=" + dayUrl;


$.ajax(naverUrl, function(err, res, html){

   if(!err){

      var $ = cheerio.load(html);

         

      $(".thumb").has('.ico_updt').each(function(i) {

        var hrefTitleLink = $(this).children();
        var srcLink = $(this).children().children().first();
        var artistLink = $(this).next().children().eq(1).children();



       var addr = hrefTitleLink.attr('href');
       var title = hrefTitleLink.attr("title");
       var img = srcLink.attr('src');
       var artist = artistLink.text();

       

      var webtoonObj = {

         title : title,

         artist : artist,

         imgUrl : img,

         url : 'http://comic.naver.com'+addr

      };

      var webtoonStr = JSON.stringify(webtoonObj);



      if(i!=0)

         totalWebtoon +=',';

      totalWebtoon += webtoonStr;

     





      });

     totalWebtoon += '] }'

console.log(totalWebtoon);



fs.writeFile('./results.json', totalWebtoon, function(err) {

  if(err) throw err;

  console.log('File write completed');

});



   }

});
