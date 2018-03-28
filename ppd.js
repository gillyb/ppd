(function() {
	var walls = document.querySelectorAll('div, span');
	for (var i=0, max=walls.length; i<max; i++) {
		var style = window.getComputedStyle(walls[i]);
		if (style.position === 'fixed' && parseInt(style.width) > 200 && parseInt(style.height) > 200) {
			walls[i].setAttribute('style', 'display: none!important');
		}
	}
  
	var body = document.getElementsByTagName('body')[0];
	body.setAttribute('style', body.getAttribute('style') + '; overflow: auto!important');
})();
