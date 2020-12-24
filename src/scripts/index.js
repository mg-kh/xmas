const $ = require('jquery')
import anime from 'animejs/lib/anime.es.js';

import '../styles/style.scss';
import {snowFall} from "./snow-fall"

$(document).ready(() => {
     const button = $('.start__button')
     const overlay = $('.over__lay')
     const heroText = $('.hero__text span')

     button.on('click' , function(){
          overlay.remove()
           snowFall()
          setInterval(() => {
               snowFall()
          }, 1000);
          var tl = anime.timeline({
               easing: 'easeOutExpo',
               duration: 2000,
          });
          tl
          .add({
               targets: heroText[0],
               top : [50,70, 0],
               opacity : [0, 1,1, 0],
          })
          .add({
               targets: heroText[1],
               top : [50,70, 0],
               opacity :  [0, 1,1, 0],
          })
          .add({
               targets: heroText[2],
               top : [50,70, 0],
               opacity :  [0, 1,1, 0],
          })
          .add({
               targets: heroText[3],
               top : [50,70, 0],
               opacity :  [0, 1,1, 0],
          })
          .add({
               targets: heroText[4],
               top : [50,70, 0],
               opacity :  [0, 1,1, 0],
          })
          .add({
               targets: 'img',
               opacity :  1,
          })
     })


})