

var header  = document.getElementById('header'),
    
    index   = document.getElementById('indexUP'),
    
    about   = document.getElementById('about');

header.onmouseover = function () {
  "use strict";
  index.classList.add('bounceUp');
};
header.onmouseout = function () {
  index.classList.remove('bounceUp');
};



