# 🚀 Guide de configuration rapide

Ce guide vous accompagne pas à pas pour déployer votre site de maison de santé.

## 📋 Prérequis

- ✅ Compte GitHub
- ✅ Un Google Sheet avec les informations des praticiens
- ✅ Node.js 20+ installé (pour tester en local)

## 🎯 Étapes de déploiement

### 1. Créer votre repository GitHub

1. Créez un nouveau repository sur GitHub
2. Nom suggéré : `msp-site` ou `maison-sante`
3. Laissez-le vide (pas de README initial)

### 2. Pousser le code

```bash
# Dans le dossier du projet
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
git branch -M main
git push -u origin main
```

### 3. Configurer Astro pour votre site

Éditez `astro.config.mjs` :

```javascript
export default defineConfig({
  site: 'https://VOTRE-USERNAME.github.io',
  base: '/VOTRE-REPO-NAME',
  // ...
});
```

**Exemples :**
- Si votre GitHub est `johndoe` et votre repo `msp-site` :
  ```javascript
  site: 'https://johndoe.github.io',
  base: '/msp-site',
  ```

### 4. Activer GitHub Pages

1. Allez dans **Settings** → **Pages** de votre repository
2. Dans **Source**, sélectionnez : **GitHub Actions**
3. C'est tout ! 🎉

### 5. Configurer Google Sheets (Liste des praticiens)

#### Créer le Google Sheet

1. Ouvrez [Google Sheets](https://docs.google.com/spreadsheets/)
2. Créez un nouveau document
3. Copiez le contenu de `google-sheet-template.csv` dans votre sheet
4. Remplissez avec vos vraies données

**Format des colonnes :**

| name | specialty | phone | email | appointmentUrl | description |
|------|-----------|-------|-------|----------------|-------------|
| Dr. X | Médecin | 01... | ... | https://... | Description |

#### Publier le Google Sheet

1. Dans votre Google Sheet : **File** → **Share** → **Publish to web**
2. Dans la fenêtre qui s'ouvre :
   - Choisissez la **feuille** avec les praticiens
   - Format : **Comma-separated values (.csv)**
   - Cliquez sur **Publish**
3. **Copiez l'URL générée** (elle ressemble à : `https://docs.google.com/spreadsheets/d/e/...`)

#### Ajouter l'URL dans GitHub

1. Dans votre repository GitHub : **Settings** → **Secrets and variables** → **Actions**
2. Cliquez sur **New repository secret**
3. Name : `PUBLIC_GOOGLE_SHEET_URL`
4. Value : Collez l'URL de votre Google Sheet
5. Cliquez sur **Add secret**

### 6. Déclencher le déploiement

```bash
# Faites un petit changement (par exemple dans astro.config.mjs)
git add .
git commit -m "Configure site for deployment"
git push
```

Le déploiement se lance automatiquement ! Suivez-le dans l'onglet **Actions** de votre repository.

### 7. Accéder à votre site

Une fois le déploiement terminé (2-3 minutes), votre site sera accessible à :

```
https://VOTRE-USERNAME.github.io/VOTRE-REPO-NAME
```

## 🎨 Personnalisation

### Modifier les informations de contact

**Footer** (`src/components/Footer.astro`) :
```astro
<p>📞 <a href="tel:+33000000000">01 23 45 67 89</a></p>
<p>✉️ <a href="mailto:contact@msp-exemple.fr">contact@msp-exemple.fr</a></p>
```

**Adresse** (`src/pages/acces.astro`) :
- Ligne ~52 : Modifiez l'adresse
- Ligne ~36 : Changez l'URL Google Maps

### Ajouter votre logo

Remplacez `/public/favicon.svg` par votre logo (format SVG, PNG ou ICO).

### Modifier les couleurs

Dans les fichiers `.astro`, remplacez :
- `blue-600`, `blue-900` → Votre couleur principale
- `teal-500`, `teal-600` → Votre couleur d'accent

### Modifier le nom de la maison

Cherchez et remplacez dans tous les fichiers :
- "Maison de Santé Pluriprofessionnelle"
- "MSP"

## 🔄 Mettre à jour

### Mettre à jour les praticiens

1. Modifiez votre Google Sheet
2. Le site se mettra à jour au prochain build
3. Pour forcer un rebuild immédiatement :
   ```bash
   git commit --allow-empty -m "Update practitioners"
   git push
   ```

### Mettre à jour le contenu du site

```bash
# Modifiez les fichiers que vous voulez
git add .
git commit -m "Update content"
git push
```

## 🆘 Troubleshooting

### Le site ne s'affiche pas correctement

Vérifiez que dans `astro.config.mjs` :
- `site` correspond à votre URL GitHub Pages
- `base` correspond au nom de votre repository

### Les praticiens ne s'affichent pas

1. Vérifiez que le Google Sheet est bien **publié en CSV**
2. Vérifiez que le secret `PUBLIC_GOOGLE_SHEET_URL` est bien configuré
3. Vérifiez le format du CSV (colonnes dans le bon ordre)

### Le déploiement échoue

Allez dans **Actions** → Cliquez sur le workflow qui a échoué → Lisez les logs

Causes fréquentes :
- Erreur dans `astro.config.mjs`
- Erreur de syntaxe dans un fichier `.astro`

## 📞 Support

Si vous avez des questions, ouvrez une **Issue** sur GitHub !

---

Bon courage ! 🎉




