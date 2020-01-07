var oBtn = document.getElementById("btn");
var oTxt = document.getElementById("txt");
var oTxt2 = document.getElementById("txt2");

function loading() {
    if (oTxt.value == oTxt2.value) {
        window.location.href = "index.html";
    } else {
        alert("用户名/密码错误");
        location.reload();
    }
}


var tweenMulti1 = KUTE.allFromTo('.bg-indigo', {
    translate: [0, 0],
    rotate: 0
}, {
    translate: [0, -150],
    rotate: 360
}, {
    transformOrigin: '10% 10%',
    offset: 300,
    duration: 1000,
    easing: 'easingCubicOut',
    repeat: 1,
    repeatDelay: 1000,
    yoyo: true
});
function startMultiTween1() {
    !tweenMulti1.tweens[0].playing && !tweenMulti1.tweens[tweenMulti1.tweens.length - 1].playing && tweenMulti1.start();
    if(tweenMulti1.tweens[0].playing){
        document.getElementById("1").innerHTML="欢"
    }
}

var tweenMulti2 = KUTE.allFromTo('.bg-olive', {
    translate: [0, 0],
    rotate: 0
}, {
    translate: [0, -150],
    rotate: 360
}, {
    transformOrigin: '10% 10%',
    offset: 300,
    duration: 1000,
    easing: 'easingCubicOut',
    repeat: 1,
    repeatDelay: 1000,
    yoyo: true
});
function startMultiTween2() {
    !tweenMulti2.tweens[0].playing && !tweenMulti2.tweens[tweenMulti2.tweens.length - 1].playing && tweenMulti2.start();
    if(tweenMulti2.tweens[0].playing){
        document.getElementById("2").innerHTML="迎"
    }
}

var tweenMulti3 = KUTE.allFromTo('.bg-pink', {
    translate: [0, 0],
    rotate: 0
}, {
    translate: [0, -150],
    rotate: 360
}, {
    transformOrigin: '10% 10%',
    offset: 300,
    duration: 1000,
    easing: 'easingCubicOut',
    repeat: 1,
    repeatDelay: 1000,
    yoyo: true
});
function startMultiTween3() {
    !tweenMulti3.tweens[0].playing && !tweenMulti3.tweens[tweenMulti3.tweens.length - 1].playing && tweenMulti3.start();
    if(tweenMulti3.tweens[0].playing){
        document.getElementById("3").innerHTML="来"
    }
}

var tweenMulti4 = KUTE.allFromTo('.bg-red', {
    translate: [0, 0],
    rotate: 0
}, {
    translate: [0, -150],
    rotate: 360
}, {
    transformOrigin: '10% 10%',
    offset: 300,
    duration: 1000,
    easing: 'easingCubicOut',
    repeat: 1,
    repeatDelay: 1000,
    yoyo: true
});
function startMultiTween4() {
    !tweenMulti4.tweens[0].playing && !tweenMulti4.tweens[tweenMulti4.tweens.length - 1].playing && tweenMulti4.start();
    if(tweenMulti4.tweens[0].playing){
        document.getElementById("4").innerHTML="到"
    }
}

var tweenMulti5 = KUTE.allFromTo('.bg-blue', {
    translate: [0, 0],
    rotate: 0
}, {
    translate: [0, -150],
    rotate: 360
}, {
    transformOrigin: '10% 10%',
    offset: 300,
    duration: 1000,
    easing: 'easingCubicOut',
    repeat: 1,
    repeatDelay: 1000,
    yoyo: true
});
function startMultiTween5() {
    !tweenMulti5.tweens[0].playing && !tweenMulti5.tweens[tweenMulti5.tweens.length - 1].playing && tweenMulti5.start();
    if(tweenMulti5.tweens[0].playing){
        document.getElementById("5").innerHTML="爱"
    }
}

var tweenMulti6 = KUTE.allFromTo('.bg-teal', {
    translate: [0, 0],
    rotate: 0
}, {
    translate: [0, -150],
    rotate: 360
}, {
    transformOrigin: '10% 10%',
    offset: 300,
    duration: 1000,
    easing: 'easingCubicOut',
    repeat: 1,
    repeatDelay: 1000,
    yoyo: true
});
function startMultiTween6() {
    !tweenMulti6.tweens[0].playing && !tweenMulti6.tweens[tweenMulti6.tweens.length - 1].playing && tweenMulti6.start();
    if(tweenMulti6.tweens[0].playing){
        document.getElementById("6").innerHTML="选"
    }
}

var tweenMulti7 = KUTE.allFromTo('.bg-green', {
    translate: [0, 0],
    rotate: 0
}, {
    translate: [0, -150],
    rotate: 360
}, {
    transformOrigin: '10% 10%',
    offset: 300,
    duration: 1000,
    easing: 'easingCubicOut',
    repeat: 1,
    repeatDelay: 1000,
    yoyo: true
});
function startMultiTween7() {
    !tweenMulti7.tweens[0].playing && !tweenMulti7.tweens[tweenMulti7.tweens.length - 1].playing && tweenMulti7.start();
    if(tweenMulti7.tweens[0].playing){
        document.getElementById("7").innerHTML="课"
    }
}

function restart(){
    document.getElementById("1").innerHTML="W";
    document.getElementById("2").innerHTML="E";
    document.getElementById("3").innerHTML="L";
    document.getElementById("4").innerHTML="C";
    document.getElementById("5").innerHTML="O";
    document.getElementById("6").innerHTML="M";
    document.getElementById("7").innerHTML="E";
    
}
