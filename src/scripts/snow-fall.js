import {snow_1 , snow_2 , snow_3 , snow_4 , snow_5 , snow_6} from './svg'
const $ = require('jquery')
export const snowFall =  function makeSnow(){
     for(let i =1 ; i <= 10; i++){
          const widowWidth = $(window).innerWidth();
          const posTop = Math.floor(Math.random() * (500 - 1 + 1)) -400;
          const posLeft = Math.floor(Math.random() * (widowWidth - 1 + 1)) + 1;
          const width = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
          const div = $('<div>', {
               class : 'snow_container',
               width : `${width}`,
               height : `${width}`,
          }).css({
               top : `${posTop}px`,
               left : `${posLeft}px`,
          }).animate({
               top : '+=600',
               opacity : 0
          } , 7000 , function() {
              $(this).remove();
          })

          div.append(snow_6);
          $('body').append(div)
     }
}