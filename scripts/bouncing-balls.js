var canvas = document.querySelector('canvas');

// 变量ctx是一个对象，代指canvas上的一块允许我们绘制2D图形的区域。
var ctx = canvas.getContext('2d');

// 设置 width 和 height 变量，并且让 canvas 元素的宽和高,等于浏览器的宽和高,也就是网页显示的区域
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;


// 这个函数将两个数字作为参数传入，并且返回一个这两个数字之间的一个随机数。
function random(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

//小球构造器
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;

}

//画小球
Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

//更新小球的数据
Ball.prototype.update = function () {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;

}

//增加撞击侦查
Ball.prototype.collisionDetect = function() {
    for(var j = 0; j < balls.length; j++) {
        if(!(this === balls[j])) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if(distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
            }
        }
    }
}

// 让小球动起来

var balls = [];

function loop() {
    // 透明度决定了这个小球是否带尾巴
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';

    ctx.fillRect(0, 0, width, height);

    //length决定了画布上小球的数量
    while(balls.length < 25) {
        var size = random(10, 20);
        var ball = new Ball(
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
            size
        );
        balls.push(ball);
    }

    for(var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();


