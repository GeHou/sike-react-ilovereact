// 当页面加载完毕时开始动画。
window.onload = function() {
	animateLogo();
 	animateRobot();
 	updateSliderControl();
 	addSmoothScrolling();
};

// 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {
 	updateSliderControl();
}

var animateLogo = function(){
	TweenMax.fromTo(".react-logo", 3, {
	    // from
	    css: {
	      y: "-20px",
	    }
	},{
	    // to
	    css: {
	      y: "20px",
	    },

	    // 永久重复动画的选项
	    repeat: -1,

	    // 反转、重新运行动画的选项
	    yoyo: true,

	    // 改变 easing 类型
	    ease: Power1.easeInOut,
	});
}

var animateRobot = function(){
	// 让动画一直执行
	var t = new TimelineMax({yoyo: true, repeat: -1});
	t.to('.android-robot', 0.5, {rotation: "-60deg"});
	t.to('.android-robot', 0.5, {rotation: "-45deg"});
}

var updateSliderControl = function(){
  // 获得所有的 slider 链接
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    // 获取被链接指向的部分
    var section = document.querySelector(link.getAttribute('href'));
    var sectionTop = section.offsetTop;
    var sectionBottom = section.offsetTop + section.offsetHeight;;

    // 检查 window.scrollY 是否在这部分中
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}

var scrollToElement = function(element) {
  var topOfElement = element.offsetTop;

  TweenMax.to(window,1,{
    scrollTo: {
      y: topOfElement,
    },

    ease: Power2.easeInOut,
  });
}

var addSmoothScrolling = function() {
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    link.addEventListener("click",function(event) {
      // `event` 是鼠标点击事件
      event.preventDefault();
      // BUG 警告！使用闭包或者 ES6 `let` 修复。
      var href = this.getAttribute('href');

      scrollToElement(document.querySelector(href));
    });
  }
}