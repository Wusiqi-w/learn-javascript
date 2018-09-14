var div = document.querySelector('div');

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

div.style.width = WIDTH + 'px';
div.style.height = HEIGHT + 'px';


//调整窗口时，调整div的大小
window.onresize = function() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    div.style.width = WIDTH + 'px';
    div.style.height = HEIGHT + 'px';
}