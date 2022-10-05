# Projet Kasa

## Contexte
Développer la nouvelle plateforme web de Kasa. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

## Le site Kasa
Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. La CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. Kasa en a également profité pour commander de nouvelles maquettes.

## Objectif

Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma et toutes les infos.

Back-end / data : Le recrutement de la personne en charge du back-end n'est pas terminé et va prendre plus de temps que prévu. Extrait des20 dernières annonces de logements dans un fichier JSON pour construire le Front qui correspond. 

## Contraintes techniques

React :
Il est impératif d’utiliser ces éléments de React pour un code de qualité :
- Découpage en composants modulaires et réutilisables ;
- Un composant par fichier ;
- Structure logique des différents fichiers ;
- Utilisation des props entre les composants ;
- Utilisation du state dans les composants quand c'est nécessaire ;
- Gestion des événements ;
- Listes : React permet de faire des choses vraiment intéressantes avec
les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible.
Il est également recommandé, mais pas imposé, d’utiliser des composants fonctionnels plutôt que des composants classes.

React Router :
- Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
- Il existe une page par route.

## Contraintes fonctionnelles

Pour le défilement des photos dans la galerie (composant Gallery) :
- Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
- Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
- S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.
- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.

Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

 