import { CodegenConfig } from "@graphql-codegen/cli";

// Configuration principale pour GraphQL Code Generator
const config: CodegenConfig = {
  // Spécifie le schéma GraphQL pour générer les types depuis une API locale
  schema: "http://localhost:4000",

  // Indique où trouver les documents GraphQL (requêtes, mutations) pour générer des types
  documents: ["src/**/*.tsx"],

  // Configuration des différents fichiers à générer
  generates: {
    // Génération des utilitaires de client GraphQL pour l'application
    "./src/__generated__/": {
      preset: "client", // Utilise le preset "client" pour générer des hooks et utilitaires
      presetConfig: {
        gqlTagName: "gql", // Définit "gql" comme tag pour les requêtes GraphQL
      },
    },

    // Génération d'un fichier de types TypeScript pour les opérations GraphQL
    "./src/__generated__/types.ts": {
      plugins: [
        "typescript", // Génère les types TypeScript de base pour le schéma
        "typescript-operations", // Génère les types pour les requêtes/mutations GraphQL
      ],
    },
  },

  // Ignore les erreurs si aucun document GraphQL n'est trouvé dans les fichiers définis
  // ignoreNoDocuments: true,
};

// Export de la configuration pour utilisation par GraphQL Code Generator
export default config;
