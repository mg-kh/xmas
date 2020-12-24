const $ = require('jquery')
import anime from 'animejs/lib/anime.es.js';

import '../styles/style.scss';
import {snowFall} from "./snow-fall"

$(document).ready(() => {
     snowFall()
     setInterval(() => {
          snowFall()
     }, 1000);

     const heroText = $('.hero__text span')
     var tl = anime.timeline({
          easing: 'easeOutExpo',
          duration: 100,
     });
     tl
     .add({
          targets: heroText[0],
          opacity : 1
     })
     .add({
          targets: heroText[1],
          opacity : 1
     })

})