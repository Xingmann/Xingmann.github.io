var anglea = 0;
interact('#circle').gesturable({
	onmove:function(event){
	var circle = document.getElementById('circle');
	anglea += event.da;
	circle.style.transform = 'rotate('+anglea+'deg) scale(' + scalea +') translate(' + x + 'px, ' + y + 'px)';
	}
});

var angleb = 0;
interact('#square').gesturable({
	onmove:function(event){
	var square = document.getElementById('square');
	angleb += event.da;
	square.style.transform = 'rotate('+angleb+'deg) scale(' + scaleb +') translate(' + x + 'px, ' + y + 'px)';
	}
});

var anglec = 0;
interact('#recA').gesturable({
	onmove:function(event){
	var recA = document.getElementById('recA');
	anglec += event.da;
	recA.style.transform = 'rotate('+anglec+'deg) scale(' + scalec +') translate(' + x + 'px, ' + y + 'px)';
	}
});

var angled = 0;
interact('#recB').gesturable({
	onmove:function(event){
	var recB = document.getElementById('recB');
	angled += event.da;
	recB.style.transform = 'rotate('+angled+'deg) scale(' + scaled +') translate(' + x + 'px, ' + y + 'px)';
	}
});

var anglee = 0;
interact('#oval').gesturable({
	onmove:function(event){
	var oval = document.getElementById('oval');
	anglee += event.da;
	oval.style.transform = 'rotate('+anglee+'deg) scale(' + scalee +') translate(' + x + 'px, ' + y + 'px)';
	}
});


var anglef = 0;
interact('#triA').gesturable({
	onmove:function(event){
	var triA = document.getElementById('triA');
	anglef += event.da;
	triA.style.transform = 'rotate('+anglef+'deg) scale(' + scalef +') translate(' + x + 'px, ' + y + 'px)';
	}
});

var angleg = 0;
interact('#triB').gesturable({
	onmove:function(event){
	var triB = document.getElementById('triB');
	angleg += event.da;
	triB.style.transform = 'rotate('+angleg+'deg) scale(' + scaleg +') translate(' + x + 'px, ' + y + 'px)';
	}
});

var angleh = 0;
interact('#trapezoid').gesturable({
	onmove:function(event){
	var trapezoid = document.getElementById('trapezoid');
	angleh += event.da;
	trapezoid.style.transform = 'rotate('+angleh+'deg) scale(' + scaleh +') translate(' + x + 'px, ' + y + 'px)';
	}
});

var anglei = 0;
interact('#para').gesturable({
	onmove:function(event){
	var para = document.getElementById('para');
	anglei += event.da;
	para.style.transform = 'rotate('+anglei+'deg) skew('+20+'deg) scale(' + scalei +') translate(' + x + 'px, ' + y + 'px)';
	}
});