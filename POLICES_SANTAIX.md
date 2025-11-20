# Polices alternatives pour "SANTAIX"

## Polices arrondies avec espacement (recommandées)

Voici 5 polices plus arrondies avec les lettres un peu plus espacées :

### 1. **Quicksand**
- **Style** : Sans-serif arrondie et moderne, très lisible
- **Caractère** : Moderne, accessible, professionnel
- **Espacement** : `tracking-wide`
- **Google Fonts** : `family=Quicksand:wght@400;600;700&display=swap`
- **Code CSS** : `font-family: 'Quicksand', sans-serif;`

### 2. **Nunito**
- **Style** : Sans-serif arrondie et professionnelle, très équilibrée
- **Caractère** : Moderne mais formelle, très lisible
- **Espacement** : `tracking-wide`
- **Google Fonts** : `family=Nunito:wght@400;600;700&display=swap`
- **Code CSS** : `font-family: 'Nunito', sans-serif;`

### 3. **Poppins**
- **Style** : Sans-serif arrondie et géométrique, moderne et formelle
- **Caractère** : Contemporain, professionnel, très équilibré
- **Espacement** : `tracking-wide`
- **Google Fonts** : `family=Poppins:wght@400;600;700&display=swap`
- **Code CSS** : `font-family: 'Poppins', sans-serif;`

### 4. **Raleway**
- **Style** : Sans-serif élégante avec espacement naturel, très raffinée
- **Caractère** : Élégant, distingué, moderne
- **Espacement** : `tracking-wider` (plus d'espacement)
- **Google Fonts** : `family=Raleway:wght@400;600;700&display=swap`
- **Code CSS** : `font-family: 'Raleway', sans-serif;`

### 5. **Montserrat**
- **Style** : Sans-serif arrondie et moderne, professionnelle et lisible
- **Caractère** : Moderne, professionnel, très lisible
- **Espacement** : `tracking-wide`
- **Google Fonts** : `family=Montserrat:wght@400;600;700&display=swap`
- **Code CSS** : `font-family: 'Montserrat', sans-serif;`

---

## Polices serif formelles (première série)

### 1. **Merriweather**
- **Style** : Serif classique et lisible, très professionnel
- **Caractère** : Traditionnel, sérieux, adapté au secteur médical
- **Google Fonts** : `family=Merriweather:wght@400;700&display=swap`
- **Code CSS** : `font-family: 'Merriweather', serif;`

### 2. **Lora**
- **Style** : Serif moderne et élégant, bien équilibré
- **Caractère** : Contemporain mais formel, très lisible
- **Google Fonts** : `family=Lora:wght@400;600;700&display=swap`
- **Code CSS** : `font-family: 'Lora', serif;`

### 3. **Cormorant Garamond**
- **Style** : Serif classique inspiré de Garamond, très raffiné
- **Caractère** : Élégant, distingué, haut de gamme
- **Google Fonts** : `family=Cormorant+Garamond:wght@400;600;700&display=swap`
- **Code CSS** : `font-family: 'Cormorant Garamond', serif;`

### 4. **Libre Baskerville**
- **Style** : Serif traditionnel, très lisible
- **Caractère** : Classique, professionnel, rassurant
- **Google Fonts** : `family=Libre+Baskerville:wght@400;700&display=swap`
- **Code CSS** : `font-family: 'Libre Baskerville', serif;`

### 5. **Crimson Pro**
- **Style** : Serif élégant et moderne, très raffiné
- **Caractère** : Sophistiqué, formel, distingué
- **Google Fonts** : `family=Crimson+Pro:wght@400;600;700&display=swap`
- **Code CSS** : `font-family: 'Crimson Pro', serif;`

---

## Comment tester une police

1. **Visitez la page de test** : `/test-polices` pour voir toutes les polices côte à côte
2. **Mettre à jour `Layout.astro`** : Remplacer la ligne Google Fonts par celle de la police choisie
3. **Mettre à jour `Header.astro`** : Modifier le `style="font-family: ..."` et `tracking-...` dans le span SANTAIX

### Exemple pour Quicksand :

**Dans `Layout.astro` :**
```astro
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Quicksand:wght@400;600;700&display=swap" rel="stylesheet" />
```

**Dans `Header.astro` (ligne 23) :**
```astro
<span class="text-[#206794] text-2xl md:text-3xl font-semibold tracking-wide" style="font-family: 'Quicksand', sans-serif;">
  SANTAIX
</span>
```

---

## Recommandation

Pour un centre de santé avec une police arrondie :
- **Nunito** : Le plus équilibré, moderne mais professionnel
- **Poppins** : Très moderne et formelle, excellente lisibilité
- **Raleway** : Le plus élégant avec un espacement naturel
