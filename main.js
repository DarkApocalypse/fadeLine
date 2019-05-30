$(document).on("ready",function(){
	var fadeDuration = 400;				//Durée en millisecondes de l'animation
	var idleDuration = 1000;			//Durée en millisecondes du temps d'affichage
	var selectorParent = "table.hiddenLines";	//Sélecteur parent
	var selectorLine = "tbody > tr";		//Sélecteur pour les éléments à afficher
	$(document.body).append(
		"<"+"style>"+
		selectorParent + " > " + selectorLine + 
		"{display:none;}" +
		"<" + "/style>"
	);
	var parents = $(selectorParent);
	var f = function(parent){
		var ls = $(e).find(selectorLine);
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
		
	};
	for(var j=0; j < parents.length; j++){		//Gestion de multiples lots de lignes "cachables"
		var e = $(parents[j]);
		f(e);
	};
});
