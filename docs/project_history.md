# Historique du Projet - Site Personnel de Julián Sabos González

**Date de début** : 2023 (refonte)
**Dernière mise à jour** : 2026-05-03
**Statut actuel** : Production Ready - Version 2.1

---

## 📅 Chronologie du Projet

### 🌱 **Version 1.0 (2014-2023)** - Site initial
- **Technologies** : Bootstrap 3, Leaflet, amCharts
- **Langues** : Français, Espagnol, Anglais (système de traduction)
- **Statut** : Obsolète, remplacé par la version 2.0

### 🚀 **Version 2.0 (Avril 2023)** - Refonte complète
- **Objectif** : Moderniser le design et simplifier l'architecture
- **Technologies** : HTML5/CSS3/JavaScript vanilla
- **Design** : Inspiration "Brittany Chiang" adapté pour un profil d'ingénieur senior
- **Couleurs** : Thème bleu professionnel (#0077B6)
- **Contenu** : 6 expériences, 6 catégories de compétences, 3 formations
- **Statut** : Déployé et fonctionnel

### ⚡ **Version 2.1 (Mai 2026)** - Améliorations et mise à jour
- **Mise à jour du CV** : Ajout des expériences Decathlon
- **SEO** : Meta tags complets, Open Graph, Twitter Cards
- **Accessibilité** : Balises ARIA complètes
- **Style** : Liens vers entreprises et présentations
- **Corrections** : Nom mis à jour (Julián Sabos González)
- **Statut** : Production Ready

---

## 📋 Phases du Projet

### ✅ Phase 1 : Analyse (Complétée - 2023)
**Objectif** : Comprendre l'existant et définir les besoins

- **Analyse de la structure actuelle** :
  - Version manuelle avec Bootstrap 3, Leaflet, amCharts
  - Version jsonresume plus moderne mais incomplète
  - Système de traduction fonctionnel en 3 langues (FR, ES, EN)

- **Points forts identifiés** :
  - Structure de traduction fonctionnelle
  - Contenu riche et expérience professionnelle détaillée
  - Images et ressources existantes réutilisables

- **Points à améliorer** :
  - Design daté et peu professionnel
  - Structure complexe avec trop de dépendances
  - Manque de maintenance depuis 2014

---

### ✅ Phase 2 : Conception (Complétée - 2023)
**Objectif** : Définir l'architecture et le design

- **Exigences définies** :
  - Design moderne et professionnel
  - Approche mobile-first
  - Flexibilité et simplicité
  - Performance optimale
  - Contenu technique détaillé

- **Inspirations** :
  - Design inspiré de Brittany Chiang (portfolio développeur)
  - Adaptation pour un profil d'ingénieur logiciel senior

- **Choix techniques** :
  - HTML5/CSS3/JavaScript vanilla (pas de framework)
  - Font Awesome pour les icônes
  - Police Inter pour typographie moderne
  - Pas de dépendance npm/yarn

---

### ✅ Phase 3 : Développement (Complétée - 2023)
**Objectif** : Implémenter le site

- **Structure implémentée** :
  - Layout centré (800px max-width)
  - Navigation sticky avec indicateurs visuels
  - Sections : About, Experience, Skills, Education
  - Timeline professionnelle avec réalisations
  - Grille de compétences par catégorie
  - Animations subtiles au scroll

- **Contenu intégré** :
  - Texte "About" extrait de jsonresume
  - 6 expériences professionnelles détaillées (initialement)
  - 6 catégories de compétences
  - 3 formations académiques

- **Décisions clés** :
  - Suppression de la section Contact (lien LinkedIn dans header suffit)
  - Langue unique (Anglais) - multilingue prévu pour le futur
  - Design sobre et professionnel
  - Contenu technique détaillé

---

### ✅ Phase 4 : Nettoyage et Organisation (Complétée - 2023)
**Objectif** : Préparer le déploiement

- **Structure de fichiers créée** :
  - `public/` : Fichiers prêts à déployer
  - `docs/` : Documentation du projet
  - `.github/workflows/` : Configuration CI/CD

- **Fichiers nettoyés** :
  - Anciennes versions HTML supprimées
  - CSS et JS anciens supprimés
  - Images inutilisées supprimées
  - Structure simplifiée

---

### ✅ Phase 5 : Mises à jour 2026 (Complétée - 2026-05-03)
**Objectif** : Mettre à jour le CV et améliorer le site

- **Expériences ajoutées** :
  - Staff Engineer @ Decathlon (juin 2024 - Present)
  - Technical Lead @ Decathlon (février 2022 - juin 2024)
  - Période de transition professionnelle (mai 2021 - février 2022)
  - R&D Software Engineer @ Netfective Technology (février 2009 - mai 2013)

- **Expérience corrigée** :
  - Nuxeo : dates mises à jour (juin 2018 - mai 2021)

- **Identité mise à jour** :
  - Nom : Julian Sabos → Julián Sabos González

- **Mentions de rachat ajoutées** :
  - Blu Age et Netfective Technology : acquis par Amazon
  - Nuxeo : acquis par Hyland

- **Améliorations SEO** :
  - Meta description complète
  - Meta keywords
  - Meta author
  - Open Graph tags (type, url, title, description, image)
  - Twitter Card tags (card, title, description, image)
  - Favicon (ico + png multi-tailles)

- **Accessibilité améliorée** :
  - Balises ARIA : role="banner", "navigation", "main", "contentinfo", "region"
  - aria-label sur les liens et régions
  - aria-current="page" sur le lien actif
  - aria-labelledby sur les sections
  - aria-hidden="true" sur les icônes
  - rel="noopener noreferrer" sur les liens externes
  - loading="lazy" sur l'image de profil

- **Liens ajoutés** :
  - Liens vers les sites des entreprises (Decathlon, Nuxeo, SFEIR, JCDecaux, GROUPE M6, Kyriba France, Blu Age)
  - Liens vers les présentations techniques (PDF dans assets/)

- **Style amélioré** :
  - Styles cohérents pour tous les liens (entreprises et PDF)
  - Utilisation de la charte graphique (--primary-color, --accent-color)
  - Animations de transition fluides
  - Séparateur automatique entre les liens de présentation

- **Fichiers de configuration** :
  - robots.txt créé et configuré
  - sitemap.xml créé avec toutes les sections

- **Nettoyage** :
  - Fichiers temporaires supprimés (profile_temp.txt)
  - .DS_Store supprimés

---

## 🎯 Décisions Clés

### 1. Architecture Simple
- **Pourquoi** : Facilité de maintenance et de déploiement
- **Choix** : Vanilla JS/CSS, pas de framework, pas de build complexe
- **Avantage** : Site léger, rapide, facile à mettre à jour

### 2. Design Professionnel
- **Palette** : Bleu professionnel (#0077B6) avec nuances
- **Typographie** : Police système (Inter, -apple-system, etc.)
- **Espace** : Layout aéré avec espacement généreux
- **Approche** : Mobile-first, responsive

### 3. Contenu Technique
- **Expériences** : 9 postes avec réalisations spécifiques et technologies utilisées
- **Compétences** : Organisées avec tags visuels
- **Éducation** : 3 formations académiques
- **Présentations** : Liens vers les PDF des meetups techniques

### 4. Pas de Section Contact
- **Raison** : Lien LinkedIn dans l'en-tête suffit
- **Avantage** : Design plus épuré et professionnel

---

## 📊 État Actuel du Site

### Contenu
- **Expériences** : 10 (Decathlon x2, Transition, Nuxeo, SFEIR, JCDecaux, GROUPE M6, Kyriba France, Netfective Technology, Blu Age)
- **Compétences** : 6 catégories
- **Éducation** : 3 formations
- **Langue** : Anglais
- **Présentations** : 2 PDF accessibles
- **Mentions de rachat** : Blu Age/Netfective (Amazon), Nuxeo (Hyland)

### Technique
- **Lignes de code HTML** : 409
- **Lignes de code CSS** : 375
- **Taille totale** : ~1.6MB (dossier public/)
- **Dépendances externes** : Font Awesome 6.4.0 CDN
- **Score Lighthouse estimé** : 95+

### SEO
- **Meta tags** : description, keywords, author ✅
- **Open Graph** : tags complets ✅
- **Twitter Cards** : tags complets ✅
- **Favicon** : multi-tailles ✅
- **robots.txt** : configuré ✅
- **sitemap.xml** : généré ✅

### Accessibilité
- **ARIA** : balises complètes ✅
- **Semantique** : HTML5 valide ✅
- **Contraste** : couleurs adaptées ✅
- **Navigation clavier** : possible ✅

---

## 🔮 Évolutions Futures Possibles

### Court terme (à discuter)
- [ ] Ajouter les certifications (MongoDB, Angular, etc.)
- [ ] Ajouter les récompenses (Netfective contest winner)
- [ ] Ajouter les langues parlées
- [ ] Ajouter l'email de contact

### Moyen terme
- [ ] Implémenter un système de traduction (FR/ES)
- [ ] Ajouter une section "Publications" ou "Blog"
- [ ] Ajouter une section "Certifications"
- [ ] Créer une version PDF téléchargeable du CV

### Long terme
- [ ] Ajouter un blog technique intégré
- [ ] Implémenter un système de contact via formulaire
- [ ] Créer une PWA pour expérience mobile optimisée
- [ ] Ajouter des analytics pour suivre les visites

---

## 🎓 Leçons Apprises

1. **Maintenabilité** : Le choix de vanilla JS/CSS facilite grandement les mises à jour
2. **Performance** : Design sobre = chargement rapide et bonne expérience utilisateur
3. **Flexibilité** : Structure modulaire permet des ajouts futurs sans refactorisation majeure
4. **Professionnalisme** : Moins d'éléments = plus d'impact, design épuré plus efficace
5. **Collaboration** : Un bon système de versionnage (Git) est essentiel

---

## ✅ Statut Final

**Version** : 2.1  
**Statut** : ✅ Production Ready  
**Dernière mise à jour** : 2026-05-03  
**Prochaine révision** : À définir  

---

*Document généré le 2026-05-03*
*Projet : Site personnel de Julián Sabos González*
