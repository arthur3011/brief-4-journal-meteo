// Journal météorologique de la ferme — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { ajouterReleve, formaterReleve, listerReleves, trouverParId } from './src/registre.js';
import { SEUIL_JOUR_PLUVIEUX, joursPluvieux, trierParPluie, trierParTemperature, trouverParDate } from './src/recherche.js';
import { cumulPluie, moyenneTemperature, temperatureMinMax } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/releves.json';

async function main() {
  let releves = [];
  let choix = '';
  
  ouvrirSaisie();

  try {
    console.log("==================================================");
    console.log("   JOURNAL MÉTÉOROLOGIQUE DE LA FERME");
    console.log("   Suivi agroclimatique de la ferme pédagogique");
    console.log("==================================================");

    try {
      releves = await chargerJson(FICHIER_DONNEES);

      console.log(
        `${releves.length} relevé(s) chargé(s) depuis ${FICHIER_DONNEES}.`
      );
    } catch (erreur) {
      console.log(
        `Impossible de lire ${FICHIER_DONNEES} : ${erreur.message}. Le journal démarre vide.`)
      releves = [];}
    while (choix !== '0' && choix !== null) {
      console.log("--------------------- MENU ---------------------");
      console.log("1. Ajouter un relevé");
      console.log("2. Lister les relevés");
      console.log("3. Rechercher (identifiant, date, journées pluvieuses)");
      console.log("4. Trier (température, pluie)");
      console.log("5. Synthèse de la série");
      console.log("0. Quitter");

      choix = await demander("Votre choix : ")
      if (choix === null) {
        break;
      }

      try {
        switch (choix) {
          case '1':
           break;
          case '2':
           break;
          case '3':
            break;

          case '4':
           break;
          case '5':
           break;
          case '0':
            console.log("Au revoir !");
            break;          
            default:
            console.log(
              `Choix inconnu : « ${choix} ». Tapez un chiffre du menu.`
            )}
      } catch (erreur) {
        const message = erreur instanceof Error
          ? erreur.message
          : String(erreur);

        if (message.startsWith("TODO")) {
          console.log(`À compléter : ${message}`);
        } else {
          console.log(`Erreur inattendue : ${message}`);
        }
      }  
}
  } finally {
    fermerSaisie();
  }
}
main();
