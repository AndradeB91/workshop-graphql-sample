import { makeExecutableSchema } from "graphql-tools";
import resolvers from './resolvers';

const type = `
  type Vaccine {
    id: ID!
    title: String!
    description: String!
    doseType: DoseType!
  }

  enum DoseType {
    unique,
    two,
    three,
    four,
    five,
  }
`;

const rootQuery = `
  type Query {
    getVaccineById(id: ID!): Vaccine
  }
`;

const mutation = `
  type Mutation {
    addVaccine(title: String!, description: String!): Boolean
  }
`;

const schema = `
  schema {
    query: Query,
    mutation: Mutation,
  }
`;

export default makeExecutableSchema({
  typeDefs: [
    type,
    schema, 
    rootQuery,
    mutation,
  ],
  resolvers,
});