var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');



var totalWebtoon = '{ "webtoonListJson":[';

var naverUrl = "https://comic.naver.com/webtoon/weekday";


request(naverUrl, function(err, res, html){
   if(!err){
      var $ = cheerio.load(html);
         
      $('.section .thumb').each(function(i) {
         var hrefTitleLink = $(this).children();
		 var srcLink = $(this).children().children().first();
      

       var addr = hrefTitleLink.attr('href');
       var title = hrefTitleLink.attr("title");
       var img = srcLink.attr('src');

       
      var webtoonObj = {
         title : title,
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

fs.writeFile('./webtoonList.json', totalWebtoon, function(err) {
  if(err) throw err;
  console.log('File write completed');
});

   }
});
