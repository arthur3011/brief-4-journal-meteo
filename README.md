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

- [ ] Données lues et enregistrées dans `donnees/releves.json`
- [ ] Ajouter un relevé, saisies invalides refusées sans arrêter le programme
- [ ] Lister les relevés, message si le journal est vide
- [ ] Rechercher par identifiant ou par date ; journées pluvieuses (au moins 10 mm)
- [ ] Trier par température ou par pluie
- [ ] Synthèse : température moyenne, minimale et maximale de la série, cumul de pluie, journées pluvieuses
- [ ] Bonus : supprimer et modifier un relevé (choix 6 et 7)
- [ ] Bonus : tri par température décroissante, journée la plus chaude

## Données

✏️ *Le fichier, le nombre de relevés, les champs (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), les unités. Rappelez qu'ils sont fictifs.*

## Limites

✏️ *Au moins trois. Par exemple : dix jours de relevés forment une courte série, ils ne décrivent pas le climat de la région.*

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

✏️ *Prénom NOM, compte GitHub. Entraide : avec qui, sur quoi.*
