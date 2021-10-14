var ul = document.querySelector('.carousel-ul');
var header = document.querySelector('header');
var ol = document.querySelector('.radius-ol');
var u = ul.children.length;
var o = ol.children.length;
var leftLength = 0;
var control = document.querySelector('.controlCarousel');
(function() {
    for (var i = 0; i < u - o; i++) {
        var lili = document.createElement('li');
        ol.appendChild(lili);
    }
}()) //动态插入轮播图片数量，只需修改carousel-ul下li、a，但不超过8个
var carousel = document.querySelector('.carousel'); //自动触发器
ol.addEventListener(('mouseover'), function() {
    clearInterval(timer);
    timer = null;
})
ol.addEventListener(('mouseout'), function() {
    timer = setInterval(function() {
        control.click();
    }, 3500)
})
carousel.addEventListener(('mouseover'), function() {
    clearInterval(timer);
    timer = null;
})
carousel.addEventListener(('mouseout'), function() {
    timer = setInterval(function() {
        control.click();
    }, 3500)
})
var t = ul.children[0].cloneNode(true);
ul.appendChild(t); //在轮播图末尾插上第一张轮播图做到无限循环
var uli = ol.querySelectorAll('li');
var kli = uli.length; //8
var li = ol.querySelectorAll('li');
li[0].className = 'current';
o = li.length; //8   方盒子的长度

var ulStyleWidth = ul.style.width = ((kli + 1) * 100) + '%'; //父盒子的宽度
var ulAlonWidth = ul.lastElementChild.offsetWidth; //步长
var ulli = ul.querySelectorAll('li');
var bg = document.querySelectorAll('.bg');
var arr = [];
var flag = true; //页面改变后的同步调整
function fx() {
    flag = true;
    fa();
    //控制bug
}

function fw() {
    var a = window.innerWidth;
    var b = document.documentElement;
    b.style.fontSize = a / 15 + 'px';
    k = 9 * 100 + '%';
    for (var i = 0; i < ulli.length; i++) {
        ulli[i].style.width = a + 'px';
        ulli[i].firstElementChild.style.backgroundSize = a + 'px ' + a / 3.2 + 'px';
        header.style.height = a / 3.2 + 'px';
        ul.setAttribute('style', 'width:' + k + ' !important');
        ulAlonWidth = a;
        ul.style.left = -(cubes * a) + 'px'; //使图片回到原先相对屏幕的位置
    }
    times = setInterval(function() {
        control.click();
        clearInterval(timer);
        timer = null;
    }, 3500);
}

function fa() {
    clearInterval(timer);
    timer = null;
    clearInterval(times);
    times = null;
    var a = window.innerWidth;
    bg = header.offsetHeight;
    header.offsetHeight;
    if (a <= 1920 && a >= 1200) {} else if (a >= 1920) {
        a = 1920;
    } else if (a > 750) {
        a = 1200;
    } else if (a <= 750 && a >= 320) {

        fw();
        return;
    }
    k = a * 9 * 100 / 1920 + '%';
    for (var i = 0; i < ulli.length; i++) {
        ulli[i].style.width = a + 'px';
        ulli[i].firstElementChild.style.backgroundSize = a + 'px ' + a / 3.2 + 'px';
        header.style.height = a / 3.2 + 'px';
        ul.setAttribute('style', 'width:' + k + ' !important');
        ulAlonWidth = a;
        ul.style.left = -(cubes * a) + 'px'; //使图片回到原先相对屏幕的位置
    }
    times = setInterval(function() {
        control.click();
        clearInterval(timer);
        timer = null;
    }, 3500);
}
for (let i = 0; i < o; i++) {
    li[i].addEventListener('mouseover', function() {
        flag = false;
        for (var j = 0; j < o; j++) {
            li[j].className = '';
        }
        num = i;
        cubes = i;
        this.className = 'current';
        animate(ul, i * (-ulAlonWidth), fx); //每次走的步长
        clearInterval(timer);
        timer = null;
        clearInterval(times);
        times = null;
    })
}
window.addEventListener('resize', function() {
    if (flag == true) {
        fa();
    }

})
var num = 0;
var cubes = 0;
control.addEventListener('click', function() {
        if (num == o) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * ulAlonWidth);
        for (var i = 0; i < o; i++) {
            li[i].className = '';
        }
        cubes++;
        if (cubes == o) {
            cubes = 0;
        }
        li[cubes].className = 'current';
    }) //同步措施
var times = setInterval(function() {
    control.click();
    clearInterval(timer);
    timer = 0;
}, 3500)
var timer = setInterval(function() {
    control.click();
    clearInterval(times);
    times = 0;
}, 3500)
fa();