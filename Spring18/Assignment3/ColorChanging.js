var a = document.querySelector('#circle');
	interact('#circle')
	.on('tap',function (event) {
 	var hue = parseInt(Math.random() * 357)
	var saturation = parseInt(Math.random() * 100) + "%";
	var lightness = parseInt(Math.random() * 100) + "%";
 	a.style.borderColor = "hsl("+hue+","+saturation+","+lightness+")";
 	});

 	var b = document.querySelector('#square');
	interact('#square')
	.on('tap',function (event) {
 	var hue = parseInt(Math.random() * 357)
	var saturation = parseInt(Math.random() * 100) + "%";
	var lightness = parseInt(Math.random() * 100) + "%";
 	b.style.borderColor = "hsl("+hue+","+saturation+","+lightness+")";
	});

 	var c = document.querySelector('#recA');
	interact('#recA')
	.on('tap',function (event) {
 	var hue = parseInt(Math.random() * 357)
	var saturation = parseInt(Math.random() * 100) + "%";
	var lightness = parseInt(Math.random() * 100) + "%";
 	c.style.backgroundColor = "hsl("+hue+","+saturation+","+lightness+")";
	});

 	var d = document.querySelector('#recB');
	interact('#recB')
	.on('tap',function (event) {
 	var hue = parseInt(Math.random() * 357)
	var saturation = parseInt(Math.random() * 100) + "%";
	var lightness = parseInt(Math.random() * 100) + "%";
 	d.style.backgroundColor = "hsl("+hue+","+saturation+","+lightness+")";
	});

	var e = document.querySelector('#oval');
	interact('#oval')
	.on('tap',function (event) {
 	var hue = parseInt(Math.random() * 357)
	var saturation = parseInt(Math.random() * 100) + "%";
	var lightness = parseInt(Math.random() * 100) + "%";
 	e.style.backgroundColor = "hsl("+hue+","+saturation+","+lightness+")";
	});

 	var f = document.querySelector('#triA');
	interact('#triA')
	.on('tap',function (event) {
 	var hue = parseInt(Math.random() * 357)
	var saturation = parseInt(Math.random() * 100) + "%";
	var lightness = parseInt(Math.random() * 100) + "%";
 	f.style.borderTopColor = f.style.borderRightColor = "hsl("+hue+","+saturation+","+lightness+")";
	});

 	var g = document.querySelector('#triB');
	interact('#triB')
	.on('tap',function (event) {
 	var hue = parseInt(Math.random() * 357)
	var saturation = parseInt(Math.random() * 100) + "%";
	var lightness = parseInt(Math.random() * 100) + "%";
 	g.style.borderBottomColor = "hsl("+hue+","+saturation+","+lightness+")";
	});	

 	var h = document.querySelector('#trapezoid');
	interact('#trapezoid')
	.on('tap',function (event) {
 	var hue = parseInt(Math.random() * 357)
	var saturation = parseInt(Math.random() * 100) + "%";
	var lightness = parseInt(Math.random() * 100) + "%";
 	h.style.borderBottomColor = "hsl("+hue+","+saturation+","+lightness+")";
	});

 	var i = document.querySelector('#para');
	interact('#para')
	.on('tap',function (event) {
 	var hue = parseInt(Math.random() * 357)
	var saturation = parseInt(Math.random() * 100) + "%";
	var lightness = parseInt(Math.random() * 100) + "%";
 	i.style.backgroundColor = "hsl("+hue+","+saturation+","+lightness+")";
	});