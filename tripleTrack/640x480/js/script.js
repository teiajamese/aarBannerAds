//TweenMax.set(".content",{top:454});

var tl = new TimelineMax({repeat:0});
var maxTime = 15;

tl.addLabel("Start", "+=1");
tl.from('div.train1 .rail',.4,{display:'none',width:'10px', left:'48.3%',bottom:13,ease: Power1.easeOut});
tl.from('div.train1 .train',1.6,{ display:'none',width:'2px', left:'48.6%',bottom:13,ease: Power1.easeOut});
tl.to('.content p',.4,{ delay:1,opacity:0,display:'none'});
tl.from('.content p.two',.2,{display:'none',opacity:0});

tl.from('div.train2 .rail',.4,{display:'none',width:'10px', left:'79.3%',bottom:13,ease: Power1.easeOut},"Start+=1.7");
tl.from('div.train2 .train',1.6, {display:'none', width:'2px', left:'79%',bottom:13,ease: Power1.easeOut},"Start+=2");
tl.to('div.content p span',.3,{delay:.5,display:'block',opacity:1});

tl.from('div.train3 .rail',.4,{display:'none',width:'10px',bottom:13,left:'130px',ease: Power1.easeOut},"Start+=3.7");
tl.from('div.train3 .train',1.6,{display:'none', width:'2px', left:'120px',bottom:13,ease: Power1.easeOut},"Start+=4");

tl.to('.content p.two',.5,{ delay:.5,opacity:0,display:'none'});
tl.from('.content p.last',1,{display:'none',opacity:0});

tl.from('.cta',1,{delay:1,display:'none',opacity:0});
TweenMax.delayedCall(maxTime,stop);

function stop(){
	tl.pause();
}