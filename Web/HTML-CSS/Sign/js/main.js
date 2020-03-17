// .greet:hover {
// 	left: 550px;
// 	background-position: -550px;
// }

// .greet:hover+.user {
// 	right: 350px;
// }

// 获取元素dom
signSwitch = document.getElementById('sign-switch');

var i = true
signSwitch.onclick = function () {
    if (i) {
        // 从 Up 到 In
        // 欢迎层
        document.getElementById('greet').style.animation = 'greetIn 1s forwards';
        // 图文层
        document.getElementById('greet-charImg').style.animation = 'greetCharImgIn 1s forwards';
        // 展示文字
        document.getElementById('char-show').style.animation = 'CharShowIn 1s forwards';

        // 用户层
        document.getElementById('user').style.animation = 'userIn 1s forwards';

        setTimeout(() => {
            document.getElementById('oper-name').innerHTML = 'Sign in to Diprella'
            document.getElementById('oper-tip').innerHTML = 'or user your email account'
            document.getElementById('username').style.display = 'none'
            document.getElementById('findPass').style.display = 'block'
        }, 300);
        i = false;
    } else {
        // 从 In 到 Up
        // 欢迎层
        document.getElementById('greet').style.animation = 'greetUp 1s forwards';
        // 图文层
        document.getElementById('greet-charImg').style.animation = 'greetCharImgUp 1s forwards';
        // 展示文字
        document.getElementById('char-show').style.animation = 'CharShowUp 1s forwards';

        // 用户层
        document.getElementById('user').style.animation = 'userUp 1s forwards';

        setTimeout(() => {
            document.getElementById('oper-name').innerHTML = 'Create Account'
            document.getElementById('oper-tip').innerHTML = 'or user your email for registration'
            document.getElementById('username').style.display = 'block'
            document.getElementById('findPass').style.display = 'none'
        }, 300);

        i = true;
    }
}
