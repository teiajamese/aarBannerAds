//TweenMax.set(".content",{top:454});

var tl = new TimelineMax({repeat:0});
var maxTime = 15;


tl.staggerFrom('.bckgrd',.8,{opacity:0, display:'none', delay:1.4},.9);
tl.staggerFrom('.cta',.5,{opacity:0,display:'none',delay:1});

TweenMax.delayedCall(maxTime,stop);

function stop(){
	tl.pause();
}