//TweenMax.set(".content",{top:454});

var tl = new TimelineMax({repeat:0});
//var maxTime = 15;

tl.from('div.train1 .rail',.5,{width:'10px', left:'68%',bottom:13,ease: Power1.easeOut});
tl.from('div.train1 .train',2,{width:'15px', left:'66%',bottom:10,ease: Power1.easeOut});

function more(){
var maxTime = 15;
	tl.to('.ad',.5,{width:'450px'});
	tl.to('div.train1 .rail',.5,{delay:-.5,left:'14%'});
	tl.to('div.arrow',.5,{delay:-.5,display:'none', opacity:0});

	tl.to('.content p',.4,{ opacity:0,display:'none'});
	tl.to('.content p.two',.2,{display:'block',opacity:1});

	tl.to('div.train2 .rail',.2,{display:'block'});
	tl.from('div.train2 .rail',.4,{width:'10px', left:'27%',bottom:13,ease: Power1.easeOut});

	tl.to('div.train2 .train',.2,{delay:-.4,display:'block'});
	tl.from('div.train2 .train',1.6, {width:'15px', left:'27.7%',bottom:10,ease: Power1.easeOut});

	tl.to('.ad',.5,{width:'600px'});
	tl.to('div.train1 .rail',.5,{delay:-.5,left:'33%'});
	tl.to('div.train1 .train',.5,{delay:-.5,left:'58%'});
	tl.to('div.train2 .rail',.5,{delay:-.5,left:'9%'});
	tl.to('div.train2 .train',.5,{delay:-.5,left:'33%'});

	tl.to('.content p.two',.2,{display:'none',opacity:0});
	tl.to('div.content p.third',.2,{display:'block',opacity:1});

	tl.to('div.train3 .rail',.2,{display:'block'});
	tl.from('div.train3 .rail',.4,{width:'10px',bottom:13,left:'16%',ease: Power1.easeOut});
	tl.to('div.train3 .train',.2,{delay:-.4,display:'block'});
	tl.from('div.train3 .train',1.6,{width:'15px', left:'17.7%',bottom:10,ease: Power1.easeOut});

	tl.to('.ad',.5,{delay:.8,width:'298px'});
	tl.to('div.train1 .rail',.5,{delay:-.5,left:'37%', width:'180px'});
	tl.to('div.train1 .train',.5,{delay:-.5,left:'66%', width:'79px'});
	tl.to('div.train2 .rail',.5,{delay:-.5,left:'9%',width:'180px'});
	tl.to('div.train2 .train',.5,{delay:-.5,left:'37%',width:'79px'});
	tl.to('div.train3 .rail',.5,{delay:-.5,left:'-20%',width:'180px'});
	tl.to('div.train3 .train',.5,{delay:-.5,left:'8%',width:'79px'});

	tl.to('.content p.third',.5,{ delay:-.5,opacity:0,display:'none'});
	tl.to('.content p.last',1,{display:'block',opacity:1});

	tl.to('.cta',1,{display:'block',opacity:1});

	function stop(){
	tl.pause();
}
}

$('.ad').one('mouseenter',more);

TweenMax.delayedCall(maxTime,stop);

