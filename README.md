# fadeLine
Affiche une à une des lignes sur forum actif.

Le BBCode par défaut pour que ça fonctionne est:

[table class="hiddenLines"]
[tr style=][td]ligne 1[/td]
[/tr]

[tr style=][td]ligne 2[/td]
[/tr]

[tr style=][td]ligne 3[/td]
[/tr]

[tr style=][td]ligne 4[/td]
[/tr]

[tr style=][td]ligne 5[/td]
[/tr]
[/table]

Le fonctionnement est le suivant:
1)Il ajoute du style pour cacher par défaut les lignes
2)Il récupère la liste de lots de tableau avec la classe hiddenLines
3)Pour chaque tableau, il génère la liste des lignes à cacher
4)Il crée les fonctions d'affichage et de disparition
5)Il enclenche la suite d'affichage/disparition
