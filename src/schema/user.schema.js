import { gql } from 'apollo-server';

const userType = gql`
  # User
  type User {
    _id: ID!
    documentId: String!
    firstName: String!
    lastName: String!
    email: String!
    role: UserRole!
    state: UserStatus!
  }
`;

const enums = gql`
  # Enum for role values
  enum UserRole {
    Administrador
    Lider
    Estudiante
  }

  # Enum for status values
  enum UserStatus {
    Pendiente
    Autorizado
    No autorizado
  }
`;

const queries = gql`
  # Query all users
  type Query {
    allUsers: [User]
  }

  type Query {
    userById(_id: ID!): User
  }

  type Query {
    user: User!
  }

  type Query {
    userByEmail(email: String!): User
  }
`;

const mutations = gql`
  type Mutation {
    register(input: RegisterInput!): User!
  }

  type Mutation {
    login(email: String!, password: String!): String!
  }
`;

const inputs = gql`
  input RegisterInput {
    email: String!
    documentId: String!
    firstName: String!
    lastName: String!
    role: UserRole!
    password: String!
  }
`;

export default [
  userType,
  enums,
  queries,
  mutations,
  inputs,
];
