# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — | M02 |
| date | date de relevé | Date | AAAA-MM-JJ | — | 2026-12-22 |
| températureC | Température de l'air | Nombre | Valeurs numériques | °C | 90 |
| pluieMm | Quantité de pluie | Nombre | Supérieur ou égal à 0 | mm | 15 |
| humiditéAirPct | Humidité relative | Nombre | Entre 0 et 100 | % | 26 |

**Listes de valeurs autorisées** : Similaires aux règles de validation
**Sources** : releves.json
