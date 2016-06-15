var $ = function(id) {
    return document.querySelector(id);
};
$('.nav-login-register').onclick = function() {
    window.location.href = '注册.html';
};
var loginBox = $(".login-box"),
    loginMask = $(".login-mask"),
    body = $('body'),
    suggestionBox = $('.suggestion-box'),
    nav = $('.nav'),
    erwei = $('.erwei'),
    erweiBtn = $('.erwei-btn'),
    listMore = $('.nav-list-more'),
    header = $('header'),
    goTop = $('.goTop'),
    aside = $('aside');
// 登录窗口和建议窗口从上至下弹出
function scrollIn(el) {
    body.style.overflowY = 'hidden';
    body.style.marginRight = '16px';
    el.style.visibility = 'visible';
    show(loginMask);
    el.style.transition = 'transform 500ms ease-in,opacity 500ms ease-in';
    el.style.transform = 'translate(0px, 150px)';
    el.style.opacity ='1';
}
$(".nav-login-login").onclick = function() {
    scrollIn(loginBox);
};
$('.suggestion-btn').onclick = function() {
    scrollIn(suggestionBox);
};
// 登录窗口和建议窗口从下至上收回
function scrollOut(el) {
    el.style.transition = 'transform 500ms ease-out,opacity 500ms ease-in';
    el.style.transform = 'translate(0px, -150px)';
    el.style.opacity ='0';
    body.style.marginRight = '0px';
    hide(loginMask);
    setTimeout(function(){
        el.style.visibility = 'hidden';
    },500);
    body.style.overflowY = 'scroll';
}
$('.login-title .icon-chahao').onclick = function() {
    scrollOut(loginBox);
};
$('.suggestion-box .icon-chahao').onclick = function() {
    scrollOut(suggestionBox);
};

function show(el) {
    el.style.display = 'block';
}
erweiBtn.onmouseover = function() {
    show(erwei);
};

function hide(el) {
    el.style.display = 'none';
}
erweiBtn.onmouseleave = function() {
    hide(erwei);
};
// 更多按钮显示框切换
function toggle(el, event) {
    if(el.style.display == 'block'){
        hide(el);
    } else {
        show(el);
    }
    event.stopPropagation();
}
$('.more').onclick = function(e) {
    toggle(listMore, e);
};
// 点击页面任意位置关闭更多按钮显示框内容
body.onclick = function() {
    if (listMore.style.display == 'block') {
        hide(listMore);
    }
};
// 滚动条到一定位置时导航栏变换样式
window.onscroll = function() {
    if (document.documentElement.scrollTop > parseInt('80px')) {
        header.className = 'nav-scroll';
    } else {
        header.className = 'nav';
    }
};
// 匀速到顶部
goTop.onclick = function() {
    var timer = setInterval(function() {
        var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
        var speed = 200;
        document.documentElement.scrollTop = document.body.scrollTop = scrollHeight - speed;
        if (scrollHeight === 0) {
            clearInterval(timer);
        }
    }, 30);
};
// 轮播图代码
var carousel = $('.carousel'),
    carouselImg = $('.carousel-img'),
    buttons = document.querySelectorAll('.carousel-button span'),
    prev = $('.carousel-prev'),
    next = $('.carousel-next'),
    animated = false,
    index = 1,
    timer;

function showButton() {
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].className == 'on') {
            buttons[i].className = '';
            break;
        }
    }
    buttons[index - 1].className = 'on';
}

function animate(n) {
    var newLeft = parseInt(carouselImg.style.left) + n * 100,
        screenX = document.documentElement.clientWidth || document.body.clientWidth,
        interval = 5,
        speed,
        animated = true;
        if(n > 0){
            speed = 100 / interval;
        }else{
            speed = -100 / interval;
        }

    function go() {
        if ((n < 0 && parseInt(carouselImg.style.left) > newLeft) || n > 0 && parseInt(carouselImg.style.left) < newLeft) {
            carouselImg.style.left = parseInt(carouselImg.style.left) + speed + '%';
            setTimeout(go, interval);
        } else {
            animated = false;
            carouselImg.style.left = newLeft;
            if (newLeft > -100) {
                carouselImg.style.left = '-500%';
            } else if (newLeft < -500) {
                carouselImg.style.left = '-100%';
            }
        }
    }
    go();
}
next.onclick = function() {
    if (index == 5) {
        index = 1;
    } else {
        index += 1;
    }
    showButton();
    if (!animated) {
        animate(-1);
    }
};
prev.onclick = function() {
    if (index == 1) {
        index = 5;
    } else {
        index -= 1;
    }
    showButton();
    if (!animated) {
        animate(1);
    }
};

function buttonColor() {
        if (this.className == 'on') {
            return;
        }
        var myN = parseInt(this.getAttribute('index'));
        if (!animated) {
            animate(-myN + index);
        }
        index = myN;
        showButton();
    }

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = buttonColor;
}

function play() {
    timer = setInterval(function() {
        next.onclick();
    }, 5000);
}

function stop() {
    clearInterval(timer);
}
carousel.onmouseover = stop;
carousel.onmouseleave = play;
window.onbeforeunload =stop;

// 移动端下拉菜单

var navList = $('.nav-list'),
    navLogin = $('.nav-login'),
    navBar = $('.nav-bar'),
    h = 0;

    function addHeight(){
        navBar.style.height = h + 'px';
        if(h < 350){
           h += 10;
           setTimeout(addHeight,8);
        }
    }
    function reduceHeight(){
        navBar.style.height = h + 'px';
        if(h > 0){
           h -= 10;
           setTimeout(reduceHeight,8);
        }
    }

    $('.xs-btn').onclick = function(){
        var h = 0;

        if(getComputedStyle(navBar).height=='0px' ){
            navBar.style.height = h;
            navBar.style.display = 'block';
            addHeight();
        } else if(getComputedStyle(navBar).display =='block'){
            reduceHeight();
        }
    };

var json = '{"art":[{"img":"image1","topic":"探美食","title":"上海|LINE Cafe:最萌咖啡","creator":"悦旅行"},{"img":"image6","topic":"探美食","title":"吃遍宜家，开启北欧食旅","creator":"悦旅行"}]}';

// 继续加载按钮Ajax返回
$('.main-newest-btn').onclick = function(){
    $('.main-newest-btn').innerHTML = "努力加载中...";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","getarts.php",true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);

            var len = data.art.length;

            var strHtml = '';
            for (var i = 0; i < len; i++) {
                var art = data.art[i];
                strHtml += '<div class="main-newest-list col-lg-6 col-md-6 col-xs-12">';
                strHtml += '<a href="javascript:void(0)"><img alt="" height="240" src="images/main-newest/'+art.img+'.jpg" width="360"/></a>';
                strHtml += '<div>';
                strHtml += '<p class="text-muted"><a href="javascript:void(0)">'+art.topic+'</a></p>';
                strHtml += '<h3><a href="javascript:void(0)">'+art.title+'</a></h3>';
                strHtml += '<p class="text-right text-muted"><a href="javascript:void(0)">'+art.creator+'</a></p>';
                strHtml += ' </div></div>';
             }
            var node = document.createElement("div");
            node.innerHTML = strHtml;
            $('.main-newest').appendChild(node);
            $('.main-newest').appendChild($('.main-newest-load'));
            $('.main-newest-btn').innerHTML = "加载完毕";
            $('.main-newest-btn').onclick = null;

        }
    };
    xmlhttp.open("GET","getarts.php",true);
    xmlhttp.send();
};


