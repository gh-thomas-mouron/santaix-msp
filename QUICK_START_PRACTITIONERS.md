# Quick Start - Practitioners Integration

## Pour tester rapidement en développement

### 1. Rendre le spreadsheet public
- Ouvrez le Google Spreadsheet
- Partage → Modifier l'accès → "Toute personne disposant du lien" → Lecteur

### 2. Récupérer les données
```bash
npm run fetch-practitioners
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```

Ou en une seule commande :
```bash
npm run dev:fetch
```

### 4. Voir les changements en temps réel

Dans un terminal :
```bash
# Surveille les changements toutes les 30 secondes
while true; do npm run fetch-practitioners && sleep 30; done
```

Dans un autre terminal :
```bash
npm run dev
```

## Format du spreadsheet

Le spreadsheet doit avoir ces colonnes :
- `name` : Nom du praticien (ex: "Dr Fabien PENA")
- `specialty` : Spécialité (ex: "Médecin échographiste")  
- `picture_url` : URL de la photo

### Exemples de picture_url

**URL web :**
```
https://media.doctolib.com/image/upload/...
```

**Fichier local :**
```
praticiens/fabien_pena.jpg
```
ou
```
public/praticiens/fabien_pena.jpg
```

Les deux formats fonctionnent. Le fichier doit exister dans `public/praticiens/`.

## Structure des URLs

- Page principale : `/equipe` (liste de tous les praticiens)
- Page individuelle : `/equipe/[slug]` (ex: `/equipe/fabien_pena`)

Le slug est généré automatiquement à partir du nom.
