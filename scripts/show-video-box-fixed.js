var btn = document.querySelector('button');
var videoBox = document.querySelector('div');
var video = document.querySelector('video');


btn.onclick = function() {
    videoBox.setAttribute('class','showing');
}

videoBox.onclick = function() {
    videoBox.setAttribute('class','hidden');
}
video.onclick = function(e) {
    // 防止当前事件在捕捉和冒泡阶段中进一步传播
    e.stopPropagation();
    video.play();
}