const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {

}

type Comment {
  id: ID!
  username: String!
  text: String!
  timestamp: String!
}

input CommentData {
    username: String!
    text: String!
  }

type Project {
    _id: ID!
    name: String!
}

input ProjectData {
    name: String!
    quantity: Int!
    description: String!
    category: [ID!]! #reference category through IDs
`;

module.exports = typeDefs;