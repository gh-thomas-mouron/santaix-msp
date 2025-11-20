# 🎨 Guide de personnalisation

Ce guide vous aide à personnaliser rapidement votre site.

## 📝 Checklist de personnalisation

### ✅ Étape 1 : Informations de base

#### 1. Nom de la maison de santé

Remplacez dans **tous les fichiers** :
- "Maison de Santé Pluriprofessionnelle" → Votre nom

Fichiers concernés :
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/pages/index.astro`
- `src/pages/equipe.astro`
- `src/pages/acces.astro`

#### 2. Informations de contact

**Fichier : `src/components/Footer.astro`**

Remplacez :
```astro
<p>📞 <a href="tel:+33000000000">01 23 45 67 89</a></p>
<p>✉️ <a href="mailto:contact@msp-exemple.fr">contact@msp-exemple.fr</a></p>
```

Par vos vraies coordonnées.

**Horaires :**
```astro
<p>Lundi - Vendredi : 8h - 19h</p>
<p>Samedi : 9h - 13h</p>
<p>Dimanche : Fermé</p>
```

#### 3. Adresse

**Fichier : `src/pages/acces.astro`**

Ligne ~52, remplacez :
```astro
<p>123 Avenue de la Santé</p>
<p>75000 Ville</p>
```

### ✅ Étape 2 : Carte Google Maps

**Fichier : `src/pages/acces.astro`** (ligne ~36)

1. Allez sur [Google Maps](https://www.google.com/maps)
2. Cherchez votre adresse
3. Cliquez sur "Partager" → "Intégrer une carte"
4. Copiez le code HTML
5. Remplacez l'URL dans l'`<iframe src="...">`

Exemple :
```astro
<iframe
  src="VOTRE_URL_GOOGLE_MAPS_ICI"
  width="100%"
  height="100%"
  ...
></iframe>
```

### ✅ Étape 3 : Transports

**Fichier : `src/pages/acces.astro`** (section Transports)

Remplacez les informations de transport par celles de votre localisation :
```astro
<div>
  <h3>Métro</h3>
  <p>Ligne X - Station "Votre Station" (X min à pied)</p>
</div>
```

### ✅ Étape 4 : Logo

1. Créez ou obtenez votre logo
2. Format recommandé : SVG (ou PNG 512x512px)
3. Remplacez `/public/favicon.svg` par votre logo
4. Renommez-le en `favicon.svg` ou `favicon.png`

### ✅ Étape 5 : Configuration GitHub Pages

**Fichier : `astro.config.mjs`**

```javascript
export default defineConfig({
  site: 'https://VOTRE-USERNAME.github.io',  // Remplacez
  base: '/VOTRE-REPO-NAME',                   // Remplacez
  // ...
});
```

**Exemples :**
- Username GitHub : `mariedupont`
- Nom du repo : `msp-marseille`
- Configuration :
  ```javascript
  site: 'https://mariedupont.github.io',
  base: '/msp-marseille',
  ```

### ✅ Étape 6 : Liste des praticiens

#### Option A : Sans Google Sheets (par défaut)

Éditez directement le code dans `src/pages/equipe.astro`, fonction `getPractitioners()` :

```javascript
return [
  {
    name: "Dr. Votre Nom",
    specialty: "Votre spécialité",
    phone: "01 XX XX XX XX",
    email: "votre.email@example.fr",
    appointmentUrl: "https://www.doctolib.fr/votre-lien",
    description: "Votre description"
  },
  // Ajoutez d'autres praticiens...
];
```

#### Option B : Avec Google Sheets (recommandé)

Voir `SETUP.md` section 5 pour la configuration complète.

## 🎨 Personnalisation avancée

### Changer les couleurs

Les couleurs sont définies via TailwindCSS. Cherchez et remplacez :

#### Couleur principale (bleu)
- `bg-blue-600` → `bg-VOTRE-COULEUR-600`
- `text-blue-900` → `text-VOTRE-COULEUR-900`
- `hover:bg-blue-700` → `hover:bg-VOTRE-COULEUR-700`

Couleurs TailwindCSS disponibles :
- `slate`, `gray`, `zinc`, `neutral`, `stone`
- `red`, `orange`, `amber`, `yellow`, `lime`, `green`
- `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`
- `violet`, `purple`, `fuchsia`, `pink`, `rose`

#### Couleur d'accent (teal/vert)
- `bg-teal-500` → `bg-VOTRE-COULEUR-500`
- `text-teal-600` → `text-VOTRE-COULEUR-600`

### Modifier les polices

**Fichier : `src/layouts/Layout.astro`**

Ligne ~13, remplacez :
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

Par une autre police de [Google Fonts](https://fonts.google.com/).

Puis dans `src/styles/global.css` :
```css
html {
  font-family: 'Votre Police', sans-serif;
}
```

### Ajouter une nouvelle page

1. Créez un nouveau fichier dans `src/pages/`, par exemple `tarifs.astro`
2. Copiez la structure d'une page existante
3. Ajoutez le lien dans `src/components/Header.astro` :

```astro
const navItems = [
  { name: "Accueil", href: baseUrl },
  { name: "Notre équipe", href: baseUrl + "equipe" },
  { name: "Tarifs", href: baseUrl + "tarifs" }, // Nouvelle page
  { name: "Accès", href: baseUrl + "acces" },
];
```

### Modifier le texte de la page d'accueil

**Fichier : `src/pages/index.astro`**

- **Titre principal** (ligne ~21) :
  ```astro
  <h1>Bienvenue à votre Maison de Santé</h1>
  ```

- **Sous-titre** (ligne ~24) :
  ```astro
  <p>Votre nouvelle maison de santé pluriprofessionnelle de proximité</p>
  ```

- **Les 3 services** (section "Une prise en charge complète") :
  Modifiez les textes et émojis selon vos besoins.

### Ajouter des images

1. Placez vos images dans `/public/images/`
2. Utilisez-les dans vos pages :
   ```astro
   <img src="/images/votre-photo.jpg" alt="Description" />
   ```

## 🔍 Conseils SEO

### Titres de pages

Dans chaque fichier `.astro`, modifiez :
```astro
<Layout 
  title="Votre titre - Maison de Santé"
  description="Votre description pour les moteurs de recherche"
>
```

### Meta descriptions

Une bonne description :
- 150-160 caractères
- Contient vos mots-clés
- Incite au clic

Exemple :
```
Maison de Santé à Marseille. Médecins généralistes, kinésithérapeutes, infirmiers. Prise de RDV en ligne. Accès PMR, parking.
```

## 📱 Test responsive

Pour tester sur différentes tailles d'écran :

1. Ouvrez votre site dans Chrome
2. F12 (outils développeur)
3. Cliquez sur l'icône mobile (Ctrl+Shift+M)
4. Testez sur : iPhone, iPad, Android

## ✅ Checklist finale

Avant de déployer, vérifiez :

- [ ] Nom de la maison de santé personnalisé partout
- [ ] Coordonnées correctes (téléphone, email, adresse)
- [ ] Horaires d'ouverture à jour
- [ ] Carte Google Maps avec la bonne adresse
- [ ] Informations de transport correctes
- [ ] Logo remplacé
- [ ] Liste des praticiens à jour
- [ ] Configuration GitHub Pages (site + base)
- [ ] Test sur mobile
- [ ] Toutes les pages accessibles

## 🆘 Problèmes courants

### Le build échoue après modification

```bash
# Vérifiez la syntaxe
npm run astro check

# Relancez le serveur
npm run dev
```

### Les couleurs ne changent pas

- Vérifiez que vous avez bien modifié **tous** les fichiers
- Relancez le serveur de dev
- Videz le cache du navigateur (Ctrl+F5)

### Les liens ne fonctionnent pas

- Vérifiez `astro.config.mjs`
- Assurez-vous que `baseUrl` est bien défini dans les composants
- Les liens doivent être : `baseUrl + "page"`

## 💡 Besoin d'aide ?

- Documentation Astro : https://docs.astro.build
- Documentation TailwindCSS : https://tailwindcss.com/docs
- Issues GitHub de votre projet

---

Bon courage avec votre personnalisation ! 🎉

