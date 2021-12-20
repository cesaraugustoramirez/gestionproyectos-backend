 import { gql } from 'apollo-server';

const projectType = gql`
  # Project
  scalar DateTime
  
  type Project {
    _id: ID!,
    name: String!
    generalObjective: String!
    specificObjectives: [String]!
    budget: Float!
    startDate: DateTime!
    endDate: DateTime!
    leader_id: ID!
    state: ProjectState!
    phase: Phase
    leader: User!
    progress: [progress]
    enrollments: [enrollments]
  }

  type enrollments {
    _id: ID
    user_id: ID
    state: enrollmentState!,
    enrollmentDate: DateTime!,
    egressDate: DateTime!
  }

 type progress  
    {
      _id: ID
      addDate: DateTime!
      description: String!
      observations: String!
    }
 
`;

const enums = gql`
  # Enum for status values
  enum ProjectState {
    ACTIVO
    INACTIVO
  }

  # Enum for phase values
  enum Phase {
    INICIADO
    ENPROGRESO
    TERMINADO
  }

  enum enrollmentState
  {
    PENDIENTE
    ACEPTADA
    RECHAZADA
    CANCELADA
  }

`;

const queries = gql`
  # Query all projects
  type Query {
    allProjects: [Project]
  }

  type Query {
    project(_id: ID): Project
  }

  type Query {
    leaderProjects(leader_id: ID): [Project]

  }
`;

export default [
  projectType,
  enums,
  queries
];
