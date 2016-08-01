//TweenMax.set(".content",{top:454});

var tl = new TimelineMax({repeat:0});
var maxTime = 15;

tl.from('div.train1 .rail',.5,{display:'none',width:'10px', left:'48.3%',bottom:13,ease: Power1.easeOut});
tl.from('div.train1 .train',2,{ display:'none',width:'2px', left:'49.6%',bottom:8,ease: Power1.easeOut});
tl.to('.content p',.4,{ opacity:0,display:'none'});
tl.from('.content p.two',.2,{display:'none',opacity:0});

tl.from('div.train2 .rail',.4,{display:'none',width:'10px', left:'80%',bottom:13,ease: Power1.easeOut});
tl.from('div.train2 .train',1.6, {display:'none', width:'2px', left:'79%',bottom:8,ease: Power1.easeOut});
tl.to('div.content p span',.2,{display:'block',opacity:1});

tl.from('div.train3 .rail',.4,{display:'none',width:'10px',bottom:13,left:'16%',ease: Power1.easeOut});
tl.from('div.train3 .train',1.6,{display:'none', width:'2px', left:'19%',bottom:8,ease: Power1.easeOut});

tl.to('.content p.two',.5,{ opacity:0,display:'none'});
tl.from('.content p.last',1,{display:'none',opacity:0});

tl.from('.cta',1,{display:'none',opacity:0});
TweenMax.delayedCall(maxTime,stop);

function stop(){
	tl.pause();
}