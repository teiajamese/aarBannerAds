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

// Builds the Train
function generateTrain() {
	var $engine = '<div class="train-engine"><img src="_img/train_engine.png" alt=""></div>';

	$train.html($engine);
	for(var i = 0; i <= 10; i++) {
		$train.prepend($trainCar);
	}
};

// Drops the Stacked Crates and runs the rest of the animation
function stackTrain() {
	
	// Tunnel
		$tunnel.delay(400).stop().animate({
			'height': 128
		}, 250);



		$ttop.delay(400).stop().animate({
			'bottom': 30
		});

		$tbot.delay(400).stop().animate({
			'height': 75
		});
		
	console.log("Stack");
	stacked = true;
	var i = $train.find('.train-car').length;
	$('.train').find('.train-car').each(function() {
		var $ths = $(this);
		console.log("k");
		setTimeout(function() {
			$ths.find('.stack').stop().animate({
				'top': '25px'
			}, 250, 'linear');
		}, Number(i*100));
		i--;
	});
};

// Starts the train running
function startTrain(t) {
	console.log("Choo Choo!");
	t.stop().animate({
        	'left': '-1354px'
        },{
        	duration: 4000,
        	easing: 'linear',
        	complete: function(){
            	infiniteTrain(t);
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
		'left': '468px'
		
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
	setTimeout(stackTrain, 5000);
	setTimeout(runText, 5000);
})(jQuery);