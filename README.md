# Journal météorologique de la ferme

> Projet individuel du SAS DFS, brief 4 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

Le journal météorologique de la ferme est un outil destiné aux agriculteurs et aux responsables d'exploitation agricole pour suivre les conditions météorologiques de leurs parcelles. Il permet d'enregistrer, de consulter et d'analyser les relevés quotidiens de température, de pluviométrie et d'humidité afin de faciliter la prise de décisions agricoles. Il contribue notamment à adapter les pratiques culturales aux conditions climatiques observées. Toutefois, cet outil ne permet pas de prévoir avec certitude les conditions météorologiques futures ni de déterminer à lui seul les besoins en eau ou les rendements des cultures.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-4-journal-meteo.git
cd brief-4-journal-meteo
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [x] Données lues et enregistrées dans `donnees/releves.json`
- [x] Ajouter un relevé, saisies invalides refusées sans arrêter le programme
- [x] Lister les relevés, message si le journal est vide
- [x] Rechercher par identifiant ou par date ; journées pluvieuses (au moins 10 mm)
- [x] Trier par température ou par pluie
- [x] Synthèse : température moyenne, minimale et maximale de la série, cumul de pluie, journées pluvieuses
- [ ] Bonus : supprimer et modifier un relevé (choix 6 et 7)
- [ ] Bonus : tri par température décroissante, journée la plus chaude

## Données

Les données sont stockées dans un fichier JSON contenant 10 relevés météorologiques fictifs couvrant la période du 15 au 24 octobre 2026. Chaque relevé comprend un identifiant, une date, la température en degrés Celsius (°C), la quantité de pluie en millimètres (mm) et l'humidité relative de l'air en pourcentage (%). La description détaillée des champs est disponible dans le fichier [docs/dictionnaire-donnees.md].

## Limites

Les données sont fictives et ne représentent pas des observations météorologiques réelles. La période de dix jours est trop courte pour caractériser le climat de la région ou identifier des tendances météorologiques durables. Les relevés ne permettent pas de tirer des conclusions sur les conditions météorologiques d'autres périodes ou zones géographiques.

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

Irié Bi Botty Fiacre Arthur, arthur3011. 
Entraide : Koné Pagadjoufougou Abdoulaye (Explications sur le menu app.js), KOUAME K Florent (Explications sur les comparateurs numériques et la copie de relevées dans recherche.js), Anoh Levi (Explications sur le menu et les choix dans app.js), Fakayode Abdul (Explications sur les regles d'erreur dans registre.js)
