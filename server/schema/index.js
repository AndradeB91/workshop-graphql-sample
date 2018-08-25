import { makeExecutableSchema } from "graphql-tools";

const type = `
  type Vaccine {
    id: ID!
    title: String!
    decription: String!
  }
`;

export default makeExecutableSchema({
  typeDefs: [type],
  resolvers: {}
});

