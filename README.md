# Edu Flow Academy — Plateforme de test de positionnement

## Structure

- `index.html` — Page d'accueil / connexion. L'élève saisit son nom, son âge
  et choisit la langue (Français / English), puis est redirigé automatiquement :
  - **14 ans ou moins** → test **Junior** (30 à 42 questions, ~20-35 min)
  - **15 ans et plus** → test **Complet** (100 questions, ~45 min)
- `test-fr-junior.html` — Test français, version Junior (30 questions)
- `test-fr-full.html` — Test français, version complète (100 questions, A1 à B1)
- `test-en-junior.html` — Test anglais, version Junior (42 questions)
- `test-en-full.html` — Test anglais, version complète (100 questions, A1 à B1)
- `archive.html` — Tableau de bord des résultats archivés (recherche, tri,
  export CSV, effacement)

Les 4 tests évaluent les mêmes compétences (compréhension écrite, compréhension
orale, grammaire/vocabulaire, expression orale) et enregistrent automatiquement
le résultat dans l'archive partagée à la fin.

## ⚠️ Important : hébergement requis

Pour que la connexion automatique (le nom/âge saisis sur `index.html` soient
transmis au test) et l'archivage des résultats fonctionnent, **ces 6 fichiers
doivent être ouverts depuis un vrai serveur web (http/https)**, tous dans le
même dossier — pas simplement ouverts en double-cliquant depuis l'explorateur
de fichiers (`file://`). La plupart des navigateurs isolent chaque fichier
local, ce qui empêche le partage des données entre les pages.

Solutions simples :
- Héberger le dossier sur le site existant de l'académie (n'importe quel
  hébergement statique : cPanel, Netlify, Vercel, GitHub Pages, etc.)
- Ou, pour tester en local, lancer un petit serveur, par exemple :
  `python3 -m http.server 8000` puis ouvrir `http://localhost:8000/index.html`
  (si Python n'est pas installé, n'importe quel serveur statique équivalent
  fonctionne aussi, par ex. l'extension VS Code "Live Server", ou
  `npx serve .`)

## Archivage des résultats

Chaque test enregistre automatiquement, à la fin, un résumé du résultat
(nom, âge, langue, type de test, niveau, score, date) dans le stockage local
du navigateur (`localStorage`). Ces données restent **sur l'appareil/le
navigateur utilisé** — elles ne sont pas envoyées à un serveur externe.
Pour un archivage centralisé (tous les postes, toutes les salles), il faudra
brancher un vrai backend (base de données) plus tard — le format des
enregistrements est déjà prêt pour ça (voir la fonction
`pushToEduFlowArchive` dans chaque fichier de test).

## Personnalisation

Le logo réel de l'académie est déjà intégré (repris de vos fichiers
existants) dans `index.html`, `archive.html` et les 4 tests.
