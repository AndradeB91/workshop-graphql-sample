import gql from "graphql-tag";

const getAllDoseTypes = gql`
  query {
    __type(name: "DoseType") {
      enumValues{
        name,
      }
    }
  }
`;

export default getAllDoseTypes;