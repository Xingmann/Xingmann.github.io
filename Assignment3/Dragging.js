interact('#circle').draggable({
  inertia: true,
  onmove:function (event) {
  var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px) rotate(' + anglea + 'deg) scale(' + scalea +')';
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
  }
});

interact('#square').draggable({
  inertia: true,
  onmove:function (event) {
  var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px) rotate(' + angleb + 'deg) scale(' + scaleb +') ';
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
  }
});

// interact('#recA').draggable({
//   inertia: true,
//   onmove:function (event) {
//   var target = event.target,
//       x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
//       y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
//   target.style.transform =
//     'translate(' + x + 'px, ' + y + 'px) rotate(' + anglec + 'deg)';
//   target.setAttribute('data-x', x);
//   target.setAttribute('data-y', y);
//   }
// });

// interact('#recB').draggable({
//   inertia: true,
//   onmove:function (event) {
//   var target = event.target,
//       x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
//       y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
//   target.style.transform =
//     'translate(' + x + 'px, ' + y + 'px) rotate(' + angled + 'deg)';
//   target.setAttribute('data-x', x);
//   target.setAttribute('data-y', y);
//   }
// });

interact('#oval').draggable({
  inertia: true,
  onmove:function (event) {
  var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px) rotate(' + anglee + 'deg) scale(' + scalee +')';
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
  }
});

interact('#triA').draggable({
  inertia: true,
  onmove:function (event) {
  var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px) rotate(' + anglef + 'deg) scale(' + scalef +')';
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
  }
});

interact('#triB').draggable({
  inertia: true,
  onmove:function (event) {
  var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px) rotate(' + angleg + 'deg) scale(' + scaleg +')';
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
  }
});

interact('#trapezoid').draggable({
  inertia: true,
  onmove:function (event) {
  var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px) rotate(' + angleh + 'deg) scale(' + scaleh +')';
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
  }
});

interact('#para').draggable({
  inertia: true,
  onmove:function (event) {
  var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px) rotate(' + anglei + 'deg) skew('+20+'deg) scale(' + scalei +')';
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
  }
});