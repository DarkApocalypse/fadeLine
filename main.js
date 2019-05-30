$(document).on("ready",function(){
	var fadeDuration = 400;				//Durée en millisecondes de l'animation
	var idleDuration = 1000;			//Durée en millisecondes du temps d'affichage
	var ls = $("table.hiddenLines > tbody > tr");	//Sélecteur pour les éléments à afficher
	var i = -1, t = null;
	var show, hide;
	console.log("ls:",ls);
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
