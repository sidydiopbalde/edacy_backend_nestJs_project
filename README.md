# Backend - Edacy_nest_project (NestJS)
# Description
Ce projet est un backend construit avec NestJS, un framework TypeScript pour Node.js. Il fournit une API REST pour gérer l'authentification des utilisateurs et les produits, utilisée par l'application frontend "Mon Projet". Le backend utilise bcrypt pour le hachage des mots de passe et @nestjs/jwt pour la génération de tokens JWT.

# Fonctionnalités

# Authentification :
Enregistrement des utilisateurs (POST /auth/register).
Connexion des utilisateurs avec génération de token JWT (POST /auth/login).


# Gestion des produits :
Récupérer la liste des produits (GET /product).
Ajouter un produit (POST /product).
Modifier un produit (PATCH /product/:id).
Supprimer un produit (DELETE /product/:id).




# Prérequis

Node.js : Version 18 ou supérieure (nodejs.org).
npm : Inclus avec Node.js.
Git : Pour cloner le projet (git-scm.com).


# Installation

Cloner le dépôt
git clone <https://github.com/sidydiopbalde/edacy_backend_nestJs_project.git/>
cd backend-mon-projet


# Installer les dépendances
npm install

Assurez-vous que les dépendances suivantes sont installées :
npm install bcrypt @nestjs/jwt
npm install --save-dev @types/bcrypt


# Configurer les variables d'environnement

Créez un fichier .env à la racine du projet :JWT_SECRET=your_jwt_secret_key
PORT=3000


JWT_SECRET est utilisé pour signer les tokens JWT. Remplacez your_jwt_secret_key par une clé secrète sécurisée.


Lancer le serveur
# Mode développement
npm run start:dev

Le serveur sera accessible sur http://localhost:3000.



# Utilisation
# Endpoints d'authentification

Enregistrement (POST /auth/register) :

Requête :{
        "firstname": "edacy",
        "lastname": "edacy",
        "adresse": "vdn",
        "email": "edacy@example.com",
        "password": "mot_de_passe"
}


Réponse (201) :{
    "message":"Inscription réussie",
    "user":{
         "id": 1,
        "firstname": "edacy",
        "lastname": "edacy",
        "adresse": "vdn",
        "email": "edacy@example.com",
        "password": "mot_de_passe"
    },
  
}




Connexion (POST /auth/login) :

Requête :{
  "email": "user@example.com",
  "password": "password123"
}


Réponse (200) :{

    "user":{
         "id": 1,
        "firstname": "edacy",
        "lastname": "edacy",
        "adresse": "edacy",
        "email": "edacy@example.com",
        "password": "mot_de_passe"
    },
    "message":"Connexion réussie",
    "token":"jwt_token"
}

Endpoints des produits

Lister les produits (GET /product) :

Réponse (200) :{
  "data": [
    { "id": 1, "name": "Casque Audio", "price": 99, "quantity": 15 },
    { "id": 2, "name": "Clavier Mécanique", "price": 129, "quantity": 8 }
  ]
}



Ajouter un produit (POST /product) :

Requête :{
  "name": "Souris Gaming",
  "price": 49.99,
  "quantity": 23
}


Réponse (201) :{
  "id": 3,
  "name": "Souris Gaming",
  "price": 49.99,
  "quantity": 23
}




Modifier un produit (PATCH /product/:id) :

Requête (exemple pour id=3) :{
  "name": "Souris Gaming Pro",
  "price": 59.99,
  "quantity": 20
}


Réponse (200) :{
  "id": 3,
  "name": "Souris Gaming Pro",
  "price": 59.99,
  "quantity": 20
}



Supprimer un produit (DELETE /product/:id) :

Réponse (200) :{
  "message": "Produit supprimé avec succès"
}



# Structure du projet
backend-mon-projet/
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts         # Contrôleur pour l'authentification
│   │   ├── auth.module.ts             # Module d'authentification
│   │   └── auth.service.ts            # Service pour l'authentification
│   ├── product/
│   │   ├── product.controller.ts      # Contrôleur pour les produits
│   │   ├── product.module.ts          # Module des produits
│   │   └── product.service.ts         # Service pour les produits 
│   │   ├── dto/
│   │   │   ├── create-product.dto.ts      # DTO pour la creation de produit
│   │   │   └── update-product.dto.ts   # DTO pour la mise à jour
|   |   users/
│   │   ├── users.controller.ts      # Contrôleur pour les produits
│   │   ├── users.module.ts          # Module des produits
│   │   └── users.service.ts  
│   │   ├── dto/
│   │   │   ├── create-user.dto.ts      # DTO pour la création d'un utilisateur
│   │   │   └── update-user.dto.ts   # DTO pour la mise à jour
│   ├── app.module.ts                  # Module racine
│   ├── main.ts                        # Point d'entrée
│   └── users/                         # Simulation de base de données (tableau en mémoire)
│       └── users.service.ts
├── test/                              # Tests unitaires et e2e
├── .env                               # Variables d'environnement
├── package.json                       # Dépendances et scripts
└── README.md                          # Documentation


# Dépendances

NestJS : Framework pour Node.js.
bcrypt : Hachage des mots de passe.
@nestjs/jwt : Génération de tokens JWT.
@nestjs/core, @nestjs/common : Modules de base NestJS.

Voir package.json pour la liste complète.

# Résolution de problèmes

Erreur de port : Si le port 3000 est occupé, modifiez le PORT dans .env.
Problème de JWT : Vérifiez que JWT_SECRET est défini dans .env.
Tests échouent : Assurez-vous que les dépendances de test (jest, @nestjs/testing) sont installées.


# Contribution

Forkez le dépôt.
Créez une branche : git checkout -b ma-fonctionnalité.
Committez : git commit -m "Ajout de ma fonctionnalité".
Poussez : git push origin ma-fonctionnalité.
Créez une Pull Request.


# Contact
Pour des questions, contactez [sididiop53@gmail.com].
