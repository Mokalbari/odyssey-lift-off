import gql from "graphql-tag";

export const typeDefs = gql`
  # Schema definitions go here

  "All querys available for the client"
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about specific topic"
  type Track {
    "A unique id for each track"
    id: ID!
    "A unique title for each track"
    title: String!
    "The author must come from his table and cannot be null"
    author: Author!
    "The url to the thumbnail"
    thumbnail: String
    "The approximated length of the module"
    length: Int
    "The number of modules inside this track"
    modulesCount: Int
  }

  "Author of a completeeTrack or a Module"
  type Author {
    "A unique id for each track"
    id: ID!
    "The name of the author"
    name: String!
    "The author's picture"
    photo: String!
  }
`;
