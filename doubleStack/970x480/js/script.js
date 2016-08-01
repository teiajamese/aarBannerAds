var $wrap = $('.double-stack-banner-wrap'),
	$train = $('.train'),
	$trainCar = '<div class="train-car"><img src="_img/freight_stack.png" class="stack" alt=""><img src="_img/train_car.png" class="car" alt=""></div>';
	$intro = $('.intro'),
	$cta = $intro.find('.cta'),
	$arrow = $cta.find('.arrow'),
	$tunnel = $('.tunnel-wrap'),
	$ttop = $('.tunnel-top'),
	$tbot = $('.tunnel'),
	$answer = $('.answer'),
	$resolution = $('.resolution'),

	stacked = false,
	finished = false;

// Resizes the Banner on Mouseover
function scaleBanner() {

	$wrap.stop().animate({
			'height': '480px'
		}, 350);
		
	stackT = '353px';
		
	TweenMax.to('.train-wrap', .5, {scaleX:1.5, scaleY:1.5, top:0, left:0, width:760, height:'100%'})
	TweenMax.to('.train, .train-tracks, .tunnel-wrap', .5, {bottom:100})
	TweenMax.to('.expander', .2, {opacity:0, 'display':'none'})
	TweenMax.to('.closer', .2, {opacity:1, 'display':'block'})

	TweenMax.to('.intro, .answer', .5, {scaleX:1, scaleY:1, top:100})
	
	TweenMax.to('.resolution', .5, {scaleX:1, scaleY:1, top:100, 'marginLeft':0})
	$('.find-out').css({'display':'block','margin':'0 auto'});
	$('.freight-rail-works').css({'margin-top':50,'margin-left':20});
	
	$('.dropped').css({'top':stackT});
	
}

stackT = '353px';

// Resizes the Banner on Mouseleave
function scaleDown() {
	console.log('Scale Down');
	
	$wrap.stop().animate({
			'height': '60px'
		}, 350);
		
	stackT = '35px';
		
	TweenMax.to('.train-wrap', .5, {scaleX:.5, scaleY:.5, top:-9, left:-500, width:1950, height:'150%'})
	TweenMax.to('.train, .train-tracks, .tunnel-wrap', .5, {bottom:0})
	TweenMax.to('.closer', .2, {opacity:0, 'display':'none'})
	TweenMax.to('.expander', .2, {opacity:1, 'display':'block'})
	TweenMax.to('.train-car .car',.5,{bottom:'-18px'})
	TweenMax.to('.train-engine img',.5,{'marginBottom':'-6px'})

	TweenMax.to('.intro, .answer', .5, {scaleX:.6, scaleY:.6, top:-5})
	
	TweenMax.to('.resolution', .5, {scaleX:.7, scaleY:.7, top:5, 'marginLeft':-30})
	$('.find-out').css({'display':'inline-block','margin':0});
	$('.freight-rail-works').css({'margin-top':0,'margin-left':70});
	
	$('.dropped').css({'top':stackT});

};

// Builds the Train
function generateTrain() {
	var $engine = '<div class="train-engine"><img src="_img/train_engine.png" alt=""></div>';

	$train.html($engine);
	for(var i = 0; i <= 20; i++) {
		$train.prepend($trainCar);
	}
};

// Drops the Stacked Crates and runs the rest of the animation
function stackTrain() {
	
	$tunnel.delay(400).stop().animate({
			'height': 128
		}, 250);



		$ttop.delay(400).stop().animate({
			'bottom': 30
		});

		$tbot.delay(400).stop().animate({
			'height': 120
		});
		
		
	console.log("Stack");
	stacked = true;
	var i = $train.find('.train-car').length;
	$('.train').find('.train-car').each(function() {
		var $ths = $(this);
		console.log("k");
		setTimeout(function() {
			TweenMax.to($ths.find('.stack'), .25, {top:stackT, onCompleteParams:[$ths.find('.stack')], onComplete:function(trg){
				trg.addClass('dropped');
				trg.css({'top':stackT});
			}});
		}, Number(i*100));
		i--;
	});
};

// Starts the train running
function startTrain(t) {
	console.log("Choo Choo!");
	t.stop().animate({
        	'left': '1950px'
        },{
        	duration: 12000,
        	easing: 'linear',
        	complete: function(){
            	//infiniteTrain(t);
        	}
    	}
	);
};

// Loops the train until the animation finishes.
function infiniteTrain(t) {
	var $oldCar = $train.find('div:last-child');
	if($oldCar.hasClass('train-engine')) {
		$train.addClass('infinite');
		$oldCar.remove();
	} else {
		$oldCar.remove();
	};
	
	$train.prepend($trainCar);

	if(stacked === true) {
		$train.find('div:first-child').addClass('stacked');
	};
	// setup
	t.css({
		'left': '-1354px'
	}).stop().animate({
		'left': '-1250px'
	}, {
		duration: 600,
    	easing: 'linear',
    	complete: function(){
        	endTrain(t);
    	}
	});
	//console.log($oldCar);
};

//Ends train
function endTrain(t){
	
	t.css({
		'left': '-1354px'
	}).stop().animate({
		'left': '1850px'
		
	},{
		duration: 9020,
		easing: 'linear',
		complete: function(){
		finished = true;
		}
	});
};


// Intro Text
function startText() {
	var i = 0;

	$intro.find('p span').each(function() {
		
		var $o = $(this);
		i++;
		console.log(i);
		setTimeout(function() {
			
			$o.stop().animate({
				'opacity': 1
			},600);
		},Number(i*50));
	});
	setTimeout(function() {
		$cta.stop().animate({
			'opacity': 1
		}, 750)
	},1450);

	setTimeout(function() {
		$arrow.stop().animate({
			'opacity': 1
		}, 250);
	},1950);
};

// Remove Start Text, Run Rest of Animation

function runText() {
	$cta.stop().animate({
		'opacity': 0,
		'top': '20px'
	}, 400);

	setTimeout(function() {
		$intro.stop().animate({
			'opacity': 0
		});
	}, 760);
	var i = 0;
	setTimeout(function() {
		$answer.find('p span').each(function() {
		
			var $o = $(this);
			i++;
			console.log(i);
			setTimeout(function() {
				
				$o.stop().animate({
					'opacity': 1
				},600);
			},Number(i*50));
		});
	}, 1100);

	setTimeout(function() {
		i = 0;
		$answer.find('p span').each(function() {
		
			var $o = $(this);
			i++;
			console.log(i);
			setTimeout(function() {
				
				$o.stop().animate({
					'opacity': 0
				},300);
			},Number(i*50));
		});
	}, 5500);

	setTimeout(function() {
		endText();
	}, 6500);
};

function endText() {
	var $findout = $('.find-out'),
		$frw = $('.freight-rail-works');

	$findout.stop().animate({
		'opacity':1
	},500);

	$frw.delay(1000).stop().animate({
		'opacity':1
	},500, function() {
		finished = true;
	});
}







(function() {
	generateTrain();
	startTrain($train);
	setTimeout(startText, 2000);
	setTimeout(stackTrain, 4000);
	setTimeout(runText, 5000);
	
	$('.closer').click(function(){
		scaleDown();
	})
	$('.expander').click(function(){
		scaleBanner();
	})
	
})(jQuery);