// Ajouter et lister les relevés.
// Fiche : fiches/3-ajouter-lister.md · Vérifier : npm run test:registre
import { estDateValide, versNombre } from './outils.js';

// Renvoie une ligne de texte qui décrit le relevé.
// Exemples : 'M08 | 2026-10-22 | 26 °C | 15 mm | air 85 %'
//            'M11 | 2026-10-25 | 27.5 °C | 4 mm | air 79 %' (JavaScript affiche un point décimal,
//            même si la virgule est acceptée à la saisie)
export function formaterReleve(releve) {
<<<<<<< HEAD
  return `${releve.id} | ${releve.date} | ${releve.temperatureC} °C | ${releve.pluieMm} mm | air ${releve.humiditeAirPct} %`
};
=======
  return `${releve.id} | ${releve.date} | ${releve.temperatureC} °C | ${releve.pluieMm} mm | air ${releve.humiditeAirPct} %`;
}
>>>>>>> 28b827cccfa0da6ddbcdb38922e01ad83f21aabc

// Renvoie un texte avec un relevé par ligne (lignes séparées par '\n'),
// ou 'Aucun relevé enregistré.' si la liste est vide.
export function listerReleves(releves) {
  if (releves.length === 0) {
  return "Aucun relevé enregistré.";
}
return releves.map(formaterReleve).join("\n");
}

// Renvoie le relevé qui a cet identifiant, ou undefined s'il n'existe pas.
export function trouverParId(releves, id) {
  return releves.find((releve) => releve.id === id)
}

// Contrôle une saisie AVANT de l'ajouter. Tous les champs arrivent sous forme de TEXTE :
// { id: 'M11', date: '2026-10-25', temperatureC: '27,5', pluieMm: '4', humiditeAirPct: '79' }
// Renvoie un tableau de messages d'erreur ; un tableau vide signifie « saisie valide ».
// Règles : id obligatoire et unique · date réelle au format AAAA-MM-JJ · temperatureC nombre
// (négatif ou décimal accepté) · pluieMm nombre positif ou nul · humiditeAirPct nombre entre 0 et 100.
// Un message par règle non respectée ; n'ajoutez aucune autre règle. Le journal reçu n'est pas modifié.
export function verifierReleve(saisie, releves) {
   const erreurs = [];
   if (!saisie.id || releves.some(r => r.id === saisie.id)) {
    erreurs.push("Identifiant invalide ou déjà utilisé");
  }

  if (!estDateValide(saisie.date)) {
    erreurs.push("Date invalide");
  }

  const temperature = versNombre(saisie.temperatureC);
  if (Number.isNaN(temperature)) {
    erreurs.push("Température invalide");
  }

  const pluie = versNombre(saisie.pluieMm);
  if (Number.isNaN(pluie) || pluie < 0) {
    erreurs.push("Quantité de pluie invalide");
  }

  const humidite = versNombre(saisie.humiditeAirPct);
  if (Number.isNaN(humidite) || humidite < 0 || humidite > 100) {
    erreurs.push("Humidité invalide");
  }

  return erreurs;
}

// Fabrique le relevé à enregistrer à partir d'une saisie VALIDE : les trois mesures deviennent des nombres.
export function creerReleve(saisie) {
  return {
    id : saisie.id,
    date : saisie.date,
<<<<<<< HEAD
    temperatureC : Number(saisie.temperatureC.replace("," , ".")),
    pluieMm: Number(saisie.pluieMm.replace(",", ".")),
    humiditeAirPct: Number(saisie.humiditeAirPct.replace(",", "."))
=======
    temperatureC : versNombre(saisie.temperatureC),
    pluieMm: versNombre(saisie.pluieMm),
    humiditeAirPct: versNombre(saisie.humiditeAirPct)
>>>>>>> 28b827cccfa0da6ddbcdb38922e01ad83f21aabc
  }
}

// Ajoute la saisie au journal si elle est valide (verifierReleve, puis creerReleve).
// Renvoie les erreurs : [] si le relevé a été ajouté ; sinon les messages, et rien n'est ajouté.
export function ajouterReleve(releves, saisie) {
  const erreurs = verifierReleve(saisie, releves);
  if (erreurs.length > 0) {
    return erreurs ;
  }
<<<<<<< HEAD
  const nouveauReleve = creerReleve (saisie);
=======
  const nouveauReleve = creerReleve(saisie);
>>>>>>> 28b827cccfa0da6ddbcdb38922e01ad83f21aabc
  releves.push (nouveauReleve);
  return [];
}