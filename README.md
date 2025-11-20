# Site Web - Maison de Santé Pluriprofessionnelle

Site web moderne, responsive et performant pour une maison de santé, construit avec Astro.js et TailwindCSS.

## 🚀 Fonctionnalités

- ✅ **Mobile-first** : Design optimisé pour tous les appareils
- ✅ **Performance optimale** : Site statique avec génération SSG (Static Site Generation)
- ✅ **SEO-friendly** : Optimisé pour les moteurs de recherche
- ✅ **Mise à jour facile** : Liste des praticiens via Google Sheets
- ✅ **Design moderne** : Interface claire et professionnelle
- ✅ **Accessibilité** : Conforme aux standards WCAG

## 📋 Pages

- **Accueil** : Présentation de la maison de santé
- **Notre équipe** : Liste des praticiens (alimentée par Google Sheets)
- **Accès** : Plan d'accès, transports et informations pratiques

## 🛠️ Technologies

- [Astro.js 5.x](https://astro.build) - Framework de génération de sites statiques
- [TailwindCSS 4.x](https://tailwindcss.com) - Framework CSS utility-first
- [TypeScript](https://www.typescriptlang.org) - Typage statique
- [GitHub Pages](https://pages.github.com) - Hébergement gratuit

## 📦 Installation

### Prérequis

- Node.js 20 ou supérieur
- npm ou yarn

### Étapes

```bash
# Cloner le repository
git clone https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
cd VOTRE-REPO

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:4321`

## ⚙️ Configuration

### 1. Configuration Google Sheets (Liste des praticiens)

Pour que la liste des praticiens soit dynamique :

1. **Créez un Google Sheet** avec les colonnes suivantes :
   ```
   name | specialty | phone | email | appointmentUrl | description
   ```

2. **Exemple de données** :
   ```
   Dr. Marie Dupont | Médecin généraliste | 01 23 45 67 89 | dr.dupont@example.fr | https://www.doctolib.fr/... | Médecine générale, suivi des pathologies chroniques
   ```

3. **Publiez votre Google Sheet en CSV** :
   - File → Share → Publish to web
   - Choisissez la feuille contenant les praticiens
   - Format : "Comma-separated values (.csv)"
   - Copiez l'URL générée

4. **Configurez les variables d'environnement** :
   ```bash
   # Créez un fichier .env à la racine
   cp .env.example .env
   
   # Ajoutez l'URL de votre Google Sheet
   PUBLIC_GOOGLE_SHEET_URL=https://docs.google.com/spreadsheets/d/...
   ```

### 2. Configuration GitHub Pages

1. **Modifiez `astro.config.mjs`** :
   ```javascript
   export default defineConfig({
     site: 'https://VOTRE-USERNAME.github.io',
     base: '/VOTRE-REPO-NAME',
     // ...
   });
   ```

2. **Activez GitHub Pages** :
   - Allez dans Settings → Pages
   - Source : "GitHub Actions"

3. **Ajoutez le secret pour Google Sheets** (optionnel) :
   - Settings → Secrets and variables → Actions
   - New repository secret
   - Name : `PUBLIC_GOOGLE_SHEET_URL`
   - Value : URL de votre Google Sheet

4. **Déployez** :
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

Le déploiement se fera automatiquement via GitHub Actions !

## 🎨 Personnalisation

### Modifier les couleurs

Les couleurs principales sont définies dans les composants avec TailwindCSS :
- Bleu principal : `blue-600`, `blue-900`
- Accent vert : `teal-500`, `teal-600`

Vous pouvez les modifier dans les fichiers `.astro` ou créer un thème personnalisé dans `tailwind.config.js`.

### Modifier les informations de contact

Les informations de contact sont dans :
- `src/components/Footer.astro`
- `src/pages/acces.astro`

### Ajouter votre logo

Remplacez `/public/favicon.svg` par votre logo.

### Personnaliser Google Maps

Dans `src/pages/acces.astro`, remplacez l'URL de l'iframe Google Maps par votre adresse.

## 📝 Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview

# Type checking
npm run astro check
```

## 📂 Structure du projet

```
/
├── public/              # Fichiers statiques (images, favicon, etc.)
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── PractitionerCard.astro
│   ├── layouts/         # Layouts de page
│   │   └── Layout.astro
│   ├── pages/           # Pages du site (routing automatique)
│   │   ├── index.astro  # Page d'accueil
│   │   ├── equipe.astro # Page équipe
│   │   └── acces.astro  # Page accès
│   └── styles/          # Styles globaux
│       └── global.css
├── .github/
│   └── workflows/
│       └── deploy.yml   # Configuration GitHub Actions
├── astro.config.mjs     # Configuration Astro
├── package.json
└── tsconfig.json
```

## 🔧 Maintenance

### Mettre à jour les praticiens

Modifiez simplement votre Google Sheet. Les changements seront visibles après le prochain build (automatique à chaque push, ou manuel).

### Forcer un rebuild

Si vous modifiez le Google Sheet et souhaitez mettre à jour le site :
```bash
git commit --allow-empty -m "Rebuild site"
git push
```

## 📱 Support navigateurs

- Chrome/Edge (dernières versions)
- Firefox (dernières versions)
- Safari 14+
- Mobile : iOS Safari 14+, Chrome Android

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

MIT

## 📞 Support

Pour toute question concernant le site, contactez : contact@msp-exemple.fr

---

**Made with ❤️ using Astro.js**
