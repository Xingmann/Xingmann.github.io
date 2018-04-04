var scalea = 1;
var a = document.querySelector('#circle');
var interval;
	a.addEventListener('touchstart', function(){
		interval = setInterval(function(){
		scalea = scalea + 0.1;
		if(scalea >= 2){
			scalea = 2;
		}
		a.style.transform = 'scale(' + scalea +') rotate(' + anglea + 'deg)';
	},400);
	})
	a.addEventListener('touchend', function(){
		clearInterval(interval);
	});

var scaleb = 1;
var b = document.querySelector('#square');
var interval;
	b.addEventListener('touchstart', function(){
		interval = setInterval(function(){
		scaleb = scaleb + 0.1;
		if(scaleb >= 2){
			scaleb = 2;
		}
		b.style.transform = 'scale(' + scaleb +') rotate(' + angleb + 'deg)';
	},400);
	})
	b.addEventListener('touchend', function(){
		clearInterval(interval);
	});	

// var scalec = 1;
// var c = document.querySelector('#recA');
// var interval;
// 	c.addEventListener('touchstart', function(){
// 		interval = setInterval(function(){
// 		scalec = scalec + 0.1;
// 		if(scalec >= 3){
// 			scalec = 3;
// 		}
// 		c.style.transform = 'scale(' + scalec +') rotate(' + anglegc + 'deg)';
// 	},400);
// 	})
// 	c.addEventListener('touchend', function(){
// 		clearInterval(interval);
// 	});

// var scaled = 1;
// var d = document.querySelector('#recB');
// var interval;
// 	d.addEventListener('touchstart', function(){
// 		interval = setInterval(function(){
// 		scaled = scaled + 0.1;
// 		if(scaled >= 3){
// 			scaled = 3;
// 		}
// 		d.style.transform = 'scale(' + scaled +') rotate(' + angled + 'deg)';
// 	},400);
// 	})
// 	d.addEventListener('touchend', function(){
// 		clearInterval(interval);
// 	});

var scalee = 1;
var e = document.querySelector('#oval');
var interval;
	e.addEventListener('touchstart', function(){
		interval = setInterval(function(){
		scalee = scalee + 0.1;
		if(scalee >= 2){
			scalee = 2;
		}
		e.style.transform = 'scale(' + scalee +') rotate(' + anglee + 'deg)';
	},400);
	})
	e.addEventListener('touchend', function(){
		clearInterval(interval);
	});

var scalef = 1;
var f = document.querySelector('#triA');
var interval;
	f.addEventListener('touchstart', function(){
		interval = setInterval(function(){
		scalef = scalef + 0.1;
		if(scalef >= 2){
			scalef = 2;
		}
		f.style.transform = 'scale(' + scalef +') rotate(' + anglef + 'deg)';
	},400);
	})
	f.addEventListener('touchend', function(){
		clearInterval(interval);
	});

var scaleg = 1;
var g = document.querySelector('#triB');
var interval;
	g.addEventListener('touchstart', function(){
		interval = setInterval(function(){
		scaleg = scaleg + 0.1;
		if(scaleg >= 2){
			scaleg = 2;
		}
		g.style.transform = 'scale(' + scaleg +') rotate(' + angleg + 'deg)';
	},400);
	})
	g.addEventListener('touchend', function(){
		clearInterval(interval);
	});

var scaleh = 1;
var h = document.querySelector('#trapezoid');
var interval;
	h.addEventListener('touchstart', function(){
		interval = setInterval(function(){
		scaleh = scaleh + 0.1;
		if(scaleh >= 2){
			scaleh = 2;
		}
		h.style.transform = 'scale(' + scaleh +') rotate(' + angleh + 'deg)';
	},400);
	})
	h.addEventListener('touchend', function(){
		clearInterval(interval);
	});

var scalei = 1;
var i = document.querySelector('#para');
var interval;
	i.addEventListener('touchstart', function(){
		interval = setInterval(function(){
		scalei = scalei + 0.1;
		if(scalei >= 2){
			scalei = 2;
		}
		i.style.transform = 'scale(' + scalei +') skew('+20+'deg) rotate(' + anglei + 'deg)';
	},400);
	})
	i.addEventListener('touchend', function(){
		clearInterval(interval);
	});