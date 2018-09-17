// 创建需要的常量

const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');


const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

// 当按下按钮时，阻止表单提交
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

submitBtn.addEventListener('click', function () {
    //将输入的名称存储在web存储器中
    localStorage.setItem('name', nameInput.value);
    // 运行nameDisplayCheck（）来清理显示个性化的问候和更新表单显示
    nameDisplayCheck();
});

forgetBtn.addEventListener('click', function () {
    //从web存储器中删除存储的名称
    localStorage.removeItem('name');
    //运行nameDisplayCheck（）来重新显示一般性问候，并更新表单显示
    nameDisplayCheck();
});

function nameDisplayCheck() {
    // 检查“name”数据项是否存储在web存储器中
    if (localStorage.getItem('name')) {
        let name = localStorage.getItem('name');
        h1.textContent = 'Welcome, ' + name;
        personalGreeting.textContent = 'Welcome to our website, ' + name + '! We hope you have fun while you are here.';
        //隐藏表单的“记住”部分，并显示“遗忘”部分
        forgetDiv.style.display = 'block';
        rememberDiv.style.display = 'none';
    } else {
        h1.textContent = 'Welcome to our website';
        personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
        //隐藏表单的“遗忘”部分，并显示“记住”部分
        forgetDiv.style.display = 'none';
        rememberDiv.style.display = 'block';
    }
}

//运行nameDisplayCheck（），当DOM第一次加载检查个人名称是否已经设置好时，如果这样显示个性化的问候。如果没有，请显示一般的问候

document.body.onload = nameDisplayCheck;