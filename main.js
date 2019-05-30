$(document).on("ready",function(){
	var fadeDuration = 400;
	var idleDuration = 1000;
	var ls = $(".hiddenLines span");
	var i = -1, t = null;
	var show, hide;
	show = function(){
		i = (i+1) % ls.length;
		$(ls[i]).fadeIn(fadeDuration);
		t = setTimeout(hide, idleDuration);
	};
	hide = function(){
		$(ls[i]).fadeOut(fadeDuration, show);
	};
	show();
});
