# Guide : Configuration d'un nom de domaine personnalisé

Ce guide explique comment configurer un nom de domaine pour votre site GitHub Pages et le transférer à votre ami pour qu'il puisse le gérer et payer lui-même.

## 📋 Vue d'ensemble du processus

1. **Vous** : Enregistrez le domaine (choisissez un registrar)
2. **Vous** : Configurez le domaine avec GitHub Pages
3. **Vous** : Transférez le domaine à votre ami (changement de propriétaire)
4. **Votre ami** : Prend le contrôle et paie les renouvellements

---

## Étape 1 : Choisir et enregistrer le domaine

### Recommandations de registrars

**Pour la France :**
- **OVH** (ovh.com) - Populaire en France, support en français
- **Gandi** (gandi.net) - Éthique, bon support
- **Namecheap** (namecheap.com) - International, bon rapport qualité/prix

**Autres options :**
- **Google Domains** (domains.google) - Simple, maintenant géré par Squarespace
- **Cloudflare Registrar** (cloudflare.com) - Prix au coût, excellent si vous utilisez Cloudflare

### Processus d'enregistrement

1. **Choisissez un nom de domaine** (ex: `maison-sante-santaix.fr` ou `santaix-msp.fr`)
2. **Créez un compte** sur le registrar choisi
3. **Recherchez la disponibilité** du domaine
4. **Enregistrez-le** pour 1 an (minimum, renouvelable)
5. **Important** : Utilisez vos propres coordonnées pour l'enregistrement initial

**Coûts approximatifs :**
- `.fr` : 8-15€/an
- `.com` : 10-15€/an
- `.org` : 10-15€/an

---

## Étape 2 : Configurer le domaine avec GitHub Pages

### 2.1 Créer le fichier CNAME

Créez un fichier `CNAME` dans le dossier `public/` avec votre nom de domaine :

```
votre-domaine.fr
```

**Note** : Si vous utilisez un sous-domaine `www`, vous pouvez aussi ajouter :
```
www.votre-domaine.fr
```

### 2.2 Configurer les DNS

Dans votre registrar, configurez les enregistrements DNS :

#### Option A : Utiliser uniquement le domaine principal (sans www)

**Enregistrements DNS à ajouter :**

| Type | Nom | Valeur | TTL |
|------|-----|--------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

#### Option B : Utiliser www (recommandé)

**Enregistrements DNS à ajouter :**

| Type | Nom | Valeur | TTL |
|------|-----|--------|-----|
| CNAME | www | gh-thomas-mouron.github.io | 3600 |
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**Note** : Remplacez `gh-thomas-mouron` par votre vrai nom d'utilisateur GitHub si différent.

### 2.3 Configurer GitHub Pages

1. Allez dans votre repository GitHub
2. **Settings** → **Pages**
3. Dans la section **Custom domain**, entrez votre domaine (ex: `votre-domaine.fr`)
4. Cochez **"Enforce HTTPS"** (disponible après propagation DNS, peut prendre quelques heures)

### 2.4 Mettre à jour la configuration Astro

Modifiez `astro.config.mjs` :

```javascript
export default defineConfig({
  site: 'https://votre-domaine.fr',  // Remplacez par votre domaine
  base: '/',  // Changez de '/santaix-msp' à '/' si vous utilisez un domaine personnalisé
  // ...
});
```

### 2.5 Attendre la propagation DNS

- La propagation DNS peut prendre **24-48 heures**
- Vérifiez avec : https://www.whatsmydns.net
- Une fois propagé, GitHub détectera automatiquement le domaine

---

## Étape 3 : Transférer le domaine à votre ami

### 3.1 Préparer le transfert

**Avant de transférer, assurez-vous que :**
- ✅ Le domaine fonctionne correctement avec GitHub Pages
- ✅ Votre ami a créé un compte sur le même registrar (ou un autre)
- ✅ Vous avez les informations de contact de votre ami

### 3.2 Processus de transfert de propriétaire

#### Sur OVH :
1. Connectez-vous à votre compte OVH
2. Allez dans **Domaines** → Sélectionnez votre domaine
3. **Informations générales** → **Changer le propriétaire**
4. Entrez les coordonnées de votre ami
5. Votre ami recevra un email pour confirmer le transfert
6. Une fois confirmé, le domaine lui appartient

#### Sur Gandi :
1. **Domaines** → Sélectionnez votre domaine
2. **Contacts** → **Modifier le propriétaire**
3. Entrez les informations de votre ami
4. Confirmation par email

#### Sur Namecheap :
1. **Domain List** → Sélectionnez votre domaine
2. **Transfer** → **Change Registrant**
3. Entrez les nouvelles informations
4. Confirmation requise

### 3.3 Transfert de facturation (optionnel)

Si vous voulez que votre ami paie directement :
- **Option 1** : Transférez complètement le domaine (propriétaire + facturation)
- **Option 2** : Gardez le domaine à votre nom mais ajoutez votre ami comme **contact de facturation**

**Recommandation** : Transférez complètement le domaine pour simplifier la gestion future.

---

## Étape 4 : Après le transfert (pour votre ami)

### Ce que votre ami doit faire :

1. **Confirmer le transfert** via l'email reçu
2. **Ajouter sa méthode de paiement** sur le registrar
3. **Vérifier que le domaine fonctionne toujours** avec GitHub Pages
4. **Configurer le renouvellement automatique** pour éviter l'expiration

### Important : Les DNS restent inchangés

Les enregistrements DNS que vous avez configurés restent actifs même après le transfert de propriétaire. Votre ami n'a pas besoin de les reconfigurer.

---

## 🔒 Sécurité et bonnes pratiques

### Protection WHOIS (recommandé)

Activez la **protection WHOIS** (masque vos coordonnées publiques) :
- Généralement gratuit ou ~2€/an
- Protège contre le spam et les appels non sollicités

### Renouvellement automatique

Configurez le **renouvelement automatique** pour éviter la perte du domaine :
- Le domaine expire généralement après 1 an
- Si non renouvelé, il peut être récupéré par quelqu'un d'autre

### Sauvegarde des accès

Avant le transfert, notez :
- Les identifiants du registrar
- Les informations DNS configurées
- La date d'expiration du domaine

---

## 🆘 Dépannage

### Le domaine ne fonctionne pas après configuration

1. Vérifiez la propagation DNS : https://www.whatsmydns.net
2. Vérifiez que le fichier `CNAME` est bien dans `public/`
3. Vérifiez les enregistrements DNS dans votre registrar
4. Attendez 24-48h pour la propagation complète

### Erreur "Domain not verified" sur GitHub

- Attendez la propagation DNS complète
- Vérifiez que les enregistrements A pointent vers les bonnes IPs GitHub
- Vérifiez que le fichier CNAME est présent dans le repository

### Le domaine ne fonctionne plus après transfert

- Les DNS ne changent pas automatiquement lors du transfert
- Vérifiez que les enregistrements DNS sont toujours présents
- Si nécessaire, reconfigurez-les dans le nouveau compte

---

## 📝 Checklist complète

### Pour vous (création) :
- [ ] Choisir un registrar
- [ ] Enregistrer le domaine
- [ ] Créer le fichier `CNAME` dans `public/`
- [ ] Configurer les enregistrements DNS
- [ ] Configurer GitHub Pages avec le domaine
- [ ] Mettre à jour `astro.config.mjs`
- [ ] Vérifier que le domaine fonctionne
- [ ] Transférer le domaine à votre ami

### Pour votre ami (après transfert) :
- [ ] Confirmer le transfert via email
- [ ] Ajouter méthode de paiement
- [ ] Configurer renouvellement automatique
- [ ] Activer protection WHOIS (optionnel)
- [ ] Vérifier que le site fonctionne toujours

---

## 💡 Conseils supplémentaires

### Utiliser Cloudflare (optionnel mais recommandé)

Si vous utilisez Cloudflare :
1. Transférez le domaine vers Cloudflare Registrar (gratuit, prix au coût)
2. Configurez les DNS dans Cloudflare
3. Bénéficiez de CDN, SSL automatique, et protection DDoS gratuite

### Domaine .fr spécifique

Pour les domaines `.fr` :
- Nécessite une adresse en France ou dans l'UE
- Peut nécessiter une vérification d'identité
- Généralement moins cher que les domaines internationaux

---

## 📞 Support

Si vous rencontrez des problèmes :
- **GitHub Pages** : https://docs.github.com/en/pages
- **Registrar** : Support client de votre registrar
- **DNS** : Utilisez des outils comme https://mxtoolbox.com pour diagnostiquer

---

**Note importante** : Ce processus peut prendre quelques jours (enregistrement + propagation DNS + transfert). Planifiez en conséquence !
