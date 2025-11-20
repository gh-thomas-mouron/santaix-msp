# 📚 Documentation - Site Maison de Santé

Bienvenue ! Voici un index de toute la documentation disponible.

## 🎯 Par où commencer ?

### Vous êtes pressé ? → `DEMARRAGE_RAPIDE.md`
Guide ultra-rapide en 3 minutes pour déployer votre site.

### Première fois avec Astro/GitHub ? → `SETUP.md`
Guide complet pas à pas avec toutes les explications.

### Besoin de personnaliser ? → `PERSONNALISATION.md`
Comment changer les couleurs, textes, images, etc.

### Questions techniques ? → `README.md`
Documentation technique complète du projet.

## 📖 Guide de lecture recommandé

### 1. Pour commencer (5 min)
1. Lisez `DEMARRAGE_RAPIDE.md`
2. Testez le site en local : `npm run dev`
3. Ouvrez http://localhost:4321/VOTRE-REPO-NAME

### 2. Pour déployer (10 min)
1. Suivez `SETUP.md` sections 1-4
2. Votre site sera en ligne sur GitHub Pages

### 3. Pour personnaliser (20 min)
1. Consultez `PERSONNALISATION.md`
2. Modifiez les informations de contact
3. Changez les couleurs si souhaité
4. Ajoutez vos praticiens

## 📁 Structure de la documentation

```
📚 Documentation
├── 📄 INDEX.md (ce fichier)
│   └─ Vue d'ensemble de la documentation
│
├── 🚀 DEMARRAGE_RAPIDE.md
│   └─ Guide express (3 minutes)
│
├── 📖 SETUP.md
│   └─ Guide détaillé pas à pas
│
├── 🎨 PERSONNALISATION.md
│   └─ Comment personnaliser le site
│
├── 📘 README.md
│   └─ Documentation technique complète
│
└── 📊 google-sheet-template.csv
    └─ Template pour vos données praticiens
```

## 🎓 Niveau de connaissances requis

| Document | Débutant | Intermédiaire | Avancé |
|----------|----------|---------------|--------|
| DEMARRAGE_RAPIDE.md | ✅ | ✅ | ✅ |
| SETUP.md | ✅ | ✅ | ✅ |
| PERSONNALISATION.md | ✅ | ✅ | ✅ |
| README.md | 🔸 | ✅ | ✅ |

✅ = Accessible  
🔸 = Quelques notions utiles

## 🎯 Objectifs par document

### DEMARRAGE_RAPIDE.md
- ✅ Comprendre ce qui a été créé
- ✅ Tester le site localement
- ✅ Déployer sur GitHub en 3 minutes
- ✅ Savoir où chercher pour personnaliser

### SETUP.md
- ✅ Créer un repository GitHub
- ✅ Configurer Astro pour GitHub Pages
- ✅ Activer le déploiement automatique
- ✅ Intégrer Google Sheets (optionnel)
- ✅ Résoudre les problèmes courants

### PERSONNALISATION.md
- ✅ Modifier les informations de contact
- ✅ Changer l'adresse et la carte
- ✅ Personnaliser les couleurs
- ✅ Ajouter votre logo
- ✅ Gérer la liste des praticiens
- ✅ Optimiser le SEO

### README.md
- ✅ Comprendre l'architecture du projet
- ✅ Connaître les technologies utilisées
- ✅ Maintenance et mises à jour
- ✅ Scripts disponibles

## 🔧 Commandes essentielles

```bash
# Développement
npm run dev              # Lance le serveur local
npm run build           # Compile le site
npm run preview         # Preview du build

# Vérifications
npm run astro check     # Vérifie le code TypeScript

# Déploiement
git add .
git commit -m "Message"
git push                # Déploie automatiquement
```

## 📊 Fichiers de configuration

| Fichier | Description | À modifier ? |
|---------|-------------|--------------|
| `astro.config.mjs` | Config Astro & GitHub Pages | ✅ Oui |
| `package.json` | Dépendances NPM | ❌ Non |
| `tsconfig.json` | Config TypeScript | ❌ Non |
| `.gitignore` | Fichiers Git à ignorer | ❌ Non |
| `.env.example` | Template variables env | 📋 Référence |

## 🎨 Fichiers à personnaliser

### Obligatoires
- ✅ `astro.config.mjs` - Configuration GitHub Pages
- ✅ `src/components/Footer.astro` - Contact & horaires
- ✅ `src/pages/acces.astro` - Adresse & carte

### Recommandés
- 📝 `src/pages/index.astro` - Textes page d'accueil
- 📝 `src/pages/equipe.astro` - Liste praticiens
- 🎨 `public/favicon.svg` - Logo

### Optionnels
- 🎨 Tous les fichiers `.astro` - Couleurs & design
- 📝 `src/styles/global.css` - Styles globaux

## 🆘 En cas de problème

### Le site ne compile pas
1. Consultez la section "Troubleshooting" de `SETUP.md`
2. Vérifiez les erreurs : `npm run astro check`
3. Relancez le serveur : `npm run dev`

### Le déploiement échoue
1. Vérifiez `astro.config.mjs`
2. Consultez les logs sur GitHub Actions
3. Voir section "Troubleshooting" de `SETUP.md`

### Les praticiens ne s'affichent pas
- Sans Google Sheets : Vérifiez le code dans `equipe.astro`
- Avec Google Sheets : Vérifiez le format CSV et le secret GitHub

### Question non résolue ?
1. Consultez d'abord `README.md`
2. Puis `SETUP.md`
3. Puis `PERSONNALISATION.md`

## 📚 Ressources externes

### Technologies utilisées
- [Astro.js](https://astro.build) - Framework principal
- [TailwindCSS](https://tailwindcss.com) - Styles CSS
- [GitHub Pages](https://pages.github.com) - Hébergement

### Tutoriels
- [Astro Tutorial](https://docs.astro.build/en/tutorial/0-introduction/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [GitHub Pages Guide](https://docs.github.com/en/pages)

### Outils utiles
- [Google Fonts](https://fonts.google.com/) - Polices gratuites
- [Heroicons](https://heroicons.com/) - Icônes gratuites
- [Coolors](https://coolors.co/) - Générateur de palettes

## ✅ Checklist complète

### Avant le premier déploiement
- [ ] J'ai lu `DEMARRAGE_RAPIDE.md`
- [ ] J'ai testé le site en local
- [ ] J'ai personnalisé les informations de contact
- [ ] J'ai modifié l'adresse et la carte
- [ ] J'ai configuré `astro.config.mjs`
- [ ] J'ai créé un repository GitHub
- [ ] J'ai activé GitHub Pages

### Après le déploiement
- [ ] Le site est accessible en ligne
- [ ] Toutes les pages fonctionnent
- [ ] La navigation fonctionne correctement
- [ ] Le site s'affiche bien sur mobile
- [ ] J'ai testé les liens de contact
- [ ] J'ai partagé l'URL avec mon équipe

## 🎉 Vous avez terminé ?

Félicitations ! Votre site de maison de santé est maintenant en ligne.

### Prochaines étapes possibles
- 📊 Configurer Google Analytics
- 🎨 Ajouter plus de pages
- 📝 Enrichir le contenu
- 🖼️ Ajouter des photos de l'équipe
- 📱 Optimiser encore plus pour mobile

## 💬 Besoin d'aide ?

Toute la documentation est là pour vous aider. N'hésitez pas à :
- Relire les guides
- Consulter la documentation officielle Astro
- Tester petit à petit

Bon courage ! 🚀

---

**Dernière mise à jour** : Novembre 2025  
**Version** : 1.0.0

