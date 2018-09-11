var btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

// btn.onclick = function() {
//     var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     document.body.style.backgroundColor = rndCol;
// }

function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}
// 被点击时
// btn.onclick = bgChange;

// 按钮被置于焦点
// btn.onfocus = bgChange;

// 解除焦点时触发
// btn.onblur = bgChange;

// 按钮被双击时
// btn.ondblclick = bgChange;

// 当按钮被按下时颜色会发生改变
// window.onkeypress = bgChange;
// 按下
// window.onkeydown = bgChange;
// 松开
// window.onkeyup = bgChange;
// 鼠标移入按钮上方时
// btn.onmouseover = bgChange;
// 鼠标从按钮移出时
btn.onmouseout = bgChange;
