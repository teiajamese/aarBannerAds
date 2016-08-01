// door animations
TweenMax.to('.door', .75, {transformOrigin: 'left 50%', rotationY: 90, skewY: 10, delay: 3});

// train animation
// TweenMax.to('.train', 1.5, {width: 500, scale: 3, top: 70, delay: 3, force3D:false});
// TweenMax.to('.train', 1, {scale: 2.8, delay: 5, force3D:false});
TweenMax.to('.train', 1.5, {width: 500, scale: 3.5, top: -15, delay: 4, force3D:false});

// house animation
TweenMax.set('.house', {backgroundSize: '100% 100%'});
TweenMax.to('.house', 1.5, {backgroundSize: '+=200% +=200%', delay: 4});

// content animation
TweenMax.to('.content', 1, {opacity: 1, delay: 5.5});