
# 🧪 Cypress E2E Tests – AutomationExercice

Projet d’automatisation de tests end-to-end avec [Cypress](https://www.cypress.io/). 

![Cypress Tests](https://github.com/tatou23/cypress-tests-e2e/actions/workflows/cypress.yml/badge.svg)

---

## ✨ Objectifs pédagogiques

- Automatiser des scénarios utilisateur sur http://automationexercise.com (registration, login, logout, contact us)
- Utiliser les fixtures pour injecter des données
- Créer des commandes personnalisées pour la clarté et la maintenabilité des tests
- Utiliser le design pattern Page Object Model(POM) pour la clarté et la maintenabilité des tests
- Générer un rapport HTML avec allure report
- Mettre en place un pipeline CI avec GitHub Actions

---

## 🧰 Technologies utilisées

- Cypress
- Node.js
- JavaScript
- Git / GitHub
- GitHub Actions
- Allure Report

---

## 🧪 Scénarios testés

| Nom du test                | Objectif                                                 |
|----------------------------|-----------------------------------------------------------|
| ✅ Register réussi         | Valider l'inscription avec succès                         |
| ❌Register échoué          | Vérifier le message d'erreur pour un email déjà utilisé   |
| ✅ Login réussi            | Valider l'accès avec des identifiants valides             |
| ❌ Login échoué            | Vérifier le message d’erreur                              |
| ✅ Logout                  | Se déconnecter avec succes                                |
| ✅ Forumulaire de contact  | Vérifier le message d’erreur                              |


---

## 📊 Rapport de test Cypress

> Un rapport HTML est généré à chaque exécution locale des tests :
Rapport généré : AutomationExercice/allure-report/index.html

## 👩‍💻 À propos

Je suis une testeuse QA fonctionnelle en reconversion vers l’automatisation.  
Ce projet fait partie de ma montée en compétences sur Cypress.  
Il montre que je suis capable de :

- Écrire des tests lisibles
- Organiser un projet de test moderne
- Mettre en place une CI/CD avec GitHub Actions
- Automatiser des parcours métier sur une application e-commerce
- Mettre en place des bonnes pratiques d’automatisation
- Générer et analyser des rapports de test
- Intégrer l’automatisation dans un pipeline CI

📫 Pour me contacter : https://www.linkedin.com/in/coulibaly-assetou

```bash
npx cypress run
```
