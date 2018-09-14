var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight - 85;
var ctx = canvas.getContext('2d');


ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);

var colorPicker = document.querySelector('input[type = "color"]');

var sizePicker = document.querySelector('input[type="range"]');
var output = document.querySelector('.output');
var clearBtn = document.querySelector('button');
function degToRad(degrees) {
    return degrees * Math.PI / 180;
};
// 更新sizepicker输出值
sizePicker.oninput = function () {
    output.textContent = sizePicker.value;
}
// 存储鼠标指针坐标，以及按钮是否被按下
var curX;
var curY;
var pressed = false;
// 更新鼠标指针坐标
document.onmousemove = function (e) {
    curX = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    curY = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}
canvas.onmousedown = function () {
    pressed = true;
};
canvas.onmouseup = function () {
    pressed = false;
}
clearBtn.onclick = function () {
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0, 0, width, height);
}

function draw() {
    if (pressed) {
        ctx.fillStyle = colorPicker.value;
        ctx.beginPath();
        ctx.arc(curX, curY - 85, sizePicker.value, degToRad(0), degToRad(360), false);
        ctx.fill();
    }
    requestAnimationFrame(draw);
}
draw();