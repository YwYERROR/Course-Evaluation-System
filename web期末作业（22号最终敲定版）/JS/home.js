// vars
var textOpened = false,
	block = document.getElementById('blocks'),
	bs = block.querySelectorAll('.bg'),
	h2 = document.querySelector('h2'),
	lead = document.querySelector('.lead'),
	lead2 = document.querySelector('.lead2'),
	lead3 = document.querySelector('.lead3'),
	lead4 = document.querySelector('.lead4'),
	lead5 = document.querySelector('.lead5'),
	lead6 = document.querySelector('.lead6'),
	btns = document.querySelector('.btns').querySelectorAll('.btn'),
	b = block.querySelector('.bg'),
	isIE = /ie/.test(document.documentElement.className),
	isIE8 = /ie8/.test(document.documentElement.className),
	isIE10 = /MSIE|10.0/.test(navigator.userAgent),
	replay = document.querySelector('.btn.replay');
var xxx = false;


// resize and show the blocks
window.addEventListener('load', resizeHandler, false);
window.addEventListener('load', showBlocks, false);
window.addEventListener('resize', resizeHandler, false);
replay.addEventListener('click', runOnClick, false);

function resizeHandler(e) {
	var css = window.getComputedStyle(b, null),
		bw = parseInt(css.width),
		i = 0;
	for (i; i < 9; i++) {
		bs[i].style.minHeight = bw + 'px';
		if (e.type === 'load') {
			bs[i].style.left = -bw + 'px';
		}
	}
}

function showBlocks() {
	var i = 0,
		dl, css = window.getComputedStyle(b),
		bw = parseInt(css.width),
		d = isIE || (/%/.test(css.width)) ? 300 : bw * 3,
		ra, fn;
	for (i; i < 9; i++) {
		if (i === 0 || i === 3 || i === 6) {
			dl = 200 + i * bw;
		} else if (i === 1 || i === 4 || i === 7) {
			dl = 400 + i * bw;
		} else if (i === 2 || i === 5 || i === 8) {
			dl = 600 + i * bw;
		}
		fn = i === 0 ? openTheAnimations : null;
		ra = i === 8 ? runAnimations : null;
		KUTE.to(bs[i], {
			opacity: 1,
			left: 0
		}, {
			duration: d,
			delay: dl,
			complete: ra,
			easing: 'easingQuadraticOut',
			start: fn
		}).start();
	}
}

function runOnClick() {
	if (!/animating/.test(block.className)) {
		runAnimations();
	}
}

function doBlockAnimations() {
	var i = 0;
	for (i; i < 9; i++) {
		var rd = getRandomInt(-300, 300),
			rs = getRandomInt(0.1, 5),
			sc = parseFloat(rs * 0.5),
			fn = i === 8 ? closeTheAnimations : null,
			t1 = KUTE.to(bs[i], {
				translate: rd
			}, {
				duration: 1500,
				easing: 'easingQuadraticInOut',
				delay: 1500
			}),
			t2 = KUTE.to(bs[i], {
				rotate: 720
			}, {
				duration: 1500,
				easing: 'easingQuadraticOut'
			}),
			t3 = KUTE.fromTo(bs[i], {
				translate: rd,
				borderRadius: '0%',
				scale: 1,
				rotate: 720
			}, {
				borderRadius: '100%',
				translate: rd,
				scale: rs,
				rotate: 0
			}, {
				duration: 1000,
				easing: 'easingQuadraticOut'
			}),
			t4 = KUTE.to(bs[i], {
				scale: sc
			}, {
				duration: 1000,
				easing: 'easingQuadraticIn'
			}),
			t5 = KUTE.fromTo(bs[i], {
				translate: rd,
				borderRadius: '100%',
				scale: sc
			}, {
				translate: 0,
				borderRadius: '0%',
				scale: 1
			}, {
				delay: 100,
				duration: 1500,
				easing: 'easingBounceOut'
			}),
			t6 = KUTE.to(bs[i], {
				backgroundColor: '#fff'
			}, {
				easing: 'easingCircularOut',
				delay: 550 + i * 50,
				duration: 450,
				yoyo: true,
				repeat: 1,
				complete: fn
			});


		t1.start();
		t1.chain(t2);
		t2.chain(t3);
		t3.chain(t4);
		t4.chain(t5);
		t5.chain(t6);
	}	
}

function openTheAnimations() {
	if (!/animating/.test(block.className)) {
		replay.style.display = 'none';
		block.className += ' animating';
	}
}

function closeTheAnimations() {
	if (/animating/.test(block.className)) {
		replay.style.display = 'inline';
		block.className = block.className.replace(' animating', '');
	}
}

function runAnimations() {
	var fn = !textOpened ? openText : null,
		t1 = KUTE.fromTo(block, {
			left: 0
		}, {
			left: 150
		}, {
			duration: 1000,
			easing: 'easingCubicIn',
			start: openTheAnimations
		}).start(),
		t2 = KUTE.fromTo(block, {
			left: 150
		}, {
			left: 0
		}, {
			duration: 2500,
			easing: 'easingElasticOut',
			start: openTheAnimations
		}),
		t3 = KUTE.fromTo(block, {
			rotateZ: 0,
			rotateY: -10
		}, {
			rotateZ: -20,
			rotateY: 25
		}, {
			duration: 2500,
			easing: 'easingQuadraticInOut'
		}).start(),
		t4 = KUTE.fromTo(block, {
			rotateZ: -20,
			rotateY: 385
		}, {
			rotateZ: 0,
			rotateY: -10
		}, {
			duration: 3500,
			delay: 3600,
			easing: 'easingQuadraticInOut',
			start: fn
		});

	t1.chain(t2);
	t3.chain(t4);
	doBlockAnimations();
}

function openText() {
	// textChars=numeric;
	var hd = KUTE.to(h2, {
			text: '欢迎！'
		}, {
			textChars: '帅的人才能看到',
			delay: 4500,
			duration: 2000,
			easing: 'easingCubicInOut'
		}).start(),
		ld = KUTE.to(lead, {
			text: '每到选课季节，朋友圈就会井喷如下文案:'
		}, {
			textChars: '帅的人才能看到',
			duration: 1500,
			easing: 'easingCubicInOut'
		}),

		ld2 = KUTE.to(lead2, {
			text: '“求问xx老师的xx课的考核形式？”'
		}, {
			textChars: '帅的人才能看到',
			duration: 1500,
			easing: 'easingCubicInOut'
		}),

		ld3 = KUTE.to(lead3, {
			text: '“有没有上过xx课的朋友，值得一听吗？”'
		}, {
			textChars: '帅的人才能看到',
			duration: 1500,
			easing: 'easingCubicInOut'
		}),

		ld4 = KUTE.to(lead4, {
			text: '“想选一门计算机的专业课，但会不会对文科生很不友好？”'
		}, {
			textChars: '帅的人才能看到',
			duration: 1500,
			easing: 'easingCubicInOut'
		}),

		ld5 = KUTE.to(lead5, {
			text: '“这门课居然有三个老师开，那哪个老师比较适合教科啊？”'
		}, {
			textChars: '帅的人才能看到',
			duration: 1500,
			easing: 'easingCubicInOut'
		}),

		ld6 = KUTE.to(lead6, {
			text: '......'
		}, {
			textChars: 'symbols',
			duration: 1500,
			easing: 'easingCubicInOut'
		});

	btnst = KUTE.allFromTo(btns, {
		rotate: 45,
		opacity: 0
	}, {
		rotate: 0,
		opacity: 1
	}, {
		transformOrigin: '250px center 0px',
		offset: 200,
		duration: 700,
		easing: 'easingCubicInOut'
	});
	hd.chain(ld);
	ld.chain(ld2);
	ld2.chain(ld3);
	ld3.chain(ld4);
	ld4.chain(ld5);
	ld5.chain(ld6);
	ld6.chain(btnst);
	textOpened = true;
	xxx = true;
}

var r1 = document.getElementById('ooo1'),
    ryTween1 = KUTE.to(r1, {
        rotateY: -180,
        scale: 1.5
    }, {
        perspective: 200,
        easing: 'easingCubicInOut',
        yoyo: true,
        repeat: 1,
        duration: 1500
	});	
function ooo1(){
	xxx && !ryTween1.playing && ryTween1.start();
}

var r2 = document.getElementById('ooo2'),
    ryTween2 = KUTE.to(r2, {
        rotateY: -180,
        scale: 1.5
    }, {
        perspective: 200,
        easing: 'easingCubicInOut',
        yoyo: true,
        repeat: 1,
        duration: 1500
	});	
function ooo2(){
	xxx && !ryTween2.playing && ryTween2.start();
}

var r3 = document.getElementById('ooo3'),
    ryTween3 = KUTE.to(r3, {
        rotateY: -180,
        scale: 1.5
    }, {
        perspective: 200,
        easing: 'easingCubicInOut',
        yoyo: true,
        repeat: 1,
        duration: 1500
	});
function ooo3(){
	xxx && !ryTween3.playing && ryTween3.start();
}

var r4 = document.getElementById('ooo4'),
    ryTween4 = KUTE.to(r4, {
        rotateY: -180,
        scale: 1.5
    }, {
        perspective: 200,
        easing: 'easingCubicInOut',
        yoyo: true,
        repeat: 1,
        duration: 1500
	});
function ooo4(){
	xxx && !ryTween4.playing && ryTween4.start();
}

var r5 = document.getElementById('ooo5'),
    ryTween5 = KUTE.to(r5, {
        rotateY: -180,
        scale: 1.5
    }, {
        perspective: 200,
        easing: 'easingCubicInOut',
        yoyo: true,
        repeat: 1,
        duration: 1500
	});
function ooo5(){
	xxx && !ryTween5.playing && ryTween5.start();
}

var r6 = document.getElementById('ooo6'),
    ryTween6 = KUTE.to(r6, {
        rotateY: -180,
        scale: 1.5
    }, {
        perspective: 200,
        easing: 'easingCubicInOut',
        yoyo: true,
        repeat: 1,
        duration: 1500
	});	
function ooo6(){
	xxx && !ryTween6.playing && ryTween6.start();
}

var r7 = document.getElementById('ooo7'),
    ryTween7 = KUTE.to(r7, {
        rotateY: -180,
        scale: 1.5
    }, {
        perspective: 200,
        easing: 'easingCubicInOut',
        yoyo: true,
        repeat: 1,
        duration: 1500
	});	
function ooo7(){
	xxx && !ryTween7.playing && ryTween7.start();
}

var r8 = document.getElementById('ooo8'),
    ryTween8 = KUTE.to(r8, {
        rotateY: -180,
        scale: 1.5
    }, {
        perspective: 200,
        easing: 'easingCubicInOut',
        yoyo: true,
        repeat: 1,
        duration: 1500
	});	
function ooo8(){
	xxx && !ryTween8.playing && ryTween8.start();
}

var r9 = document.getElementById('ooo9'),
    ryTween9 = KUTE.to(r9, {
        rotateY: -180,
        scale: 1.5
    }, {
        perspective: 200,
        easing: 'easingCubicInOut',
        yoyo: true,
        repeat: 1,
        duration: 1500
	});	
function ooo9(){
	xxx && !ryTween9.playing && ryTween9.start();
}