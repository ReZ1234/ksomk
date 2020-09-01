 var imageToTextDecoder = require('image-to-text');
 
 var file = {
   name: 'captcha.png',
   path: './image/'
 };
 
 var key = 'ztEX9VMpdh3YbmiGfvlLDA'; //Your key registered from cloudsightapi @ https://cloudsightapi.com
 imageToTextDecoder.setAuth(key);
 imageToTextDecoder.getKeywordsForImage(file).then(function(keywords){
    console.log(keywords);
 },function(error){
    console.log(error);
 });
