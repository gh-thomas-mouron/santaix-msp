# Google Maps Reviews Integration

Ce guide explique comment intégrer les étoiles de notation Google Maps dans le footer.

## Option 1 : Mise à jour manuelle (Simple)

Mettez à jour les valeurs dans `.env` ou directement dans `src/components/Footer.astro` :

```env
GOOGLE_RATING=4.5
GOOGLE_RATING_COUNT=23
```

Puis redéployez le site.

## Option 2 : Mise à jour automatique au build (Recommandé)

### Étape 1 : Obtenir votre Place ID

1. Allez sur [Google Maps](https://www.google.com/maps)
2. Recherchez votre établissement
3. Cliquez sur votre établissement
4. Dans l'URL, vous trouverez le `place_id` (ex: `ChIJ...`)

Ou utilisez [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)

### Étape 2 : Obtenir une clé API Google Places

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un projet ou sélectionnez-en un existant
3. Activez l'API "Places API"
4. Créez une clé API dans "Credentials"
5. (Optionnel) Restreignez la clé API à "Places API" pour la sécurité

### Étape 3 : Configurer les variables d'environnement

Créez un fichier `.env` à la racine :

```env
GOOGLE_PLACES_API_KEY=your_api_key_here
GOOGLE_PLACE_ID=your_place_id_here
GOOGLE_RATING=0
GOOGLE_RATING_COUNT=0
```

### Étape 4 : Mettre à jour les valeurs

**Option A : Script automatique**

```bash
npm install dotenv  # Si pas déjà installé
node scripts/fetch-google-rating.js
```

Ce script mettra à jour automatiquement `GOOGLE_RATING` et `GOOGLE_RATING_COUNT` dans votre `.env`.

**Option B : Manuellement**

Mettez à jour les valeurs dans `.env` après avoir vérifié sur Google Maps.

### Étape 5 : Build et déploiement

Les valeurs seront utilisées lors du build :

```bash
npm run build
```

## Option 3 : Live (Client-side) - Non recommandé

Pour une solution vraiment "live", vous pouvez utiliser le composant `GoogleReviews.astro`, mais cela nécessite d'exposer votre clé API côté client, ce qui n'est **pas recommandé** pour des raisons de sécurité et de coûts.

## Configuration GitHub Actions

Pour mettre à jour automatiquement lors du déploiement, ajoutez les secrets dans GitHub :

1. Settings → Secrets and variables → Actions
2. Ajoutez :
   - `GOOGLE_PLACES_API_KEY`
   - `GOOGLE_PLACE_ID`
   - `GOOGLE_RATING` (optionnel, peut être mis à jour par le script)
   - `GOOGLE_RATING_COUNT` (optionnel, peut être mis à jour par le script)

Puis modifiez `.github/workflows/deploy.yml` pour exécuter le script avant le build.

## Notes importantes

- ⚠️ **Sécurité** : Ne commitez jamais votre clé API dans le repository
- 💰 **Coûts** : L'API Google Places a des limites gratuites, puis devient payante
- 🔄 **Fréquence** : Les notes ne changent pas souvent, une mise à jour hebdomadaire ou mensuelle suffit généralement

