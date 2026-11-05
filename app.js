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

// Affiche une liste de relevés
function afficherReleves(releves) {
  console.log(listerReleves(releves));
}

// Fonction principale
async function main() {
  let releves = [];
  let choix = null;

  // Ouverture de la saisie
  ouvrirSaisie();

  try {
    // Accueil
    console.log("==================================================");
    console.log("  JOURNAL MÉTÉOROLOGIQUE DE LA FERME");
    console.log("  Suivi agroclimatique de la ferme pédagogique");
    console.log("==================================================");

    // Chargement des données
    try {
      releves = await chargerJson(FICHIER_DONNEES);

      console.log(
        `${releves.length} relevé(s) chargé(s) depuis ${FICHIER_DONNEES}.`
      );
    } catch (erreur) {
      console.log(
        `Impossible de lire ${FICHIER_DONNEES} : ${erreur.message}. Le journal démarre vide.`
      );

      releves = [];
    }

    // Boucle du menu
    while (choix !== '0' && choix !== null) {
      console.log("--------------------- MENU ---------------------");
      console.log("1. Ajouter un relevé");
      console.log("2. Lister les relevés");
      console.log("3. Rechercher (identifiant, date, journées pluvieuses)");
      console.log("4. Trier (température, pluie)");
      console.log("5. Synthèse de la série");
      console.log("0. Quitter");

      choix = await demander("Votre choix : ");

      // Ctrl+C ou fin de saisie
      if (choix === null) {
        break;
      }

      try {
        switch (choix) {
          // Ajouter un relevé
          case '1': {
            const id = await demander("Identifiant : ");
            if (id === null) {
              choix = null;
              break;
            }

            const date = await demander("Date (AAAA-MM-JJ) : ");
            if (date === null) {
              choix = null;
              break;
            }

            const temperatureC = await demander("Température (°C) : ");
            if (temperatureC === null) {
              choix = null;
              break;
            }

            const pluieMm = await demander("Pluie (mm) : ");
            if (pluieMm === null) {
              choix = null;
              break;
            }

            const humiditeAirPct = await demander("Humidité de l'air (%) : ");
            if (humiditeAirPct === null) {
              choix = null;
              break;
            }

            const saisie = {
              id,
              date,
              temperatureC,
              pluieMm,
              humiditeAirPct
            };

            const erreurs = ajouterReleve(releves, saisie);

            if (erreurs.length > 0) {
              erreurs.forEach(erreur => console.log(erreur));
            } else {
              await enregistrerJson(FICHIER_DONNEES, releves);
              console.log("Relevé ajouté et enregistré.");
            }

            break;
          }

          // Lister les relevés
          case '2':
            afficherReleves(releves);
            break;

          // Rechercher
          case '3': {
            console.log("1. Rechercher par identifiant");
            console.log("2. Rechercher par date");
            console.log("3. Afficher les journées pluvieuses");

            const recherche = await demander("Votre choix : ");
            if (recherche === null) {
              choix = null;
              break;
            }

            if (recherche === '1') {
              const id = await demander("Identifiant : ");
              if (id === null) {
                choix = null;
                break;
              }

              const releve = trouverParId(releves, id);

              if (releve) {
                console.log(formaterReleve(releve));
              } else {
                console.log("Aucun relevé trouvé.");
              }

            } else if (recherche === '2') {
              const date = await demander("Date (AAAA-MM-JJ) : ");
              if (date === null) {
                choix = null;
                break;
              }

              const releve = trouverParDate(releves, date);

              if (releve) {
                console.log(formaterReleve(releve));
              } else {
                console.log("Aucun relevé trouvé.");
              }

            } else if (recherche === '3') {
              const resultat = joursPluvieux(
                releves,
                SEUIL_JOUR_PLUVIEUX
              );

              console.log(
                `Journées pluvieuses (seuil : ${SEUIL_JOUR_PLUVIEUX} mm) :`
              );
              afficherReleves(resultat);

            } else {
              console.log(
                `Choix inconnu : « ${recherche} ». Tapez un chiffre du menu.`
              );
            }

            break;
          }

          // Trier
          case '4': {
            console.log("1. Trier par température");
            console.log("2. Trier par pluie");

            const tri = await demander("Votre choix : ");
            if (tri === null) {
              choix = null;
              break;
            }

            if (tri === '1') {
              afficherReleves(trierParTemperature(releves));
            } else if (tri === '2') {
              afficherReleves(trierParPluie(releves));
            } else {
              console.log(
                `Choix inconnu : « ${tri} ». Tapez un chiffre du menu.`
              );
            }

            break;
          }

          // Synthèse
          case '5': {
            if (releves.length === 0) {
              console.log("Aucun relevé enregistré.");
              break;
            }

            const moyenne = moyenneTemperature(releves);
            const cumul = cumulPluie(releves);
            const extremes = temperatureMinMax(releves);

            console.log("----- SYNTHÈSE DE LA SÉRIE -----");
            console.log(`Nombre de relevés : ${releves.length}`);
            console.log(`Température moyenne : ${moyenne} °C`);
            console.log(`Cumul des pluies : ${cumul} mm`);
            console.log(`Température minimale : ${extremes.min} °C`);
            console.log(`Température maximale : ${extremes.max} °C`);

            break;
          }

          // Quitter
          case '0':
            console.log("Au revoir !");
            break;

          // Choix inconnu
          default:
            console.log(
              `Choix inconnu : « ${choix} ». Tapez un chiffre du menu.`
            );
        }

      } catch (erreur) {
        if (erreur.message.startsWith("TODO")) {
          console.log(`À compléter : ${erreur.message}`);
        } else {
          console.log(`Erreur inattendue : ${erreur.message}`);
        }
      }
    }

  } finally {
    fermerSaisie();
  }
}


main();
