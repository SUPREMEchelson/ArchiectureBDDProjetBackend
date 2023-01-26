##############################
README
##############################

"# ArchitectureBDDProjet" 
projet réalisé par Chelson Supreme, Karima Barbich et Matthias Deschatrettes

##########
INTRO
##########

L'objectif de notre projet est de comparer les performances des joueurs de foot avec leur salaire.
Nous avons opté pour une API en live qui met les statistisuqe des footballeurs à jour après chaque match.
Cela nous permet de suivre l'évolution des performances des footballeurs tout au long d'une saison.
Notre deuxième source de donnée est un fichier csv qui contient le salaire annuel des joueurs de la première ligue anglaise.
Le recoupement des données se fait sur le nom des sportifs afin d'afficher leur âge, leur nombre de buts, leur nombre de minutes jouées ainsi que leur salaire.
Nous voulons vérifier si les joueurs les mieux payés sont ceux qui ont les meilleurs statitisques.
Est-ce que les stars des équipes de "première league" contribuent le plus à la victoire de leur équipe ?

##########
TECHNOLOGIES UTILISEES
##########

NodeJS / 
MongoDB

##########
NOS DONNEES
##########

1 - Un CSV contenant 513 lignes et 8colonnes. Le nom des colonnes sont "Id", "Joueur", "Nation", "Pos", "Equipe", "Âge" , "salaires hebdomadaires " et "Salaires annuels".
2 - L'API Football data.org qui permet de récupérer en live les stats, joueurs , matches et des infos sur des différents compétions de foot.
ce sont des données privées et c'est pour cela on créé un compte pour obtenir le token pour avoir accès à ces données.

##########
COMMENT FAIRE FONCTIONNER NOTRE PROJET

Pour lancer le projet il faut cloner notre repertoire github avec la commande git clone
ensuite il faut installer node js et express

pour lancer l'application il faut lancer le app.js 
##########
*Creation de base mongodb 

pour inserer les données dans notre base de données, il fallait importer les librairies pymongo, json, csv ,http et requests sur python.
ensuite on a créé une base de données et un Cluster qu'on a nommé "myTask" et "buteur".

*Insertion données :
pour insérer les données avec l'API on a rajouté le body et les headers contenant le token et la requête pour etablir la connexion
nous avons aussi rajouter un filtre pour récuperer que les données des meilleurs buteurs de la premiere league en 2022.
ensuit on a inséré notre fichier csv 








XXX

##########
NOS CONCLUSIONS
##########

XXX

##############################
FIN
##############################
