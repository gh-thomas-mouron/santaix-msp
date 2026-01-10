# Google Sheets Practitioners Integration

Ce guide explique comment intégrer les données des praticiens depuis Google Sheets dans le site.

## Configuration

### 0. Rendre le spreadsheet public (IMPORTANT)

Pour que le script puisse récupérer les données, le Google Spreadsheet **doit être accessible publiquement** :

1. Ouvrez votre Google Spreadsheet
2. Cliquez sur le bouton **"Partager"** (en haut à droite)
3. Cliquez sur **"Modifier l'accès"**
4. Changez de **"Restreint"** à **"Toute personne disposant du lien"**
5. Sélectionnez le rôle **"Lecteur"**
6. Cliquez sur **"Terminé"**

⚠️ **Important** : Le spreadsheet doit être en lecture publique pour que le script fonctionne.

### 1. Google Spreadsheet

Le spreadsheet doit contenir les colonnes suivantes :
- `name` : Le nom du praticien (ex: "Dr Fabien PENA")
- `specialty` : La spécialité (ex: "Médecin échographiste")
- `picture_url` : L'URL de la photo (peut être une URL web ou un chemin local)

**Exemple de données :**
```
name,specialty,picture_url
Dr Fabien PENA,Médecin échographiste,public/praticiens/fabien_pena.jpg
Dr Patrick CAVANNA,Médecin généraliste,https://media.doctolib.com/image/...
```

### 2. URLs des images

Les images peuvent être :
- **URLs web** : Commencent par `http://` ou `https://`
- **Chemins locaux** : Référencent des fichiers dans le dossier `public/`

Pour les chemins locaux, utilisez le format `public/praticiens/nom_fichier.jpg` ou simplement `praticiens/nom_fichier.jpg`.

**Important** : Assurez-vous que les fichiers locaux existent dans le dossier `public/praticiens/` avant de les référencer.

## Utilisation

### En développement

#### Option 1 : Récupération manuelle puis développement

```bash
# Récupérer les données depuis Google Sheets
npm run fetch-practitioners

# Lancer le serveur de développement
npm run dev
```

#### Option 2 : Récupération automatique au démarrage

```bash
# Récupère les données puis lance le serveur
npm run dev:fetch
```

#### Option 3 : Watch mode (recommandé pour développement actif)

Pour voir les changements en temps réel lors de la modification du spreadsheet :

1. Dans un terminal, lancez le script de récupération en mode watch :
```bash
# Surveille les changements toutes les 30 secondes
while true; do npm run fetch-practitioners && sleep 30; done
```

2. Dans un autre terminal, lancez le serveur de développement :
```bash
npm run dev
```

Astro détectera automatiquement les changements dans `src/data/practitioners.json` et rechargera la page.

### En production

Le workflow GitHub Actions récupère automatiquement les données avant chaque build. Aucune action manuelle n'est nécessaire.

## Structure des pages

### Page principale : `/equipe`

Affiche tous les praticiens sous forme de grille. Chaque carte est cliquable et mène à la page individuelle du praticien.

### Pages individuelles : `/equipe/[slug]`

Chaque praticien a sa propre page accessible via `/equipe/[slug]` où `[slug]` est généré automatiquement à partir du nom.

**Exemple :**
- Nom : "Dr Fabien PENA"
- Slug : `fabien_pena`
- URL : `/equipe/fabien_pena`

### Navigation par onglets

Sur chaque page individuelle, des onglets permettent de naviguer entre les différents praticiens.

## Variables d'environnement

Vous pouvez configurer les variables suivantes dans un fichier `.env` :

```env
GOOGLE_SHEET_ID=1KkLZegPui5GCO6ZQ3MJsP79sjTOKUsurs16h-4F_duA
GOOGLE_SHEET_GID=1625347087
```

Par défaut, le script utilise les valeurs du spreadsheet SANTAIX.

## GitHub Actions

Le workflow `.github/workflows/deploy.yml` récupère automatiquement les données avant chaque build.

Vous pouvez configurer des secrets dans GitHub pour utiliser un autre spreadsheet :
- `GOOGLE_SHEET_ID` : ID du spreadsheet
- `GOOGLE_SHEET_GID` : ID de l'onglet (gid)

## Dépannage

### Les praticiens n'apparaissent pas

1. Vérifiez que le script a bien été exécuté :
```bash
npm run fetch-practitioners
```

2. Vérifiez que le fichier `src/data/practitioners.json` existe et contient des données.

3. Vérifiez que le spreadsheet est accessible publiquement (en lecture).

### Les images ne s'affichent pas

1. Pour les URLs web : Vérifiez que l'URL est accessible et valide.

2. Pour les chemins locaux : 
   - Vérifiez que le fichier existe dans `public/praticiens/`
   - Vérifiez que le chemin dans le spreadsheet est correct (ex: `praticiens/fabien_pena.jpg`)

### Erreur lors de la récupération

1. Vérifiez que le spreadsheet est accessible publiquement.
2. Vérifiez que les colonnes `name`, `specialty`, et `picture_url` existent.
3. Vérifiez que l'ID du spreadsheet et le GID sont corrects.
